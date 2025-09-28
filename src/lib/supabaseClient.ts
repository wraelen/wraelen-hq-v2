// lib/supabaseClient.ts – Reusable Supabase client with types
import { createClient } from '@supabase/supabase-js';
import type { Database } from '@/types/supabase';  // Generate this type later for DB schema

// Env vars from your .env.local (server-side safe; never expose anon key client-side for auth mutations)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Create server-side client (use this in API routes/server components)
export const createServerClient = () => createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: false,  // Managed by auth-helpers
    persistSession: false,    // Use cookies via middleware
  },
});

// For client-side (e.g., in hooks): Use createClientComponentClient from auth-helpers (handles hydration)