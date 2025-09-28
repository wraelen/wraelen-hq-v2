// app/api/auth/[...nextauth]/route.ts
import NextAuth from "next-auth";
import { authConfig } from "@/app/auth";

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig);