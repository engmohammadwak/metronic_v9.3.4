import { Separator } from '@/components/ui/separator';
import { useLayout } from './context';
import { HeaderMenuMobile } from './header-menu-mobile';
import { SidebarContent } from './sidebar-content';
import { SidebarSearch } from './sidebar-search';

export function Sidebar() {
  const { isMobile } = useLayout();

  return (
    <aside className="fixed overflow-hidden lg:top-(--header-height) start-0 z-20 bottom-0 transition-all duration-300 flex items-stretch flex-shrink-0 w-(--sidebar-width) in-data-[sidebar-open=false]:w-(--sidebar-collapsed-width) border-e border-border">
      <div className="grow w-(--sidebar-width) shrink-0">
        {isMobile && <HeaderMenuMobile />}
        <SidebarSearch />
        <Separator className="my-2.5" />
        <SidebarContent />
      </div>
    </aside>
  );
}
