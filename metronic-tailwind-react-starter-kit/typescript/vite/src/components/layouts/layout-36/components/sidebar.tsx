import { SidebarHeader } from './sidebar-header';
import { SidebarFooter } from './sidebar-footer';
import { ScrollArea } from '@/components/ui/scroll-area';
import SidebarCalendar from './sidebar-calendar';
import { SidebarCalendarMenu } from './sidebar-calendar-menu';

export function Sidebar() {
  return (
    <div className="dark fixed z-10 top-0 bottom-0 start-0 flex flex-col items-stretch shrink-0 w-(--sidebar-width) lg:in-data-[sidebar-open=false]:w-0 transition-[width] duration-300 overflow-hidden">
      <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-width)">
        <SidebarHeader />
        <ScrollArea className="shrink-0 h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-10rem)]">
          <SidebarCalendar />
          <SidebarCalendarMenu />
        </ScrollArea>
        <SidebarFooter />
      </div>
    </div>
  );
}
