'use server'; // Logic: Marks as server-only (no client bundle bloat – optimizes for internal app with leads/calls)
import { PrismaClient } from '@prisma/client';  // Your DB client (async-safe in actions)
import { createServerClient } from '@supabase/ssr'; // SSR package (server-aware – auto-handles cookies via proxy; middleware refreshes post-redirect)
import axios from 'axios';  // API/fetch (lightweight – no fetch polyfill needed)
import * as cheerio from 'cheerio';  // HTML parse (fast/static – better than Puppeteer for Zillow; handles fallback)
import { cookies } from 'next/headers'; // Next utility (dynamic read for session check – set ignored in actions, as middleware handles)
import { redirect } from 'next/navigation'; // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
import { chromium } from 'playwright'; // Logic: Headless browser (already in devDeps – executes JS for full page load)
import { z } from 'zod';  // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
import crypto from 'crypto';  // Built-in hash (no extra deps – for address_hash dedup)
import type { Database } from '../types/database.types'; // Types (autocompletes e.g., session.user.id for Prisma sync – now fixed via your gen)

// Optional: Import Playwright for robust scraping (bypasses 403/Cloudflare – use if Axios fails; enable via env)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!; // Logic: Required env (fail-fast if missing – matches middleware guard)
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const prisma = new PrismaClient();  // Global instance (efficient in Next.js actions – auto-closes; push back: Cache in lib/prisma.ts for hot reloads if issues)

const extractSchema = z.object({
  links: z.string().min(1),
  source: z.enum(['zillow', 'propstream', 'both']).default('zillow'),
});  // Logic: Zod schema (validates formData – quick errors without DB hits)

// Action: Sign out (logic: Centralized mutation – avoids serialization issues in layout; redirects to signin)
export async function signOutAction() {
  const cookieStore = cookies();
  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} },
    },
  });
  await supabase.auth.signOut(); // Logic: Clears session (middleware will redirect unauthed requests)
  redirect('/auth/signin'); // Logic: Post-signout flow (back to login – update to '/' if public landing needed)
}

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
  const linkArray = links.split(/[\n,]/).map(l => l.trim()).filter(Boolean); // Logic: Handle comma or newline-separated (textarea-friendly); filter empties
  const results = await Promise.allSettled(linkArray.map(async (link) => { // Logic: Parallel for speed; settled handles per-link failures without crashing batch
    try {
      const extracted = await extractFromLink(link, source);
      if (!extracted.address) {
        throw new Error('Failed to extract valid address – skipping link'); // Logic: Early guard (prevents bad hash/upsert)
      }

      const addressHash = crypto.createHash('sha256').update(extracted.address.toLowerCase()).digest('hex'); // Logic: Normalize case for dedup

      // Logic: Use Prisma transaction for atomicity (upsert property + create lead + update points – prevents partial failures)
      const [property, lead] = await prisma.$transaction(async (tx) => {
        const prop = await tx.properties.upsert({ // Logic: Merge existing (e.g., update zestimate if newer)
          where: { address_hash: addressHash },
          update: {
            address: extracted.address,
            property_type: extracted.property_type || 'other',
            bedrooms: extracted.bedrooms ?? null, // Logic: Nullables to avoid defaults if missing (match schema)
            bathrooms: extracted.bathrooms ?? null,
            square_feet: extracted.square_feet ?? null,
            lot_size: extracted.lot_size ?? null,
            year_built: extracted.year_built ?? null,
            zestimate: extracted.zestimate ?? null,
            avm: extracted.avm ?? null,
            tax_assessed_value: extracted.tax_assessed_value ?? null,
            distress_signals: extracted.distress_signals ?? {}, // JSONB default empty
            owner_occupied: extracted.owner_occupied ?? null,
            metadata: { ...extracted.metadata, sources: [...(extracted.metadata.sources || []), source] }, // Append sources for audit
          },
          create: {
            address: extracted.address,
            address_hash: addressHash,
            property_type: extracted.property_type || 'other',
            bedrooms: extracted.bedrooms ?? null,
            bathrooms: extracted.bathrooms ?? null,
            square_feet: extracted.square_feet ?? null,
            lot_size: extracted.lot_size ?? null,
            year_built: extracted.year_built ?? null,
            zestimate: extracted.zestimate ?? null,
            avm: extracted.avm ?? null,
            tax_assessed_value: extracted.tax_assessed_value ?? null,
            distress_signals: extracted.distress_signals ?? {},
            owner_occupied: extracted.owner_occupied ?? null,
            metadata: extracted.metadata,
          },
        });

        // Fetch session for assignment (reuse Supabase client – consistent)
        const cookieStore = cookies();
        const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
          cookies: {
            getAll: () => cookieStore.getAll(),
            setAll: (cookiesToSet) => { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} },
          },
        });
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user.id) {
          throw new Error('No active session – login required for assignment');
        }

        const ld = await tx.leads.create({
          data: {
            properties_id: prop.id,
            lead_type: extracted.lead_type || 'owner',  // Infer (e.g., from distress_signals)
            first_name: extracted.first_name ?? null,
            last_name: extracted.last_name ?? null,
            phone: extracted.phone ?? null,
            source: extracted.source || source,
            metadata: { original_link: link, extracted_data: extracted },
            assigned_to: session.user.id,  // UUID from auth
            points_earned: 10,  // Base; gamify more on status changes
          },
        });

        // Gamification stub: Increment user points (expand to check/complete quests, award badges)
        await tx.profile.update({
          where: { id: session.user.id },
          data: { points: { increment: 10 } }, // Logic: Atomic update (ties to XP bar/leaderboards)
        });

        return [prop, ld];
      });

      return { link, leadId: lead.id, success: true };
    } catch (error) {
      console.error(`Extraction error for ${link}:`, error); // Logic: Server log for debugging (view in Vercel/terminal)
      return { link, success: false, error: (error as Error).message };
    }
  }));

  return { results: results.map(r => r.status === 'fulfilled' ? r.value : { success: false, error: (r.reason as Error).message }) }; // Logic: Flatten for client display
}

