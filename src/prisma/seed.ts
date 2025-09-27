import bcrypt from 'bcryptjs'; // Kept existing: Now used for hashing seeded passwords (aligns with auth/register for consistency; fixes unused warning)
import prisma from '../lib/prisma.ts'; // Kept existing: Relative import with extension for ts-node resolution

async function main() {
  // Hash passwords (vary for each to simulate real users)—updated to use bcrypt for secure seeded data (matches auth system; fixes unused bcrypt warning)
  const novicePass = await bcrypt.hash('novicepass', 10); // Added: Use bcrypt to hash (secure, same as register/login)
  const elitePass = await bcrypt.hash('elitepass', 10); // Added: Use bcrypt to hash
  const adminPass = await bcrypt.hash('adminpass', 10); // Added: Use bcrypt to hash

  // Sample users: Reps at different "game levels" for leaderboard/quest testing
  await prisma.user.upsert({
    where: { username: 'novice_rep' },
    update: {},
    create: {
      username: 'novice_rep',
      password: novicePass, // Updated: Use hashed password
      role: 'novice',
      points: 50,
      badges: ['Lead Scout'], // Earned from basic quests
      email: 'novice@wraelen.com',
    },
  });

  await prisma.user.upsert({
    where: { username: 'elite_rep' },
    update: {},
    create: {
      username: 'elite_rep',
      password: elitePass, // Updated: Use hashed password
      role: 'elite',
      points: 500,
      badges: ['Deal Closer', 'Quest Master'], // Advanced achievements
      email: 'elite@wraelen.com',
    },
  });

  await prisma.user.upsert({
    where: { username: 'admin_rep' },
    update: {},
    create: {
      username: 'admin_rep',
      password: adminPass, // Updated: Use hashed password
      role: 'admin',
      points: 1000,
      badges: ['Company Founder'],
      email: 'admin@wraelen.com',
    },
  });

  // Fetch created users for relations (with null checks)
  const novice = await prisma.user.findUnique({ where: { username: 'novice_rep' } });
  const elite = await prisma.user.findUnique({ where: { username: 'elite_rep' } });

  if (!novice || !elite) {
    throw new Error('Failed to find seeded users—check createMany');
  }

  // Sample leads: Tied to reps, with scores for gamified bonuses (e.g., high-value = more XP)
  await prisma.lead.createMany({
    data: [
      {
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
        score: 20, // Low score = basic bonus
      },
      {
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
        score: 80, // High score = elite bonus/points multiplier
      },
    ],
  });

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