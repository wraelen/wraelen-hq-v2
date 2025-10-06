// src/components/ui/Leaderboard.tsx – Client component for real-time leaderboards (subscribes to profiles/calls changes; MMORPG vibe – live peer competition without refresh)
// Logic: Kept all existing; added blue accents to Table (via className – ties to theme). No removals.
// Fix: Removed whitespace/newlines inside <TableBody> (e.g., {leaders.map...} now adjacent to tags – prevents text nodes in <tbody>; best practice for JSX tables, as HTML forbids text/whitespace as direct <tbody> kids). Similar to previous <TableHeader><TableBody> adjacency.
'use client';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'; // Logic: Client-side Supabase (for Realtime; best practice over ssr for dynamic subs)
import { useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Shadcn for UI (console aesthetic)

type Leader = { id: string; role: string; points: number; badges: string[] };

export default function Leaderboard({ initialLeaders }: { initialLeaders: Leader[] }) {
  const [leaders, setLeaders] = useState<Leader[]>(initialLeaders); // Logic: Hydrate with SSR data (fast initial render)
  const supabase = createClientComponentClient();

  useEffect(() => {
    // Subscribe to profiles changes (points/badges updates; best practice: Channel for targeted subs – scales better than full table)
    const profileSub = supabase
      .channel('profiles_changes')
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'profiles' }, (payload) => {
        setLeaders((prev) => {
          const updated = prev.map((leader) => leader.id === payload.new.id ? { ...leader, ...payload.new } : leader);
          return updated.sort((a, b) => b.points - a.points); // Re-sort live (gamified thrill)
        });
      })
      .subscribe();

    // Optional: Sub to calls for indirect updates (e.g., new call triggers points; pushback: If frequent, debounce or aggregate)
    const callsSub = supabase
      .channel('calls_changes')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'calls' }, async () => {
        // Refetch top 10 (simple; alternative: Optimistic update if caller in list)
        const { data } = await supabase.from('profiles').select('id, role, points, badges').order('points', { ascending: false }).limit(10);
        if (data) setLeaders(data as Leader[]);
      })
      .subscribe();

    return () => {
      supabase.removeChannel(profileSub);
      supabase.removeChannel(callsSub); // Cleanup (prevents leaks)
    };
  }, [supabase]);

  return (
    <div className="mt-6">
      <h2 className="text-xl mb-4">Leaderboard Quest: Top Reps</h2>
      <Table className="border border-[#00A0E9]">
        <TableHeader><TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Points</TableHead>
            <TableHead>Badges</TableHead>
          </TableRow></TableHeader><TableBody>{leaders.map((leader, index) => ( /* Fix: Map adjacent to <TableBody> (no newline/space) */
            <TableRow key={leader.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>{leader.role}</TableCell>
              <TableCell>{leader.points}</TableCell>
              <TableCell>{leader.badges.join(', ') || 'None'}</TableCell>
            </TableRow>
          ))}</TableBody>
      </Table>
    </div>
  );
}