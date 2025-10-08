// src/app/dashboard/page.tsx - Fixed grid layout
import { createServerClient } from '@supabase/ssr';
import {
  Activity,
  PhoneIcon,
  TargetIcon,
  TrophyIcon,
  Users,
} from 'lucide-react';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';

async function getProfileData(userId: string) {
  try {
    const profile = await prisma.profile.findUnique({
      where: { id: userId },
    });
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

async function getLeaderboardData() {
  try {
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
  } catch (error) {
    console.error('Error fetching leaderboard:', error);
    return [];
  }
}

async function getActiveQuests() {
  try {
    const quests = await prisma.quest.findMany({
      where: { active: true },
      take: 3,
    });
    return quests || [];
  } catch (error) {
    console.error('Error fetching quests:', error);
    return [];
  }
}

async function getStats(userId: string) {
  try {
    const leadCount = await prisma.leads.count({
      where: { assigned_to: userId },
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const callCount = await prisma.calls.count({
      where: {
        caller_id: userId,
        created_at: { gte: today },
      },
    });

    const conversionRate = leadCount
      ? ((callCount || 0) / leadCount * 100).toFixed(1)
      : '0.0';

    return {
      leadCount: leadCount || 0,
      callCount: callCount || 0,
      conversionRate,
    };
  } catch (error) {
    console.error('Error fetching stats:', error);
    return {
      leadCount: 0,
      callCount: 0,
      conversionRate: '0.0',
    };
  }
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
    <>
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>
      
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
            <TrophyIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{profile?.points || 0}</div>
            <p className="text-xs text-muted-foreground">
              Level {Math.floor((profile?.points || 0) / 100) + 1}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Leads</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.leadCount}</div>
            <p className="text-xs text-muted-foreground">
              +{Math.floor(stats.leadCount * 0.12)} from last month
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Calls Today</CardTitle>
            <PhoneIcon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.callCount}</div>
            <p className="text-xs text-muted-foreground">
              {stats.conversionRate}% conversion rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Current Streak</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7 days</div>
            <p className="text-xs text-muted-foreground">Keep it up!</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Active Quests</CardTitle>
            <CardDescription>
              Complete quests to earn points and unlock badges
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {quests.length > 0 ? (
                quests.map((quest: any) => (
                  <div key={quest.id} className="flex items-center">
                    <div className="mr-4 flex h-9 w-9 items-center justify-center rounded-full bg-[#00A0E9]/10">
                      <TargetIcon className="h-4 w-4 text-[#00A0E9]" />
                    </div>
                    <div className="space-y-1 flex-1">
                      <p className="text-sm font-medium leading-none">
                        {quest.title}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {quest.description}
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-[#00A0E9]">
                      +{quest.points} pts
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  No active quests. Run <code className="bg-muted px-1 py-0.5 rounded text-xs">npx prisma db seed</code> to populate sample data.
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Leaderboard</CardTitle>
            <CardDescription>Top performers this month</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {leaderboard.length > 0 ? (
                leaderboard.map((player: any, index: number) => (
                  <div key={player.id} className="flex items-center">
                    <Avatar className="h-9 w-9">
                      <AvatarFallback className="bg-[#00A0E9]/10 text-sm">
                        {index === 0 && '🥇'}
                        {index === 1 && '🥈'}
                        {index === 2 && '🥉'}
                        {index > 2 && `#${index + 1}`}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {player.id === user.id ? 'You' : `Player ${index + 1}`}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {player.role || 'novice'}
                      </p>
                    </div>
                    <div className="ml-auto font-medium text-[#00A0E9]">
                      {player.points}
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-8 text-sm text-muted-foreground">
                  No leaderboard data yet. Start earning points!
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
}