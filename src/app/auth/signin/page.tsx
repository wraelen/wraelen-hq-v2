// app/auth/signin/page.tsx – Themed login form (client-side for interactivity; integrates Supabase auth)
'use client';  // Client component (forms need state)

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');  // Using email as username (Supabase default; customizable)
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();  // Client-side client (safe for auth mutations)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError(error.message);  // User-friendly feedback (e.g., "Invalid credentials")
    } else {
      router.push('/dashboard');  // Or use redirect param from middleware
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-500 font-mono">
      <form onSubmit={handleSignIn} className="border border-green-500 p-8 rounded shadow-[0_0_10px_rgba(0,255,0,0.5)]">
        <h2 className="mb-4 text-xl">Enter Wraelen HQ</h2>
        {error && <p className="mb-2 text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mb-2 block bg-black border border-green-500 text-green-500 p-2 w-full focus:outline-none focus:border-green-300"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mb-4 block bg-black border border-green-500 text-green-500 p-2 w-full focus:outline-none focus:border-green-300"
        />
        <button type="submit" className="bg-green-500 text-black p-2 w-full hover:bg-green-400">Login</button>
        <p className="mt-2 text-center">No account? <a href="/auth/signup" className="underline">Sign up</a></p>
      </form>
    </div>
  );
}