// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase)
import Link from 'next/link';
import { Progress } from '@/components/ui/progress'; // Assuming Shadcn
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form)
import prisma from '@/lib/prisma'; // Shared singleton
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Import async helper (fixes warnings)
import type { Database } from '@/types/database.types';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient(); // Logic: Await async client (Next 15 compatible – no sync warnings)

  const { data: { session } } = await supabase.auth.getSession(); // Logic: Fetch session (SSR – available to children via props if needed)

  // Fetch profile for gamification (role/points – plain data only)
  let role = 'guest';
  let xp = 0;
  if (session?.user.id) {
    const profile = await prisma.profile.findUnique({ where: { id: session.user.id } }); // Logic: profiles (match schema; assumes generate ran)
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