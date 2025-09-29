// src/middleware.ts – Auth middleware (edge-efficient; best practice: Early env check to avoid runtime crashes in dev/prod)
import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Logic: Early env check (push back: Fail fast in dev if vars missing – best for debugging; use process.env directly as Next.js injects)
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase env vars missing – check .env.local');  // Logic: Dev log (no crash – graceful, but fix .env)
    return res;  // Or redirect to error page in prod
  }

  const supabase = createMiddlewareClient({ req, res });  // Logic: Cookie sessions (fixes your error – vars now checked)

  const { data: { session } } = await supabase.auth.getSession();  // Logic: Fetch (handles expiry)

  // Protect paths (logic: Redirect unauth – best for flow; expand for /elite-tools with role check from Prisma)
  if (!session && req.nextUrl.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return res;
}

export const config = {
  matcher: ['/dashboard/:path*'],  // Logic: Targeted (optimizes – no overhead on public)
};