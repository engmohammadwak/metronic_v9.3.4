import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
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
import { HeaderMenu } from './header-menu';
import { SidebarContent } from './sidebar-content';

export function HeaderLogo() {
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Brand */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center min-w-15">
          <Link to="/layout-28" className="">
            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
              className="dark:hidden shrink-0 size-7.5"
              alt="image"
            />

            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
              className="hidden dark:inline-block shrink-0 size-7.5"
              alt="image"
            />
          </Link>
        </div>
        {!isMobile && <HeaderMenu />}
      </div>

      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="dim" mode="icon" className="size-6">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-(--sidebar-width-mobile) max-w-[calc(100vw-20px)]"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow gap-2 p-3">
              <HeaderMenu />
              <SidebarContent />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
