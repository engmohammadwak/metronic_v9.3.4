import { ScrollArea } from '@/components/ui/scroll-area';
import { useLayout } from './context';
import { SidebarHeader } from './sidebar-header';
import { SidebarPrimary } from './sidebar-primary';
import SidebarSecondary from './sidebar-secondary';

export function SidebarContent() {
  const { isMobile } = useLayout();

  return (
    <div className="flex flex-col items-stretch grow">
      {!isMobile && <SidebarHeader />}
      <SidebarPrimary />
      <ScrollArea className="shrink-0 h-[calc(100vh-7rem)] lg:h-[calc(100vh-10rem)]">
        <SidebarSecondary />
      </ScrollArea>
    </div>
  );
}
