// src/lib/actions.ts – Updated with async Supabase (align with layout fix; keeps Propstream CSV ready – test upload post-restart)
'use server'; // Logic: Marks as server-only (no client bundle bloat – optimizes for internal app with leads/calls)
import { LeadSource, LeadType, PrismaClient, PropertyType } from '@prisma/client';  // Your DB client (async-safe in actions)
import { redirect } from 'next/navigation'; // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
import Papa from 'papaparse'; // Logic: CSV parser (handles headers, errors – best for Propstream exports)
import Twilio from 'twilio'; // Logic: Twilio SDK for outbound calls (inexpensive, reliable integration)
import { z } from 'zod';  // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
import crypto from 'crypto';  // Built-in hash (no extra deps – for address_hash dedup)
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Use async helper (fixes warnings in actions too)
import type { Database } from '@/types/database.types'; // Types (autocompletes e.g., session.user.id for Prisma sync – now fixed via your gen)

const prisma = new PrismaClient();  // Global instance (efficient in Next.js actions – auto-closes; push back: Cache in lib/prisma.ts for hot reloads if issues)

const twilioClient = Twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN); // Logic: Init Twilio (guard env in prod)

const importSchema = z.object({
  source: z.literal('propstream'), // Logic: Locked to Propstream for now (expand later)
});  // Logic: Zod for form (file handled separately)

// Action: Sign in (logic: Basic stub – expand with your original zod/email/password validation; centralized for type-safety)
export async function signInAction(formData: FormData) {
  const email = formData.get('email')?.toString() ?? '';
  const password = formData.get('password')?.toString() ?? '';
  // ... (add your validation/error returns here; e.g., zod schema for email/password)
  const supabase = await createSupabaseServerClient(); // Logic: Async client (Next 15 safe)
  const { error } = await supabase.auth.signInWithPassword({ email, password });
  if (error) {
    return { error: error.message };
  }
  redirect('/dashboard'); // Logic: Post-login to HQ (quests await!)
}

// Action: Sign out (logic: Centralized mutation – avoids serialization issues in layout; redirects to signin)
export async function signOutAction() {
  const supabase = await createSupabaseServerClient(); // Logic: Async client (consistent fix)
  await supabase.auth.signOut(); // Logic: Clears session (middleware will redirect unauthed requests)
  redirect('/auth/signin'); // Logic: Post-signout flow (back to login – update to '/' if public landing needed)
}

