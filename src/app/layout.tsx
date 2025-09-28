import "src/styles/tailwind.css" // Kept existing import for Tailwind styles

import Link from 'next/link'; // Added: For client-side navigation links (best practice in Next.js—fast, no reloads for game-like feel on page changes)
import { getServerSession } from 'next-auth'; // Kept existing: For fetching user session with XP/points (requires next-auth installed and authOptions defined in api/auth/[...nextauth]/route.ts)
import { Progress } from '@/components/ui/progress'; // Kept existing: Shadcn Progress component for visual XP bar (install if not: npx shadcn-ui@latest add progress)
import { authOptions } from './auth/[...nextauth]/route'; // Kept existing: Import auth config (stub if not set up yet; push back: Add Auth.js for secure roles/XP access)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions); // Kept existing: Fetch session server-side to get user XP/points (safe for async layout in Next.js app dir)
  const userXp = session?.user?.points || 0; // Updated: Get points from session (defaults to 0 if not logged in or no points field)
  const currentLevel = Math.min(Math.floor(userXp / 100), 99); // Kept existing: Calc level 0-99 based on points (100 points per level placeholder—adjust to your defined task values; no multipliers as per your request)

  return (
    <html lang="en">
      <body>
        {/* Added: Navigation bar for easy page traversal (links to Home/Dashboard/Login/Register/Logout—conditional on session for auth state; uses next/link for client-side routing, Tailwind for styling; placed above XP bar for hierarchy) */}
        <nav className="fixed top-4 left-0 w-full bg-gray-800 text-white z-40 flex justify-center space-x-4 p-2"> /* Game-themed dark bar; fixed above XP for always visible */
          <Link href="/">Home</Link> /* Link to home page (boilerplate default; client-side nav) */
          <Link href="/dashboard">Dashboard</Link> /* Link to dashboard (gamified view; fixes 404 by ensuring page.tsx exists—create next) */
          {session ? (
            <Link href="/api/auth/signout">Logout</Link> /* Conditional: Logout if logged in (next-auth built-in signout route; redirect to home) */
          ) : (
            <>
              <Link href="/auth/signin">Login</Link> /* Link to login page (custom form; fixes 404 by ensuring page.tsx exists—create if not) */
              <Link href="/auth/register">Register</Link> /* Link to register page (form calling /api/register; add page.tsx for UI—stub below) */
            </>
          )}
        </nav>
        {/* Added: Persistent XP bar on every page (visual progress, like WoW top bar; tied to session XP for real-time feel—updates on re-render after quests) */}
        <div className="fixed top-0 left-0 w-full h-4 bg-gray-200 z-50">
          <Progress value={(userXp % 100)} className="h-full" /> {/* Added: Progress to next level using Shadcn (Tailwind-styled); value is % to next 100 XP */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-black">Level {currentLevel} ({userXp % 100}/100 XP)</span> /* Added: Level display with placeholder for lore tooltip (add Tooltip component here for hover explanation) */
        </div>
        {children} // Kept existing children render
      </body>
    </html>
  )
}