// src/app/auth/signin/page.tsx (new file—custom login page for game-themed UI; uses Auth.js signIn)
'use client';

import { signIn } from 'next-auth/react'; // Added: For credentials login
import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Added: Shadcn Button
import { Input } from '@/components/ui/input'; // Added: Shadcn Input (install if not: npx shadcn-ui@latest add input button)

export default function SignIn() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signIn('credentials', { username, password, redirect: true, callbackUrl: '/dashboard' }); // Added: Sign in with credentials; redirect to dashboard on success
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-800 rounded-md"> /* Game-themed styling (dark bg for MMORPG feel) */
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2" />
      <Button type="submit">Login to HQ</Button> /* Game-themed button text */
    </form>
  );
}