// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase)
// Logic: Integrated Shadcn Sidebar (fixed left nav – always visible on desktop; rounded/shadowed container for app-like feel). Kept session/header; content wrapped in <main> (flex sibling). Menu structure per spec (mains + Data submenu). Icons via Lucide (Heroicons equiv). No removals – additive for navigation.
// Fix: Wrapped sidebar + main in <SidebarProvider> (provides context for useSidebar hook – fixes "must be used within SidebarProvider" error; best practice per Shadcn docs). No other changes.
import '@/styles/globals.css'; // Kept: Global styles
import {
  Award,
  Building, // For sub: Properties
  Database as DatabaseIcon,
  FileText,
  Home,
  Phone,
  PhoneCall, // For sub: Call Metrics
  Settings,
  ShoppingBag,
  Users, // For sub: Leads
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button'; // Use styled Button for logout
import { Progress } from '@/components/ui/progress'; // Assuming Shadcn
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider, // New: Import provider (context for hooks – fixes error)
} from '@/components/ui/sidebar';
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form)
import prisma from '@/lib/prisma'; // Shared singleton
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Import async helper (fixes warnings)
import type { Database } from '@/types/database.types';
// New: Sidebar imports (Shadcn – fixed/always visible; run CLI if missing)
// New: Icons (Lucide – Heroicons set; lightweight, matches Shadcn)

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
    <html lang="en" className="dark"><body className="font-mono"> {/* Kept: Adjacent tags (hydration fix); dark/monospace for theme */}
        {/* New: SidebarProvider wrap (context for entire sidebar/main – fixes useSidebar error) */}
        <SidebarProvider>
          {/* New: Flex container for sidebar + main (app-like layout – sidebar fixed left) */}
          <div className="flex min-h-screen">
            {/* New: Sidebar (fixed left, always visible – open={true}; rounded/shadowed box for iCUE panel feel) */}
            <div className="border-r rounded-r-lg shadow-lg"> {/* App-like container (rounded right edge, subtle shadow – no left round since fixed) */}
              <Sidebar className="w-64"> {/* Fixed width (w-64); always open – no toggle */}
                <SidebarHeader>
                  <div className="flex items-center gap-2 px-4 py-2">
                    <div className="h-8 w-8 bg-[#00A0E9] rounded" /> {/* Logo placeholder – blue circle; swap for HQ icon */}
                    <span className="font-semibold text-[#00A0E9]">Wraelen HQ</span> {/* App title – blue accent */}
                  </div>
                </SidebarHeader>
                <SidebarContent className="p-2">
                  {/* New: Main Menu Groups (per spec – flat structure; Data as nested/indented submenu) */}
                  <SidebarGroup>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/dashboard" className="flex items-center gap-2">
                            <Home className="h-4 w-4" />
                            <span>Home</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/extract" className="flex items-center gap-2">
                            <FileText className="h-4 w-4" />
                            <span>Extract</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/dialer" className="flex items-center gap-2">
                            <Phone className="h-4 w-4" />
                            <span>Dialer</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/achievements" className="flex items-center gap-2">
                            <Award className="h-4 w-4" />
                            <span>Achievement Gallery</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/shop" className="flex items-center gap-2">
                            <ShoppingBag className="h-4 w-4" />
                            <span>Shop</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                  {/* New: Data Submenu (nested/indented – direct links to placeholders) */}
                  <SidebarGroup>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton className="justify-start">
                          <DatabaseIcon className="h-4 w-4 mr-2" />
                          <span>Data</span>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      {/* Sub-items (indented via pl-8 – flat for now; add Accordion if collapsible needed) */}
                      <SidebarMenuItem className="pl-8">
                        <SidebarMenuButton asChild>
                          <Link href="/data/leads" className="flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            <span>Leads</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem className="pl-8">
                        <SidebarMenuButton asChild>
                          <Link href="/data/properties" className="flex items-center gap-2">
                            <Building className="h-4 w-4" />
                            <span>Properties</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                      <SidebarMenuItem className="pl-8">
                        <SidebarMenuButton asChild>
                          <Link href="/data/calls" className="flex items-center gap-2">
                            <PhoneCall className="h-4 w-4" />
                            <span>Call Metrics</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                  <SidebarGroup>
                    <SidebarMenu>
                      <SidebarMenuItem>
                        <SidebarMenuButton asChild>
                          <Link href="/settings" className="flex items-center gap-2">
                            <Settings className="h-4 w-4" />
                            <span>Settings</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    </SidebarMenu>
                  </SidebarGroup>
                </SidebarContent>
                {/* New: Footer (logout – ties to existing form; always at bottom) */}
                <SidebarFooter className="border-t p-2">
                  <SidebarMenu>
                    <SidebarMenuItem>
                      <form action={signOutAction} className="w-full"> {/* Kept: Bind server action */}
                        <Button type="submit" variant="ghost" className="w-full justify-start">
                          <span>Logout ({role})</span> {/* Gamified: Show role */}
                        </Button>
                      </form>
                    </SidebarMenuItem>
                  </SidebarMenu>
                </SidebarFooter>
              </Sidebar>
            </div>
            {/* New: Main content area (flex sibling – pushes content right of sidebar; full height) */}
            <main className="flex-1 p-4 overflow-auto bg-background"> {/* Theme tie-in (dark bg via var) */}
              {/* Kept: Your existing header (top bar for XP/role – complements sidebar; mb-4 for spacing) */}
              <header className="bg-card p-4 shadow-md mb-4 rounded-lg"> {/* Updated: Card bg/shadow for iCUE panel feel */}
                <div className="flex justify-between items-center">
                  <div className="text-primary">HQ Nav</div> {/* Updated: Primary blue var (theme-consistent) */}
                  <div className="flex items-center gap-4">
                    <span className="text-foreground">Role: {role}</span> {/* Theme vars for consistency */}
                    <Progress value={(xp / 1000) * 100} className="w-32" /> {/* Logic: XP bar (gamified progress – tie to levels) */}
                  </div>
                </div>
              </header>
              {children} {/* Content renders here (e.g., /dashboard page) */}
            </main>
          </div>
        </SidebarProvider>
      </body></html> 
  );
}