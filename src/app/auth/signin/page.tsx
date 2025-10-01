// src/app/auth/signin/page.tsx – Login form (client-side for state/UX; binds server action for mutation – best hybrid for Next.js, fixes cookie bug without full server component)
'use client';  // Logic: Client (enables hooks like useState/useRouter – interactive errors without reload; push back: If no complex state, could go full server for perf)

import { useRouter } from 'next/navigation';  // Logic: Router for client push/refresh (smooth transition – e.g., to leaderboard; no reload on success; satisfies ESLint by using refresh() fallback)
import { useState } from 'react';
import { signInAction } from '@/lib/actions';  // Imported server action (executes server-side – handles cookies/redirect; scalable for more forms)

export default function SignIn() {
  const router = useRouter();  // Logic: Used for success push + refresh (avoids stale UI post-auth – better for game-like flow; fixes "assigned but unused")
  const [email, setEmail] = useState('');  // Logic: Controlled input (realtime validation if expanded – e.g., email format check for "quest eligibility")
  const [password, setPassword] = useState('');  // Logic: Controlled input (same as above)
  const [error, setError] = useState<string | null>(null);  // Logic: Local error state (displays without reload – improves rep login experience; fixes "assigned but unused" by setting conditionally)

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {  // Logic: Async handler (waits for action – sets local error if fails)
    e.preventDefault();
    if (!email || !password) {  // Logic: Client validation (quick feedback – prevents unnecessary server calls; duplicates server for speed; uses state vars to satisfy ESLint)
      setError('Email and password are required');
      return;
    }
    if (password.length < 6) {
      setError('Password must be at least 6 characters');
      return;
    }

    const formData = new FormData(e.currentTarget);  // Logic: Native FormData (binds inputs – no manual state sync; efficient)
    const result = await signInAction(formData);  // Logic: Call server action (runs server-side – returns { error } or redirects on success)

    if (result?.error) {
      setError(result.error);  // Logic: Display error client-side (no reload – e.g., "Invalid credentials"; ties to game theme, like "Access Denied: Retry Quest")
    } else {
      router.refresh();  // Logic: Optimistic refresh (syncs any server data if dashboard has SSR fetches – e.g., load quests; satisfies ESLint usage)
      router.push('/dashboard');  // Logic: Client push on success (smooth – cookies sync'd via middleware; fallback if redirect fails)
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-green-400 font-mono">
      <form onSubmit={handleSignIn} className="p-8 border-2 border-green-500 rounded-lg shadow-[0_0_15px_rgba(0,255,0,0.7)] bg-black/80">
        <h2 className="text-2xl mb-6 text-center">Enter Wraelen HQ</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}  // Logic: Displays from state (clear feedback – no query params needed)
        <input
          name="email"  // Logic: Name attrs (for FormData – kept onChange for controlled inputs/realtime validation if expanded)
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