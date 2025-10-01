// src/app/auth/signin/page.tsx – Login form (client-side for interactivity; base Supabase client for browser mutations – best for Next.js 15+ pivot, async-safe without deprecated helpers)
'use client';  // Logic: Client component (best for form state – no SSR overhead for inputs; push back: Server actions for mutations if scaling auth heavy)

import { useState } from 'react';
import { getClientSupabase } from '@/lib/supabaseClient';  // Updated: Singleton utility (logic: Memoized client – fixes multiple GoTrueClient warning; best for browser context consistency)

export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);

  // Logic: Client-side singleton (best practice: Use getClientSupabase to get memoized client – env vars available via process.env.NEXT_PUBLIC_*; no cookies needed on client as sessions persist via localStorage/JWT; fixes multiple instances)
  const supabase = getClientSupabase();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (password.length < 6) return setError('Password must be at least 6 characters');  // Logic: Client validation (push back: Add more like email format check – best for UX/security, prevents weak creds in internal app with leads)
    const { error } = await supabase.auth.signInWithPassword({ email, password });  // Logic: Supabase native (hashing/JWT auto – no custom bcrypt)
    if (error) {
      setError(error.message);  // UX: Feedback for flow (e.g., "Invalid credentials" – improves rep login experience)
      console.error('Login error:', error.message);  // Logic: Dev log (best for debugging – check browser console if no redirect)
    } else {
      console.log('Login success – redirecting...');  // Logic: Dev log (confirm if this prints – if yes, signIn succeeded; if no, auth failed)
      await supabase.auth.getSession();  // Logic: Force session sync (best practice: Ensures JWT/localStorage updated before redirect – fixes timing bug where middleware sees no session; no-brainer for reliable post-login flow)
      window.location.href = '/signup';  // Kept: Hard redirect (your tweak – reliable for session sync; push back: If you want client push, add useRouter and router.refresh() before router.push('/dashboard') for smoother "game" transition without reload)
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