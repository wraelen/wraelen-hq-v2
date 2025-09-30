// src/lib/prisma.ts – Prisma singleton utility (best practice: Global instance for Next.js – avoids multiple connections per request, reduces latency/overhead for gamification updates like point increments; push back: Raw imports risk exhaustion on Supabase)
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

// Logic: Singleton pattern (checks globalThis for existing instance – best for hot reloads in dev/prod; no leaks)
if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();  // Prod: Single instance (efficient for scale as reps log quests)
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();  // Dev: Global to persist across HMR (hot module reload – no reconnections on code changes)
  }
  prisma = globalThis.prisma;
}

export default prisma;  // Logic: Export for use in server components/actions (type-safe queries, e.g., prisma.profile.findUnique autocompletes points/role)