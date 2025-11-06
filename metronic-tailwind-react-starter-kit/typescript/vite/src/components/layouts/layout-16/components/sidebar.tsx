import { SidebarPrimary } from "./sidebar-primary";
import { SidebarSecondary } from "./sidebar-secondary";

export function Sidebar() {  
  return (
    <aside className="fixed z-50 start-0 bottom-0 top-0 transition-all duration-300 flex items-stretch flex-shrink-0 lg:w-(--sidebar-width) in-data-[sidebar-open=false]:w-(--sidebar-collapsed-width) border-e border-border bg-muted overflow-hidden">
      <SidebarPrimary />
      <SidebarSecondary />
    </aside>
  );
}
