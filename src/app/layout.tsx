// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP)
import { createServerClient } from '@supabase/ssr'; // Logic: Server client for session
import { cookies } from 'next/headers'; // Dynamic cookies
import Link from 'next/link';
import { Progress } from '@/components/ui/progress'; // Assuming Shadcn
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form)
import prisma from '@/lib/prisma'; // Assuming you have a prisma client export
import type { Database } from '@/types/database.types';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();
  const supabase = createServerClient<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => { try { cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); } catch {} },
    },
  });

  const { data: { session } } = await supabase.auth.getSession(); // Logic: Fetch session (SSR – available to children via props if needed)

  // Fetch profile for gamification (role/points – plain data only)
  let role = 'guest';
  let xp = 0;
  if (session?.user.id) {
    const profile = await prisma.profile.findUnique({ where: { id: session.user.id } });
    role = profile?.role || 'rep';
    xp = profile?.points || 0;
  }

  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <div>
              <span>Role: {role}</span>
              <Progress value={(xp / 1000) * 100} className="w-32" /> {/* Logic: XP bar (gamified progress – tie to levels) */}
              {session ? (
                <form action={signOutAction}> {/* Logic: Bind server action (no inline async – avoids serialization) */}
                  <button type="submit">Logout</button>
                </form>
              ) : (
                <Link href="/auth/signin">Login</Link>
              )}
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}