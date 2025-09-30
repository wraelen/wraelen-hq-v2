// src/lib/prisma.ts – Prisma singleton (best practice: Avoids new instances per request – reduces latency/overhead for quest updates; push back: Raw imports risk exhaustion on Supabase as reps grow)
import { PrismaClient } from '@prisma/client';

let prisma: PrismaClient;

if (process.env.NODE_ENV === 'production') {
  prisma = new PrismaClient();  // Prod: Single instance (efficient scale for leaderboards/queries)
} else {
  if (!globalThis.prisma) {
    globalThis.prisma = new PrismaClient();  // Dev: Global persists across HMR (hot reload – no reconnections on code changes)
  }
  prisma = globalThis.prisma;
}

export default prisma;  // Logic: Export for server use (type-safe, e.g., prisma.profile.findUnique autocompletes points/role)