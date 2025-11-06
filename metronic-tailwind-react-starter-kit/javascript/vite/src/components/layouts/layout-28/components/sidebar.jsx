import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <div className="fixed z-10 start-2.5 top-[calc(var(--header-height)+10px)] bottom-2.5 flex flex-col items-stretch shrink-0 lg:w-[var(--sidebar-width)]">
      <SidebarContent />
    </div>
  );
}
