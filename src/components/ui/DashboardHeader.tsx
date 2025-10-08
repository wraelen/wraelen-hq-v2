// src/components/DashboardHeader.tsx – Demo-style header (fixed top for main area; with breadcrumb, search, theme toggle, user dropdown – gamified as "player bar" with XP progress). 
// Logic: Matches Shadcn example exactly (classes/h-16/border-b); added your role/XP as cards. Use hooks for theme/user if needed (e.g., useTheme for toggle). No deps beyond Shadcn. 
import { Bell, Search } from 'lucide-react'; 
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'; 
import { Button } from '@/components/ui/button'; 
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'; 
import { Input } from '@/components/ui/input'; 
import { Progress } from '@/components/ui/progress'; 
import { signOutAction } from '@/lib/actions'; // For logout 
interface DashboardHeaderProps { 
  role: string; 
  xp: number; 
} 
export default function DashboardHeader({ role, xp }: DashboardHeaderProps) { 
  return ( 
    <header className="sticky top-0 z-30 flex h-16 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6"> {/* Exact demo classes/structure */} 
      <div className="flex items-center gap-4"> 
        <span className="text-sm font-medium">Dashboard</span> {/* Stub breadcrumb; expand with next/navigation for dynamic */} 
      </div> 
      <div className="relative ml-auto flex-1 md:grow-0"> 
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" /> 
        <Input type="search" placeholder="Search..." className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]" /> {/* Demo search input */} 
      </div> 
      <div className="flex items-center gap-4"> 
        <div className="rounded-md bg-card p-2 shadow-sm"> {/* Your role card – demo-style compact */} 
          <span className="text-sm font-medium text-primary">Role: {role}</span> 
        </div> 
        <div className="rounded-md bg-card p-2 shadow-sm"> {/* Your XP card with progress */} 
          <span className="text-sm font-medium text-primary">XP: {xp}</span> 
          <Progress value={(xp / 1000) * 100} className="mt-1 h-2" /> 
        </div> 
        <Button variant="outline" size="icon" className="overflow-hidden rounded-full"> 
          <Bell className="h-4 w-4" /> {/* Notifications stub – gamified alerts for quests */} 
        </Button> 
        <DropdownMenu> 
          <DropdownMenuTrigger asChild> 
            <Button variant="outline" size="icon" className="overflow-hidden rounded-full"> 
              <Avatar> 
                <AvatarImage src="/placeholder-user.jpg" /> {/* Swap for user avatar */} 
                <AvatarFallback>U</AvatarFallback> 
              </Avatar> 
            </Button> 
          </DropdownMenuTrigger> 
          <DropdownMenuContent align="end"> 
            <DropdownMenuLabel>My Account</DropdownMenuLabel> 
            <DropdownMenuSeparator /> 
            <DropdownMenuItem>Settings</DropdownMenuItem> 
            <DropdownMenuItem>Support</DropdownMenuItem> 
            <DropdownMenuSeparator /> 
            <form action={signOutAction}> 
              <DropdownMenuItem asChild> 
                <Button variant="ghost" type="submit" className="w-full justify-start">Logout</Button> 
              </DropdownMenuItem> 
            </form> 
          </DropdownMenuContent> 
        </DropdownMenu> 
      </div> 
    </header> 
  ); 
}