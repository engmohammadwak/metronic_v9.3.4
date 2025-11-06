import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarWorkspacesMenu } from "./sidebar-workspaces-menu";
import { SidebarCommunities } from "./sidebar-communities";
import { SidebarPrimaryMenu } from "./sidebar-primary-menu";
import { SidebarResourcesMenu } from "./sidebar-resources-menu";
import { SidebarHeader } from "./sidebar-header";

export function SidebarSecondary() {
  return (
    <ScrollArea className="grow shrink-0 h-[calc(100vh-1rem)] lg:h-[calc(100vh-2em)] my-3.5">
      <SidebarHeader />
      <SidebarPrimaryMenu />
      <SidebarWorkspacesMenu />
      <SidebarCommunities />
      <SidebarResourcesMenu />
    </ScrollArea>
  );
}
