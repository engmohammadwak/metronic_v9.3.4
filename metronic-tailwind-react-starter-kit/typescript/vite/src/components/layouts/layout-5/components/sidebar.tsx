import { SidebarMenuDashboard } from './sidebar-menu-dashboard';

export function Sidebar() {
  return (
    <div className="flex items-stretch shrink-0 px-2 w-(--sidebar-width) bg-background">
      <SidebarMenuDashboard />
    </div>
  );
}
