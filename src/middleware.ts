// src/middleware.ts – Auth middleware (edge-efficient; best practice: Early env check to avoid runtime crashes in dev/prod)
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export async function middleware(req: NextRequest) {
  // Logic: Env guard (push back: Fail fast if vars missing – best for dev; fixes "required" error on hot reloads)
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase env vars missing – check .env.local');
    return NextResponse.next();  // Or redirect to error page in prod
  }

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    { cookies: {
      getAll: () => req.cookies.getAll(),
      setAll: (cookiesToSet) => {
        const response = NextResponse.next();
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        return response;
      },
    } }
  );  // Logic: ssr client (async-safe sessions – no old helpers)

  const { data: { session } } = await supabase.auth.getSession();  // Logic: Await fetch (async-safe)

  if (!session && !req.nextUrl.pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|api|auth).*)'],  // Logic: Protect non-static/auth (optimizes)
};