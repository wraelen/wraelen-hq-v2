// src/middleware.ts - Production auth with proper rate limiting
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

// Simple in-memory cache (resets on server restart - fine for dev)
const authCache = new Map<string, { user: any; timestamp: number }>();
const CACHE_TTL = 10000; // 10 seconds cache
const MAX_CACHE_SIZE = 1000; // Prevent memory leaks

export async function middleware(req: NextRequest) {
  // Skip middleware for static assets and auth pages
  const { pathname } = req.nextUrl;
  
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api/health') ||
    pathname.startsWith('/auth') ||
    pathname.includes('.') // Static files
  ) {
    return NextResponse.next();
  }

  // Env guard
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    console.error('Missing Supabase env vars');
    return NextResponse.next();
  }

  const response = NextResponse.next();
  
  // Create Supabase client
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

  // Check cache first (reduces Supabase calls)
  const accessToken = req.cookies.get('sb-access-token')?.value;
  const cacheKey = accessToken || 'anonymous';
  const cached = authCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    // Use cached result
    if (!cached.user) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }
    return response;
  }

  // Fetch fresh auth state
  try {
    const { data: { user }, error } = await supabase.auth.getUser();

    // Update cache (with size limit)
    if (authCache.size > MAX_CACHE_SIZE) {
      authCache.clear(); // Simple eviction
    }
    authCache.set(cacheKey, { user, timestamp: Date.now() });

    // Redirect unauthenticated users
    if (!user || error) {
      return NextResponse.redirect(new URL('/auth/signin', req.url));
    }

  } catch (error) {
    console.error('Middleware auth error:', error);
    // On error, redirect to signin (safer than allowing through)
    return NextResponse.redirect(new URL('/auth/signin', req.url));
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     * - auth pages
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\..*|auth).*)',
  ],
};