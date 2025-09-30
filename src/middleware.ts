// middleware.ts – Auth middleware (edge-efficient; best practice: ssr updateSession for async-safe sessions in Next.js 15+)
import { type NextRequest } from 'next/server';
import { updateSession } from '@/lib/supabase/middleware';  // Added: Utility for ssr (see below – fixes cookies await)

export async function middleware(request: NextRequest) {
  return await updateSession(request);  // Logic: Async update (handles session refresh/redirect – efficient for protected routes)
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',  // Logic: Exclude static/auth (optimizes matcher)
  ],
};