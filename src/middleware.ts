// src/middleware.ts – Fixed to prevent rate limit spam
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

// Cache to prevent repeated auth checks within short timeframes
const authCache = new Map<string, { user: any; timestamp: number }>();
const CACHE_DURATION = 5000; // 5 seconds cache

export async function middleware(req: NextRequest) {
  // Skip middleware for static files and API routes
  if (
    req.nextUrl.pathname.startsWith('/_next') ||
    req.nextUrl.pathname.startsWith('/api') ||
    req.nextUrl.pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Env guard
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Supabase env vars missing');
    return NextResponse.next();
  }

  let response = NextResponse.next();
  
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    {
      cookies: {
        getAll: () => req.cookies.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => {
            response.cookies.set(name, value, options);
          });
        },
      },
    }
  );

  // Check cache first
  const sessionToken = req.cookies.get('sb-access-token')?.value;
  const cached = sessionToken ? authCache.get(sessionToken) : null;
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    // Use cached user
    if (!cached.user && !req.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    return response;
  }

  try {
    const { data: { user } } = await supabase.auth.getUser();

    // Update cache
    if (sessionToken) {
      authCache.set(sessionToken, { user, timestamp: Date.now() });
    }

    // Redirect logic
    if (!user && !req.nextUrl.pathname.startsWith('/auth')) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
  } catch (error) {
    console.error('Auth error in middleware:', error);
    // On error, allow through to avoid blocking
    return response;
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|api|auth/signin|auth/signup).*)',
  ],
};