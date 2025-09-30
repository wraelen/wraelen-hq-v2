// src/lib/supabaseClient.ts – Centralized Supabase clients (efficient: Memoizes creation, type-safe with DB schema; best for scalability in gamified features like real-time quest updates/leaderboards)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';  // Server-side cookie access (SSR-safe, no client leaks)

import type { Database } from '@/types/supabase';  // Generated types (autocompletes e.g., profile.points; regenerate on schema changes)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server client: Use in API routes/server components (logic: Cookie-based sessions for auth gating; secure for internal HQ data fetches like profiles)
export const createServerSupabaseClient = () => createServerComponentClient<Database>({ cookies });

// Client client: For browser-side (e.g., signup forms, real-time subs – logic: Anon key limits to RLS-enforced ops; best for UX flow without server roundtrips)
let clientSupabase: ReturnType<typeof createClient<Database>> | null = null;  // Logic: Singleton for client (avoids multiple instances warning – best for browser context; push back: Raw createClient calls can share localStorage key, causing undefined session behavior)

export const getClientSupabase = () => {
  if (!clientSupabase) {
    clientSupabase = createClient<Database>(supabaseUrl, supabaseAnonKey);  // Logic: Create once (memoized – efficient, fixes multiple GoTrueClient warning; uses public vars for browser)
  }
  return clientSupabase;
};