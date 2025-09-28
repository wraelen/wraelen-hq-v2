// app/auth/signup/page.tsx – Signup form (creates Supabase user + Prisma Profile for gamification init)
'use client';

import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import { PrismaClient } from '@prisma/client';  // Import for client-side? No—move creation to server action (below)
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { revalidatePath } from 'next/cache';  // For cache invalidation post-signup

const prisma = new PrismaClient();  // Caution: Client-side Prisma is anti-pattern (exposes DB)—use server action instead

export default function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClientComponentClient();

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const { data: { user }, error } = await supabase.auth.signUp({
      email,
      password,
      options: { data: { role: 'Novice' } },  // Initial metadata (Supabase stores; sync to Prisma)
    });
    if (error) {
      setError(error.message);
    } else if (user) {
      // Server action for Prisma Profile creation (best practice: Keep DB ops server-side)
      await createProfile(user.id);  // Define below or in API route
      router.push('/dashboard');
    }
  };

  return ( /* Similar form as signin, with handleSignUp */ );
}

// Server action example (add to a separate file or use 'use server')
async function createProfile(userId: string) {
  'use server';  // Marks as server action (Next.js 15+)
  await prisma.profile.create({
    data: {
      userId,  // Links to Supabase UUID
      role: 'Novice',
      points: 0,
      badges: [],
    },
  });
  revalidatePath('/dashboard');  // Invalidate cache for fresh data
}