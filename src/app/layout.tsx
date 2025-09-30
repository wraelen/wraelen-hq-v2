// src/app/layout.tsx – Root layout (server-side; best practice: Global metadata/UI like XP bar – efficient SSR, no client fetches)
import 'src/styles/tailwind.css';  // Kept: Tailwind/globals (best for console/game theme – add monospace fonts/glow plugins later for "HQ" vibe)
import { createServerClient } from '@supabase/ssr';  // Kept: ssr client (async-safe – no NextAuth)
import type { Metadata } from 'next';  // Kept: Type-safe metadata (best for SEO/internal search)
import { Inter as FontSans } from 'next/font/google';  // Kept: Font opt (push back: Add monospace like 'Fira Code' for terminal feel – install via npm)
import { cookies } from 'next/headers';  // Kept: Cookie store (secure for sessions)
import Link from 'next/link';  // Kept: Client nav (fast, no reloads – game-like flow for traversing levels/quests)
import { Progress } from '@/components/ui/progress';  // Kept: Shadcn for XP bar (visual motivator for reps)

import prisma from '@/lib/prisma';  // Kept: Singleton (perf win for fetches)
import { cn } from '@/lib/utils';  // Kept: Tailwind helper (best for conditional classes, e.g., role-based styling)


const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {  // Kept: Global meta (best for branding – add og images for "HQ" game feel)
  title: 'Wraelen HQ',
  description: 'Gamified internal headquarters for Wraelen real estate wholesaling – level up, earn badges, challenge peers!',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  // Logic: Env guard (push back: Fail fast if vars missing – best for dev/prod; fixes "required" error if env not loaded on hot reload)
  if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
    throw new Error('Supabase URL and Anon Key are required – check .env.local');
  }

    const cookieStore = await cookies();  // Updated: Await cookies (fixes sync warning – best for dynamic APIs in 15+; Turbopack safe)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)),
    } }
  );

  const { data: { session } } = await supabase.auth.getSession();  // Logic: Await fetch (async-safe – best for SSR)

  let xp = 0;  // Stub XP/points (logic: Fetch from Prisma if logged in – best for gamification display; update on point thresholds later, e.g., 1000 points = "Apprentice")
  let role = 'Guest';  // Default (push back: Use 'Novice' post-login; add badges UI)
  if (session) {
    const profile = await prisma.profile.findUnique({ where: { userId: session.user.id } });  // Logic: Singleton fetch (efficient)
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