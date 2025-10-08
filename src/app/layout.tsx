// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase) 
// Logic: Integrated Shadcn Sidebar (fixed left nav – always visible on desktop; rounded/shadowed container for app-like feel). Kept session/header; content wrapped in <SidebarProvider> (flex sibling). Menu structure per spec (mains + Data submenu). Icons via Lucide (Heroicons equiv). No removals – additive for navigation. 
// Fix: Wrapped sidebar + main in <SidebarProvider> (context for useSidebar hook – fixes "must be used within SidebarProvider" error; best practice per Shadcn docs). No other changes. 
import '@/styles/global.css'; // Kept: Global styles 
import { Award, Building, // For sub: Properties 
  Database as DatabaseIcon, FileText, Home, Phone, PhoneCall, // For sub: Call Metrics 
  Settings, ShoppingBag, Users, // For sub: Leads 
} from 'lucide-react'; 
import Link from 'next/link'; 
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; // New: Import for submenu (fixes li nesting/hydration; collapsible for gamified "unlock" feel) 
import { Button } from '@/components/ui/button'; // Use styled Button for logout 
import { Progress } from '@/components/ui/progress'; // Assuming Shadcn 
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarProvider, // New: Import provider (context for hooks – fixes error) 
} from '@/components/ui/sidebar'; 
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form) 
import prisma from '@/lib/prisma'; // Shared singleton 
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Import async helper (fixes warnings) 
import type { Database } from '@/types/database.types'; // New: Sidebar imports (Shadcn – fixed/always visible; run CLI if missing) 
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
    <html lang="en"> 
      <body className="antialiased font-mono bg-background text-foreground dark"> 
        {/* New: SidebarProvider wrap (context for entire sidebar/main – fixes useSidebar error) */} 
        <SidebarProvider> 
          {/* New: Flex container for sidebar + main (app-like layout – sidebar fixed left) */} 
          <div className="flex min-h-screen"> 
            {/* New: Sidebar (fixed left, always visible – open={true}; rounded/shadowed container for iCUE panel feel) */} 
            <Sidebar className="fixed left-0 top-0 h-full w-64 bg-card p-4 shadow-md"> 
              {/* Logo placeholder – blue circle; swap for HQ icon */} 
              <SidebarHeader> 
                <div className="flex items-center gap-2"> 
                  <div className="h-8 w-8 rounded-full bg-primary" /> 
                  <span className="font-semibold text-primary">Wraelen HQ</span> {/* App title – blue accent */} 
                </div> 
              </SidebarHeader> 
              <SidebarContent> 
                {/* New: Main Menu Groups (per spec – flat structure; Data as nested/indented submenu) */} 
                <SidebarGroup> 
                  <SidebarMenu> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/dashboard"> 
                          <Home className="h-5 w-5" /> {/* Increased size for visibility */} 
                          <span>Home</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/extract"> 
                          <FileText className="h-5 w-5" /> 
                          <span>Extract</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/dialer"> 
                          <Phone className="h-5 w-5" /> 
                          <span>Dialer</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/achievements"> 
                          <Award className="h-5 w-5" /> 
                          <span>Achievement Gallery</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/shop"> 
                          <ShoppingBag className="h-5 w-5" /> 
                          <span>Shop</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                    {/* Fix: Replaced flat SidebarMenuItem with Accordion for Data submenu (collapsible, fixes li nesting/hydration errors; no-brainer for scalability/UX – reps can collapse to focus; uses theme vars for hover/animation) */} 
                    <Accordion type="single" collapsible className="mt-4"> 
                      <AccordionItem value="data"> 
                        <AccordionTrigger className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground px-2 py-2 rounded-md transition-colors"> 
                          <DatabaseIcon className="h-5 w-5 mr-2" /> 
                          Data 
                        </AccordionTrigger> 
                        <AccordionContent className="pl-4"> 
                          {/* Nested list for subitems (proper <ul><li> structure – avoids invalid nesting) */} 
                          <ul className="space-y-1"> 
                            <li> 
                              <Link href="/data/leads" className="flex items-center px-2 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors"> 
                                <Users className="h-5 w-5 mr-2" /> 
                                Leads 
                              </Link> 
                            </li> 
                            <li> 
                              <Link href="/data/properties" className="flex items-center px-2 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors"> 
                                <Building className="h-5 w-5 mr-2" /> 
                                Properties 
                              </Link> 
                            </li> 
                            <li> 
                              <Link href="/data/calls" className="flex items-center px-2 py-2 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground rounded-md transition-colors"> 
                                <PhoneCall className="h-5 w-5 mr-2" /> 
                                Call Metrics 
                              </Link> 
                            </li> 
                          </ul> 
                        </AccordionContent> 
                      </AccordionItem> 
                    </Accordion> 
                    <SidebarMenuItem> 
                      <SidebarMenuButton asChild> 
                        <Link href="/settings"> 
                          <Settings className="h-5 w-5" /> 
                          <span>Settings</span> 
                        </Link> 
                      </SidebarMenuButton> 
                    </SidebarMenuItem> 
                  </SidebarMenu> 
                </SidebarGroup> 
              </SidebarContent> 
              {/* New: Footer (logout – ties to existing form; always at bottom) */} 
              <SidebarFooter> 
                <form action={signOutAction}> {/* Kept: Bind server action */} 
                  <Button variant="ghost" type="submit">Logout</Button> 
                </form> 
              </SidebarFooter> 
            </Sidebar> 
            {/* New: Main content area (flex sibling – pushes content right of sidebar; full height) */} 
            <main className="flex-1 p-6 bg-background lg:ml-64"> {/* Fix: Added lg:ml-64 to shift content right on large screens (prevents misalignment/overlap; responsive – full width on mobile) */} 
              {/* Kept: Your existing header (top bar for XP/role – complements sidebar; mb-4 for spacing) */} 
              <div className="mb-4 flex items-center justify-between"> 
                <h1 className="text-2xl font-bold">HQ Nav</h1> {/* Updated: Card bg/shadow for iCUE panel feel */} 
                <div className="flex items-center gap-4"> 
                  <div className="rounded-md bg-card p-4 shadow-md"> 
                    <span className="font-medium text-primary">Role: {role}</span> {/* Theme vars for consistency */} 
                  </div> 
                  <div className="rounded-md bg-card p-4 shadow-md"> 
                    <span className="font-medium text-primary">XP: {xp}</span> 
                    <Progress value={(xp / 1000) * 100} className="mt-2" /> {/* Logic: XP bar (gamified progress – tie to levels) */} 
                  </div> 
                </div> 
              </div> 
              {children} {/* Content renders here (e.g., /dashboard page) */} 
            </main> 
          </div> 
        </SidebarProvider> 
      </body> 
    </html> 
  ); 
}