
import { SidebarHeader } from './sidebar-header';
import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <div className="fixed z-10 top-0 bottom-0 start-0 flex flex-col items-stretch shrink-0 w-(--sidebar-width) lg:in-data-[sidebar-collapsed=true]:w-(--sidebar-width-collapse) transition-[width] duration-300 overflow-hidden">
      <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-width)">
        <SidebarHeader />
        <SidebarContent/>
      </div>
    </div>
  );
}
