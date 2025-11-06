import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarMenu } from "./sidebar-menu";
import SidebarTree from "./sidebar-tree";

export function SidebarContent() {
  return (
    <ScrollArea className="shrink-0 h-[calc(100vh-7rem)] lg:h-[calc(100vh-5rem)] mt-0">
      <SidebarMenu />
      <SidebarTree />
    </ScrollArea>
  );
}
