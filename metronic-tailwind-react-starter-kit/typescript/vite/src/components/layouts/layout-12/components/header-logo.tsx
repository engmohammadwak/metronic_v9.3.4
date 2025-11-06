import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, PanelRight } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { useLayout } from './context';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { HeaderSearch } from './header-search';
import { Button } from '@/components/ui/button';
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SidebarFeeds } from "./sidebar-feeds";
import { SidebarCommunities } from "./sidebar-communities";
import { SidebarPrimaryMenu } from "./sidebar-primary-menu";
import { SidebarResourcesMenu } from "./sidebar-resources-menu";

export function HeaderLogo() {
  const { pathname } = useLocation();
  const { isMobile, sidebarToggle } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2 lg:w-(--sidebar-width) px-5">
      {/* Mobile sidebar toggle */}
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" mode="icon" size="sm" className="-ms-1.5">
              <Menu className="size-4" />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[225px] lg:w-(--sidebar-width)"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow p-0">
              <HeaderSearch />
              <ScrollArea className="grow h-[calc(100vh-5.5rem)] lg:h-[calc(100vh-4rem)] mt-0 mb-2.5 lg:my-7.5">
                <SidebarPrimaryMenu />
                <Separator className="my-2.5" />
                <SidebarFeeds />
                <Separator className="my-2.5" />
                <SidebarCommunities />
                <Separator className="my-2.5" />
                <SidebarResourcesMenu />
                <Separator className="my-2.5" />
              </ScrollArea>
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}

      {/* Brand */}
      <div className="flex items-center justify-between w-full">
        {/* Logo */}
        <Link to="/layout-12" className="flex items-center gap-2">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
            className="dark:hidden shrink-0 size-6"
            alt="image"
          />
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
            className="hidden dark:inline-block shrink-0 size-6"
            alt="image"
          />
          <span className="text-mono text-lg font-medium hidden lg:block">
            Metronic
          </span>
        </Link>

        {/* Sidebar toggle */}
        <Button
          mode="icon"
          variant="ghost"
          onClick={sidebarToggle}
          className="hidden lg:inline-flex text-muted-foreground hover:text-foreground"
        >
          <PanelRight className="-rotate-180 in-data-[sidebar-open=false]:rotate-0 opacity-100" />
        </Button>
      </div>
    </div>
  );
}
