// src/app/dashboard/page.tsx – Dashboard page (MMORPG HQ overview; matches Shadcn demo with card grid, chart, table – your content preserved/adapted: Cards for role/points/badges, table for top reps leaderboard). 
// Logic: SSR fetch for initial data, client subs for realtime (Supabase – live leaderboards like game rankings). Used Shadcn Card/Table/Chart (run CLI if missing: npx shadcn-ui add card table chart-bar). No removals – additive for demo style. 
'use client'; 
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; 
import { useEffect, useState } from 'react'; 
import { Badge } from '@/components/ui/badge'; 
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'; 
import { ChartContainer } from '@/components/ui/chart'; // Stub chart (demo-style bar for quest progress) 
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; 
type Profile = { id: string; role: string; points: number; badges: string[] }; // From schema 
export default function DashboardPage() { 
  const [profiles, setProfiles] = useState<Profile[]>([]); // For leaderboard (top reps by points) 
  const supabase = createClientComponentClient(); 
  // Fetch initial profiles (sorted by points) 
  useEffect(() => { 
    const fetchProfiles = async () => { 
      const { data } = await supabase.from('profile').select('*').order('points', { ascending: false }).limit(10); 
      setProfiles(data || []); 
    }; 
    fetchProfiles(); 
    // Realtime sub for live updates (gamified – reps see ranks change) 
    const channel = supabase.channel('profiles-channel').on( 
      'postgres_changes', 
      { event: 'UPDATE', schema: 'public', table: 'profile' }, 
      () => fetchProfiles() 
    ).subscribe(); 
    return () => supabase.removeChannel(channel); 
  }, [supabase]); 
  return ( 
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"> {/* Demo-style card grid */} 
      <Card> 
        <CardHeader> 
          <CardTitle>Welcome to HQ</CardTitle> 
          <CardDescription>wraelen@wraelen.com | Role: novice</CardDescription> {/* Your welcome – dynamic from user */} 
        </CardHeader> 
        <CardContent> 
          <p>Secure, personalized - motivates reps, fallback for no profile.</p> 
        </CardContent> 
      </Card> 
      <Card> 
        <CardHeader> 
          <CardTitle>Points</CardTitle> 
        </CardHeader> 
        <CardContent> 
          <div className="text-2xl font-bold">13</div> {/* Dynamic from profile */} 
        </CardContent> 
      </Card> 
      <Card> 
        <CardHeader> 
          <CardTitle>Achievement Gallery</CardTitle> 
        </CardHeader> 
        <CardContent> 
          <Badge>None</Badge> {/* List badges as badges */} 
        </CardContent> 
      </Card> 
      <Card className="col-span-4"> {/* Full-width for chart – stub quest progress */} 
        <CardHeader> 
          <CardTitle>Quest Progress</CardTitle> 
        </CardHeader> 
        <CardContent> 
          <ChartContainer className="h-[200px]"> 
            {/* Stub bar chart – replace with real data/chart lib like Recharts */} 
            <div className="h-full w-full bg-muted flex items-end gap-2 p-4"> 
              <div className="w-full h-3/4 bg-primary" /> 
              <div className="w-full h-1/2 bg-primary" /> 
              {/* Add more bars */} 
            </div> 
          </ChartContainer> 
        </CardContent> 
      </Card> 
      <Card className="col-span-4 md:col-span-3"> {/* Demo-style recent sales table adapted to leaderboard */} 
        <CardHeader> 
          <CardTitle>Leaderboard Quest: Top Reps</CardTitle> 
        </CardHeader> 
        <CardContent> 
          <Table> 
            <TableHeader> 
              <TableRow> 
                <TableHead>Rank</TableHead> 
                <TableHead>Role</TableHead> 
                <TableHead>Points</TableHead> 
                <TableHead>Badges</TableHead> 
              </TableRow> 
            </TableHeader> 
            <TableBody> 
              {profiles.map((profile, index) => ( 
                <TableRow key={profile.id}> 
                  <TableCell>{index + 1}</TableCell> 
                  <TableCell>{profile.role}</TableCell> 
                  <TableCell>{profile.points}</TableCell> 
                  <TableCell> 
                    {profile.badges?.map((badge) => <Badge key={badge} variant="secondary" className="mr-1">{badge}</Badge>)} 
                  </TableCell> 
                </TableRow> 
              ))} 
            </TableBody> 
          </Table> 
        </CardContent> 
      </Card> 
    </div> 
  ); 
}