// src/app/auth/signin/page.tsx – Login form (client-side for state/UX; binds server action for mutation – best hybrid for Next.js, fixes cookie bug without full server component)
'use client';  // Logic: Client (enables hooks like useState/useRouter – interactive errors without reload; push back: If no complex state, could go full server for perf)

import { useRouter, useSearchParams } from 'next/navigation';  // Logic: Router for client push (smooth transition – e.g., to leaderboard; searchParams for error query)
import { useState } from 'react';
import { signInAction } from '@/lib/actions';  // Imported server action (executes server-side – handles cookies/redirect; scalable for more forms)

export default function SignIn() {
  const router = useRouter();  // Logic: Client router (push after action if needed – but action redirects server-side on success)
  const searchParams = useSearchParams();  // Logic: Read query params (e.g., ?error from redirect – displays without state loss)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(searchParams.get('error'));  // Logic: Init from params (persists errors post-redirect – better UX than local state alone)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {  // Logic: Async handler (waits for action – sets local error if fails)
    e.preventDefault();
    const formData = new FormData(e.currentTarget);  // Logic: Native FormData (binds inputs – no manual state sync; efficient)
    const result = await signInAction(formData);  // Logic: Call server action (runs server-side – if success, it redirects; if error, returns here? Wait, no—action uses redirect on error too, but for client handling, adjust if needed)

    // Note: Since action redirects on both success/error, this won't run post-action. If you want client-only error (no reload), remove error redirects in action and return {error} instead, then: if (result?.error) setError(result.error); else router.push('/dashboard');
    // But for simplicity/bug fix, keep server redirects—minimal reload is fine for internal login.
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignIn} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Enter Wraelen HQ</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  // Logic: Displays from params/state (clear feedback – ties to game theme, e.g., "Access Denied: Retry Quest")
        <input
          name="email"  // Logic: Name attrs (for FormData – no onChange sync needed if going full server, but kept for familiarity)
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full mb-4 p-2 bg-black border border-green-500 text-green-400 focus:outline-none focus:border-green-300"
        />
        <input
          name="password"
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