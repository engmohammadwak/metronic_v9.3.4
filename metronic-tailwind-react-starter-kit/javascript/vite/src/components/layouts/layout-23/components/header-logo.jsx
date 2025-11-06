import { useEffect, useState } from 'react';
import { Menu } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
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
import { HeaderMenuMobile } from './header-menu-mobile';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';
import { SidebarSearch } from './sidebar-search';

export function HeaderLogo() {
  const { pathname } = useLocation();
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2">
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              mode="icon"
              className="text-muted-foreground hover:text-white hover:bg-[#26272F]"
            >
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[225px] lg:w-(--sidebar-width)"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow p-0">
              <HeaderMenuMobile />
              <SidebarHeader />
              <SidebarSearch />
              <SidebarMenu />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
      <Link to="/layout-23" className="flex items-center gap-2">
        <div
          className="
            flex items-center p-[5px]
            rounded-[6px] border border-[rgba(255,255,255,0.30)]
            bg-[#007421]
            bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
            shadow-[0_0_0_1px_#009229]
          "
        >
          <img
            src={toAbsoluteUrl('/media/app/logo-33.svg')}
            alt="image"
            className="min-w-[18px]"
          />
        </div>
        <span className="text-white text-xl font-medium hidden lg:block">
          Metronic
        </span>
      </Link>
    </div>
  );
}
