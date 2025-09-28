// prisma.config.ts – Config file for Prisma 6+ (migrates deprecated package.json#prisma)
// Manually loads .env to fix skipped env loading – best practice per Prisma docs (avoids "Environment variable not found" on env())
import { config } from 'dotenv';

config({ path: '.env' });  // Loads .env from root (default path; explicit for clarity/safety – adjust if using .env.local)

export default {
  schema: './prisma/schema.prisma',  // Your schema path (unchanged)
};
