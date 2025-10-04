// src/app/dashboard/page.tsx – Server-rendered dashboard (efficient, secure data fetch – best for loading gamification data like role/points/badges on initial load; push back: If real-time updates needed for leaderboards, add client component with Supabase Realtime subscribe)
import { createServerClient } from '@supabase/ssr'; // Updated: ssr client (async-safe for Next.js 15+ – fixes old helpers deprecation; best for server fetches without cookies await issues)
import { cookies } from 'next/headers'; // For cookie store (secure for sessions – server-only)
import { redirect } from 'next/navigation'; // For unauth redirect (best practice: Server-side guard – fast, no client flash)
import Leaderboard from '@/components/ui/Leaderboard'; // Logic: New client component for real-time (import below)
import prisma from '@/lib/prisma'; // Prisma singleton (logic: Relational fetch for profile – efficient, avoids multiple connections per request; best for scale as reps view dashboards concurrently)

export default async function Dashboard() {
  const cookieStore = await cookies(); // Logic: Awaitable in 15+ (best for dynamic APIs – secure cookie access)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); // Logic: Attempts set (succeeds in components; ignored in actions via catch – middleware refreshes on redirect)
        } catch {
          // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
        }
      },
    } }
  ); // Logic: ssr client (async-safe sessions – replaces old helpers; best for SSR without deprecation warnings)
  const { data: { user } } = await supabase.auth.getUser(); // Logic: Switch to getUser() (secure server-verified fetch – fixes "insecure getSession" warning; use for auth guards/user.id; push back: For full session tokens, keep getSession() if needed elsewhere, but this suffices for most checks)
  if (!user) redirect('/auth/signin'); // Logic: Guard unauth (server-side – best for security, prevents data leaks before client render)
  const profile = await prisma.profile.findUnique({ where: { id: user.id } }); // Logic: Fix - Use 'profile' singular (matches updated schema model name); Fetch gamification data (relational – efficient query; push back: If no profile, create on-the-fly or handle error for robustness)

  // Initial leaderboard data (SSR for SEO/fast load; real-time sub updates client-side)
  const initialLeaders = await prisma.profile.findMany({
    orderBy: { points: 'desc' },
    take: 10, // Top 10 for leaderboard
    select: { id: true, role: true, points: true, badges: true }, // Slim projection (performance)
  });

  return (
    <div className="p-4 bg-black text-green-500 font-mono">
      <h1>Welcome to HQ, {user.email}! Role: {profile?.role || 'Novice'}</h1> // Logic: Use user.email (from getUser() – secure; personalized – motivates reps; fallback for no profile)
      <p>Points: {profile?.points || 0} | Badges: {profile?.badges.join(', ') || 'None'}</p> // Logic: Gamification stats (stub – expand with progress bar/component for visual "level up" feel)
      <Leaderboard initialLeaders={initialLeaders} /> // Logic: Pass initial data (hydrates client sub)
      {/* Quest board here – e.g., <QuestBoard userId={user.id} /> or realtime sub for live updates (push back: Use Supabase Realtime for peer challenges – feels "game-like" without polling) */}
    </div>
  );
}