// src/app/auth/signup/actions.ts – Server actions for signup (separate file for 'use server' – best practice: Keeps client/server code clean, avoids parse errors in mixed files; future-proof for adding more actions like quest completion)
'use server';  // Logic: Marks as server-only (runs on server – secure DB ops; must be first line to avoid 'not at top' error)

import { revalidatePath } from 'next/cache';  // For cache invalidation (optimizes post-signup dashboard load – fresh data without manual refresh)
import prisma from '@/lib/prisma';  // Prisma singleton (logic: Relational profile creation for gamification init – best for scale as reps grow)

export async function createInitialProfile(userId: string) {
  await prisma.profile.create({
    data: {
      userId,  // Logic: Links to Supabase user.id (UUID – enables efficient joins for quests/leaderboards, e.g., top points by role)
      role: 'Novice',  // Logic: Initial role (gamification start – unlock 'Apprentice' at 1000 points via future API threshold check)
      points: 0,  // Logic: Start at zero (earn via quests like Zillow scrapes or CallRail logs – increment in API routes)
      badges: [],  // Logic: Empty array (add strings like 'LeadScraper' on quest completion – queryable for badges leaderboard)
    },
  });
  revalidatePath('/dashboard');  // Logic: Invalidates cache (ensures dashboard shows fresh profile data post-signup – best for seamless flow after redirect)
}