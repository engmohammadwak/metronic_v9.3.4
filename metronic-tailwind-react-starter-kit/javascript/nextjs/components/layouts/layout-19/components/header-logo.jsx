import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
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
import { HeaderMenuMobile } from './header-menu-mobile';
import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';

export function HeaderLogo() {
  const pathname = usePathname();
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2 lg:w-[225px]">
      {/* Brand */}
      <Link href="/layout-19" className="flex items-center gap-2">
        <div
          className="
            flex items-center p-[6px]
            rounded-[60px] border border-[rgba(255,255,255,0.3)]
            bg-[#4921EA]
            bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
            shadow-[0_0_0_1px_#4921EA]
          "
        >
          <img
            src={toAbsoluteUrl('/media/app/logo-34.svg')}
            alt="image"
            className="min-w-[16px]"
          />
        </div>
        <span className="text-mono text-base font-medium hidden lg:block">
          Metronic
        </span>
      </Link>

      {/* Mobile sidebar toggle */}
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" mode="icon">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-[225px]"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow p-0 ">
              <SidebarHeader />
              <HeaderMenuMobile />
              <SidebarMenu />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
}
