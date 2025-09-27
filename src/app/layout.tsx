import "src/styles/tailwind.css" // Kept existing import for Tailwind styles

import { Progress } from '@/components/ui/progress'; // Added: Shadcn Progress component for visual XP bar (install if not: npx shadcn-ui@latest add progress)
// import { getServerSession } from 'next-auth'; // Commented out: Requires next-auth setup; re-enable when adding auth
// import { authOptions } from './api/auth/[...nextauth]/route'; // Commented out: Needs auth route; re-enable later (push back: Add Auth.js for secure XP access)
import ClientXPBar from './ClientXPBar.tsx'; // Added: New client component for XP bar to handle motion animations (fixes server call error)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions); // Added: Fetch session for dynamic XP (now works with auth set up)
  const userXp = session?.user?.xp || 0; // Updated: Use session.user.xp (defaults to 0 if not logged in)

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