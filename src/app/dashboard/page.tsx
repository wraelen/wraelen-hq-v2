import { getServerSession } from 'next-auth';
import { Progress } from '@/components/ui/progress';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import prisma from '@/lib/prisma';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);
  if (!session) return <div>Login required</div>;

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { leads: true, quests: true, callLogs: true } });
  const leaders = await prisma.user.findMany({ orderBy: { points: 'desc' }, take: 10 });

  const totalQuestPoints = user?.quests.reduce((sum, q) => sum + q.pointsAwarded, 0) || 0;
  const nextThreshold = 1000; // For elite unlock

  return (
    <div className="container p-4">
      <h1>Wraelen HQ - {user?.username} (Role: {user?.role})</h1>
      <p>Points: {user?.points} | Badges: {user?.badges.join(', ')}</p>
      <Progress value={(user?.points / nextThreshold) * 100} className="w-1/2" />
      <p>Quest Bonuses: +{totalQuestPoints} XP from {user?.quests.length} quests</p>
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
            <TableRow key= {rep.id}>
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