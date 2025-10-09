// src/app/shop/page.tsx - Points shop for rewards
import { Gift, ShoppingBag, Star, Zap } from 'lucide-react';
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

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

export default async function ShopPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const profile = await getProfile(user.id);

  // Mock shop items (will be database-driven later)
  const shopItems = [
    {
      id: '1',
      name: 'Power Hour Boost',
      description: 'Double points on all activities for 1 hour',
      points: 50,
      icon: Zap,
      category: 'Boost',
      stock: 'Unlimited',
    },
    {
      id: '2',
      name: 'Premium Lead Pack',
      description: 'Get 10 pre-qualified high-equity leads',
      points: 200,
      icon: Star,
      category: 'Leads',
      stock: '5 available',
    },
    {
      id: '3',
      name: 'Company Swag',
      description: 'Wraelen HQ branded t-shirt and hat',
      points: 500,
      icon: Gift,
      category: 'Physical',
      stock: 'Limited',
    },
    {
      id: '4',
      name: 'Day Off Voucher',
      description: 'Redeem for a paid day off',
      points: 1000,
      icon: Gift,
      category: 'Reward',
      stock: '2 remaining',
    },
    {
      id: '5',
      name: 'Skip The Line',
      description: 'Priority on next property assignment',
      points: 100,
      icon: Zap,
      category: 'Boost',
      stock: 'Unlimited',
    },
    {
      id: '6',
      name: 'Team Lunch',
      description: 'Lunch with the team on company',
      points: 300,
      icon: Gift,
      category: 'Social',
      stock: '3 available',
    },
  ];

  const canAfford = (cost: number) => (profile?.points || 0) >= cost;

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Shop</h2>
          <p className="text-muted-foreground">
            Redeem your points for rewards and boosts
          </p>
        </div>
        <Card className="border-[#00A0E9]">
          <CardContent className="pt-6 px-6">
            <div className="text-center">
              <p className="text-sm text-muted-foreground mb-1">Your Balance</p>
              <p className="text-3xl font-bold text-[#00A0E9]">
                {profile?.points || 0}
              </p>
              <p className="text-xs text-muted-foreground">points</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Categories */}
      <div className="flex gap-2">
        <Badge variant="outline" className="cursor-pointer hover:bg-[#00A0E9]/10">
          All
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
          Boosts
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
          Rewards
        </Badge>
        <Badge variant="outline" className="cursor-pointer hover:bg-accent">
          Physical
        </Badge>
      </div>

      {/* Shop Items */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shopItems.map((item) => {
          const affordable = canAfford(item.points);
          const Icon = item.icon;
          
          return (
            <Card
              key={item.id}
              className={`transition-all hover:border-[#00A0E9]/50 ${
                !affordable ? 'opacity-60' : ''
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      affordable
                        ? 'bg-[#00A0E9] text-white'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {item.category}
                  </Badge>
                </div>
                <CardTitle className="text-lg mt-4">{item.name}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold text-[#00A0E9]">
                      {item.points}
                    </p>
                    <p className="text-xs text-muted-foreground">points</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      {item.stock}
                    </p>
                  </div>
                  <Button disabled={!affordable} size="sm">
                    {affordable ? 'Redeem' : 'Locked'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* How to Earn */}
      <Card>
        <CardHeader>
          <CardTitle>How to Earn More Points</CardTitle>
          <CardDescription>
            Complete activities to increase your balance
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A0E9]/10 text-[#00A0E9]">
                📥
              </div>
              <div>
                <h4 className="font-semibold text-sm">Import Leads</h4>
                <p className="text-sm text-muted-foreground">
                  +1 point per lead • +100 for 50+ leads
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A0E9]/10 text-[#00A0E9]">
                📞
              </div>
              <div>
                <h4 className="font-semibold text-sm">Make Calls</h4>
                <p className="text-sm text-muted-foreground">
                  +5 points per connected call
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A0E9]/10 text-[#00A0E9]">
                🎯
              </div>
              <div>
                <h4 className="font-semibold text-sm">Complete Quests</h4>
                <p className="text-sm text-muted-foreground">
                  +50-200 points per quest
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#00A0E9]/10 text-[#00A0E9]">
                🏆
              </div>
              <div>
                <h4 className="font-semibold text-sm">Earn Badges</h4>
                <p className="text-sm text-muted-foreground">
                  Unlock achievements for bonus points
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}