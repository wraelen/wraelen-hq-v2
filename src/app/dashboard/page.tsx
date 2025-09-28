// src/app/dashboard/page.tsx (new file—gamified HQ dashboard with points/badges/leads/leaderboard; fetches from Prisma with session)
import { getServerSession } from 'next-auth'; // Added: For session check/user data
import { Progress } from '@/components/ui/progress'; // Added: For progress bar (install if not: npx shadcn-ui@latest add progress table)
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Added: For leaderboard/leads table
import prisma from '@/lib/prisma'; // Added: For Prisma queries (user/leads/leaders)
import { authOptions } from '../auth/[...nextauth]/route'; // Added: For authOptions

export default async function Dashboard() {
  const session = await getServerSession(authOptions); // Added: Fetch session for auth/user.id (redirect if not logged in)
  if (!session) return <div>Login required</div>;

  const user = await prisma.user.findUnique({ where: { id: session.user.id }, include: { leads: true } }); // Added: Fetch user with leads (for bonuses/table)
  const leaders = await prisma.user.findMany({ orderBy: { points: 'desc' }, take: 10 }); // Added: Fetch top reps for leaderboard

  const totalScore = user?.leads.reduce((sum, lead) => sum + lead.score, 0) || 0; // Added: Calc quest bonuses from lead scores
  const nextThreshold = 1000; // Placeholder for level threshold (adjust to your system)

  return (
    <div className="container mx-auto p-4">
      <h1>Wraelen HQ - {user?.username} (Role: {user?.role})</h1> /* Game-themed header with role */
      <p>Points: {user?.points ?? 0} | Badges: {user?.badges.join(', ')}</p> /* Display points/badges from session/user */
      <Progress value={(user?.points ?? 0 / nextThreshold) * 100} className="w-full mb-4" /> /* Progress to next threshold */
      <p>Quest Bonuses from Leads: +{totalScore} XP</p> /* Bonuses from lead scores */
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