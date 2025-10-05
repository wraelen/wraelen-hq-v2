// prisma/seed.ts – Seed script for initial data (quests/badges; best practice: Run with `npx prisma db seed` – populates for gamification testing; pushback: Idempotent upserts to avoid duplicates on re-run; expand with more examples as game mechanics evolve)
// Logic: Creates sample quests (daily/weekly/one-time) with criteria JSON for programmatic completion checks (e.g., in edge funcs on imports/calls); badges with requirements for unlocks. Assumes schema pushed; add to package.json: "prisma": { "seed": "ts-node prisma/seed.ts" }
import { PrismaClient, QuestType, UserRole } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Seed Quests (upserts on title for idempotency – no duplicates)
  await prisma.quest.upsert({
    where: { title: 'Import 50 Leads' },
    update: {},
    create: {
      title: 'Import 50 Leads',
      description: 'Upload and process a Propstream CSV with at least 50 valid leads to earn points and level up.',
      type: QuestType.one_time,
      points: 100,
      criteria: { min_imports: 50, source: 'propstream' }, // JSON: Checked in completion logic (e.g., count leads with source)
      active: true,
    },
  });

  await prisma.quest.upsert({
    where: { title: 'Daily Dialer Challenge' },
    update: {},
    create: {
      title: 'Daily Dialer Challenge',
      description: 'Make 20 outbound calls in a day to qualify for daily rewards.',
      type: QuestType.daily,
      points: 50,
      criteria: { min_calls: 20, direction: 'outbound', period: 'day' },
      active: true,
    },
  });

  await prisma.quest.upsert({
    where: { title: 'Weekly Lead Nurture' },
    update: {},
    create: {
      title: 'Weekly Lead Nurture',
      description: 'Follow up on 100 leads this week (status to follow_up) for bonus points.',
      type: QuestType.weekly,
      points: 200,
      criteria: { min_follow_ups: 100, period: 'week' },
      active: true,
    },
  });

  // Seed Badges (upserts on name)
  await prisma.badges.upsert({
    where: { name: 'Lead Importer' },
    update: {},
    create: {
      name: 'Lead Importer',
      description: 'Awarded for importing over 100 leads in total.',
      icon_url: '/badges/lead-importer.png', // Placeholder; upload assets to public/
      requirements: { total_imports: 100 },
    },
  });

  await prisma.badges.upsert({
    where: { name: 'Dialer Pro' },
    update: {},
    create: {
      name: 'Dialer Pro',
      description: 'For making 500 successful calls (connected outcome).',
      icon_url: '/badges/dialer-pro.png',
      requirements: { total_connected_calls: 500 },
    },
  });

  await prisma.badges.upsert({
    where: { name: 'Creative Closer' },
    update: {},
    create: {
      name: 'Creative Closer',
      description: 'Close 10 deals with creative financing (seller financing focus).',
      icon_url: '/badges/creative-closer.png',
      requirements: { closed_deals: 10, type: 'creative' },
    },
  });

  console.log('Seed complete: Quests and badges added/updated.');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });