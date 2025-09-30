// src/lib/supabase/middleware.ts – ssr middleware utility (best practice: Async-safe for cookies/headers in Next.js 15+ – fixes your error)
import { createServerClient } from '@supabase/ssr';
import { type NextRequest, NextResponse } from 'next/server';

export async function updateSession(request: NextRequest) {
  let supabaseResponse = NextResponse.next({ request });  // Logic: Base response (mutable for cookies)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() { return request.cookies.getAll(); },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value));  // Logic: Set on request (dev-safe)
          supabaseResponse = NextResponse.next({ request });
          cookiesToSet.forEach(({ name, value, options }) => supabaseResponse.cookies.set(name, value, options));  // Logic: Set on response (propagates to client)
        },
      },
    }
  );

  const { data: { user } } = await supabase.auth.getUser();  // Logic: Await fetch (async-safe – fixes runtime)

  // Redirect unauth (logic: Protect HQ – best for flow; expand with role check from Prisma)
  if (!user && !request.nextUrl.pathname.startsWith('/auth')) {
    const url = request.nextUrl.clone();
    url.pathname = '/auth/signin';
    return NextResponse.redirect(url);
  }

  return supabaseResponse;
}