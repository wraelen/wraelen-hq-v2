// src/app/auth/signin/page.tsx – Login form (client-side for interactivity; base Supabase client for browser mutations – best for Next.js 15+ pivot, async-safe without deprecated helpers)
'use client';  // Logic: Client component (best for form state – no SSR overhead for inputs; push back: Server actions for mutations if scaling auth heavy)

import { createClient } from '@supabase/supabase-js';  // Updated: Base package client (no helpers – lighter, future-proof; uses NEXT_PUBLIC vars for browser)
import { useState } from 'react';

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Logic: Client-side creation (best practice: Use base createClient for browser – env vars available via process.env.NEXT_PUBLIC_*; no cookies needed on client as sessions persist via localStorage/JWT)
  const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,  // Logic: Required (throws if missing – guard in dev if needed, but Next.js loads .env.local auto)
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithPassword({ email, password });  // Logic: Supabase native (hashing/JWT auto – no custom bcrypt)
    if (error) setError(error.message);  // UX: Feedback for flow (e.g., "Invalid credentials" – improves rep login experience)
    else {
      console.log('Login success – redirecting...');  // Logic: Dev log (confirm if this prints – if yes, issue is with router; if no, login failed silently)
      window.location.href = '/dashboard';  // Updated: Hard redirect (push back: Better than router.push for post-auth – forces full reload to ensure middleware sees new session; avoids App Router bugs in Turbopack for reliable flow)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignIn} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Enter Wraelen HQ</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  // Logic: Conditional error (best for UX – clear, non-blocking)
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