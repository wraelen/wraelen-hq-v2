// app/dashboard/page.tsx – Server-rendered dashboard (efficient, secure data fetch)
import { PrismaClient } from '@prisma/client';
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';  // For server cookie access
import { redirect } from 'next/navigation';

const prisma = new PrismaClient();  // Server-side only

export default async function Dashboard() {
  const supabase = createServerComponentClient({ cookies });  // Server client (best for SSR)
  const { data: { session } } = await supabase.auth.getSession();

  if (!session) redirect('/auth/signin');

  const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } });  // Fetch gamification data

  return (
    <div className="p-4 bg-black text-green-500 font-mono">
      <h1>Welcome, {session.user.email}! Role: {profile?.role || 'Novice'}</h1>
      <p>Points: {profile?.points || 0} | Badges: {profile?.badges.join(', ') || 'None'}</p>
      {/* Quest list/leaderboard components here – e.g., <QuestBoard userId={session.user.id} /> */}
    </div>
  );
}