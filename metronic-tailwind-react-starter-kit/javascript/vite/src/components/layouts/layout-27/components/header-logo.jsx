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
import { HeaderBreadcrumbs } from './header-breadcrumbs';
import { HeaderTitle } from './header-title';
import { Sidebar } from './sidebar';
import { SidebarMenu } from './sidebar-menu';

export function HeaderLogo() {
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex items-center">
      {/* Brand */}
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center justify-center min-w-15">
          <Link to="/layout-27" className="">
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
      </div>

      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="dim" mode="icon" className="size-6">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[250px]"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex grow p-0">
              <Sidebar />
              <SidebarMenu />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}

      <HeaderTitle />
      {!isMobile && <HeaderBreadcrumbs />}
    </div>
  );
}
