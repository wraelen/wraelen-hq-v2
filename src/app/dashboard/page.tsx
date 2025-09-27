// src/app/dashboard/page.tsx
import { getServerSession } from 'next-auth'; // Kept existing
import { Progress } from '@/components/ui/progress'; // Kept existing
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Kept existing
import prisma from '@/lib/prisma'; // Kept existing

export default async function Dashboard() {
  const session = await getServerSession(authOptions); // Kept existing
  if (!session) return <div>Login required</div>;

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { leads: true } });
  const leaders = await prisma.user.findMany({ orderBy: { points: 'desc' }, take: 10 });

  const totalScore = user?.leads.reduce((sum, lead) => sum + lead.score, 0) || 0;
  const nextThreshold = 1000; // Kept existing

  return (
    <div className="container mx-auto p-4">
      <h1>Wraelen HQ - {user?.username} (Role: {user?.role})</h1>
      <p>Points: {user?.points ?? 0} | Badges: {user?.badges.join(', ')}</p> /* Updated: ?? 0 for user.points (fixes TS18048 undefined) */
      <Progress value={(user?.points ?? 0 / nextThreshold) * 100} className="w-full mb-4" /> /* Updated: ?? 0 for user.points (fixes TS18048) */
      <p>Quest Bonuses from Leads: +{totalScore} XP</p>
      <h2>Your Leads ({user?.leads.length})</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Address</TableHead>
            <TableHead>Price</TableHead>
            <TableHead>Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {user?.leads.map((lead) => (
            <TableRow key={lead.id}>
              <TableCell>{lead.address}</TableCell>
              <TableCell>{lead.price}</TableCell>
              <TableCell>{lead.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <h2>Leaderboard</h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Rank</TableHead>
            <TableHead>Rep</TableHead>
            <TableHead>Points</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaders.map((rep, idx) => (
            <TableRow key={rep.id}>
              <TableCell>{idx + 1}</TableCell>
              <TableCell>{rep.username}</TableCell>
              <TableCell>{rep.points}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}