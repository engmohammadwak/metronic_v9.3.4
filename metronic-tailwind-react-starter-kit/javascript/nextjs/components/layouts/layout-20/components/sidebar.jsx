import { SidebarPrimary } from './sidebar-primary';
import { SidebarSecondary } from './sidebar-secondary';

export function Sidebar() {
  return (
    <aside className="dark fixed overflow-hidden bg-muted rounded-lg top-2.5 bottom-2.5 start-2.5 z-20 transition-all duration-300 flex items-stretch flex-shrink-0 w-(--sidebar-width) in-data-[sidebar-open=false]:w-(--sidebar-collapsed-width) border-e border-border">
      <SidebarPrimary />
      <SidebarSecondary />
    </aside>
  );
}
