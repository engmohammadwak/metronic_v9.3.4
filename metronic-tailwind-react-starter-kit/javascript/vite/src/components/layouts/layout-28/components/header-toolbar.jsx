import {
  Building2,
  Clock,
  Download,
  ExternalLink,
  LogOut,
  Mails,
  Moon,
  NotepadText,
  Plus,
  Settings,
  Shield,
  Sun,
  Target,
  User,
  Users,
  Zap,
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
import { useLayout } from './context';

export function HeaderToolbar() {
  const { theme, setTheme } = useTheme();
  const { isMobile } = useLayout();

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <nav className="flex items-center gap-2.5">
      {isMobile ? (
        <Button variant="ghost">
          <Plus />
        </Button>
      ) : (
        <Button variant="ghost">
          <Plus /> Create
        </Button>
      )}

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Mails className="opacity-100" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <NotepadText className="opacity-100" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="text-muted-foreground hover:text-foreground"
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
          className="w-56"
          side="bottom"
          align="end"
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
            {theme === 'light' ? (
              <Moon className="size-4" />
            ) : (
              <Sun className="size-4" />
            )}
            <span>{theme === 'light' ? 'Dark mode' : 'Light mode'}</span>
          </DropdownMenuItem>

          <DropdownMenuSeparator />

          {/* Developer Tools */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger>
              <Zap />
              <span>Developer Tools</span>
            </DropdownMenuSubTrigger>
            <DropdownMenuSubContent className="w-48">
              <DropdownMenuItem>API Documentation</DropdownMenuItem>
              <DropdownMenuItem>Code Repository</DropdownMenuItem>
              <DropdownMenuItem>Testing Suite</DropdownMenuItem>
            </DropdownMenuSubContent>
          </DropdownMenuSub>

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
    </nav>
  );
}
