import { SidebarContent } from './sidebar-content';
import { SidebarHeader } from './sidebar-header';

export function Sidebar() {
  return (
    <div className="lg:fixed z-20 start-0 end-0 flex bottom-0 flex-col items-center justify-between shrink-0 py-2.5 gap-2 lg:w-(--sidebar-width) bg-background">
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
}
