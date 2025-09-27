// src/app/auth/signin/page.tsx (custom login page for game-themed UI; uses Auth.js signIn)
'use client';

import { signIn } from 'next-auth/react'; // Kept existing: For credentials login
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Kept existing: Shadcn Button (now installed)
import { Input } from '@/components/ui/input'; // Kept existing: Shadcn Input (now installed)

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => { // Added: Type for e (fixes TS7006)
    e.preventDefault();
    await signIn('credentials', { username, password, redirect: true, callbackUrl: '/dashboard' }); // Kept existing: Sign in with credentials; redirect to dashboard on success
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-800 rounded-md"> /* Game-themed styling (dark bg for MMORPG feel) */
      <Input placeholder="Username" value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)} className="mb-2" /> {/* Added: Type for e in onChange (fixes TS7006) */}
      <Input type="password" placeholder="Password" value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)} className="mb-2" /> {/* Added: Type for e in onChange (fixes TS7006) */}
      <Button type="submit">Login to HQ</Button> /* Game-themed button text */
    </form>
  );
}