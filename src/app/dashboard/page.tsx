// src/app/dashboard/page.tsx – Dashboard page (SSR for initial data; gamified HQ – welcome, points/badges, progress, leaderboard; uses Shadcn for styled sections)
// Logic: Added icue-panel class to Cards (matches GUI – gradients/shadows). Kept structure; enhanced with iCUE-like labels/controls (e.g., smaller text, aligned descriptions).
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; 
import Leaderboard from '@/components/ui/Leaderboard'; 
import { Progress } from '@/components/ui/progress'; 
import prisma from '@/lib/prisma'; 
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export default async function Dashboard() {
  const supabase = await createSupabaseServerClient();
  const { data: { user } } = await supabase.auth.getUser();

  let profile = null;
  let topLeaders = [];
  if (user?.id) {
    profile = await prisma.profile.findUnique({ where: { id: user.id }, select: { role: true, points: true, badges: true } });
    topLeaders = await prisma.profile.findMany({ 
      select: { id: true, role: true, points: true, badges: true },
      orderBy: { points: 'desc' },
      take: 10,
    });
  }

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Updated: Grid layout (iCUE compact sections – responsive) */}
      <Card className="icue-panel"> {/* New: Custom class for iCUE style (gradient, shadow) */}
        <CardHeader>
          <CardTitle className="text-lg">Welcome to HQ, {user?.email}! Role: {profile?.role || 'novice'}</CardTitle> {/* Updated: Smaller title (lg) for compact GUI */}
          <CardDescription className="text-sm text-muted-foreground">// Use user email (from getUser) - secure, personalized - motivates reps; fallback for no profile</CardDescription> 
        </CardHeader>
        <CardContent className="flex flex-col gap-2"> {/* New: Gap for iCUE-like vertical stacking */}
          <div className="flex justify-between text-sm"> {/* New: Aligned label-value like iCUE settings */}
            <span>Points:</span>
            <span>{profile?.points || 0}</span>
          </div>
          <div className="flex justify-between text-sm">
            <span>Badges:</span>
            <span>{profile?.badges?.join(', ') || 'None'}</span>
          </div>
          <Progress value={(profile?.points || 0) / 1000 * 100} className="h-2 mt-2" /> {/* Updated: Thinner (h-2) like iCUE sliders */}
          <p className="text-xs text-muted-foreground">// Gamification stats (stub - expand with progress bar/component for visual "level up" feel)</p> 
        </CardContent>
      </Card>

      <Card className="icue-panel md:col-span-2"> {/* New: Span for wider leaderboard (iCUE full-width sections) */}
        <CardHeader>
          <CardTitle className="text-lg">Rank Role Points Badges Quest: Top Reps</CardTitle>
        </CardHeader>
        <CardContent>
          <Leaderboard initialLeaders={topLeaders} /> 
          <p className="text-xs text-muted-foreground">// Pass initial data (hydrate client sub)</p> 
        </CardContent>
      </Card>
    </div>
  );
}