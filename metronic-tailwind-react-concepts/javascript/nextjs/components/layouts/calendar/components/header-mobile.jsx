import { useState } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import {
  Sheet,
  SheetBody,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from '@/components/ui/sheet';
import SidebarCalendar from './sidebar-calendar';
import { SidebarCalendarMenu } from './sidebar-calendar-menu';
import { SidebarFooter } from './sidebar-footer';

export function HeaderMobile() {
  const [isSidebarSheetOpen, setIsSidebarSheetOpen] = useState(false);

  return (
    <header className="dark flex items-stretch fixed z-10 top-0 start-0 end-0 bg-zinc-950 h-(--header-height-mobile) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="flex items-stretch w-full border border-input rounded-xl shadow-xs m-2">
        <div className="container-fluid grow flex items-center justify-between gap-2.5">
          <Link href="/calendar/page" className="flex items-center gap-2">
            <div
              className="
                flex items-center p-[5px]
                rounded-[6px] border border-white/30
                bg-[#000]
                bg-[radial-gradient(97.49%_97.49%_at_50%_2.51%,rgba(255,255,255,0.5)_0%,rgba(255,255,255,0)_100%)]
                shadow-[0_0_0_1px_#000]
              "
            >
              <img
                src={toAbsoluteUrl('/media/app/logo-35.svg')}
                alt="image"
                className="min-w-[15px]"
              />
            </div>
            <span className="text-white text-lg font-semibold">Metronic</span>
          </Link>

          <div className="flex items-center gap-2">
            {/* Sidebar */}
            <Sheet
              open={isSidebarSheetOpen}
              onOpenChange={setIsSidebarSheetOpen}
            >
              <SheetTrigger asChild>
                <Button variant="ghost" mode="icon">
                  <Menu />
                </Button>
              </SheetTrigger>
              <SheetContent
                className="dark p-0 gap-0 w-64"
                side="left"
                close={false}
              >
                <SheetHeader className="p-0 space-y-0" />
                <SheetBody className="flex flex-col grow p-0">
                  <ScrollArea className="shrink-0 h-[calc(100vh-4.5rem)]">
                    <SidebarCalendar />
                    <Separator className="mb-2.5" />
                    <SidebarCalendarMenu />
                  </ScrollArea>
                  <SidebarFooter />
                </SheetBody>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
