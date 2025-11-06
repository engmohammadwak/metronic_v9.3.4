import { usePathname } from 'next/navigation';
import { SidebarMenuDefault } from '../../layout-5/components/sidebar-menu-default';
import { SidebarMenuDashboard } from './sidebar-menu-dashboard';

export function SidebarSecondary() {
  const pathname = usePathname();

  return (
    <div className="grow shrink-0 ps-3.5 kt-scrollable-y-hover max-h-[calc(100vh-2rem)] pe-1 my-5">
      {pathname === '/layout-4' || pathname === '/layout-4/' ? (
        <SidebarMenuDashboard />
      ) : (
        <SidebarMenuDefault />
      )}
    </div>
  );
}
