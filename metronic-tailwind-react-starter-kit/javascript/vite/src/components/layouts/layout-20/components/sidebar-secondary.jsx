import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import { SidebarCommunities } from './sidebar-communities';
import { SidebarHeader } from './sidebar-header';
import { SidebarPrimaryMenu } from './sidebar-primary-menu';
import { SidebarResourcesMenu } from './sidebar-resources-menu';
import { SidebarWorkspacesMenu } from './sidebar-workspaces-menu';

export function SidebarSecondary() {
  return (
    <div className="flex flex-col items-stretch grow">
      <SidebarHeader />
      <ScrollArea className="shrink-0 py-2 h-[calc(100vh-4rem)]">
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
