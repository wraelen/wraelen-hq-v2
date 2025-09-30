// src/app/auth/signup/page.tsx – Signup form (client-side for interactivity; base Supabase client for browser mutations – best for Next.js 15+ pivot, async-safe without deprecated helpers)
'use client';  // Logic: Client component (best for form state – no SSR overhead for inputs; push back: Add server actions for mutations if scaling auth heavy)

import { createClient } from '@supabase/supabase-js';  // Base package client (no helpers – lighter, future-proof; uses NEXT_PUBLIC vars for browser)
import Link from 'next/link';  // Added: For login link (fast nav – best for flow between signup/signin)
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { createInitialProfile } from 'src/app/auth/signup/action.ts';  // Server action import (logic: Call for profile creation – secure, atomic after Supabase signup)

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
          classClassName="w-full mb-6 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
        />
        <button type="submit" className="w-full p-2 bg-green-500 text-black hover:bg-green-600">Sign Up</button>
        <p className="mt-4 text-center">Already have an account? <Link href="/auth/signin" className="underline hover:text-green-300">Login</Link></p>  // Logic: Link to signin (fast nav – improves flow for existing reps)
      </form>
    </div>
  );
}