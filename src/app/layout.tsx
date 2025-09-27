import "src/styles/tailwind.css" // Kept existing import for Tailwind styles

import { Progress } from '@/components/ui/progress'; // Added: Shadcn Progress component for visual XP bar (install if not: npx shadcn-ui@latest add progress)
// import { getServerSession } from 'next-auth'; // Commented out: Requires next-auth setup; re-enable when adding auth
// import { authOptions } from './api/auth/[...nextauth]/route'; // Commented out: Needs auth route; re-enable later (push back: Add Auth.js for secure XP access)
import ClientXPBar from './ClientXPBar.tsx'; // Added: New client component for XP bar to handle motion animations (fixes server call error)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // const session = await getServerSession(authOptions); // Commented out: Fetch session server-side (re-enable with auth)
  // const userXp = session?.user?.xp || 0; // Commented out: Get XP from session (defaults to 0); add xp Int @default(0) to User model later
  const userXp = 150; // Kept stubbed XP for testing without auth (Level 1, 50/100 XP); replace with session.user?.xp when adding auth
  const currentLevel = Math.min(Math.floor(userXp / 100), 99); // Kept existing level calc (100 XP per level placeholder—adjust to your defined task values; no multipliers as per your request)
  const progressToNext = userXp % 100; // Kept existing progress calc for bar fill (0-100)

  return (
    <html lang="en">
      <body>
        {/* Updated: Persistent XP bar on every page (visual progress, like WoW top bar; moved motion to client component to fix server call error) */}
        <ClientXPBar currentLevel={currentLevel} progressToNext={progressToNext} /> {/* Added: ClientXPBar component for animations/tooltip (passes level/progress from server; fixes createMotionComponent server error) */}
        {children} // Kept existing children render
      </body>
    </html>
  )
}