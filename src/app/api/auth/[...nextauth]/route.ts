// src/app/api/auth/[...nextauth]/route.ts (new file—Auth.js config for login/register with credentials, Prisma adapter for User model integration, session extension for gamification fields)
import { PrismaAdapter } from '@auth/prisma-adapter'; // Added: Prisma adapter for session/user linking (auto-creates User on register if not exists)
import bcrypt from 'bcryptjs'; // Added: For password hashing/verification (secure storage/comparison)
import NextAuth from 'next-auth';
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
    async session({ session, user }: { session: Session; user: User }) { // Added: Types for session/user from next-auth/prisma-client (fixes TS7031 implicit 'any')
    // Added: Extend session with gamification fields from User model (points/badges/role for dashboard/XP bar; available in getServerSession)
    session.user = { ...session.user, id: user.id, role: user.role, points: user.points, badges: user.badges };
    return session;
    },
  },
  secret: process.env.JWT_SECRET, // Added: From .env (generate random string: openssl rand -base64 32)
  session: { strategy: "jwt" as const }, // Added: JWT for session (simple for solo; switch to database for scale)
  pages: { signIn: '/auth/signin' }, // Added: Custom login page (create next for game-themed UI)
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST }; // Added: Export for API route (handles all auth requests)