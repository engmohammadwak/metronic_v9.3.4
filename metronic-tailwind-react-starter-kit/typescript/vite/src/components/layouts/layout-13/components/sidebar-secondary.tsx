import { SidebarSecondaryHeader } from "./sidebar-secondary-header";
import { SidebarSecondaryContent } from "./sidebar-secondary-content";

export function SidebarSecondary() {
  return (
    <div className="flex flex-col items-stretch shrink-0 w-(--sidebar-right-width) border-s border-border bg-background p-5 gap-2 rounded-br-xl">
      <SidebarSecondaryHeader />
      <SidebarSecondaryContent />
    </div>
  );
}
