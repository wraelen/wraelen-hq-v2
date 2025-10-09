// src/lib/supabaseServer.ts – With request deduplication to prevent rate limits
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from '@/types/database.types';

// Singleton cache to prevent multiple concurrent getUser calls
let cachedClient: any = null;
let cacheTimestamp = 0;
const CACHE_TTL = 2000; // 2 seconds

export async function createSupabaseServerClient() {
  // Return cached client if still fresh
  if (cachedClient && Date.now() - cacheTimestamp < CACHE_TTL) {
    return cachedClient;
  }

  const cookieStore = await cookies();
  
  const client = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false, // Important: prevents extra requests
      },
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options });
          } catch (error) {
            // Silently fail - expected in some contexts
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options });
          } catch (error) {
            // Silently fail
          }
        },
      },
    }
  );

  // Cache the client
  cachedClient = client;
  cacheTimestamp = Date.now();

  return client;
}