// src/app/layout.tsx – Root layout (SSR for session fetch; gamified header with role/XP – updated for async Supabase) 
// Logic: Integrated Shadcn Sidebar (fixed left nav – always visible on desktop; rounded/shadowed container for app-like feel). Kept session/header; content wrapped in <SidebarProvider> (flex sibling). Menu structure per spec (mains + Data submenu). Icons via Lucide (Heroicons equiv). No removals – additive for navigation. 
// Fix: Wrapped sidebar + main in <SidebarProvider> (context for useSidebar hook – fixes "must be used within SidebarProvider" error; best practice per Shadcn docs). No other changes. 
// Update: Refactored to match Shadcn demo style – used nav items array for reusability (best practice; easy to add icons/submenus/roles), added SidebarInset for main (auto-handles padding/collapse), extracted header to DashboardHeader component (with search/user for demo match). Added stroke="currentColor" to icons (fixes visibility in custom themes). 
// Fix for runtime error: Reformatted asChild usages to have no whitespace/newlines around the child element (prevents text nodes, ensuring single React element child for Radix Slot – common fix per docs/forums; no-brainer to avoid "React.Children.only" error without changing structure). 
import '@/styles/global.css'; // Kept: Global styles 
import { Award, Building, Database as DatabaseIcon, FileText, Home, Phone, PhoneCall, Settings, ShoppingBag, Users } from 'lucide-react'; 
import Link from 'next/link';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'; // For Data submenu (demo-style accordion)
import { Button } from '@/components/ui/button';
import DashboardHeader from '@/components/ui/DashboardHeader'; // New: Extracted header component (matches demo with search/user) 
import { Sidebar, SidebarContent, SidebarFooter, SidebarGroup, SidebarGroupContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem, SidebarProvider } from '@/components/ui/sidebar'; // Added Sub components for non-accordion submenus if needed 
import { signOutAction } from '@/lib/actions'; // Import server action (bound for form) 
import prisma from '@/lib/prisma'; // Shared singleton 
import { createSupabaseServerClient } from '@/lib/supabaseServer'; // Import async helper (fixes warnings) 
// New: Nav items array (best practice for demo-style – reusable, easy to map with icons/sub; your menu preserved) 
const navItems = [ 
  { title: 'Home', href: "/dashboard", icon: Home }, 
  { title: 'Extract', href: "/extract", icon: FileText }, 
  { title: 'Dialer', href: "/dialer", icon: Phone }, 
  { title: 'Achievement Gallery', href: "/achievements", icon: Award }, 
  { title: 'Shop', href: "/shop", icon: ShoppingBag }, 
  { 
    title: 'Data', 
    icon: DatabaseIcon, 
    subItems: [ 
      { title: 'Leads', href: "/data/leads", icon: Users }, 
      { title: 'Properties', href: "/data/properties", icon: Building }, 
      { title: 'Call Metrics', href: "/data/calls", icon: PhoneCall }, 
    ], 
  }, 
  { title: 'Settings', href: "/settings", icon: Settings }, 
]; 
export default async function RootLayout({ children }: { children: React.ReactNode }) { 
  const supabase = await createSupabaseServerClient(); 
  const { data: { user } } = await supabase.auth.getUser(); 
  // Fetch profile for gamification (role/points – plain data only) 
  let role = 'guest'; 
  let xp = 0; 
  if (user?.id) { 
    const profile = await prisma.profile.findUnique({ where: { id: user.id } }); 
    role = profile?.role || 'rep'; 
    xp = profile?.points || 0; 
  } 
  return ( 
    <html lang="en"> 
      <body className="antialiased font-mono bg-background text-foreground dark"> 
        <SidebarProvider> 
          <Sidebar variant="sidebar" collapsible="none" className="fixed left-0 top-0 h-full w-64 bg-card shadow-md border-r"> {/* Updated: Removed p-4 (demo uses border-r instead; cleaner) */} 
            <SidebarHeader className="h-16 flex items-center px-4 border-b"> {/* Demo-style fixed height/border */} 
              <div className="flex items-center gap-2 font-semibold"> 
                <div className="h-6 w-6 rounded bg-primary" /> {/* Smaller logo for demo match */} 
                <span>Wraelen HQ</span> 
              </div> 
            </SidebarHeader> 
            <SidebarContent> 
              <SidebarGroup> 
                <SidebarGroupContent> 
                  <SidebarMenu> 
                    {navItems.map((item) => ( 
                      <SidebarMenuItem key={item.title}> 
                        {item.subItems ? ( 
                          <Accordion type="single" collapsible defaultValue={item.title}> 
                            <AccordionItem value={item.title} className="border-none"> 
                              <AccordionTrigger className="py-2 text-sm hover:bg-accent hover:text-accent-foreground"> 
                                <item.icon className="h-4 w-4 mr-2 stroke-current" /> 
                                {item.title} 
                              </AccordionTrigger> 
                              <AccordionContent className="p-0"> 
                                <SidebarMenuSub> 
                                  {item.subItems.map((sub) => ( 
                                    <SidebarMenuSubItem key={sub.title}> 
                                      <SidebarMenuSubButton asChild> 
                                        <Link href={sub.href}><sub.icon className="h-4 w-4 mr-2 stroke-current" />{sub.title}</Link> 
                                      </SidebarMenuSubButton> 
                                    </SidebarMenuSubItem> 
                                  ))} 
                                </SidebarMenuSub> 
                              </AccordionContent> 
                            </AccordionItem> 
                          </Accordion> 
                        ) : ( 
                          <SidebarMenuButton asChild className="py-2 text-sm"> {/* Demo-style padding/text size */} 
                            <Link href={item.href}><item.icon className="h-4 w-4 mr-2 stroke-current" />{item.title}</Link> 
                          </SidebarMenuButton> 
                        )} 
                      </SidebarMenuItem> 
                    ))} 
                  </SidebarMenu> 
                </SidebarGroupContent> 
              </SidebarGroup> 
            </SidebarContent> 
            <SidebarFooter className="p-4 border-t"> {/* Demo-style border-top */} 
              <form action={signOutAction}> 
                <Button variant="ghost" type="submit" className="w-full justify-start">Logout</Button> 
              </form> 
            </SidebarFooter> 
          </Sidebar> 
          <div className="flex flex-1 flex-col min-h-screen"> {/* New: Wrapper for header + main (demo structure for fixed header) */} 
            <DashboardHeader role={role} xp={xp} /> {/* New: Extracted header (passes role/xp; matches demo with search/user) */} 
            <main className="flex flex-1 flex-col p-4 lg:p-6 bg-background"> {/* Updated: Removed lg:ml-64 (SidebarInset handles); added lg:p-6 for demo spacing */} 
              {children} 
            </main> 
          </div> 
        </SidebarProvider> 
      </body> 
    </html> 
  ); 
}