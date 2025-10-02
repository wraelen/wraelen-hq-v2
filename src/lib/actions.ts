// src/lib/actions.ts – Server actions for auth (best practice: Centralize mutations – efficient, type-safe; push back: Avoid client auth for cookie sync in Next.js; scales for quests/leaderboards with RLS)
'use server'; // Logic: Marks as server-only (no client bundle bloat – optimizes for internal app with leads/calls)
import { PrismaClient } from '@prisma/client';  // Your DB client (async-safe in actions)
import { createServerClient } from '@supabase/ssr'; // SSR package (server-aware – auto-handles cookies via proxy; middleware refreshes post-redirect)
import axios from 'axios';  // API/fetch (lightweight – no fetch polyfill needed)
import * as cheerio from 'cheerio';  // HTML parse (fast/static – better than Puppeteer for Zillow; handles fallback)
import { cookies } from 'next/headers'; // Next utility (dynamic read for session check – set ignored in actions, as middleware handles)
import { redirect } from 'next/navigation'; // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
import { z } from 'zod';  // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
import crypto from 'crypto';  // Built-in hash (no extra deps – for address_hash dedup)
import type { Database } from '../types/database.types'; // Types (autocompletes e.g., session.user.id for Prisma sync – now fixed via your gen)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; // Logic: Required env (fail-fast if missing – matches middleware guard)
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
// Action: Server-side login (logic: FormData input for easy <form> binding; validates minimally, mutates, returns error or redirects – middleware syncs cookies on next request)
export async function signInAction(formData: FormData) {
  const email = formData.get('email')?.toString() ?? ''; // Logic: Safe extraction (push back: Add zod here for prod validation – prevents invalid emails in rep onboarding; keeps it server-side for security)
  const password = formData.get('password')?.toString() ?? '';
  if (!email || !password) {
    return { error: 'Email and password are required' }; // Logic: Early validation return (client will display – no redirect/reload; UX-friendly for form feedback)
  }
  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters' }; // Logic: Basic check (expand for strength in gamified app – e.g., tie to "security quest" badge)
  }
  const cookieStore = cookies(); // Logic: Next headers (dynamic – reads current request cookies for session check)
  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(), // Logic: Pass current cookies (enables session read – fixes undefined in middleware)
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); // Logic: Attempts set (succeeds in components; ignored in actions via catch – middleware refreshes on redirect)
        } catch {
          // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
        }
      },
    },
  });
  const { error } = await supabase.auth.signInWithPassword({ email, password }); // Logic: Server mutation (hashes/JWT auto – no custom logic; ties to Supabase users table for RLS on quests)
  if (error) {
    return { error: error.message }; // Logic: Return error (client handles display – e.g., "Invalid credentials"; best for debugging without reload spam)
  }
  redirect('/dashboard'); // Logic: Success redirect (middleware now sees session – seamless to game HQ; change to '/hq' or dynamic based on rep level if needed)
}

// ... (Add the following at the end – new extraction action)

// src/lib/actions.ts (continued) – Add extraction here – best practice: Centralize mutations for scalability; push back: API-first for compliance/TOS, scrape fallback with anti-bot headers – handles single/batch links, merges via Prisma upsert
const prisma = new PrismaClient();  // Global instance (efficient in Next.js actions – auto-closes)

const extractSchema = z.object({
  links: z.string().min(1),
  source: z.enum(['zillow', 'propstream', 'both']).default('zillow'),
});  // Logic: Zod schema (validates formData – quick errors without DB hits)

