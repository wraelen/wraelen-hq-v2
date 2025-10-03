// src/lib/supabaseServer.ts – Async Supabase server client helper (best practice: Wrap for Next 15 async cookies – fixes sync-dynamic-apis warnings; centralized for reuse in actions/layout; added autoRefresh false to avoid sets in components)
import { createServerClient } from '@supabase/ssr';
import { cookies } from 'next/headers';
import type { Database } from '@/types/database.types'; // Keep your types

export async function createSupabaseServerClient() {
  const cookieStore = await cookies(); // Logic: Await dynamic cookies (Next 15 requirement – avoids sync errors)
  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      auth: {
        autoRefreshToken: false, // Logic: Disable auto-refresh in server components (prevents token set during getSession – fixes cookie modify error; refresh in actions/middleware)
        persistSession: false, // Logic: No persist on server (session is per-request)
      },
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value; // Logic: Sync get after await (safe)
        },
        set(name: string, value: string, options: any) {
          try {
            cookieStore.set({ name, value, ...options }); // Logic: No await needed (set is sync)
          } catch (error) {
            console.error('Cookie set error:', error); // Handle silently (best for prod resilience)
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options }); // Logic: Remove via empty set
          } catch (error) {
            console.error('Cookie remove error:', error);
          }
        },
      },
    }
  );
}