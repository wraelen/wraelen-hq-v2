"use client"; // Added: Marks as client component for Framer Motion (browser-only animations)

import { motion } from 'framer-motion'; // Added: Framer Motion for smooth fill animations and level-up effects (install: pnpm add framer-motion; lightweight for transitions)
import { Tooltip } from '@/components/Tooltip/Tooltip'; // Added: Your custom Tooltip for lore placeholders on hover (game feel)
import { Progress } from '@/components/ui/progress'; // Added: Shadcn Progress for bar (kept from layout)

interface ClientXPBarProps {
  currentLevel: number; // From layout calc
  progressToNext: number; // From layout calc (0-100)
}

export default function ClientXPBar({ currentLevel, progressToNext }: ClientXPBarProps) {
  return (
    <Tooltip explain="[Placeholder Lore] Your XP to next level—complete quests to fill it!">
      <motion.div 
        className="fixed top-0 left-0 w-full h-6 bg-gray-800 border-b border-gold-500 z-50 flex items-center justify-center md:h-8" // Added: Game-themed styling (dark bg, gold border for MMORPG feel); responsive height for mobile
        initial={{ opacity: 0, y: -20 }} // Added: Framer animation—fade/slide in on load
        animate={{ opacity: 1, y: 0 }} // Added: Smooth transition for bar appearance
        transition={{ duration: 0.5 }} // Added: 0.5s duration for animation
      >
        <Progress value={progressToNext} className="w-3/4 h-2" /> {/* Added: Progress to next level using Shadcn (Tailwind-styled); value is % to next 100 XP */}
        <span className="absolute text-xs text-white md:text-sm">Level {currentLevel} ({progressToNext}/100 XP)</span> /* Added: Level display with placeholder for lore tooltip (hover for explanation) */
      </motion.div>
    </Tooltip>
  );
}