import prisma from '../lib/prisma'; // Relative—reliable for scripts, no alias issues
import bcrypt from 'bcryptjs';

async function main() {
  // Hash passwords (varied for realism; change in prod)
  const novicePass = await bcrypt.hash('novicepass', 10);
  const elitePass = await bcrypt.hash('elitepass', 10);
  const adminPass = await bcrypt.hash('adminpass', 10);

  // Seed users idempotently (upsert to avoid dupes on reruns)
  await prisma.user.upsert({
    where: { username: 'novice_rep' },
    update: {}, // No update if exists
    create: {
      username: 'novice_rep',
      password: novicePass,
      role: 'novice',
      points: 50,
      badges: ['Lead Scout'],
      email: 'novice@wraelen.com',
    },
  });

  await prisma.user.upsert({
    where: { username: 'elite_rep' },
    update: {},
    create: {
      username: 'elite_rep',
      password: elitePass,
      role: 'elite',
      points: 500,
      badges: ['Deal Closer', 'Quest Master'],
      email: 'elite@wraelen.com',
    },
  });

  await prisma.user.upsert({
    where: { username: 'admin_rep' },
    update: {},
    create: {
      username: 'admin_rep',
      password: adminPass,
      role: 'admin',
      points: 1000,
      badges: ['Company Founder'],
      email: 'admin@wraelen.com',
    },
  });

  // Fetch seeded users (with error if not found)
  const novice = await prisma.user.findUnique({ where: { username: 'novice_rep' } });
  const elite = await prisma.user.findUnique({ where: { username: 'elite_rep' } });
  if (!novice || !elite) {
    throw new Error('Failed to find/seed users—check upsert');
  }

  // Seed leads tied to users (idempotent via unique url or add @@unique if needed)
  await prisma.lead.upsert({
    where: { url: 'https://zillow.com/lead/123' }, // Use url as unique key for upsert
    update: {},
    create: {
      userId: novice.id,
      address: '123 Test St, San Francisco, CA',
      price: '300,000',
      beds: '3',
      baths: '2',
      sqFt: '1500',
      type: 'Single Family',
      daysOnMarket: '15',
      realtorName: 'Jane Doe',
      realtorPhone: '555-1234',
      photo: 'https://example.com/photo.jpg',
      url: 'https://zillow.com/lead/123',
      score: 20, // Low for basic bonus
    },
  });

  await prisma.lead.upsert({
    where: { url: 'https://zillow.com/lead/456' },
    update: {},
    create: {
      userId: elite.id,
      address: '456 Elite Ave, Los Angeles, CA',
      price: '1,200,000',
      beds: '5',
      baths: '4',
      sqFt: '3000',
      type: 'Single Family',
      daysOnMarket: '5',
      realtorName: 'John Elite',
      realtorPhone: '555-5678',
      photo: 'https://example.com/photo2.jpg',
      url: 'https://zillow.com/lead/456',
      score: 80, // High for elite bonus
    },
  });

  console.log('Seeding complete: Users and leads added/updated for gamification testing.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });