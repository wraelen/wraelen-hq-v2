// src/app/layout.tsx – Root layout (server-side; best practice: Global metadata/UI like XP bar – efficient SSR, no client fetches for core elements)
import '@/styles/tailwind.css'; // Kept: Tailwind/globals (best for console/game theme – add monospace fonts/glow plugins later for "HQ" vibe)
import { createServerClient } from '@supabase/ssr'; // Added: ssr client (logic: Async-safe sessions for Next.js 15+ – fixes cookies await; type-safe)
import type { Metadata } from 'next'; // Kept: Type-safe metadata (best for SEO/internal search)
import { Inter as FontSans } from 'next/font/google'; // Kept: Font opt (push back: Add monospace like 'Fira Code' for terminal feel – install via npm)
import { cookies } from 'next/headers'; // For cookie store (best for server sessions – secure)
import Link from 'next/link'; // Kept: Client nav (fast, no reloads – game-like flow for traversing levels/quests)
import { redirect } from 'next/navigation';
import { Progress } from '@/components/ui/progress'; // Kept: Shadcn for XP bar (install if missing: npx shadcn@latest add progress; visual motivator for reps)
import prisma from '@/lib/prisma'; // Prisma singleton (logic: Get points/role – relational fetch for gamification)
import { cn } from '@/lib/utils'; // Kept: Tailwind helper (best for conditional classes, e.g., role-based styling)
const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});
export const metadata: Metadata = { // Kept: Global meta (best for branding – add og images for "HQ" game feel)
  title: 'Wraelen HQ',
  description: 'Gamified internal headquarters for Wraelen real estate wholesaling – level up, earn badges, challenge alongside peers!',
};
export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const cookieStore = await cookies(); // Logic: Awaitable in 15+ (best for dynamic APIs – secure cookie access)
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    { cookies: {
      getAll: () => cookieStore.getAll(),
      setAll: (cookiesToSet) => {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options)); // Logic: Attempts set (succeeds in components; ignored in actions via catch – middleware refreshes on redirect)
        } catch {
          // The `set` method was called from a Server Action. Ignore – middleware will refresh session on next request.
        }
      },
    } }
  ); // Logic: ssr client (no NextAuth – simpler, native)
  const { data: { session } } = await supabase.auth.getSession(); // Logic: Await fetch (async-safe – best for SSR)
  let xp = 0; // Stub XP/points (logic: Fetch from Prisma if logged in – best for gamification display; update on point thresholds later, e.g., 1000 points = "Apprentice")
  let role = 'Guest'; // Default (push back: Use 'Novice' post-login; add badges UI)
  if (session) {
    const profile = await prisma.profile.findUnique({ where: { user_id: session.user.id } }); // Logic: Singleton fetch (efficient)
    xp = profile?.points || 0;
    role = profile?.role || 'Novice';
  }
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}> 
        <header className="p-4 bg-black text-green-400 border-b border-green-500"> 
          <nav className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">Wraelen HQ</Link> 
            <div className="flex items-center gap-4">
              <span>Role: {role}</span> 
              <Progress value={(xp / 1000) * 100} className="w-32" /> 
              {session ? <form action={async () => { 'use server'; await supabase.auth.signOut(); redirect('/auth/signin'); }}><button type="submit">Logout</button></form> : <Link href="/auth/signin">Login</Link>} 
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}