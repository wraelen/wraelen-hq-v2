import bcrypt from 'bcryptjs';
import prisma from '../lib/prisma.ts'; // With extension—fixes resolution

async function main() {
  // ... user upserts unchanged (novice/elite/admin with role enum, points/badges)

  // Fetch users
  // ... unchanged

  // Seed leads
  // ... unchanged (findFirst + create)

  // Seed quests (tie to leads, award points—simulates scrape quests)
  await prisma.quest.create({
    data: {
      type: "SCRAPE_ZILLOW",
      userId: novice.id,
      leadId: noviceLead?.id, // From earlier findFirst
      pointsAwarded: 20, // Based on lead score
    },
  });

  await prisma.quest.create({
    data: {
      type: "SCRAPE_ZILLOW",
      userId: elite.id,
      leadId: eliteLead?.id,
      pointsAwarded: 80,
    },
  });

  // Seed call logs (stub for CallRail integration—award points)
  await prisma.callLog.create({
    data: {
      userId: novice.id,
      leadId: noviceLead?.id,
      callRailId: "stub-call-1",
      duration: 120,
      outcome: "Interested",
      points: 10,
    },
  });

  console.log('Seeding complete: Users, leads, quests, call logs added for gamification testing.');
}

// ... catch/finally unchanged