import "src/styles/tailwind.css" // Kept existing import for Tailwind styles

import { Progress } from '@/components/ui/progress'; // Added: Shadcn Progress component for visual XP bar (install if not: npx shadcn-ui@latest add progress)

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const userXp = 150; // Kept stubbed XP for testing without auth (Level 1, 50/100 XP); replace with session.user?.xp when adding auth
  const currentLevel = Math.min(Math.floor(userXp / 100), 99); // Added: Calc level 0-99 based on XP (100 XP per level placeholder—adjust to your defined task values; no multipliers as per your request)
  const progressToNext = userXp % 100; // Added: Calc progress % to next level for bar fill (0-100)

  return (
    <html lang="en">
      <body>
        {/* Added: Persistent XP bar on every page (visual progress, like WoW top bar; tied to stubbed XP for now—updates on re-render after quests) */}
        <div className="fixed top-0 left-0 w-full h-4 bg-gray-200 z-50">
          <Progress value={progressToNext} className="h-full" /> {/* Added: Progress to next level using Shadcn (Tailwind-styled); value is % to next 100 XP; used Progress to clear unused warning */}
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 text-xs text-black">Level {currentLevel} ({progressToNext}/100 XP)</span> /* Added: Level display with placeholder for lore tooltip (add Tooltip component here for hover explanation) */
        </div>
        {children} // Kept existing children render
      </body>
    </html>
  )
}