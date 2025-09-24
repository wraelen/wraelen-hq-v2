// lib/prisma.ts
import { PrismaClient } from '@prisma/client';

type PrismaClientConstructor = () => PrismaClient;  // Explicit for ReturnType

const prismaClientSingleton: PrismaClientConstructor = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var -- Hoisting required for global Prisma singleton
  var prisma: ReturnType<PrismaClientConstructor> | undefined;
}

const prisma = globalThis.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma!;  // Non-null for dev

export default prisma;