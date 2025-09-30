// src/app/auth/signup/page.tsx – Signup form (client-side for state; ssr client for mutations – best for Next.js 15+)
'use client';

import { PrismaClient } from '@prisma/client';  // For server action (logic: Initial profile – gamification setup)
import { createClient } from '@supabase/ssr';  // Updated: ssr client (async-safe – fixes errors)
import { revalidatePath } from 'next/cache';  // For cache invalidation (optimizes post-signup flow)
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const prisma = new PrismaClient();  // Server-only (in action below)

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );  // Logic: Browser client (best for mutations – ssr safe)

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.signUp({ email, password });  // Logic: Supabase signup (hashing/JWT auto)
    if (error) setError(error.message);
    else if (user) {
      await createInitialProfile(user.id);  // Server action (logic: Sync profile – atomic for gamification)
      router.push('/dashboard');
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignUp} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Join Wraelen HQ</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
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
        <p className="mt-4 text-center">Have an account? <Link href="/auth/signin" className="underline hover:text-green-300">Login</Link></p>
      </form>
    </div>
  );
}

// Server action (logic: 'use server' – runs server-side, secure; creates initial profile for gamification)
'use server';

export async function createInitialProfile(userId: string) {
  await prisma.profile.create({
    data: {
      userId,  // Logic: Link UUID (relational for leaderboards/queries)
      role: 'Novice',
      points: 0,
      badges: [],
    },
  });
  revalidatePath('/dashboard');  // Logic: Invalidate cache – fresh data on redirect (best for flow)
}