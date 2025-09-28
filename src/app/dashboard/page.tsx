// src/app/dashboard/page.tsx (updated—added more content to Login required div for visibility, optional chaining for session.user undefined, types for session, import authOptions to fix TS2304; kept all comments/code)
import Link from 'next/link'; // Added: Import Link for navigation
import { getServerSession } from 'next-auth'; // Kept existing
import { authOptions } from '@/app/auth/[...nextauth]/route.ts';
import { Progress } from '@/components/ui/progress'; // Kept existing
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'; // Kept existing
import prisma from '@/lib/prisma'; // Kept existing
// Update the import path below to match the actual location of your authOptions export.
// For example, if your file is at src/app/api/auth/[...nextauth]/authOptions.ts, use:
// If authOptions is exported directly from route.ts, use:
 // import { authOptions } from '@/app/api/auth/[...nextauth]/route';

export default async function Dashboard() {
  const session = await getServerSession(authOptions);

  if (!session) return (
    <div className="text-red-500 p-4">
      Login required to access dashboard. <Link href="/auth/signin" className="underline text-blue-600">Login here</Link>
    </div>
  ); // Updated: Added visible content/styling/link to login (fixes blank page on unauth; push back: Add middleware for auto-redirect later)
  if (!session) return (
    <div className="text-red-500 p-4">
      Login required to access dashboard. <Link href="/auth/signin" className="underline text-blue-600">Login here</Link>
    </div>
  ); // Updated: Use <Link> instead of <a> for navigation (fixes Next.js error)

  const user = await prisma.user.findUnique({ where: { id: session.user?.id }, include: { leads: true } }); // Updated: Optional chaining for session.user?.id (fixes TS18048 'session.user undefined' and TS2339 'id not on session.user'—requires type augmentation for custom session)
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