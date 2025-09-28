// src/middleware.ts (new file—global auth guard for protected routes like /dashboard; redirects unauth to login; best practice for scale instead of per-page checks)
import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth/[...nextauth]/route';

export async function middleware(req) {
  const session = await getServerSession(authOptions); // Fetch session in middleware (runs on all requests)
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) { // Check for protected routes (e.g., /dashboard)
    return NextResponse.redirect(new URL('/auth/signin', req.url)); // Redirect unauth to login
  }
  return NextResponse.next(); // Proceed if auth or not protected
}

export const config = { matcher: ['/dashboard'] }; // Apply to /dashboard only