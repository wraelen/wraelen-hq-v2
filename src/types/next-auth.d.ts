// src/types/next-auth.d.ts (new file—module augmentation to extend NextAuth session types with custom User fields for gamification; fixes TS2339 'id' not on session.user; best practice for type-safety in auth callbacks/dashboard/layout)
import { User as PrismaUser } from '@prisma/client'; // Import your Prisma User type (with id/role/points/badges)
import { DefaultSession } from 'next-auth'; // Import default session type from next-auth

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & { // Extend default session.user with custom fields from Prisma User (id/role/points/badges for dynamic XP/bar/dashboard)
      id: PrismaUser['id']; // Added: id from User (string ObjectId—fixes TS2339 'id' not exist on session.user)
      role: PrismaUser['role']; // Added: role enum for gamified progression
      points: PrismaUser['points']; // Added: points for XP bar/levels
      badges: PrismaUser['badges']; // Added: badges array for display/unlocks
    };
  }
}