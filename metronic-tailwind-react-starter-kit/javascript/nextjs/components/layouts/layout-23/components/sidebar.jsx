import { SidebarHeader } from './sidebar-header';
import { SidebarMenu } from './sidebar-menu';
import { SidebarSearch } from './sidebar-search';

export function Sidebar() {
  return (
    <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-width) lg:in-data-[sidebar-open=false]:w-0 transition-[width] duration-300 overflow-hidden">
      <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-width) border-e border-border">
        <SidebarHeader />
        <SidebarSearch />
        <SidebarMenu />
      </div>
    </div>
  );
}
