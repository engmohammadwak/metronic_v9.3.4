import { useState } from 'react';
import Link from 'next/link';
import {
  Building2,
  Clock,
  Download,
  ExternalLink,
  FolderCode,
  LogOut,
  Mails,
  Moon,
  NotepadText,
  ScrollText,
  Settings,
  Shield,
  ShieldUser,
  Sun,
  SwatchBook,
  Target,
  User,
  UserCircle,
  Users,
  Zap,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
  AvatarIndicator,
  AvatarStatus,
} from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const menuItems = [
  {
    icon: UserCircle,
    tooltip: 'Profile',
    path: '#',
    rootPath: '#',
    active: false,
  },
  {
    icon: SwatchBook,
    tooltip: 'Dashboard',
    path: '/layout-24',
    active: true,
  },
  {
    icon: Settings,
    tooltip: 'Account',
    path: '#',
    rootPath: '#',
    active: false,
  },
  {
    icon: Users,
    tooltip: 'Network',
    path: '#',
    rootPath: '#',
    active: false,
  },
  {
    icon: ShieldUser,
    tooltip: 'Authentication',
    path: '#',
    rootPath: '#',
    active: false,
  },
  {
    icon: FolderCode,
    tooltip: 'Security Logs',
    path: '#',
    rootPath: '#',
    active: false,
  },
  {
    icon: ScrollText,
    tooltip: 'Files',
    path: '#',
    rootPath: '#',
    active: false,
  },
];

export function Sidebar() {
  const [selectedMenuItem] = useState(menuItems[1]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    // You can add actual theme switching logic here
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col items-center shrink-0 py-5 gap-5 w-[70px] lg:w-(--sidebar-width) bg-zinc-950 lg:rounded-s-xl">
      {/* Logo */}
      <div className="items-center justify-center shrink-0 hidden lg:flex py-2.5">
        <Link href="/layout-24">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-white.svg')}
            alt="image"
            className="min-h-[25px]"
          />
        </Link>
      </div>

      {/* Navigation */}
      <div className="grow w-full">
        <ScrollArea className="grow w-full h-[calc(100vh-14rem)] lg:h-[calc(100vh-21rem)]">
          <div className="grow gap-2.5 shrink-0 flex items-center flex-col">
            {menuItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    variant="ghost"
                    mode="icon"
                    {...(item === selectedMenuItem
                      ? { 'data-state': 'open' }
                      : {})}
                    className={cn(
                      'rounded-full border border-transparent shrink-0 size-[50px]',
                      'data-[state=open]:bg-zinc-800 data-[state=open]:text-white border-0! outline-none! ring-0! shadow-none! ring-offset-0!',
                      'text-white/60 hover:text-white hover:bg-zinc-800',
                      item.active && 'text-white bg-zinc-800',
                    )}
                  >
                    <item.icon className="size-5" />
                  </Button>
                </TooltipTrigger>

                <TooltipContent side="right" sideOffset={20}>
                  {item.tooltip}
                </TooltipContent>
              </Tooltip>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Footer */}
      <div className="flex flex-col items-center gap-5 shrink-0">
        <div className="flex flex-col items-center gap-2.5">
          <Button
            variant="ghost"
            mode="icon"
            className={cn(
              'rounded-full border border-transparent shrink-0 size-[40px]',
              'border-0! outline-none! ring-0! shadow-none! ring-offset-0!',
              'text-white/60 hover:text-white hover:bg-zinc-800',
            )}
          >
            <Mails className="size-5 opacity-100" />
          </Button>

          <Button
            variant="ghost"
            mode="icon"
            className={cn(
              'rounded-full border border-transparent shrink-0 size-[40px]',
              'border-0! outline-none! ring-0! shadow-none! ring-offset-0!',
              'text-white/60 hover:text-white hover:bg-zinc-800',
            )}
          >
            <NotepadText className="size-5 opacity-100" />
          </Button>

          <Button
            variant="ghost"
            mode="icon"
            className={cn(
              'rounded-full border border-transparent shrink-0 size-[40px]',
              'border-0! outline-none! ring-0! shadow-none! ring-offset-0!',
              'text-white/60 hover:text-white hover:bg-zinc-800',
            )}
          >
            <Settings className="size-5 opacity-100" />
          </Button>
        </div>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer mb-2.5">
            <Avatar className="size-8.5">
              <AvatarImage
                src={toAbsoluteUrl('/media/avatars/300-2.png')}
                alt="@reui"
              />
              <AvatarFallback>CH</AvatarFallback>
              <AvatarIndicator className="-end-2 -top-2">
                <AvatarStatus variant="online" className="size-2.5" />
              </AvatarIndicator>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="w-64 mb-4"
            side="right"
            align="start"
            sideOffset={11}
          >
            {/* User Information Section */}
            <div className="flex items-center gap-3 px-3 py-2">
              <Avatar>
                <AvatarImage
                  src={toAbsoluteUrl('/media/avatars/300-2.png')}
                  alt="@reui"
                />
                <AvatarFallback>CH</AvatarFallback>
                <AvatarIndicator className="-end-1.5 -top-1.5">
                  <AvatarStatus variant="online" className="size-2.5" />
                </AvatarIndicator>
              </Avatar>
              <div className="flex flex-col items-start">
                <span className="text-sm font-semibold text-foreground">
                  Chris Harris
                </span>
                <span className="text-xs text-muted-foreground">
                  Senior Developer
                </span>
                <Badge
                  variant="success"
                  appearance="outline"
                  size="sm"
                  className="mt-1"
                >
                  Pro Plan
                </Badge>
              </div>
            </div>

            <DropdownMenuItem className="cursor-pointer py-1 rounded-md border border-border hover:bg-muted">
              <Clock />
              <span>Set availability</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Core Actions */}
            <DropdownMenuItem>
              <Target />
              <span>My Projects</span>
              <Badge
                variant="info"
                size="sm"
                appearance="outline"
                className="ms-auto"
              >
                3
              </Badge>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Users />
              <span>Team Management</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Building2 />
              <span>Organization</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Settings */}
            <DropdownMenuItem>
              <User />
              <span>Profile Settings</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Settings />
              <span>Preferences</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Shield />
              <span>Security</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Theme Toggle */}
            <DropdownMenuItem onClick={toggleTheme}>
              {isDarkMode ? (
                <Sun className="size-4" />
              ) : (
                <Moon className="size-4" />
              )}
              <span>{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Developer Tools */}
            <DropdownMenuItem>
              <Zap />
              <span>API Documentation</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Zap />
              <span>Code Repository</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Zap />
              <span>Testing Suite</span>
            </DropdownMenuItem>

            <DropdownMenuItem>
              <Download />
              <span>Download SDK</span>
              <ExternalLink className="size-3 ms-auto" />
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Action Items */}
            <DropdownMenuItem>
              <LogOut />
              <span>Sign out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
