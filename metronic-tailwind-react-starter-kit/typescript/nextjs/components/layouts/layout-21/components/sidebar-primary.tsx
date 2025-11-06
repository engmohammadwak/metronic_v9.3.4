import { toAbsoluteUrl } from '@/lib/helpers';
import {
  Mails,
  NotepadText,
  Settings,
  Users,
  User,
  Clock,
  Shield,
  Building2,
  LogOut,
  Download,
  ExternalLink,
  Zap,
  Target,
  Sun,
  Moon,
  Plus,
} from 'lucide-react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';

export function SidebarPrimary() {
  const { resolvedTheme, setTheme } = useTheme();
  
  const toggleTheme = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };
  
  const isDarkMode = resolvedTheme === 'dark';
  
  const [activeIndex, setActiveIndex] = useState(1); // Start with Lightning button (index 1) since it's active: true
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const navItems = [
    {
      icon: Target,
      label: 'Target',
      href: '#',
      active: false,
      className: 'border-white bg-violet-500 hover:bg-violet-600 text-white hover:text-white',
    },
    {
      icon: Zap,
      label: 'Lightning',
      href: '/lightning',
      active: true,
      className: 'border-white bg-teal-500 hover:bg-teal-600 text-white hover:text-white',
    },
    {
      icon: Users,
      label: 'Users',
      href: '/users',
      active: false,
      className: 'border-white bg-lime-500 hover:bg-lime-600 text-white hover:text-white',
    },
    {
      icon: NotepadText,
      label: 'Notes',
      href: '/notes',
      active: false,
      className: 'border-white bg-blue-500 hover:bg-blue-600 text-white hover:text-white',
    },
    {
      icon: Building2,
      label: 'Building',
      href: '/building',
      active: false,
      className: 'border-white bg-yellow-500 hover:bg-yellow-600 text-white hover:text-white',
    },
    {
      icon: Plus,
      label: 'Add',
      href: '/add',
      active: false,
      className: 'border border-border bg-background text-foreground hover:bg-background hover:text-foreground',
    },
  ];
  
  return (
    <div className="flex flex-col items-center justify-between shrink-0 py-2.5 gap-5 w-[70px] lg:w-(--sidebar-collapsed-width)">
      {/* Nav */}
      <div className="shrink-0 grow w-full relative">
        <ScrollArea className="shrink-0 h-[calc(100dvh-14rem)]">
          <div className="flex flex-col grow items-center gap-[10px] shrink-0"> 
              {/* Moving indicator bar */}
             <motion.div
               className="absolute left-1.75 w-0.5 h-3 bg-green-600 rounded-full z-10"
               animate={{
                 y: (hoveredIndex !== null ? hoveredIndex : activeIndex) * 44 + 11.5, 
                 // 34px button + 10px gap = 44px spacing, 15.5px centers the 3px indicator bar
               }}
               whileHover={{
                 scaleY: 1.5,
                 scaleX: 1.2,
                 backgroundColor: "#059669", // darker green on hover
               }}
               transition={{
                 type: "spring",
                 stiffness: 300,
                 damping: 30,
                 duration: 0.2
               }}
             />
              {navItems.map((item, index) => (
               <Button
                 key={item.label}
                 variant="ghost"
                 mode="icon"
                 className={cn(
                   'transition-all duration-300 rounded-lg shadow-sm border-2 hover:shadow-[0_4px_12px_0_rgba(37,47,74,0.35)] w-[34px] h-[34px]',
                   item.className, 
                   activeIndex === index && ''
                 )}
                 onClick={() => setActiveIndex(index)}
                 onMouseEnter={() => setHoveredIndex(index)}
                 onMouseLeave={() => setHoveredIndex(null)}
               >
                <item.icon/>
               </Button>
             ))}
           </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-2.5 shrink-0">
        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <Mails className="opacity-100"/>
        </Button>

        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <NotepadText className="opacity-100"/>
        </Button>
        
        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="opacity-100"/>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer mb-2.5">
            <Avatar className="size-7">
              <AvatarImage src={toAbsoluteUrl('/media/avatars/300-2.png')} alt="@reui" />
              <AvatarFallback>CH</AvatarFallback>
              <AvatarIndicator className="-end-2 -top-2">
                <AvatarStatus variant="online" className="size-2.5" />
              </AvatarIndicator>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 mb-4" side="right" align="start" sideOffset={11}>
            {/* User Information Section */}
            <div className="flex items-center gap-3 px-3 py-2">
              <Avatar>
                <AvatarImage src={toAbsoluteUrl('/media/avatars/300-2.png')} alt="@reui" />
                <AvatarFallback>CH</AvatarFallback>
                <AvatarIndicator className="-end-1.5 -top-1.5">
                  <AvatarStatus variant="online" className="size-2.5" />
                </AvatarIndicator>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-foreground">Chris Harris</span>
                <span className="text-xs text-muted-foreground">Senior Developer</span>
                <Badge variant="success" appearance="outline" size="sm" className="mt-1">Pro Plan</Badge>
              </div>
            </div>
            
            <DropdownMenuItem className="cursor-pointer py-1 rounded-md border border-border hover:bg-muted">
              <Clock/>
              <span>Set availability</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Core Actions */}
            <DropdownMenuItem>
              <Target/>
              <span>My Projects</span>
              <Badge variant="info" size="sm" appearance="outline" className="ms-auto">3</Badge>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Users/>
              <span>Team Management</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Building2/>
              <span>Organization</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Settings */}
            <DropdownMenuItem>
              <User/>
              <span>Profile Settings</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings/>
              <span>Preferences</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Shield/>
              <span>Security</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Theme Toggle */}
            <DropdownMenuItem onClick={toggleTheme}>
              {isDarkMode ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Developer Tools */}
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Zap/>
                <span>Developer Tools</span>
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="w-48">
                <DropdownMenuItem>API Documentation</DropdownMenuItem>
                <DropdownMenuItem>Code Repository</DropdownMenuItem>
                <DropdownMenuItem>Testing Suite</DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuSub>

            <DropdownMenuItem>
              <Download/>
              <span>Download SDK</span>
              <ExternalLink className="size-3 ms-auto" />
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Action Items */}
            <DropdownMenuItem>
              <LogOut/>
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
