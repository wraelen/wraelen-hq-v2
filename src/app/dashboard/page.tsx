// src/app/dashboard/page.tsx (updated—stubbed session check for testing full content without login; re-enable for production security; kept all comments/code)
// import { getServerSession } from 'next-auth'; // Removed unused import
import { Progress } from '@/components/ui/progress'; // Kept existing
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Kept existing
import prisma from '@/lib/prisma'; // Kept existing
// import { authOptions } from '../api/auth/[...nextauth]/route'; // Removed unused import

export default async function Dashboard() {
  // const session = await getServerSession(authOptions); // Commented out: Stub for testing without login (fixes blank 'Login required' page; re-enable for auth guard to protect data)
  // if (!session) return <div>Login required</div>; // Commented out: Stub—remove to see full dashboard; push back: Add middleware.ts for auto-redirect to /auth/signin on unauth

  const stubUserId = 'your_test_user_id_from_studio'; // Added: Stub userId for testing Prisma fetch without session (replace with a seeded user id from Prisma Studio, e.g., novice_rep's id; remove when re-enabling session)
  const user = await prisma.user.findUnique({ where: { id: stubUserId }, include: { leads: true } }); // Updated: Use stubUserId for testing (fixes undefined user when no session; re-enable session.user?.id for auth)
  const leaders = await prisma.user.findMany({ orderBy: { points: 'desc' }, take: 10 }); // Kept existing

  const totalScore = user?.leads.reduce((sum, lead) => sum + lead.score, 0) || 0; // Kept existing
  const nextThreshold = 1000; // Kept existing

  return (
    <div className="container mx-auto p-4">
      <h1>Wraelen HQ - {user?.username} (Role: {user?.role})</h1>
      <p>Points: {user?.points ?? 0} | Badges: {user?.badges.join(', ')}</p> /* Updated: ?? 0 for user.points (fixes potential undefined) */
      <Progress value={(user?.points ?? 0 / nextThreshold) * 100} className="w-full mb-4" /> /* Updated: ?? 0 for user.points (fixes potential undefined) */
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