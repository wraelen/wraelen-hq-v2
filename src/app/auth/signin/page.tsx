// src/app/auth/signin/page.tsx – Login form (client-side for state; ssr component client – best for Next.js 15+)
'use client';

import { createServerClient } from '@supabase/ssr';  // ssr helper (async-safe – fixes errors; best for client mutations)
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createServerClient();  // Logic: Component client (browser-safe for signIn – replaces placeholder; ssr handles async cookies)

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });  // Logic: Supabase verification (hashing auto)
    if (error) setError(error.message);
    else router.push('/dashboard');
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignIn} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Enter Wraelen HQ</h2>
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
        <button type="submit" className="w-full p-2 bg-green-500 text-black hover:bg-green-600">Login</button>
      </form>
    </div>
  );
}