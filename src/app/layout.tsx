// src/app/layout.tsx – Root layout (server-side; best practice: Global metadata/UI like XP bar – efficient SSR, no client fetches)
import 'src/styles/tailwind.css';  // Kept: Tailwind/globals (best for console/game theme – add monospace fonts/glow plugins later for "HQ" vibe)
import { PrismaClient } from '@prisma/client';  // Added: Prisma for profile (logic: Get points/role – relational fetch for gamification)
import { createServerClient } from '@supabase/ssr';  // Added: ssr client (logic: Async-safe sessions for Next.js 15+ – fixes cookies await; type-safe)
import type { Metadata } from 'next';  // Kept: Type-safe metadata (best for SEO/internal search)
import { Inter as FontSans } from 'next/font/google';  // Kept: Font opt (push back: Add monospace like 'Fira Code' for terminal feel – install via npm)
import { cookies } from 'next/headers';  // Added: For cookie store (best for server sessions – secure, no client leaks)
import Link from 'next/link';  // Kept: Client nav (fast, no reloads – game-like flow for traversing levels/quests)
import { Progress } from '@/components/ui/progress';  // Kept: Shadcn for XP bar (install if missing: npx shadcn@latest add progress; visual motivator for reps)

import { cn } from '@/lib/utils';  // Kept: Tailwind helper (best for conditional classes, e.g., role-based styling)


const prisma = new PrismaClient();  // Logic: Server-only instance (best practice: No client DB access – secure for internal data like points)

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {  // Kept: Global meta (best for branding – add og images for "HQ" game feel)
  title: 'Wraelen HQ',
  description: 'Gamified internal headquarters for Wraelen real estate wholesaling – level up, earn badges, challenge peers!',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = cookies();  // Logic: Awaitable in Next.js 15+ (fixes async error – best practice for dynamic APIs)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll: () => cookieStore.getAll(),
        setAll: (cookiesToSet) => {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options));
        },
      },
    }
  );  // Logic: ssr client (async-safe sessions – replaces old helpers)

  const { data: { session } } = await supabase.auth.getSession();  // Logic: Await fetch (fixes runtime error – best for SSR)

  let xp = 0;  // Stub XP/points (logic: Fetch from Prisma if logged in – best for gamification display; update on point thresholds later, e.g., 1000 points = "Apprentice")
  let role = 'Guest';  // Default (push back: Use 'Novice' post-login; add badges UI)
  if (session) {
    const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } });  // Logic: Relational fetch (efficient join if expanding to quests)
    xp = profile?.points || 0;
    role = profile?.role || 'Novice';
  }

  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>  // Kept: Tailwind base (best for responsive HQ dashboard)
        <header className="p-4 bg-black text-green-400 border-b border-green-500">  // Added: Themed header (console vibe – green-on-black for "game" feel)
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Wraelen HQ</Link>  // Logic: Home link (fast nav – best for flow between quests/dashboard)
            <div className="flex items-center gap-4">
              <span>Role: {role}</span>  // Logic: Display role (motivates leveling; update on point thresholds)
              <Progress value={(xp / 1000) * 100} className="w-32" />  // Logic: XP bar (visual progress – stub max 1000; customize for levels)
              {session ? <form action={async () => { 'use server'; await supabase.auth.signOut(); redirect('/auth/signin'); }}><button type="submit">Logout</button></form> : <Link href="/auth/signin">Login</Link>}  // Logic: Auth toggle (server action for logout – best practice: Secure, no client JS)
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}