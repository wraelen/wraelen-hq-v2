// src/app/layout.tsx - Updated with new Leads table under Data
import '@/styles/global.css';
import {
  Award,
  Building,
  Calculator,
  ChevronDown,
  Database as DatabaseIcon,
  FileText,
  Home,
  LogOut,
  Menu,
  Phone,
  PhoneCall,
  Settings,
  ShoppingBag,
 Users } from 'lucide-react';
import type { Metadata } from 'next';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet';
import { signOutAction } from '@/lib/actions';
import { createSupabaseServerClient } from '@/lib/supabaseServer';

export const metadata: Metadata = {
  title: 'Wraelen HQ',
  description: 'Gamified CRM for Wholesaling',
};

const navItems = [
  { title: 'Home', href: '/dashboard', icon: Home },
  { title: 'Extract', href: '/extract', icon: FileText },
  { title: 'Calculator', href: '/calculator', icon: Calculator },
  { title: 'Dialer', href: '/dialer', icon: Phone },
  { title: 'Achievement Gallery', href: '/achievements', icon: Award },
  { title: 'Shop', href: '/shop', icon: ShoppingBag },
  { title: 'Settings', href: '/settings', icon: Settings },
];

const dataItems = [
  { title: 'Leads', href: '/leads', icon: Users },
  { title: 'Properties', href: '/data/properties', icon: Building },
  { title: 'Call Metrics', href: '/data/calls', icon: PhoneCall },
];

function DesktopNav({ user }: { user: any }) {
  return (
    <aside className="hidden md:flex fixed left-0 top-0 z-40 h-screen w-64 flex-col border-r bg-background">
      <div className="flex h-16 items-center border-b px-6">
        <Link href="/dashboard" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A0E9]">
            <Award className="h-4 w-4 text-white" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold">Wraelen HQ</span>
            <span className="text-xs text-muted-foreground">Gamified CRM</span>
          </div>
        </Link>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="mb-2 px-3 text-xs font-semibold uppercase text-muted-foreground">
          Platform
        </div>
        <div className="space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent"
            >
              <item.icon className="h-4 w-4" />
              {item.title}
            </Link>
          ))}

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="w-full justify-start px-3 py-2 h-auto font-normal hover:bg-accent"
              >
                <DatabaseIcon className="h-4 w-4 mr-3" />
                Data
                <ChevronDown className="ml-auto h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {dataItems.map((item) => (
                <DropdownMenuItem key={item.href} asChild>
                  <Link href={item.href} className="flex items-center gap-3">
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>

      <div className="border-t p-4">
        <div className="mb-2 flex items-center gap-3 rounded-lg px-3 py-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A0E9] text-white">
            <span className="text-xs font-semibold">
              {user?.email?.charAt(0).toUpperCase() || 'U'}
            </span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <span className="text-sm font-semibold truncate">
              {user?.email || 'User'}
            </span>
            <span className="text-xs text-muted-foreground">Sales Rep</span>
          </div>
        </div>
        <form action={signOutAction}>
          <Button variant="ghost" type="submit" className="w-full justify-start">
            <LogOut className="h-4 w-4 mr-3" />
            Sign Out
          </Button>
        </form>
      </div>
    </aside>
  );
}

function MobileNav({ user }: { user: any }) {
  return (
    <header className="sticky top-0 z-50 flex h-14 items-center gap-4 border-b bg-background px-4 md:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <SheetTitle>
            <Link href="/dashboard" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A0E9]">
                <Award className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-semibold">Wraelen HQ</span>
            </Link>
          </SheetTitle>

          <nav className="grid gap-2 text-lg font-medium mt-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}

            <div className="my-2 border-t" />
            <div className="px-2.5 py-1 text-xs font-semibold uppercase text-muted-foreground">
              Data
            </div>
            {dataItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-4 px-2.5 py-2 text-muted-foreground hover:text-foreground"
              >
                <item.icon className="h-5 w-5" />
                {item.title}
              </Link>
            ))}
          </nav>

          <div className="mt-auto border-t pt-4">
            <form action={signOutAction}>
              <Button variant="ghost" type="submit" className="w-full justify-start">
                <LogOut className="h-4 w-4 mr-3" />
                Sign Out
              </Button>
            </form>
          </div>
        </SheetContent>
      </Sheet>

      <div className="flex items-center gap-2">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#00A0E9]">
          <Award className="h-4 w-4 text-white" />
        </div>
        <span className="text-sm font-semibold">Wraelen HQ</span>
      </div>
    </header>
  );
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // Fetch user with error handling
  let user = null;
  try {
    const supabase = await createSupabaseServerClient();
    const { data: { user: fetchedUser } } = await supabase.auth.getUser();
    user = fetchedUser;
  } catch (error) {
    console.error('Layout auth error:', error);
    // User stays null, middleware will redirect
  }

  return (
    <html lang="en" className="dark">
      <body className="antialiased font-mono">
        {user ? (
          <>
            <DesktopNav user={user} />
            <div className="flex flex-col md:pl-64">
              <MobileNav user={user} />
              <main className="flex-1 space-y-4 p-4 md:p-8 pt-6">
                {children}
              </main>
            </div>
          </>
        ) : (
          <main className="flex flex-1 flex-col">
            {children}
          </main>
        )}
      </body>
    </html>
  );
}