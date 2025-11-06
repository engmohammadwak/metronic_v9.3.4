import { SidebarHeader } from './sidebar-header';
import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-width) border-e border-border bg-muted/40">
      <SidebarHeader />
      <SidebarContent />
    </div>
  );
}
