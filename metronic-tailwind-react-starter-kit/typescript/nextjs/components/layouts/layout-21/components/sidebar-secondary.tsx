import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { SidebarWorkspacesMenu } from "./sidebar-workspaces-menu";
import { SidebarCommunities } from "./sidebar-communities";
import { SidebarPrimaryMenu } from "./sidebar-primary-menu";
import { SidebarResourcesMenu } from "./sidebar-resources-menu";
import { SidebarSearch } from "./sidebar-search";
import { SidebarHeader } from "./sidebar-header";

export function SidebarSecondary() {
  return (
    <div className="lg:rounded-s-xl bg-background overflow-hidden border border-border">
      <SidebarHeader />
      <ScrollArea className="shrink-0 h-[calc(100vh-4.5rem)] lg:h-[calc(100vh-5.5rem)] mt-0 mb-2.5">        
        <SidebarSearch />
        <SidebarPrimaryMenu />
        <Separator className="my-2.5" />
        <SidebarWorkspacesMenu />
        <Separator className="my-2.5" />
        <SidebarCommunities />
        <Separator className="my-2.5" />
        <SidebarResourcesMenu />
      </ScrollArea>
    </div>
  );
}
