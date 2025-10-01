// src/lib/supabaseClient.ts – Centralized Supabase clients (efficient: Memoizes creation, type-safe with DB schema; best for scalability in gamified features like real-time quest updates/leaderboards)
import { createClient } from '@supabase/supabase-js';  // Base package for client (browser-safe – no ssr on client; push back: ssr for server only)
import type { Database } from '../types/database.types';  // Generated types (autocompletes e.g., profile.points; regenerate on schema changes)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Client singleton: For browser-side (e.g., signin forms, real-time subs – logic: Memoized to avoid multiple instances warning; best for UX flow without server roundtrips)
let clientSupabase: ReturnType<typeof createClient<Database>> | null = null;  // Logic: Global memo (avoids multiple GoTrueClient – fixes undefined session behavior; push back: Raw createClient can share localStorage key, causing bugs)

export const getClientSupabase = () => {
  if (!clientSupabase) {
    clientSupabase = createClient<Database>(supabaseUrl, supabaseAnonKey);  // Logic: Create once (efficient – uses public vars for browser; no cookies on client as sessions persist via localStorage/JWT)
  }
  return clientSupabase;
};