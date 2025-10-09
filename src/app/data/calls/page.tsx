// src/app/data/calls/page.tsx - Call history with metrics
import { redirect } from 'next/navigation';
import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import prisma from '@/lib/prisma';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

async function getCalls(userId: string) {
  try {
    const calls = await prisma.calls.findMany({
      where: { caller_id: userId },
      include: {
        leads: {
          select: {
            first_name: true,
            last_name: true,
            phone: true,
            properties: {
              select: {
                address: true,
                city: true,
                state: true,
              },
            },
          },
        },
      },
      orderBy: { created_at: 'desc' },
      take: 100,
    });
    return calls;
  } catch (error) {
    console.error('Error fetching calls:', error);
    return [];
  }
}

async function getCallStats(userId: string) {
  try {
    const [totalCalls, connectedCalls, totalDuration] = await Promise.all([
      prisma.calls.count({ where: { caller_id: userId } }),
      prisma.calls.count({
        where: { caller_id: userId, outcome: 'connected' },
      }),
      prisma.calls.aggregate({
        where: { caller_id: userId },
        _sum: { duration: true },
      }),
    ]);

    const avgDuration =
      totalCalls > 0
        ? Math.round((totalDuration._sum.duration || 0) / totalCalls)
        : 0;

    return {
      totalCalls,
      connectedCalls,
      totalDuration: totalDuration._sum.duration || 0,
      avgDuration,
      connectionRate:
        totalCalls > 0
          ? ((connectedCalls / totalCalls) * 100).toFixed(1)
          : '0.0',
    };
  } catch (error) {
    console.error('Error fetching call stats:', error);
    return {
      totalCalls: 0,
      connectedCalls: 0,
      totalDuration: 0,
      avgDuration: 0,
      connectionRate: '0.0',
    };
  }
}

export default async function CallsPage() {
  const supabase = await createSupabaseServerClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect('/auth/signin');
  }

  const [calls, stats] = await Promise.all([
    getCalls(user.id),
    getCallStats(user.id),
  ]);

  const getOutcomeColor = (outcome: string | null) => {
    const colors: Record<string, string> = {
      connected: 'bg-green-500/10 text-green-500',
      voicemail: 'bg-yellow-500/10 text-yellow-500',
      no_answer: 'bg-gray-500/10 text-gray-500',
      disqualified: 'bg-red-500/10 text-red-500',
      appointment_set: 'bg-purple-500/10 text-purple-500',
    };
    return colors[outcome || ''] || 'bg-gray-500/10 text-gray-500';
  };

  const formatDuration = (seconds: number | null) => {
    if (!seconds) return '0s';
    if (seconds < 60) return `${seconds}s`;
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}m ${secs}s`;
  };

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-3xl font-bold tracking-tight">Call Metrics</h2>
        <p className="text-muted-foreground">
          Track your call performance and history
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Calls</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stats.totalCalls}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Connected</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-500">
              {stats.connectedCalls}
            </div>
            <p className="text-xs text-muted-foreground">
              {stats.connectionRate}% rate
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">
              Total Duration
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatDuration(stats.totalDuration)}
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {formatDuration(stats.avgDuration)}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Call History */}
      <Card>
        <CardHeader>
          <CardTitle>Call History ({calls.length})</CardTitle>
          <CardDescription>Your recent call activity</CardDescription>
        </CardHeader>
        <CardContent>
          {calls.length > 0 ? (
            <div className="rounded-md border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Lead</TableHead>
                    <TableHead>Property</TableHead>
                    <TableHead>Phone</TableHead>
                    <TableHead>Direction</TableHead>
                    <TableHead>Outcome</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead className="text-right">Points</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {calls.map((call) => (
                    <TableRow key={call.id}>
                      <TableCell className="font-medium">
                        {call.leads.first_name && call.leads.last_name
                          ? `${call.leads.first_name} ${call.leads.last_name}`
                          : 'N/A'}
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          {call.leads.properties.address}
                          <div className="text-muted-foreground text-xs">
                            {call.leads.properties.city},{' '}
                            {call.leads.properties.state}
                          </div>
                        </div>
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {call.leads.phone || 'N/A'}
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline" className="capitalize">
                          {call.direction}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Badge
                          className={getOutcomeColor(call.outcome)}
                        >
                          {call.outcome?.replace('_', ' ') || 'Unknown'}
                        </Badge>
                      </TableCell>
                      <TableCell className="text-sm">
                        {formatDuration(call.duration)}
                      </TableCell>
                      <TableCell className="text-sm text-muted-foreground">
                        {new Date(call.created_at).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric',
                        })}
                      </TableCell>
                      <TableCell className="text-right font-medium text-[#00A0E9]">
                        +{call.points_earned}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          ) : (
            <div className="text-center py-12 text-muted-foreground">
              <p className="text-lg mb-2">No calls yet</p>
              <p className="text-sm">
                Start calling leads from the Dialer page
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}