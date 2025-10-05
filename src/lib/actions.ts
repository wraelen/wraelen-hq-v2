// src/lib/actions.ts – Updated with async Supabase (align with layout fix; keeps Propstream CSV ready – test upload post-restart; fixed notes type by disabling dynamicTyping and explicit conversions – best practice: Treat CSV as strings to avoid surprises, manually Number() numerics for safety/scalability in imports/quests)
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
// New: Added enrichRealtors flag from form (optional – if true and env enabled, enrich after create; pushback: Gate to avoid costs; serial for now, batch later if scale)
// New: After all, trigger quest checks (increment points by leads.length, check/complete quests via transaction – atomic/best practice to avoid partial fails)
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

  const enrichRealtors = formData.get('enrichRealtors') === 'true'; // New: Optional flag from checkbox (default false)

  // Parse CSV (papaparse – async, handles large files stream-like)
  const csvText = await file.text();
  const parsed = Papa.parse(csvText, { header: true, skipEmptyLines: true, dynamicTyping: false }); // Fix: Disable dynamicTyping (all fields as strings – avoids number surprises like notes:1 as Int; explicit Number() below for numerics)
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
        'duplex (2 units, any combination)': 'multi_family', // Added: Matches your sample CSV value (normalize to enum; pushback: If more variants, expand or use AI fuzzy match later)
        // Add more mappings as needed; default to 'other' below
      };

      const address = row['Address']?.trim() || null; // Logic: Trim (now strings)
      const city = row['City']?.trim() || null;
      const state = row['State']?.toUpperCase() || null; // Standardize to uppercase (e.g., 'FL' → 'FL')
      const zip_code = row['Zip']?.trim() || null; // Keep as string for leading zeros
      if (!address || !city || !state || !zip_code) {
        throw new Error('Missing required address fields');
      }

      const address_hash = crypto.createHash('sha256').update(`${address}${city}${state}${zip_code}`.toLowerCase()).digest('hex'); // Logic: Normalized hash for dedup (lowercase for consistency)

      const propertyData = {
        address,
        city,
        state,
        zip_code,
        property_type: propertyTypeMap[row['Property Type']?.toLowerCase() || ''] || 'other' as PropertyType,
        bedrooms: Number(row['Bedrooms']) || null, // Explicit Number (NaN → null)
        bathrooms: Number(row['Total Bathrooms']) || null, // Matches CSV header 'Total Bathrooms'
        square_feet: Number(row['Building Sqft']) || null,
        year_built: Number(row['Effective Year Built']) || null,
        avm: Number(row['Est. Value']) || null, // Matches 'Est. Value' for AVM
        owner_occupied: row['Owner Occupied']?.toLowerCase() === 'yes' ? true : (row['Owner Occupied']?.toLowerCase() === 'no' ? false : null), // Boolean map from string
        distress_signals: row['Foreclosure Factor'] ? { foreclosure: row['Foreclosure Factor'] } : null, // Json: Basic distress (expand with more CSV fields if available)
        notes: row['Marketing Lists'] || null, // Now string (e.g., '1' instead of 1 – fixes validation error)
        equity: Number(row['Est. Equity']) || null, // Matches 'Est. Equity' in CSV
        remaining_balance: Number(row['Est. Remaining balance of Open Loans']) || null, // Matches CSV
        loan_to_value: Number(row['Est. Loan-to-Value']) || null, // Matches CSV
        open_loans: Number(row['Total Open Loans']) || null, // Matches CSV
        metadata: { // Json: Extras for creative financing (add more if CSV has them; e.g., if 'Equity' column exists, parse here)
        },
      };

      // Upsert property (dedup on hash – merge data)
      const property = await prisma.properties.upsert({
        where: { address_hash },
        update: propertyData,
        create: { ...propertyData, address_hash },
      });

      // Parse owner names (split first/last if combined; for owner leads)
      const owner1First = row['Owner 1 First Name']?.trim() || null;
      const owner1Last = row['Owner 1 Last Name']?.trim() || null;
      const phone = row['Owner 1 Phone']?.trim() || null; // Assuming CSV has phone; add if present
      const email = row['Owner 1 Email']?.trim() || null; // Add if CSV has email

      const leadData = {
        properties_id: property.id,
        lead_type: 'owner' as LeadType, // Default to owner for Propstream (realtor enrich separate)
        first_name: owner1First,
        last_name: owner1Last,
        phone,
        email,
        status: 'new' as const, // Default new
        source: 'propstream_import' as LeadSource,
        assigned_to: session.user.id, // Assign to importer (gamification: Their quest points)
        points_earned: 1, // Per-lead points (expand logic for quality-based)
        notes: row['Notes'] || null,
        metadata: { imported_at: new Date(), county: row['County'] || null }, // Audit + extras
      };

      // Create lead (no unique – allow multiples per property if needed; pushback: Add unique constraint if 1:1 desired)
      const lead = await prisma.leads.create({ data: leadData });

      // New: Optional auto-enrich (gate with env to avoid bulk costs; pushback: Serial for simplicity, but if slow, add batch/queue later with Upstash)
      if (enrichRealtors && process.env.ENABLE_AUTO_ENRICH === 'true') {
        await enrichLeadRealtor(lead.id); // Call existing (handles errors internally – log, don't fail import)
      }

      return { success: true, row: index + 1, leadId: lead.id }; // For results list
    } catch (error) {
      console.error(`Import error for row ${index + 1}:`, error);
      return { success: false, row: index + 1, error: (error as Error).message };
    }
  }));

  // Filter fulfilled/rejected for summary (UX: Show counts in results)
  const successful = results.filter(r => r.status === 'fulfilled' && (r.value as any).success).length;
  const failed = results.length - successful;

  // New: Trigger quests (after all imports – use transaction for atomic points/quests; best practice to prevent races)
  if (successful > 0) {
    await prisma.$transaction(async (tx) => {
      // Get profile (by user_id from session)
      const profile = await tx.profile.findUnique({ where: { user_id: session.user.id } });
      if (!profile) throw new Error('Profile not found');

      // Increment points (1 per successful lead; ties to leads.points_earned but aggregates to profile)
      await tx.profile.update({
        where: { user_id: session.user.id },
        data: { points: { increment: successful } },
      });

      // Get active quests (for this user – check incomplete)
      const quests = await tx.quest.findMany({
        where: { active: true },
      });

      for (const quest of quests) {
        // Check if already completed (unique constraint prevents dupes)
        const existingCompletion = await tx.quest_completions.findUnique({
          where: { quest_id_profile_id: { quest_id: quest.id, profile_id: profile.id } },
        });
        if (existingCompletion) continue;

        // Parse criteria and check (basic for min_imports; expand for other types like min_calls)
        const criteria = quest.criteria as { min_imports?: number } | null;
        if (criteria?.min_imports) {
          // Count total imports for user (ever; for one_time – adjust for daily/weekly with date filters)
          const totalImports = await tx.leads.count({
            where: { assigned_to: profile.id, source: LeadSource.propstream_import },
          });
          if (totalImports >= criteria.min_imports) {
            // Complete quest (award extra points)
            await tx.quest_completions.create({
              data: {
                quest_id: quest.id,
                profile_id: profile.id,
                evidence: { total_imports: totalImports, awarded_points: quest.points },
              },
            });
            await tx.profile.update({
              where: { id: profile.id },
              data: { points: { increment: quest.points } },
            });
            // Optional: Unlock badge if requirements met (e.g., check badges.requirements – add similar loop if needed)
          }
        }
        // Expand: Add cases for other criteria (e.g., if (criteria.min_calls) { count calls... })
      }
    });
  }

  if (failed === results.length) {
    return { error: 'All rows failed – check CSV format/console logs' };
  }

  return { success: true, results, summary: { successful, failed } }; // Logic: Return array for display (no jobId yet; pushback: For long-running, add Upstash/edge func + return jobId for poll)
}

