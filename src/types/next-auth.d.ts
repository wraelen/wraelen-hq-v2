// src/types/next-auth.d.ts (new file—module augmentation to extend NextAuth session/JWT types with custom User fields for gamification; fixes TS2345 callbacks incompatible by telling TS about extended user with id/role/points/badges/createdAt/updatedAt; best practice for type-safety in auth callbacks/dashboard/layout—avoids implicit 'any' or mismatches)
import { Role } from '@prisma/client'; // Added: Import Role enum from Prisma (for role type in extensions)
import { DefaultJWT, DefaultSession } from 'next-auth'; // Added: Import default session/JWT types from next-auth

declare module 'next-auth' {
  interface Session {
    user: DefaultSession['user'] & { // Extend default session.user with custom fields from Prisma User (id/role/points/badges/createdAt/updatedAt for dynamic XP/bar/dashboard; fixes TS2339 'id' not on session.user)
      id: string; // Added: id from User (ObjectId as string)
      role: Role; // Added: role enum for gamified progression
      points: number; // Added: points for XP bar/levels
      badges: string[]; // Added: badges array for display/unlocks
      createdAt: Date; // Added: createdAt timestamp
      updatedAt: Date; // Added: updatedAt timestamp
    };
  }
}

declare module 'next-auth/jwt' {
  interface JWT extends DefaultJWT { // Extend default JWT with custom fields (for token in callbacks; fixes TS2345 incompatible types in jwt/session—copies from user on login)
    userId: string; // Added: userId for session extension
    role: Role; // Added: role for session
    points: number; // Added: points for session
    badges: string[]; // Added: badges for session
    createdAt: Date; // Added: createdAt for session
    updatedAt: Date; // Added: updatedAt for session
  }
}