// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase)
// Logic: Added Google Fonts import for Roboto (sans-serif like iCUE – clean/modern; pushback: If prefer monospace, revert). Kept 'dark' class; enhanced header with iCUE-like compact layout (labels + controls aligned).
import '@/styles/tailwind.css'; // Kept: Global styles
import { Inter, Roboto } from 'next/font/google'; // New: Import Roboto (iCUE sans-serif match – readable; fallback to system if load fails)
import Link from 'next/link';
import { Button } from '@/components/ui/button'; 
import { Progress } from '@/components/ui/progress'; 
import { signOutAction } from '@/lib/actions'; 
import prisma from '@/lib/prisma'; 
import { createSupabaseServerClient } from '@/lib/supabaseServer'; 
import type { Database } from '@/types/database.types';

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-roboto' }); // New: Variable for easy apply

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createSupabaseServerClient(); 

  const { data: { user } } = await supabase.auth.getUser(); 

  let role = 'guest';
  let xp = 0;
  if (user?.id) {
    const profile = await prisma.profile.findUnique({ where: { id: user.id } }); 
    role = profile?.role || 'rep';
    xp = profile?.points || 0;
  }

  return (
    <html lang="en" className="dark">
      <body className={`${roboto.variable} font-sans`}> {/* Updated: Roboto variable (iCUE clean sans-serif – overrides monospace; best for readability in GUI) */}
        <header className="bg-[#2A2A2A] p-4 shadow-sm flex justify-between items-center"> {/* Updated: Darker gray bg (#2A2A2A like iCUE panels), subtle shadow – compact alignment */}
          <div className="text-[#00A0E9] font-medium">HQ Nav</div> {/* Kept blue accent; added font-medium for iCUE label style */}
          <div className="flex items-center gap-6"> {/* New: Wider gap for iCUE-like spacing */}
            <div className="flex items-center gap-2">
              <span className="text-white text-sm">Role: {role}</span> {/* Updated: Smaller text (sm) for compact GUI */}
              <Progress value={(xp / 1000) * 100} className="w-32 h-2" /> {/* Updated: Thinner bar (h-2) like iCUE sliders */}
            </div>
            {user ? (
              <form action={signOutAction}>
                <Button type="submit" variant="outline" size="sm">Logout</Button> {/* Updated: Smaller size (sm) for iCUE button feel */}
              </form>
            ) : (
              <Link href="/auth/signin" className="text-[#00A0E9] text-sm">Login</Link> 
            )}
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}