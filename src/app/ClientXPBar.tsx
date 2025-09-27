"use client"; // Kept existing: Marks as client component for Framer Motion (browser-only animations)

import { motion } from 'framer-motion'; // Kept existing: Framer Motion for smooth fill animations and level-up effects (install: pnpm add framer-motion; lightweight for transitions)
import { ComponentProps } from 'react'; // Added: For ComponentProps to infer Tooltip props (fixes 'TooltipProps not found' lint error; better for Shadcn as it doesn't export named props)
import { Progress } from '@/components/ui/progress'; // Kept existing: Shadcn Progress for bar (kept from layout)
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'; // Kept existing: Shadcn Tooltip for lore placeholders on hover (variant-ready for intent/size/side; provider scopes to bar)


interface ClientXPBarProps {
  currentLevel: number; // Kept existing: From layout calc
  progressToNext: number; // Kept existing: From layout calc (0-100)
}

type TooltipProps = ComponentProps<typeof Tooltip>; // Added: Infer Tooltip props from Shadcn component (fixes lint import/named error; extends for custom props if needed)

export default function ClientXPBar({ currentLevel, progressToNext }: ClientXPBarProps) {
  return (
    <TooltipProvider> {/* Kept existing: Wrap Tooltip with provider (now Shadcn version) to manage state (delay/open/close)—fixes runtime error; scope to bar for perf */}
      <Tooltip> {/* Updated: Shadcn Tooltip with inferred props (no named TooltipProps needed; fixes lint error) */}
        <TooltipTrigger> {/* Updated: Removed asChild to fix 'React.Children.only' runtime error (not needed for motion.div child; hover still works on div) */}
          <motion.div 
            className="fixed top-0 left-0 w-full h-6 bg-gray-800 border-b border-gold-500 z-50 flex items-center justify-center md:h-8" // Kept existing: Game-themed styling (dark bg, gold border for MMORPG feel); responsive height for mobile
            initial={{ opacity: 0, y: -20 }} // Kept existing: Framer animation—fade/slide in on load
            animate={{ opacity: 1, y: 0 }} // Kept existing: Smooth transition for bar appearance
            transition={{ duration: 0.5 }} // Kept existing: 0.5s duration for animation
          >
            <Progress value={progressToNext} className="w-3/4 h-2" /> {/* Kept existing: Progress to next level using Shadcn (Tailwind-styled); value is % to next 100 XP */}
            <span className="absolute text-xs text-white md:text-sm">Level {currentLevel} ({progressToNext}/100 XP)</span> /* Kept existing: Level display with placeholder for lore tooltip (hover for explanation) */
          </motion.div>
        </TooltipTrigger>
        <TooltipContent side="bottom" className="bg-zinc-800 text-white md:p-2"> {/* Added: Shadcn Content with side/bottom for placement below bar, custom class for game lore style (dark zinc, white text, md padding) */}
          [Placeholder Lore] Your XP to next level—complete quests to fill it!
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}