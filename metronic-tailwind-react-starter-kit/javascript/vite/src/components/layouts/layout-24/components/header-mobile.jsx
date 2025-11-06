import { useState } from 'react';
import { Menu, VectorSquare } from 'lucide-react';
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
import { Aside } from './aside';
import { Sidebar } from './sidebar';
import { SidebarPanel } from './sidebar-panel';

export function HeaderMobile() {
  const [isSidebarSheetOpen, setIsSidebarSheetOpen] = useState(false);
  const [isAsideSheetOpen, setIsAsideSheetOpen] = useState(false);

  return (
    <header className="dark flex items-center h-[60px] shrink-0 border border-input bg-background">
      <div className="container-fluid grow flex items-center justify-between gap-2.5">
        <Link to="/layout-24">
          <img
            src={toAbsoluteUrl('/media/app/mini-logo-white.svg')}
            alt="image"
            className="min-h-[25px]"
          />
        </Link>

        <div className="flex items-center gap-2.5">
          <Sheet open={isAsideSheetOpen} onOpenChange={setIsAsideSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" mode="icon" size="sm">
                <VectorSquare className="size-4 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="p-0 gap-0 w-[250px]"
              side="right"
              close={false}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex grow p-0">
                <Aside />
              </SheetBody>
            </SheetContent>
          </Sheet>
          <Sheet open={isSidebarSheetOpen} onOpenChange={setIsSidebarSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" mode="icon" size="sm">
                <Menu className="size-4 text-white" />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="p-0 gap-0 w-[150px]"
              side="left"
              close={false}
              onOpenAutoFocus={(e) => e.preventDefault()}
            >
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex grow gap-2.5 p-0 border-0">
                <Sidebar />
                <SidebarPanel />
              </SheetBody>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
