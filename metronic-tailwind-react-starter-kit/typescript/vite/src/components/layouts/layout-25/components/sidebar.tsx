import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarCommunities } from "./sidebar-communities";
import { SidebarPrimaryMenu } from "./sidebar-primary-menu";
import { SidebarResourcesMenu } from "./sidebar-resources-menu";
import { SidebarSearch } from "./sidebar-search";

export function Sidebar() {
  return (
    <aside className="fixed top-(--header-height) start-0 bottom-0 transition-all duration-300 flex flex-col items-stretch flex-shrink-0 lg:w-(--sidebar-width) in-data-[sidebar-open=false]:-start-full border-e border-border">
      <ScrollArea className="grow h-[calc(100vh-5.5rem)] lg:h-[calc(100vh-4rem)] mt-0">
        <SidebarSearch />
        <SidebarPrimaryMenu />
        <SidebarCommunities />
        <SidebarResourcesMenu />
      </ScrollArea>
    </aside>
  );
}
