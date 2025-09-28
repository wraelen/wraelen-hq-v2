// src/lib/supabaseClient.ts – Reusable Supabase clients (type-safe with generated DB types; best for scalability in gamified features like real-time quest updates)
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { createClient } from '@supabase/supabase-js';
import { cookies } from 'next/headers';  // Server-side cookie access (efficient for SSR sessions)

import type { Database } from '@/types/supabase';  // Adjusted path – '@/types' alias resolves to src/types (tsconfig setup)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Server client: Use in API routes/server components (no client exposure – secure for internal auth/quests)
export const createServerSupabaseClient = () => createServerComponentClient<Database>({ cookies });

// Client client: For browser-side (e.g., signup forms, real-time subs – anon key limits to reads/mutations as per RLS)
export const createClientSupabaseClient = () => createClient<Database>(supabaseUrl, supabaseAnonKey);