import { useEffect, useState } from 'react';
import { Disc2, Menu, MessagesSquare, Plus, Zap } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import { useLayout } from './context';
import { HeaderSearch } from './header-search';
import { SidebarContent } from './sidebar-content';

export function HeaderLogo() {
  const { pathname } = useLocation();
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <div className="flex items-center gap-2 lg:w-(--sidebar-width)">
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
              <SidebarContent />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}

      {/* Brand */}
      <div className="flex items-center gap-1 w-full">
        <Button mode="icon" className=" bg-black">
          <Disc2 className="text-white" />
        </Button>
        <Button mode="icon" className="bg-[#72A301] hover:bg-[#72A301]/90">
          <MessagesSquare className="text-white" />
        </Button>
        <Button mode="icon" className="bg-[#00998F] hover:bg-teal-600/90">
          <Zap className="text-white" />
        </Button>
        <Button mode="icon" variant="outline" className="bg-muted/60">
          <Plus />
        </Button>
      </div>
    </div>
  );
}
