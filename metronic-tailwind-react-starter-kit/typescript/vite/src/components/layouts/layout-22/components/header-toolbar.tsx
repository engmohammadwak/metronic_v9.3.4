import { Settings, User, Clock, Shield, Building2, Users, LogOut, Download, ExternalLink, Zap, Target, Sun, Moon, Menu } from "lucide-react";
import { toAbsoluteUrl } from "@/lib/helpers";
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
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { MENU_HEADER } from "@/config/layout-22.config";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useMenu } from "@/hooks/use-menu";
import { useLayout } from "./context";
import { useEffect, useState } from "react";
import { Sheet, SheetBody, SheetContent, SheetHeader, SheetTrigger } from "@/components/ui/sheet";
import { SidebarMenu } from "./sidebar-menu";

export function HeaderToolbar() {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);
  const {isMobile} = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-end gap-2.5 lg:w-[225px]">
      {!isMobile && (
        <nav className="list-none flex items-center gap-1">
          {MENU_HEADER.map((item, index) => {
            const active = isActive(item.path);
            return (
              <Button 
                key={index}
                variant="ghost"
                className={cn(
                  "inline-flex items-center text-sm font-normal",
                  active 
                    ? "bg-background text-foreground border" 
                    : "text-secondary-foreground hover:text-primary"
                )}
                asChild
              >
                <Link to={item.path || '#'}>
                  {item.title}
                </Link>
              </Button>
            )
          })}
        </nav>
      )}

      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" mode="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[225px] lg:w-(--sidebar-width)"
            side="right"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow p-0">
              <SidebarMenu />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}

      <DropdownMenu>
        <DropdownMenuTrigger className="cursor-pointer">
          <Avatar className="size-7">
            <AvatarImage src={toAbsoluteUrl('/media/avatars/300-2.png')} alt="@reui" />
            <AvatarFallback>CH</AvatarFallback>
            <AvatarIndicator className="-end-2 -top-2">
              <AvatarStatus variant="online" className="size-2.5" />
            </AvatarIndicator>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56" side="bottom" align="end" sideOffset={11}>
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

      {/* Theme Toggle */}
      <Button variant="dim" mode="icon" onClick={toggleTheme}>
        {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
        <span>{theme === "light" ? "" : ""}</span>
      </Button>
    </div>
  );
}
