import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <aside className="fixed overflow-hidden bg-background rounded-lg top-2.5 bottom-2.5 start-2.5 z-20 transition-all duration-300 flex items-stretch flex-shrink-0 w-(--sidebar-width) in-data-[sidebar-open=false]:w-0 in-data-[sidebar-open=false]:-start-0.5 border border-border">
      <div className="grow w-(--sidebar-width) shrink-0">
        <SidebarContent />
      </div>
    </aside>
  );
}
