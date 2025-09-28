// src/app/api/auth/[...nextauth]/route.ts (new file—Auth.js config for login/register with credentials, Prisma adapter for User model integration, session extension for gamification fields)
import { PrismaAdapter } from '@auth/prisma-adapter'; // Added: Prisma adapter for session/user linking (auto-creates User on register if not exists)
import bcrypt from 'bcryptjs'; // Added: For password hashing/verification (secure storage/comparison)
import NextAuth from 'next-auth';
import { JWT, Session } from 'next-auth'; // Added: Import Session/JWT types from next-auth (fixes TS2345 callbacks incompatible; JWT for token in session params)
import CredentialsProvider from 'next-auth/providers/credentials'; // Added: For username/password login (credentials provider)
import prisma from '@/lib/prisma'; // Kept your singleton Prisma client

export const authOptions = {
  adapter: PrismaAdapter(prisma), // Added: Uses Prisma to store sessions/accounts, links to your User model (required for adapter; handles register/login auto)
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null; // Added: Basic validation (no empty fields)
        const user = await prisma.user.findUnique({ where: { username: credentials.username } });
        if (user && await bcrypt.compare(credentials.password, user.password)) {
          return user; // Added: Successful login—returns user for session
        }
        return null; // Added: Invalid creds—return null to fail
      },
    }),
  ],
  callbacks: {
    async session({ session, token }: { session: Session; token: JWT }) { // Updated: Use token instead of user (fixes TS2353 'id' not in session.user and TS2345 incompatible—NextAuth callbacks use token for JWT strategy; user is for database strategy)
      // Added: Extend session with gamification fields from token (points/badges/role for dashboard/XP bar; available in getServerSession; id from token.userId)
      session.user = { ...session.user, id: token.userId as string, role: token.role as Role, points: token.points as number, badges: token.badges as string[] };
      return session;
    },
    async jwt({ token, user }: { token: JWT; user: any }) { // Added: JWT callback to add custom fields to token (required for session extension in JWT strategy; copies from user on login)
      if (user) {
        token.userId = user.id;
        token.role = user.role;
        token.points = user.points;
        token.badges = user.badges;
      }
      return token;
    },
  },
  secret: process.env.JWT_SECRET, // Added: From .env (generate random string: openssl rand -base64 32)
  session: { strategy: "jwt" as const }, // Kept existing
  pages: { signIn: '/auth/signin' }, // Added: Custom login page (create next for game-themed UI)
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Added: Export for API route (handles all auth requests)