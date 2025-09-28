// app/auth.ts
import Credentials from "@auth/core/providers/credentials"; // v5 import
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs"; // For secure hashing/comparison

const prisma = new PrismaClient();

export const authConfig = {
  adapter: PrismaAdapter(prisma), // Works with Mongo; handles user creation on first login
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" }, // Switched to username per your schema
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.username || !credentials?.password) return null;

        // Fetch user from DB (type-safe via Prisma)
        const user = await prisma.user.findUnique({ where: { username: credentials.username } });
        if (!user || !user.password) return null;

        // Verify hashed password
        const isValid = await bcrypt.compare(credentials.password, user.password);
        if (!isValid) return null;

        // Return user object (extends session)
        return { id: user.id, username: user.username, role: user.role, points: user.points };
      },
    }),
    // Expand later: e.g., Google({ clientId: env.GOOGLE_ID, clientSecret: env.GOOGLE_SECRET })
  ],
  callbacks: {
    async session({ session, token }) {
      if (session.user && token) {
        session.user.id = token.sub; // Mongo ID from JWT
        session.user.role = token.role; // Expose for role gates
        session.user.points = token.points; // For real-time gamification display
      }
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role; // Persist in JWT for session callback
        token.points = user.points;
      }
      return token;
    },
  },
  pages: {
    signIn: "/auth/signin", // Custom page for console theme
  },
  session: {
    strategy: "jwt", // JWT for stateless; switch to "database" if need full session DB
  },
  secret: process.env.NEXTAUTH_SECRET,
};