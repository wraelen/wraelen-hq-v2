// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase)
// Logic: Added globals.css import (fixes unstyled pages – no-brainer; must be here for global apply). Added 'dark' class to html (enforces theme without queries). Kept existing code; just enhanced header with Shadcn Button for logout (styled now).
// Fix: Removed whitespace/newline between <html> and <body> (prevents hydration error from text node as <html> child – best practice for JSX roots; HTML forbids text/whitespace directly under <html>). No removals – just adjacency.
import '@/styles/globals.css'; // Kept: Global styles
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // New: Use styled Button for logout (styled now)
import { Progress } from '@/components/ui/progress'; // Assuming Shadcn
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form)
import prisma from '@/lib/prisma'; // Shared singleton
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Import async helper (fixes warnings)
import type { Database } from '@/types/database.types';

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient(); // Logic: Await async client (Next 15 compatible – no sync warnings)

  const { data: { user } } = await supabase.auth.getUser(); // Logic: Switch to getUser() (secure verification with Supabase server – fixes "insecure getSession" warning; best practice for prod/internal apps to prevent tampering; push back: Use this for user.id/role fetches, as it's authenticated vs. local cookie-based getSession())

  // Fetch profile for gamification (role/points – plain data only)
  let role = 'guest';
  let xp = 0;
  if (user?.id) {
    const profile = await prisma.profile.findUnique({ where: { id: user.id } }); // Logic: profiles (match schema; assumes generate ran)
    role = profile?.role || 'rep';
    xp = profile?.points || 0;
  }

  return (
    <html lang="en" className="dark"><body className="font-mono"> {/* Fix: Adjacent <body> (no space/newline – avoids invalid text node under <html>) */}
        <header className="bg-[#1F1F1F] p-4 shadow-md"> {/* Kept: Styled header (dark bg, subtle shadow – ties to theme) */}
          <nav className="flex justify-between items-center">
            <div className="text-[#00A0E9]">HQ Nav</div> {/* Kept blue accent text */}
            <div className="flex items-center gap-4">
              <span className="text-white">Role: {role}</span>
              <Progress value={(xp / 1000) * 100} className="w-32" /> {/* Logic: XP bar (gamified progress – tie to levels) */}
              {user ? ( // Logic: Check user instead of session (consistent with getUser())
                <form action={signOutAction}> {/* Logic: Bind server action (no inline async – avoids serialization) */}
                  <Button type="submit" variant="outline">Logout</Button> {/* Kept: Use Shadcn Button (styled – blue accents via theme) */}
                </form>
              ) : (
                <Link href="/auth/signin" className="text-[#00A0E9]">Login</Link>
              )}
            </div>
          </nav>
        </header>
        {children}
      </body></html>
    );
}