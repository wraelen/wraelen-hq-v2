// src/app/auth/signup/page.tsx – Signup form (client-side for interactivity; base Supabase client for browser mutations – best for Next.js 15+ pivot, async-safe without deprecated helpers)
'use client';  // Logic: Client component (best for form state – no SSR overhead for inputs; push back: Server actions for mutations if scaling auth heavy)

import { createClient } from '@supabase/supabase-js';  // Base package client (no helpers – lighter, future-proof; uses NEXT_PUBLIC vars for browser)
import { revalidatePath } from 'next/cache';  // For cache invalidation (optimizes post-signup dashboard load – fresh data without manual refresh)
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import prisma from '@/lib/prisma';  // Prisma singleton (logic: For server action – relational profile creation for gamification init; best for scale as reps grow)

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  // Logic: Client-side creation (best practice: Use base createClient for browser – env vars available via process.env.NEXT_PUBLIC_*; no cookies needed on client as sessions persist via localStorage/JWT)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,  // Logic: Required (throws if missing – guard in dev if needed, but Next.js loads .env.local auto)
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });  // Logic: Supabase native signup (hashing/JWT auto – no custom logic needed; adds user to Supabase auth table)
    if (error) {
      setError(error.message);  // UX: Friendly feedback for flow (e.g., "Email in use" or "Password too weak" – improves onboarding experience for new reps)
    } else if (user) {
      await createInitialProfile(user.id);  // Server action call (logic: Creates linked Prisma profile immediately after signup – atomic to ensure gamification data (role/points) is ready for first dashboard load; best for consistency)
      router.push('/dashboard');  // Logic: Redirect to HQ (smooth, client-side – best for game-like navigation after signup)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignUp} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Join Wraelen HQ</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  // Logic: Conditional error (best for UX – clear, non-blocking; allows quick retries)
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full mb-6 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
        />
        <button type="submit" className="w-full p-2 bg-green-500 text-black hover:bg-green-600">Sign Up</button>
        <p className="mt-4 text-center">Already have an account? <Link href="/auth/signin" className="underline hover:text-green-300">Login</Link></p>  // Logic: Link to signin (fast nav – improves flow for existing reps)
      </form>
    </div>
  );
}

// Server action (logic: 'use server' – runs server-side only, secure for DB ops; creates initial profile tied to Supabase user ID – best for relational gamification data like points/badges)
'use server';

export async function createInitialProfile(userId: string) {
  await prisma.profile.create({
    data: {
      userId,  // Logic: Links to Supabase user.id (UUID – enables efficient joins for quests/leaderboards, e.g., top points by role)
      role: 'Novice',  // Logic: Initial role (gamification start – unlock 'Apprentice' at 1000 points via future API threshold check)
      points: 0,  // Logic: Start at zero (earn via quests like Zillow scrapes or CallRail logs – increment in API routes)
      badges: [],  // Logic: Empty array (add strings like 'LeadScraper' on quest completion – queryable for badges leaderboard)
    },
  });
  revalidatePath('/dashboard');  // Logic: Invalidates cache (ensures dashboard shows fresh profile data post-signup – best for seamless flow after redirect)
}