import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
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
import { HeaderTitle } from './header-title';
import { HeaderToolbar } from './header-toolbar';
import { SidebarPrimary } from './sidebar-primary';
import { SidebarSecondary } from './sidebar-secondary';

export function Header() {
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <header className="fixed top-0 start-0 lg:start-(--sidebar-width) end-0 z-50 flex items-center shrink-0 bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 h-(--header-height-mobile) lg:h-[var(--header-height)] pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container-fluid grow flex items-center justify-between gap-2">
        {/* Mobile sidebar toggle */}
        {isMobile && (
          <div className="flex items-center gap-2">
            <Link href="/layout-16">
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
                className="p-0 gap-0 w-[300px]"
                side="left"
                close={false}
              >
                <SheetHeader className="p-0 space-y-0" />
                <SheetBody className="flex grow p-0">
                  <SidebarPrimary />
                  <SidebarSecondary />
                </SheetBody>
              </SheetContent>
            </Sheet>
          </div>
        )}

        {!isMobile && <HeaderTitle />}
        <HeaderToolbar />
      </div>
    </header>
  );
}
