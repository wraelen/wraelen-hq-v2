// src/lib/actions.ts – Server actions for auth (best practice: Centralize mutations – efficient, type-safe; push back: Avoid client auth for cookie sync in Next.js; scales for quests/leaderboards with RLS)
'use server';  // Logic: Marks as server-only (no client bundle bloat – optimizes for internal app with leads/calls)

import { createServerClient } from '@supabase/ssr';  // SSR package (server-aware – auto-handles cookies via proxy; middleware refreshes post-redirect)
import { cookies } from 'next/headers';  // Next utility (dynamic read for session check – set ignored in actions, as middleware handles)
import { redirect } from 'next/navigation';  // Server redirect (reliable – no client hacks; best for post-auth flow to dashboard quests)
import type { Database } from '../types/database.types';  // Types (autocompletes e.g., session.user.id for Prisma sync – now fixed via your gen)

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;  // Logic: Required env (fail-fast if missing – matches middleware guard)
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

// Action: Server-side login (logic: FormData input for easy <form> binding; validates minimally, mutates, returns error or redirects – middleware syncs cookies on next request)
export async function signInAction(formData: FormData) {
  const email = formData.get('email')?.toString() ?? '';  // Logic: Safe extraction (push back: Add zod here for prod validation – prevents invalid emails in rep onboarding; keeps it server-side for security)
  const password = formData.get('password')?.toString() ?? '';

  if (!email || !password) {
    return { error: 'Email and password are required' };  // Logic: Early validation return (client will display – no redirect/reload; UX-friendly for form feedback)
  }
  if (password.length < 6) {
    return { error: 'Password must be at least 6 characters' };  // Logic: Basic check (expand for strength in gamified app – e.g., tie to "security quest" badge)
  }

  const cookieStore = cookies();  // Logic: Next headers (dynamic – reads current request cookies for session check)
  const supabase = createServerClient<Database>(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll: () => cookieStore.getAll(),  // Logic: Pass current cookies (enables session read – fixes undefined in middleware)
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));  // Logic: Attempts set (succeeds in components; ignored in actions via catch – middleware refreshes on redirect)
        } catch {
          // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
        }
      },
    },
  });

  const { error } = await supabase.auth.signInWithPassword({ email, password });  // Logic: Server mutation (hashes/JWT auto – no custom logic; ties to Supabase users table for RLS on quests)

  if (error) {
    return { error: error.message };  // Logic: Return error (client handles display – e.g., "Invalid credentials"; best for debugging without reload spam)
  }

  redirect('/dashboard');  // Logic: Success redirect (middleware now sees session – seamless to game HQ; change to '/hq' or dynamic based on rep level if needed)
}