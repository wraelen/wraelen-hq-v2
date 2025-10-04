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
            // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
            // Logic: No logging here (expected noise in Next.js 15+ with Supabase SSR during token refresh attempts; the try-catch safely ignores it per docs – unblocks cleanly without clutter; push back: If debugging needed, add console.warn only in dev via process.env.NODE_ENV)
          }
        },
        remove(name: string, options: any) {
          try {
            cookieStore.set({ name, value: '', ...options }); // Logic: Remove via empty set
          } catch (error) {
            // Ignored as above
          }
        },
      },
    }
  );
}