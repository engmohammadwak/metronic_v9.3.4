import {
  Bell,
  BellDot,
  Clock,
  Download,
  ExternalLink,
  Gift,
  HelpCircle,
  Keyboard,
  LogOut,
  Moon,
  Settings,
  Sun,
  User,
  Users,
  VolumeX,
} from 'lucide-react';
import { useTheme } from 'next-themes';
import { toAbsoluteUrl } from '@/lib/helpers';
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
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function HeaderToolbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="flex items-center gap-2.5">
      <Button
        variant="outline"
        className="bg-[#521AF2] text-white hover:bg-[#541af291] hover:text-white border-0"
      >
        <Users className="size-4 text-white" />
        <span>Add Teammate</span>
      </Button>
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-white hover:bg-[#26272F]"
        >
          <BellDot className="opacity-100" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-white hover:bg-[#26272F]"
        >
          <Settings className="opacity-100" />
        </Button>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Avatar className="size-7">
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
          className="w-64"
          side="bottom"
          align="end"
          sideOffset={11}
        >
          {/* User Information Section */}
          <div className="flex items-center gap-3 p-3">
            <Avatar>
              <AvatarImage
                src={toAbsoluteUrl('/media/avatars/300-2.png')}
                alt="@reui"
              />
              <AvatarFallback>S</AvatarFallback>
              <AvatarIndicator className="-end-1.5 -top-1.5">
                <AvatarStatus variant="online" className="size-2.5" />
              </AvatarIndicator>
            </Avatar>
            <div className="flex flex-col">
              <span className="text-sm font-semibold text-foreground">
                Sean
              </span>
              <span className="text-xs text-muted-foreground">Online</span>
            </div>
          </div>

          <DropdownMenuItem className="cursor-pointer py-1 rounded-md border border-border hover:bg-muted">
            <Clock />
            <span>Set status</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Notification and Settings Section */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <VolumeX />
              <span>Mute notifications</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>For 30 minutes</DropdownMenuItem>
              <DropdownMenuItem>For 1 hour</DropdownMenuItem>
              <DropdownMenuItem>For 4 hours</DropdownMenuItem>
              <DropdownMenuItem>Until tomorrow</DropdownMenuItem>
              <DropdownMenuItem>Until next week</DropdownMenuItem>
              <DropdownMenuItem>Custom date and time</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

          <DropdownMenuItem>
            <User />
            <span>Profile</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Settings />
            <span>Settings</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Bell />
            <span>Notification settings</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Theme Toggle */}
          <DropdownMenuItem onClick={toggleTheme}>
            {theme === 'light' ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
            <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Business-Focused Application Section */}
          <DropdownMenuItem>
            <Keyboard />
            <span>Keyboard shortcuts</span>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Gift />
            <span>Referrals</span>
            <Badge variant="info" appearance="light" className="ms-auto">
              New
            </Badge>
          </DropdownMenuItem>

          <DropdownMenuItem>
            <Download />
            <span>Download apps</span>
            <ExternalLink className="size-3 ms-auto" />
          </DropdownMenuItem>

          <DropdownMenuItem>
            <HelpCircle />
            <span>Help</span>
            <ExternalLink className="size-3 ms-auto" />
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Action Items */}
          <DropdownMenuItem>
            <LogOut />
            <span>Log out</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
