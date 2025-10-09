// src/app/dialer/page.tsx - Click-to-call interface placeholder
import { Phone, PhoneCall, PhoneOff } from 'lucide-react';
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

async function getCallableLeads(userId: string) {
  try {
    const leads = await prisma.leads.findMany({
      where: {
        assigned_to: userId,
        phone: { not: null },
        status: { in: ['new', 'no_answer', 'follow_up'] },
      },
      include: {
        properties: {
          select: {
            address: true,
            city: true,
            state: true,
            zip_code: true,
          },
        },
      },
      orderBy: { created_at: 'desc' },
      take: 20,
    });
    return leads;
  } catch (error) {
    console.error('Error fetching callable leads:', error);
    return [];
  }
}

export default async function DialerPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const leads = await getCallableLeads(user.id);

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Dialer</h2>
        <p className="text-muted-foreground">
          Call leads and track outcomes to earn points
        </p>
      </div>

      {/* Daily Goal */}
      <Card>
        <CardHeader>
          <CardTitle>Today's Calling Goal</CardTitle>
          <CardDescription>Make 20 calls to complete your daily quest</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-muted-foreground">Progress</span>
                <span className="font-semibold">0 / 20 calls</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div className="h-full bg-[#00A0E9] w-0 transition-all" />
              </div>
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-[#00A0E9]">+50</p>
              <p className="text-xs text-muted-foreground">Points</p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Callable Leads */}
      <Card>
        <CardHeader>
          <CardTitle>Ready to Call ({leads.length})</CardTitle>
          <CardDescription>
            Leads with phone numbers available
          </CardDescription>
        </CardHeader>
        <CardContent>
          {leads.length > 0 ? (
            <div className="space-y-3">
              {leads.map((lead) => (
                <div
                  key={lead.id}
                  className="flex items-center gap-4 p-4 border rounded-lg hover:border-[#00A0E9]/50 transition-colors"
                >
                  <div className="flex-1">
                    <div className="font-semibold">
                      {lead.first_name && lead.last_name
                        ? `${lead.first_name} ${lead.last_name}`
                        : lead.first_name || lead.last_name || 'Unknown'}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {lead.properties.address}
                    </div>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="outline" className="text-xs">
                        {lead.status.replace('_', ' ')}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        📞 {lead.phone}
                      </span>
                    </div>
                  </div>
                  <Button disabled size="lg" className="gap-2">
                    <PhoneCall className="h-4 w-4" />
                    Call
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <PhoneOff className="h-12 w-12 mx-auto mb-4 opacity-50" />
              <p className="text-lg mb-2">No leads to call</p>
              <p className="text-sm">
                Import leads with phone numbers to start calling
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Call Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">0 connected</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">0</div>
            <p className="text-xs text-muted-foreground">0% connection rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Points</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-[#00A0E9]">+0</div>
            <p className="text-xs text-muted-foreground">From calling</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}