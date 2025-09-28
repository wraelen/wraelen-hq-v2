// middleware.ts – Protects routes, refreshes sessions
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  const supabase = createMiddlewareClient({ req, res });  // From auth-helpers; handles cookie sessions

  const { data: { session } } = await supabase.auth.getSession();  // Fetch current session

  // Protect routes (e.g., dashboard/quests require login)
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    const redirectUrl = req.nextUrl.clone();
    redirectUrl.pathname = '/auth/signin';
    redirectUrl.searchParams.set('redirect', req.nextUrl.pathname);  // Redirect back after login
    return NextResponse.redirect(redirectUrl);
  }

  // Role-based access? (After metadata setup): e.g., if (session.user.user_metadata.role !== 'Elite' && pathname === '/elite-tools') redirect

  // Refresh session if needed (auth-helpers auto-handles)
  await supabase.auth.getSession();  // Ensures token refresh

  return res;
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|auth/signin).*)'],  // Apply to all except static/auth
};