import { Button } from '@/components/ui/button';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetBody } from '@/components/ui/sheet';
import { Menu, PanelTopBottomDashed, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';
import { SidebarSearch } from './sidebar-search';
import { SidebarMenu } from './sidebar-menu';
import { Aside } from './aside';
import { AsideToolbar } from './aside-toolbar';
import { toAbsoluteUrl } from '@/lib/helpers';
import Link from 'next/link';

export function HeaderMobile() {
  const [isSidebarSheetOpen, setIsSidebarSheetOpen] = useState(false);
  const [isAsideSheetOpen, setIsAsideSheetOpen] = useState(false);
  const [isAsideToolbarSheetOpen, setIsAsideToolbarSheetOpen] = useState(false);

  return (
    <header className="flex items-stretch fixed z-10 top-0 start-0 end-0 h-(--header-height-mobile) bg-zinc-100 dark:bg-zinc-900 pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="flex items-stretch w-full bg-background border border-input rounded-xl shadow-xs m-2">
        <div className="container-fluid grow flex items-center justify-between gap-2.5">
          <Link href="/layout-26" className="flex items-center gap-2">
            <div
              className="
                flex items-center p-[5px]
                rounded-[6px] border border-white/30
                bg-[#000]
                bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
                shadow-[0_0_0_1px_#000]
              "
            >
              <img src={toAbsoluteUrl('/media/app/logo-35.svg')} alt="image" className="min-w-[15px]" />
            </div>
            <span className="text-mono text-lg font-semibold">
              Metronic
            </span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Sidebar */}
            <Sheet open={isSidebarSheetOpen} onOpenChange={setIsSidebarSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" mode="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="bg-zinc-100 dark:bg-zinc-900 p-0 gap-0 w-(--sidebar-width-mobile)"
                side="left"
                close={false}
              >
                <SheetHeader className="p-0 space-y-0" />
                <SheetBody className="flex flex-col grow p-0">
                  <SidebarSearch />
                  <SidebarMenu />
                </SheetBody>
              </SheetContent>
            </Sheet>

            {/* Aside */}
            <Sheet open={isAsideSheetOpen} onOpenChange={setIsAsideSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" mode="icon">
                  <PanelTopBottomDashed />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="p-0 gap-0 w-(--aside-width-mobile)"
                side="right"
                close={false}
              >
                <SheetHeader className="p-0 space-y-0" />
                <SheetBody className="flex flex-col grow p-0">
                  <Aside />
                </SheetBody>
              </SheetContent>
            </Sheet>

            {/* Aside Toolbar */}
            <Sheet open={isAsideToolbarSheetOpen} onOpenChange={setIsAsideToolbarSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" mode="icon">
                  <SlidersHorizontal />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="p-0 gap-0 w-(--aside-toolbar-width-mobile)"
                side="right"
                close={false}
              >
                <SheetHeader className="p-0 space-y-0" />
                <SheetBody className="flex flex-col grow p-0">
                  <AsideToolbar />
                </SheetBody>
              </SheetContent>
            </Sheet>
          </div>   
        </div>
      </div>
    </header>
  );
}