// Action: Import from Propstream CSV (logic: Parse file → per-row extract/map → batch upsert properties/create leads – returns results for UX)
export async function importDataAction(formData: FormData) {
  const validated = importSchema.safeParse({
    source: formData.get('source')?.toString() ?? 'propstream',
  });
  if (!validated.success) {
    return { error: validated.error.format() };
  }

  const file = formData.get('file') as File | null; // Logic: Get uploaded CSV (from dropzone/form)
  if (!file) {
    return { error: 'No file uploaded' };
  }

  // Parse CSV (papaparse – async, handles large files stream-like)
  const csvText = await file.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true, dynamicTyping: true }); // Logic: Headers on (maps to objects), auto-type numbers
  if (parsed.errors.length > 0) {
    return { error: `CSV parse errors: ${parsed.errors.map(e => e.message).join('; ')}` }; // Logic: Early feedback (e.g., malformed rows)
  }

  const rows = parsed.data as Record<string, any>[]; // Logic: Typed rows (Propstream columns like 'Property Address', 'AVM', etc.)
  const supabase = await createSupabaseServerClient(); // Logic: Hoist session fetch (efficiency – avoids per-row calls)
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user.id) {
    return { error: 'No session – login required' };
  }

  const results = await Promise.allSettled(rows.map(async (row, index) => { // Logic: Parallel for speed; settled for per-row errors
    try {
      // Map Propstream columns to schema (flexible – handle variants/missing; added equity/mortgage for creative financing)
      const propertyTypeMap: Record<string, PropertyType> = { // Logic: Dict for safe enum mapping (pushback: Better than lowercase assume – handles variants)
        'single family': 'single_family',
        'multi family': 'multi_family',
        'condo': 'condo',
        'townhouse': 'townhouse',
        'land': 'land',
        'commercial': 'commercial',
        // Add more mappings as needed; default 'other'
      };
      const extracted = {
        address: row['Property Address']?.trim() || null,
        city: row['City']?.trim() || null,
        state: row['State']?.toUpperCase() || null, // Logic: Standardize to 2-letter
        zip_code: row['Zip']?.trim() || null,
        property_type: propertyTypeMap[row['Property Type']?.toLowerCase() || ''] || 'other',
        bedrooms: Number(row['Bedrooms']) || null,
        bathrooms: Number(row['Bathrooms']) || null,
        square_feet: Number(row['Sq Ft']) || null, // Logic: Common variant 'Sq Ft' over 'Square Feet'
        lot_size: Number(row['Lot Sq Ft']) || null,
        year_built: Number(row['Year Built']) || null,
        avm: Number(row['AVM']) || null,
        tax_assessed_value: Number(row['Tax Assessed Value']) || null,
        distress_signals: { // Logic: Expand for more signals if in CSV (e.g., 'High Equity')
          pre_foreclosure: row['Pre-Foreclosure'] === 'Y' || false,
        },
        owner_occupied: row['Owner Occupied'] === 'Y' || null,
        metadata: { // Logic: Store extras like equity/mortgage for creative financing quests
          equity_percent: Number(row['Equity %']) || null,
          mortgage_balance: Number(row['Mortgage Balance']) || null,
          propstream_row: row, // Full audit
        },
      };

      if (!extracted.address || !extracted.city || !extracted.state || !extracted.zip_code) {
        throw new Error(`Invalid address components in row ${index + 1} – skipping`);
      }

      const addressHash = crypto.createHash('sha256').update(`${extracted.address.toLowerCase()}${extracted.city.toLowerCase()}${extracted.state.toLowerCase()}${extracted.zip_code}`).digest('hex'); // Logic: Hash full components for better dedup

      // Transaction: Upsert property + create lead + increment points (atomic – best for gamification integrity)
      const [property, lead] = await prisma.$transaction(async (tx) => {
        const prop = await tx.properties.upsert({
          where: { address_hash: addressHash },
          update: { ...extracted, updated_at: new Date() }, // Logic: Partial update (merge); force timestamp
          create: { address_hash: addressHash, ...extracted },
        });

        const ld = await tx.leads.create({
          data: {
            properties_id: prop.id,
            lead_type: row['Lead Type']?.toLowerCase() as LeadType || 'owner', // Logic: Map to enum
            first_name: row['Owner First Name'] || null,
            last_name: row['Owner Last Name'] || null,
            phone: row['Phone 1'] || null, // Logic: 'Phone 1' common; expand for multiples
            source: 'propstream_import' as LeadSource,
            metadata: extracted.metadata,
            assigned_to: session.user.id,
            points_earned: 1, // Logic: Per-lead base (gamify: bonus for batch size later)
          },
        });

        await tx.profile.update({
          where: { id: session.user.id },
          data: { points: { increment: 1 } }, // Logic: Accumulate (tie to quests, e.g., if rows.length >50, extra badge)
        });

        return [prop, ld];
      });

      return { row: index + 1, leadId: lead.id, success: true };
    } catch (error) {
      console.error(`Import error for row ${index + 1}:`, error);
      return { row: index + 1, success: false, error: (error as Error).message };
    }
  }));

  return { results: results.map(r => r.status === 'fulfilled' ? r.value : { success: false, error: (r.reason as Error).message }) }; // Logic: Flatten for client (e.g., success count)
}

// Action: Poll import status (fix: Stub for progress polling – simulates % complete; push back: Replace with real DB query on 'import_jobs' table for prod; unblocks testing without Upstash)
export async function pollImportStatus(jobId: string) {
  // Stub logic: Simulate progress (e.g., from memory or DB; here, random increment for testing)
  // In real, query prisma.import_jobs.findUnique({ where: { id: jobId } }) for { progress, results, error }
  const simulatedProgress = Math.min(100, (Math.random() * 20) + (await new Promise(r => setTimeout(r, 500)) as any || 0)); // Fake delay/increment
  if (simulatedProgress >= 100) {
    return { progress: 100, results: [], error: null }; // Replace with real results
  }
  return { progress: simulatedProgress, results: [], error: null };
}

