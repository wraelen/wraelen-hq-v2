// src/app/auth/register/page.tsx (new file—custom register page for game-themed UI; calls /api/register API)
'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button'; // Shadcn Button
import { Input } from '@/components/ui/input'; // Shadcn Input

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify({ username, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
    if (res.ok) window.location.href = '/auth/signin'; // Redirect to login on success
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto bg-gray-800 rounded-md"> /* Game-themed styling */
      <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="mb-2" />
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} className="mb-2" />
      <Input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="mb-2" />
      <Button type="submit">Register for HQ</Button> /* Game-themed button text */
    </form>
  );
}