// src/app/achievements/page.tsx - Badges and achievements showcase
import { Award, Lock, Star, Trophy } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

async function getBadges() {
  try {
    const badges = await prisma.badges.findMany({
      orderBy: { created_at: 'asc' },
    });
    return badges;
  } catch (error) {
    console.error('Error fetching badges:', error);
    return [];
  }
}

async function getProfile(userId: string) {
  try {
    const profile = await prisma.profile.findUnique({
      where: { user_id: userId },
    });
    return profile;
  } catch (error) {
    console.error('Error fetching profile:', error);
    return null;
  }
}

export default async function AchievementsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const [badges, profile] = await Promise.all([
    getBadges(),
    getProfile(user.id),
  ]);

  const earnedBadges = profile?.badges || [];
  const level = Math.floor((profile?.points || 0) / 100) + 1;
  const nextLevelPoints = level * 100;
  const currentLevelProgress = (profile?.points || 0) % 100;

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Achievement Gallery</h2>
        <p className="text-muted-foreground">
          Track your progress and unlock rewards
        </p>
      </div>

      {/* Level Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Level {level} - {profile?.role || 'Novice'}</CardTitle>
          <CardDescription>
            {currentLevelProgress} / 100 points to Level {level + 1}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            <Progress value={currentLevelProgress} className="h-3" />
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Total Points: {profile?.points || 0}</span>
              <span>Next: {nextLevelPoints}</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Badges Earned</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A0E9]">
              {earnedBadges.length}
            </div>
            <p className="text-xs text-muted-foreground">
              of {badges.length} total
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Current Rank</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">#1</div>
            <p className="text-xs text-muted-foreground">On leaderboard</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Quests Completed</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A0E9]">
              {profile?.points || 0}
            </div>
            <p className="text-xs text-muted-foreground">All time</p>
          </CardContent>
        </Card>
      </div>

      {/* Badges */}
      <Card>
        <CardHeader>
          <CardTitle>Badges</CardTitle>
          <CardDescription>
            Unlock badges by completing achievements
          </CardDescription>
        </CardHeader>
        <CardContent>
          {badges.length > 0 ? (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {badges.map((badge) => {
                const isEarned = earnedBadges.includes(badge.name);
                return (
                  <div
                    key={badge.id}
                    className={`relative p-6 border rounded-lg transition-all ${
                      isEarned
                        ? 'border-[#00A0E9] bg-[#00A0E9]/5'
                        : 'border-muted opacity-60'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 items-center justify-center rounded-full ${
                          isEarned
                            ? 'bg-[#00A0E9] text-white'
                            : 'bg-muted text-muted-foreground'
                        }`}
                      >
                        {isEarned ? (
                          <Trophy className="h-6 w-6" />
                        ) : (
                          <Lock className="h-6 w-6" />
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold mb-1">{badge.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {badge.description}
                        </p>
                        {isEarned && (
                          <Badge className="mt-2 bg-[#00A0E9]/10 text-[#00A0E9]">
                            Earned
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <Award className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No badges yet</p>
              <p className="text-sm">
                Run <code className="bg-muted px-1 py-0.5 rounded text-xs">npx prisma db seed</code> to create sample badges
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}