// Helper: Extract from single link (logic: Source switch → API or scrape → normalize output – expandable for Propstream)
async function extractFromLink(link: string, source: 'zillow' | 'propstream' | 'both') {
  let extracted: Record<string, any> = { source, metadata: { link, scrape_time: new Date().toISOString() } }; // Base output (json-friendly)

  if (source === 'zillow' || source === 'both') {
    const zillowKey = process.env.ZILLOW_API_KEY;
    if (zillowKey) {
      try {
        // Logic: Bridge API (adjust auth if needed – docs use Authorization: Bearer; test with your key)
        const response = await axios.get(`https://api.bridgeapi.io/v1/public-records/property?url=${encodeURIComponent(link)}`, {
          headers: { 'Authorization': `Bearer ${zillowKey}` }, // Push back: Update if RapidAPI (rare for Bridge); confirm in docs
        });
        extracted = { ...extracted, ...response.data, source: 'zillow_api' }; // Merge (normalize fields below if API shape differs)
      } catch (apiError) {
        console.error(`Zillow API error for ${link}:`, apiError); // Fallback to scrape
      }
    }

    if (!extracted.address) {  // Scrape fallback (improved headers to mimic browser – avoids 403; timeout to prevent hangs)
      let html: string;
      try {
        const response = await axios.get(link, {
          headers: {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36', // Logic: Current Chrome (2024/2025) – update periodically
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'navigate',
            'Sec-Fetch-Site': 'none',
            'Sec-Fetch-User': '?1',
            'Referer': 'https://www.zillow.com/', // Logic: Fake referer – helps bypass some checks
          },
          timeout: 5000,
        });
        html = response.data;
      } catch (axiosError) {
        console.error(`Axios scrape failed for ${link} (likely 403):`, axiosError);
        // Pushback: Fallback to Playwright if env enabled (headless browser – bypasses Cloudflare/JS detection; slower but reliable for Zillow)
        if (process.env.USE_PLAYWRIGHT === 'true') {
          const browser = await chromium.launch({ headless: true }); // Logic: Launch headless Chrome (add { args: ['--no-sandbox'] } if perms issues)
          const page = await browser.newPage();
          await page.goto(link, { waitUntil: 'networkidle' }); // Logic: Wait for load (handles JS)
          html = await page.content();
          await browser.close();
        } else {
          throw new Error('Scrape failed – enable USE_PLAYWRIGHT=true in .env.local for browser fallback');
        }
      }

      const $ = cheerio.load(html);

      // Improved: Parse preloaded JSON (reliable; Zillow embeds data here)
      const preloadedData = $('script#hdpApolloPreloadedData').text();
      if (preloadedData) {
        try {
          const jsonData = JSON.parse(preloadedData); // Logic: No need for decodeURIComponent – Zillow often serves plain JSON
          // Logic: Navigate cache (dynamic key; find property object – Zillow structure as of 2025)
          const cacheKeys = Object.keys(jsonData.apiCache || {});
          const propertyKey = cacheKeys.find(key => key.includes('ForSaleDoubleScrollFullRenderQuery') || key.includes('Property')); // Logic: Flexible for changes
          const propertyData = jsonData.apiCache[propertyKey]?.property || jsonData.property || {};

          extracted.address = `${propertyData.streetAddress || ''}, ${propertyData.city || ''}, ${propertyData.state || ''} ${propertyData.zipcode || ''}`.trim();
          extracted.zestimate = propertyData.zestimate || null;
          extracted.bedrooms = propertyData.bedrooms || null;
          extracted.bathrooms = propertyData.bathrooms || null;
          extracted.square_feet = propertyData.livingArea || null;
          extracted.lot_size = propertyData.lotAreaValue || null; // In sqft or acres; normalize if needed
          extracted.year_built = propertyData.yearBuilt || null;
          extracted.tax_assessed_value = propertyData.taxAssessedValue || null;
          // Add more: e.g., extracted.property_type = propertyData.homeType?.toLowerCase();
          // Note: Owner name/phone not in Zillow (privacy); use skiptrace API (e.g., TruePeopleSearch) post-extract for leads
        } catch (parseError) {
          console.error(`JSON parse error for ${link}:`, parseError);
        }
      }
    }
  }

  if (source === 'propstream' || source === 'both') {
    // Logic: Propstream no public scrape/API (TOS ban); stub for now – push back: Add form file input for CSV export upload
    // If API key, integrate: e.g., await axios.post('https://api.propstream.com/v1/export', { links }, { headers: { 'Authorization': propstreamKey } });
    extracted.avm = 0;  // Mock; replace with real
    extracted.distress_signals = { pre_foreclosure: false };  // Mock (e.g., from CSV parse)
    extracted.owner_occupied = true; // Mock
    extracted.first_name = 'Mock'; // etc.
  }

  return extracted;  // Normalized (add more mappings as needed)
}

// ... (keep your signInAction)