// Action: Dial lead (logic: Twilio outbound call – from your Twilio number to lead phone; logs to calls table)
export async function dialLeadAction(leadId: number) {
  try {
    const lead = await prisma.leads.findUnique({ where: { id: leadId }, include: { properties: true } });
    if (!lead?.phone) {
      throw new Error('No phone for lead');
    }

    const supabase = await createSupabaseServerClient(); // Logic: Async client
    const { data: { session } } = await supabase.auth.getSession();
    if (!session?.user.id || lead.assigned_to !== session.user.id) {
      throw new Error('Unauthorized or mismatched assignment');
    }

    // Twilio outbound (phone-to-phone; expand to browser via Voice SDK if web calls needed)
    const call = await twilioClient.calls.create({
      to: lead.phone, // Lead's number
      from: process.env.TWILIO_PHONE_NUMBER!, // Your Twilio number
      url: 'http://your-domain.com/api/twiml', // Logic: TwiML endpoint (create /api/twiml route for voice response – e.g., <Say>Hello, connecting to lead</Say>)
      statusCallback: 'http://your-domain.com/api/call-status', // Logic: Webhook for metrics (update calls table on complete)
      statusCallbackEvent: ['initiated', 'ringing', 'answered', 'completed'], // Track status
    });

    // Log call (for metrics/quests – expand with webhook for duration/points)
    await prisma.calls.create({
      data: {
        leads_id: lead.id,
        caller_id: session.user.id,
        call_sid: call.sid, // Twilio ID for tracking
        status: 'initiated',
        metadata: { address: lead.properties.address },
      },
    });

    return { success: true, callId: call.sid };
  } catch (error) {
    console.error('Dial error:', error);
    return { success: false, error: (error as Error).message };
  }
}

// Helper: Stubbed extractFromLink (removed for pivot – mock for non-CSV if needed)
// async function extractFromLink(...) { return { /* mock data */ }; } // Comment out Zillow logic

// Action: Enrich lead with realtor info (fix: Added for API call; uses RapidAPI key from .env – solves realtor missing in Propstream; push back: Cache results to avoid repeat costs)
export async function enrichLeadRealtor(leadId: string) {
  const supabase = await createSupabaseServerClient(); // Logic: Async client
  const { data: { session } } = await supabase.auth.getSession();
  if (!session?.user.id) {
    return { error: 'No session' };
  }

  const lead = await prisma.leads.findUnique({ where: { id: leadId }, include: { properties: true } });
  if (!lead || lead.assigned_to !== session.user.id) {
    return { error: 'Unauthorized or lead not found' };
  }

  const address = lead.properties.address; // Logic: Use full address for API query (add city/state if needed for accuracy)

  try {
    const response = await fetch('https://realtor-com4.p.rapidapi.com/properties/v1/search', { // Logic: Endpoint for agents by location (adjust per API docs; e.g., /agents if separate)
      method: 'POST', // Or GET—check docs
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!, // Your key from .env (add to .env: RAPIDAPI_KEY=your_key)
        'x-rapidapi-host': 'realtor-com4.p.rapidapi.com',
      },
      body: JSON.stringify({ // Params from docs (example—tweak for address search)
        location: address,
        limit: 1, // Top realtor
      }),
    });

    if (!response.ok) {
      return { error: `API error: ${response.status}` };
    }

    const data = await response.json();
    const realtor = data.agents?.[0] || {}; // Logic: Parse response (adjust path per API; e.g., data.results[0].agent)

    await prisma.leads.update({
      where: { id: leadId },
      data: {
        realtor_first_name: realtor.first_name || null,
        realtor_last_name: realtor.last_name || null,
        realtor_phone: realtor.phone || null,
        metadata: { ...lead.metadata, enriched_at: new Date(), api_source: 'realtor-com' }, // Cache/audit
      },
    });

    return { success: true, realtor };
  } catch (error) {
    console.error('Enrich error:', error);
    return { error: (error as Error).message };
  }
}