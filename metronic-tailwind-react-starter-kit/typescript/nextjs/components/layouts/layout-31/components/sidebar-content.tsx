import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-31.config';
import { useTheme } from 'next-themes';
import { Building2, Clock, Download, ExternalLink, LogOut, Mails, Moon, NotepadText, Settings, Shield, Sun, Target, User, Users, Zap } from 'lucide-react';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Avatar, AvatarFallback, AvatarImage, AvatarIndicator, AvatarStatus } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Separator } from '@/components/ui/separator';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function SidebarContent() {
	const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [selectedMenuItem, setSelectedMenuItem] = useState(MENU_SIDEBAR_MAIN[1]);

  useEffect(() => {
    MENU_SIDEBAR_MAIN.forEach((item) => {
      if (
        item.rootPath === pathname ||
        (item.rootPath && pathname.includes(item.rootPath))
      ) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);

	const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
		<>
			<ScrollArea className="grow w-full h-[calc(100vh-14rem)] lg:h-[calc(100vh-15rem)]">
				<div className="grow gap-1 shrink-0 flex items-center flex-col">
					{MENU_SIDEBAR_MAIN.map((item, index) => (
						<Tooltip key={index}>
							<TooltipTrigger asChild>
								<Button
									asChild
									variant="ghost"
									mode="icon"
									{...(item === selectedMenuItem
										? { 'data-state': 'open' }
										: {})}
									className={cn(
										'border border-transparent data-[state=open]:border-input shrink-0 rounded-md size-9',
										'hover:text-primary data-[state=open]:border-input',
									)}
								>
									{item.path ? (
										<Link href={item.path}>
											{item.icon ? (
												<item.icon className="size-4.5!" />
											) : null}
										</Link>
									) : (
										item.icon ? <item.icon className="size-4.5!" /> : null
									)}
								</Button>
							</TooltipTrigger>

              {/* Separator */}
              {item.separator && (
                <Separator className="my-1 w-6.5" />
              )}

							<TooltipContent side="right">{item.title}</TooltipContent>
						</Tooltip>
					))}
				</div>
			</ScrollArea>

			{/* Footer */}
      <div className="flex flex-col items-center gap-1 shrink-0">
        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <Mails className="opacity-100 size-4.5!"/>
        </Button>

        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <NotepadText className="opacity-100 size-4.5!"/>
        </Button>
        
        <Button variant="ghost" mode="icon" className="text-muted-foreground hover:text-foreground">
          <Settings className="opacity-100 size-4.5!"/>
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger className="cursor-pointer pb-2.5 pt-4">
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
              <Clock />
              <span>Set availability</span>
            </DropdownMenuItem>

            <DropdownMenuSeparator />

            {/* Core Actions */}
            <DropdownMenuItem>
              <Target />
              <span>My Projects</span>
              <Badge variant="info" size="sm" appearance="outline" className="ms-auto">3</Badge>
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
              {theme ? <Sun className="size-4" /> : <Moon className="size-4" />}
              <span>{theme ? 'Light Mode' : 'Dark Mode'}</span>
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
      </div>
		</>
  );
}