// Action: Extract and merge from links (logic: Parse batch → per-link extract → upsert properties (merge on hash) → create leads (link FK, award points) – returns results for UX feedback)
export async function extractDataAction(formData: FormData) {
  const validated = extractSchema.safeParse({
    links: formData.get('links')?.toString() ?? '',
    source: formData.get('source')?.toString() ?? 'zillow',
  });  // Logic: Safe parse (returns { success, data } or { error } – client displays errors)

  if (!validated.success) {
    return { error: validated.error.format() };  // Logic: Return zod errors (e.g., "Links required" – no redirect)
  }

  const { links, source } = validated.data;
  const linkArray = links.split(',').map(l => l.trim()).filter(Boolean);  // Logic: Batch parse (handle "url1, url2" – scalable to 10-20 max for rates)
  const results = [];  // Aggregate for response (e.g., [{ leadId, success: true }])

  for (const link of linkArray) {  // Logic: Sequential for simplicity (push back: Promise.all for parallel if no rate limits; add try-catch per-link)
    try {
      const extracted = await extractFromLink(link, source);  // Helper below (API/scrape merge)
      const address = extracted.address || '';  // Normalize (fallback to empty – validation later)
      if (!address) throw new Error('No address extracted');

      const addressHash = crypto.createHash('sha256').update(address.toLowerCase()).digest('hex');  // Logic: Dedup hash (case-insensitive – prevents "123 Main" vs "123 main" dups)

      // Upsert properties (merge extracted data – no-brainer for updates from re-extracts)
      const property = await prisma.properties.upsert({
        where: { address_hash: addressHash },
        update: {
          // Logic: Selective merge (overwrite non-null extracted fields – preserves manual edits if needed)
          city: extracted.city ?? undefined,
          state: extracted.state ?? undefined,
          zip_code: extracted.zip_code ?? undefined,
          property_type: extracted.property_type ?? undefined,
          bedrooms: extracted.bedrooms ?? undefined,
          bathrooms: extracted.bathrooms ?? undefined,
          square_feet: extracted.square_feet ?? undefined,
          lot_size: extracted.lot_size ?? undefined,
          year_built: extracted.year_built ?? undefined,
          zestimate: extracted.zestimate ?? undefined,
          avm: extracted.avm ?? undefined,
          tax_assessed_value: extracted.tax_assessed_value ?? undefined,
          distress_signals: extracted.distress_signals ?? undefined,
          owner_occupied: extracted.owner_occupied ?? undefined,
          metadata: extracted.metadata ?? undefined,  // Full raw (jsonb merge)
        },
        create: {
          address,
          city: extracted.city || '',
          state: extracted.state || '',
          zip_code: extracted.zip_code || '',
          property_type: extracted.property_type || 'other',
          bedrooms: extracted.bedrooms,
          bathrooms: extracted.bathrooms,
          square_feet: extracted.square_feet,
          lot_size: extracted.lot_size,
          year_built: extracted.year_built,
          zestimate: extracted.zestimate,
          avm: extracted.avm,
          tax_assessed_value: extracted.tax_assessed_value,
          distress_signals: extracted.distress_signals,
          owner_occupied: extracted.owner_occupied,
          metadata: extracted.metadata,  // e.g., { original_link: link, sources: [source] }
          address_hash: addressHash,
        },
      });

      // Create lead (link to property – assign to current user via session; award base points)
      const cookieStore = cookies(); // Logic: Reuse your Supabase client setup for session fetch (consistent with signInAction)
      const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
        cookies: {
          getAll: () => cookieStore.getAll(),
          setAll: (cookiesToSet) => {
            try {
              cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
            } catch {
              // Ignore set in action
            }
          },
        },
      });
      const { data: { session } } = await supabase.auth.getSession(); // Logic: Fetch session (async-safe – gets user ID for assigned_to)
      if (!session?.user.id) {
        return { error: 'No active session – login required for assignment' }; // Logic: Guard (push back: Or default to admin UUID for testing)
      }

      const lead = await prisma.leads.create({
        data: {
          properties_id: property.id,
          lead_type: extracted.lead_type || 'owner',  // Infer from extract (e.g., seller lead)
          first_name: extracted.first_name,
          last_name: extracted.last_name,
          phone: extracted.phone,
          source: extracted.source || source,  // Track actual (e.g., 'zillow_api')
          metadata: { original_link: link, extracted_data: extracted },  // Audit trail
          assigned_to: session.user.id,  // From auth (ties to Profile)
          points_earned: 10,  // Base for import (trigger more on status changes)
        },
      });

      results.push({ leadId: lead.id, success: true });  // For client display (e.g., "Imported lead X")
    } catch (error) {
      results.push({ link, success: false, error: (error as Error).message });  // Per-link feedback
    }
  }

  return { results };  // Logic: Return array (client loops to show success/errors – no full redirect for batch UX)
}

// Helper: Extract from single link (logic: Source switch → API or scrape → normalize output – expandable for Propstream)
async function extractFromLink(link: string, source: 'zillow' | 'propstream' | 'both') {
  let data: Record<string, any> = { source, metadata: { link } };  // Base output (json-friendly)

  if (source === 'zillow' || source === 'both') {
    const zillowKey = process.env.ZILLOW_API_KEY;
    if (zillowKey) {
      // Logic: API preferred (compliance – e.g., Bridge API for records; adjust endpoint per your key/access)
      try {
        const response = await axios.get(`https://api.bridgeapi.io/v1/public-records/property?url=${encodeURIComponent(link)}`, {  // Example endpoint; check Zillow docs
          headers: { 'X-RapidAPI-Key': zillowKey },  // Auth (rate-limit aware)
        });
        data = { ...data, ...response.data };  // Merge (e.g., { address, zestimate, bedrooms, ... })
        data.source = 'zillow_api';  // Track for points (bonus for API vs scrape)
      } catch {}  // Fallback to scrape on error
    }

    if (!data.address) {  // Scrape fallback (push back: Use proxies like BrightData if bans occur – not for prod volume)
      const { data: html } = await axios.get(link, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36' } });  // Anti-bot UA
      const $ = cheerio.load(html);
      // Parse selectors (customize per Zillow page – inspect element for stability; e.g., for homedetails page)
      data.address = $('[data-testid="hdp-address"]').text().trim() || '';
      data.zestimate = $('.zestimate-value').text().replace(/[^0-9]/g, '') || null;  // Clean $ (parseInt later)
      data.bedrooms = parseInt($('[data-testid="bed-bath-item"]:first').text()) || null;
      // ... Add more: bathrooms, square_feet, etc. (expand as needed – test with real links)
      data.metadata.scrape_time = new Date().toISOString();  // Audit
    }
  }

  if (source === 'propstream' || source === 'both') {
    // Logic: No public API (stub for CSV upload – push back: Implement file input in form if needed; contact Propstream for integration)
    // For now: Assume manual/link parse if possible (e.g., if link is Propstream export URL – rare)
    data.avm = 0;  // Mock (replace with real if API unlocked)
    data.distress_signals = { pre_foreclosure: false };  // Mock
  }

  return data;  // Normalized (e.g., { address: '123 Main', zestimate: 450000, ... })
}