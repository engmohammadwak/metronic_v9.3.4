import { SidebarContent } from './sidebar-content';

export function Sidebar() {
  return (
    <div className="lg:fixed z-20 top-(--header-height) start-0 end-0 flex bottom-0 flex-col items-center justify-center shrink-0 py-2.5 gap-5 w-16 lg:w-(--sidebar-width) border-e border-input bg-background">
      <SidebarContent />
    </div>
  );
}
