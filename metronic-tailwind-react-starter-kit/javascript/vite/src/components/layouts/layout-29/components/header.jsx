import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLayout } from './context';
import { Navbar } from './navbar';
import { SidebarContent } from './sidebar-content';
import { ToolbarActions } from './toolbar';

export function Header() {
  const { isMobile } = useLayout();
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <header className="transition-[left,right] duration-300 fixed top-0 start-0 lg:start-[calc(0.6rem+var(--sidebar-collapsed-width))] lg:in-data-[sidebar-open=true]:start-[calc(var(--sidebar-width)+0.7rem)] end-0 z-50 flex items-center shrink-0 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 h-(--header-height-mobile) lg:h-[var(--header-height)] pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container-fluid grow flex items-center justify-between gap-2">
        {/* Mobile sidebar toggle */}
        <div className="flex items-center gap-2">
          <Link to="/layout-29">
            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
              className="dark:hidden min-h-[30px]"
              alt="Logo"
            />

            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
              className="hidden dark:block min-h-[30px]"
              alt="Logo"
            />
          </Link>
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" mode="icon" size="sm">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="p-0 gap-0 w-[275px]"
              side="left"
              close={false}
            >
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex grow p-0">
                <SidebarContent />
              </SheetBody>
            </SheetContent>
          </Sheet>
        </div>
        {isMobile && (
          <ToolbarActions>
            <Navbar />
          </ToolbarActions>
        )}
      </div>
    </header>
  );
}
