// middleware.ts – Protects routes with Supabase session checks (efficient, runs edge-side for low latency)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });  // Creates client with cookie handling (no extra deps needed)

  const { data: { session } } = await supabase.auth.getSession();  // Fetches/refreshes session (handles JWT expiry)

  // Redirect unauth users from protected paths (e.g., dashboard/quests – expand as needed)
  const protectedPaths = ['/dashboard', '/quests', '/leaderboard'];
  if (!session && protectedPaths.some(path => req.nextUrl.pathname.startsWith(path))) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/auth/signin';
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname);  // Preserve original URL for post-login redirect
    return NextResponse.redirect(redirectUrl);
  }

  // Future: Role-based guards (e.g., after fetching profile from Prisma)
  // if (session && req.nextUrl.pathname === '/elite-tools' && profile.role !== 'Elite') redirect('/unauthorized');

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|auth/*).*)'],  // Apply to all except static/auth pages
};