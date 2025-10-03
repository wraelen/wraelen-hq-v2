// src/lib/actions.ts – Updated with async Supabase (align with layout fix; keeps Propstream CSV ready – test upload post-restart)
'use server'; // Logic: Marks as server-only (no client bundle bloat – optimizes for internal app with leads/calls)
import { PrismaClient } from '@prisma/client';  // Your DB client (async-safe in actions)
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Use async helper (fixes warnings in actions too)
import { redirect } from 'next/navigation'; // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
import Papa from 'papaparse'; // Logic: CSV parser (handles headers, errors – best for Propstream exports)
import Twilio from 'twilio'; // Logic: Twilio SDK for outbound calls (inexpensive, reliable integration)
import { z } from 'zod';  // Validation (type-safe inputs – prevents junk data in DB; no-brainer for prod)
import crypto from 'crypto';  // Built-in hash (no extra deps – for address_hash dedup)
import type { Database } from '../types/database.types'; // Types (autocompletes e.g., session.user.id for Prisma sync – now fixed via your gen)

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
  const results = await Promise.allSettled(rows.map(async (row, index) => { // Logic: Parallel for speed; settled for per-row errors
    try {
      // Map Propstream columns to extracted data (flexible – handle variants/missing; based on common exports like Address, AVM, Equity; add more like 'Mortgage Amount' for financing quests)
      const extracted = {
        address: `${row['Property Address'] || ''}, ${row['City'] || ''}, ${row['State'] || ''} ${row['Zip'] || ''}`.trim(),
        property_type: row['Property Type']?.toLowerCase() || 'other',
        bedrooms: Number(row['Bedrooms']) || null,
        bathrooms: Number(row['Bathrooms']) || null,
        square_feet: Number(row['Square Feet']) || null,
        lot_size: Number(row['Lot Size']) || null,
        year_built: Number(row['Year Built']) || null,
        avm: Number(row['AVM']) || null,
        tax_assessed_value: Number(row['Tax Assessed Value']) || null,
        distress_signals: { pre_foreclosure: row['Pre-Foreclosure'] === 'Y' || false }, // Logic: Map booleans/JSONB
        owner_occupied: row['Owner Occupied'] === 'Y' || null,
        first_name: row['Owner First Name'] || null,
        last_name: row['Owner Last Name'] || null,
        phone: row['Owner Phone 1'] || null, // Logic: Take first phone (expand for multiples in metadata)
        lead_type: row['Lead Type'] || 'owner', // Infer if available
        metadata: { propstream_row: row }, // Logic: Store full row for audit (e.g., add 'Equity %' here if in CSV)
      };

      if (!extracted.address) {
        throw new Error(`Invalid address in row ${index + 1} – skipping`);
      }

      const addressHash = crypto.createHash('sha256').update(extracted.address.toLowerCase()).digest('hex');

      // Transaction: Upsert property + create lead + increment points (atomic – best for gamification integrity)
      const [property, lead] = await prisma.$transaction(async (tx) => {
        const prop = await tx.properties.upsert({
          where: { address_hash: addressHash },
          update: { ...extracted, metadata: { ...extracted.metadata, updated_at: new Date() } }, // Logic: Partial update (merge)
          create: { address_hash: addressHash, ...extracted },
        });

        const supabase = await createSupabaseServerClient(); // Logic: Async client in transaction (safe)
        const { data: { session } } = await supabase.auth.getSession();
        if (!session?.user.id) {
          throw new Error('No session – login required');
        }

        const ld = await tx.leads.create({
          data: {
            properties_id: prop.id,
            lead_type: extracted.lead_type,
            first_name: extracted.first_name,
            last_name: extracted.last_name,
            phone: extracted.phone,
            source: 'propstream',
            metadata: extracted.metadata,
            assigned_to: session.user.id,
            points_earned: 1, // Logic: Per-lead base (gamify: bonus for batch size later)
          },
        });

        await tx.profiles.update({
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