// Stub poll (replace with real DB query on 'import_jobs' table for prod; unblocks testing without Upstash)
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
// New: Improved query with full address (address + city + state + zip – fixes partial failures; pushback: If API still flaky, add fallback or switch to another like Datafiniti)
// New: Added detailed logging for debugging (query, status, raw data, parsed realtor – best practice for API issues; remove or gate in prod if verbose)
// Suggestion: Alternate parsing to data.properties?.[0]?.listing_agent (common in Realtor APIs; adjust based on logs/raw data)
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

  const fullAddress = `${lead.properties.address}, ${lead.properties.city}, ${lead.properties.state} ${lead.properties.zip_code}`; // New: Full query for better API accuracy (fixes partial address issues)

  console.log(`Enriching lead ${leadId} with query: ${fullAddress}`); // New: Log the input query for verification

  try {
    const response = await fetch('https://realtor-com4.p.rapidapi.com/properties/v1/search', { // Logic: Endpoint for agents by location (adjust per API docs; e.g., /agents if separate)
      method: 'POST', // Or GET—check docs
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-key': process.env.RAPIDAPI_KEY!, // Your key from .env (add to .env: RAPIDAPI_KEY=your_key)
        'x-rapidapi-host': 'realtor-com4.p.rapidapi.com',
      },
      body: JSON.stringify({ // Params from docs (example—tweak for address search)
        location: fullAddress,
        limit: 1, // Top realtor
      }),
    });

    console.log(`API response status: ${response.status}`); // New: Log status (e.g., 200 ok, 404 no match, 401 bad key)

    if (!response.ok) {
      console.log(`API error details: ${await response.text()}`); // New: Log error body if not ok (e.g., rate limit or invalid params)
      return { error: `API error: ${response.status}` };
    }

    const data = await response.json();
    console.log('Raw API response data:', JSON.stringify(data, null, 2)); // New: Log full response (inspect structure for agents)

    const realtor = data.properties?.[0]?.listing_agent || {}; // New: Alternate parsing (common in Realtor APIs; fallback to {} if no match – adjust if logs show different path, e.g., data.agents?.[0])

    console.log('Parsed realtor:', realtor); // New: Log what we're extracting (e.g., empty if no match)

    await prisma.leads.update({
      where: { id: leadId },
      data: {
        realtor_first_name: realtor.first_name || null,
        realtor_last_name: realtor.last_name || null,
        realtor_phone: realtor.phone || null,
        metadata: { ...((typeof lead.metadata === 'object' && lead.metadata !== null) ? lead.metadata : {}), enriched_at: new Date(), api_source: 'realtor-com' }, // Cache/audit
      },
    });

    return { success: true, realtor };
  } catch (error) {
    console.error('Enrich error:', error);
    return { error: (error as Error).message };
  }
}