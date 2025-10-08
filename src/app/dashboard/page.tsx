// src/app/dashboard/page.tsx - Updated to match shadcn example with SSR
import { createServerClient } from '@supabase/ssr';
import {
  PhoneIcon,
  StarIcon,
  TargetIcon,
  TrendingUpIcon,
  TrophyIcon,
  UsersIcon,
} from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';

async function getProfileData(userId: string) {
  const profile = await prisma.profile.findUnique({
    where: { id: userId },
  });
  return profile;
}

async function getLeaderboardData() {
  const leaderboard = await prisma.profile.findMany({
    orderBy: { points: 'desc' },
    take: 5,
    select: {
      id: true,
      points: true,
      badges: true,
      role: true,
    },
  });
  return leaderboard || [];
}

async function getActiveQuests() {
  const quests = await prisma.quest.findMany({
    where: { active: true },
    take: 3,
  });
  return quests || [];
}

async function getStats(userId: string) {
  // Get lead count
  const leadCount = await prisma.leads.count({
    where: { assigned_to: userId },
  });

  // Get call count (today)
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const callCount = await prisma.calls.count({
    where: {
      caller_id: userId,
      created_at: { gte: today },
    },
  });

  // Get conversion rate (mock calculation)
  const conversionRate = leadCount
    ? ((callCount || 0) / leadCount * 100).toFixed(1)
    : '0.0';

  return {
    leadCount: leadCount || 0,
    callCount: callCount || 0,
    conversionRate,
  };
}

export default async function DashboardPage() {
  const cookieStore = await cookies();

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {}
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const [profile, leaderboard, quests, stats] = await Promise.all([
    getProfileData(user.id),
    getLeaderboardData(),
    getActiveQuests(),
    getStats(user.id),
  ]);

  return (
    <div className="flex flex-1 flex-col gap-4 p-4">
      <div className="grid auto-rows-min gap-4 md:grid-cols-3">
        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            <TrophyIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A0E9]">
              {profile?.points || 0}
            </div>
            <p className="text-xs text-muted-foreground">
              Level {Math.floor((profile?.points || 0) / 100) + 1}
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
            <UsersIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.leadCount}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(stats.leadCount * 0.12)} from last week
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calls Today</CardTitle>
            <PhoneIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.callCount}</div>
            <p className="text-xs text-muted-foreground">
              {stats.conversionRate}% conversion rate
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4 bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader>
            <CardTitle>Active Quests</CardTitle>
            <CardDescription>
              Complete quests to earn points and unlock badges
            </CardDescription>
          </CardHeader>
          <CardContent className="pl-2">
            <div className="space-y-4">
              {quests.length > 0 ? (
                quests.map((quest: any) => (
                  <div
                    key={quest.id}
                    className="flex items-center space-x-4 rounded-md border border-[#00A0E9]/20 p-4"
                  >
                    <TargetIcon className="h-6 w-6 text-[#00A0E9]" />
                    <div className="flex-1 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {quest.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {quest.description}
                      </p>
                      <p className="text-xs text-[#00A0E9]">
                        Reward: {quest.points} points
                      </p>
                    </div>
                    <div className="ml-auto font-medium">
                      <span className="text-yellow-500">In Progress</span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-muted-foreground">
                  No active quests. Check back soon!
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3 bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {leaderboard.map((player: any, index: number) => (
                <div key={player.id} className="flex items-center">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#00A0E9]/20 mr-3">
                    {index === 0 && (
                      <TrophyIcon className="h-4 w-4 text-yellow-500" />
                    )}
                    {index === 1 && (
                      <StarIcon className="h-4 w-4 text-gray-400" />
                    )}
                    {index === 2 && (
                      <StarIcon className="h-4 w-4 text-orange-600" />
                    )}
                    {index > 2 && <span className="text-sm">{index + 1}</span>}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium leading-none">
                      {player.id === user.id ? 'You' : `Player ${index + 1}`}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {Array.isArray(player.badges) ? player.badges.length : 0} badges
                    </p>
                  </div>
                  <div className="ml-auto font-medium text-[#00A0E9]">
                    {player.points}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
            <StarIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {Array.isArray(profile?.badges) ? profile.badges.length : 0}
            </div>
            <p className="text-xs text-muted-foreground">
              {10 - (Array.isArray(profile?.badges) ? profile.badges.length : 0)} more to unlock
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Current Streak
            </CardTitle>
            <TrendingUpIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Next Reward</CardTitle>
            <TrophyIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {100 - ((profile?.points || 0) % 100)}
            </div>
            <p className="text-xs text-muted-foreground">
              points to next level
            </p>
          </CardContent>
        </Card>

        <Card className="bg-[#1F1F1F] border-[#00A0E9]/20">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Role</CardTitle>
            <UsersIcon className="h-4 w-4 text-[#00A0E9]" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold capitalize">
              {profile?.role || 'Sales Rep'}
            </div>
            <p className="text-xs text-muted-foreground">Current rank</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}