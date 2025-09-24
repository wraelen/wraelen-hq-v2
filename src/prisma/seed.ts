import prisma from '../lib/prisma.ts'; // Keep alias—your tsconfig includes src/**/*.ts, so it works
import bcrypt from 'bcryptjs';

async function main() {
  // Hash passwords
  const novicePass = await bcrypt.hash('novicepass', 10);
  const elitePass = await bcrypt.hash('elitepass', 10);
  const adminPass = await bcrypt.hash('adminpass', 10);

  // Seed users (upsert fine here—username @unique in schema)
  await prisma.user.upsert({
    where: { username: 'novice_rep' },
    update: {},
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

  // Fetch users
  const novice = await prisma.user.findUnique({ where: { username: 'novice_rep' } });
  const elite = await prisma.user.findUnique({ where: { username: 'elite_rep' } });
  if (!novice || !elite) {
    throw new Error('Failed to find/seed users—check upsert');
  }

  // Seed leads (findFirst + create if not exists—idempotent without unique field)
  const noviceLead = await prisma.lead.findFirst({ where: { url: 'https://zillow.com/lead/123' } });
  if (!noviceLead) {
    await prisma.lead.create({
      data: {
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
        score: 20,
      },
    });
  }

  const eliteLead = await prisma.lead.findFirst({ where: { url: 'https://zillow.com/lead/456' } });
  if (!eliteLead) {
    await prisma.lead.create({
      data: {
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
        score: 80,
      },
    });
  }

  console.log('Seeding complete: Users and leads added for gamification testing.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });