import { useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { MENU_SIDEBAR } from '@/config/layout-27.config';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

export function SidebarMenu() {
  const { pathname } = useLocation();

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path) =>
      path === pathname ||
      (path.length > 1 && pathname.startsWith(path) && path !== '/layout-27'),
    [pathname],
  );

  return (
    <div className="lg:fixed lg:z-10 lg:top-(--header-height) lg:bottom-0 flex flex-col items-stretch lg:border border-border bg-background lg:rounded-lg p-2.5 lg:p-3.5 lg:m-2.5 lg:w-(--sidebar-menu-width)">
      <div className="grid w-full">
        <div className="overflow-auto">
          <Tabs
            defaultValue="overview"
            className="inline-grid text-sm text-muted-foreground lg:[&_[data-slot=tabs-trigger]]:flex-1"
          >
            <TabsList
              size="xs"
              className="inline-flex overflow-auto shrink-0 border border-border/80 bg-muted/80 [&_[data-slot=tabs-trigger]]:text-foreground [&_[data-slot=tabs-trigger]]:font-normal [&_[data-slot=tabs-trigger][data-state=active]]:shadow-lg"
            >
              <TabsTrigger value="directory">Directory</TabsTrigger>
              <TabsTrigger value="elements">Elements</TabsTrigger>
              <TabsTrigger value="control-panel">Control Panel</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <ScrollArea className="grow h-[calc(100vh-6rem)] lg:h-[calc(100vh-4rem)] my-2.5 lg:my-5">
        <AccordionMenu
          selectedValue={pathname}
          matchPath={matchPath}
          type="multiple"
          className="space-y-5"
          classNames={{
            separator: '-mx-2 mb-2.5',
            label: 'text-xs font-normal text-muted-foreground',
            item: 'h-8.5 px-2.5 text-sm font-normal text-foreground hover:text-primary data-[selected=true]:bg-muted data-[selected=true]:font-medium data-[selected=true]:text-foreground [&[data-selected=true]_svg]:opacity-100',
            group: '',
          }}
        >
          {MENU_SIDEBAR.map((item, index) => {
            return (
              <AccordionMenuGroup key={index}>
                <AccordionMenuLabel>{item.title}</AccordionMenuLabel>
                {item.children?.map((child, index) => {
                  return (
                    <AccordionMenuItem key={index} value={child.path || '#'}>
                      <Link to={child.path || '#'}>
                        {child.icon && <child.icon />}
                        <span>{child.title}</span>
                      </Link>
                    </AccordionMenuItem>
                  );
                })}
              </AccordionMenuGroup>
            );
          })}
        </AccordionMenu>
      </ScrollArea>
    </div>
  );
}
