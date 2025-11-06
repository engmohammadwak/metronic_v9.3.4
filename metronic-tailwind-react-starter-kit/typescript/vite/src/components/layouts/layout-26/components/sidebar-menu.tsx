import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import { MENU_SIDEBAR } from "@/config/layout-26.config";
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";

export function SidebarMenu() {
  const { pathname } = useLocation();

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path: string): boolean =>
      path === pathname || (path.length > 1 && pathname.startsWith(path) && path !== '/layout-26'),
    [pathname],
  );

  return (
    <div className="grow">
      <ScrollArea className="grow h-[calc(100vh-4rem)] lg:h-[calc(100vh-10rem)] mt-0 lg:mt-7.5 px-2.5">
        <AccordionMenu
          selectedValue={pathname}
          matchPath={matchPath}
          type="multiple"
          className="space-y-7.5"
          classNames={{
            label: 'text-xs font-normal text-muted-foreground',
            item: cn(
              'h-8.5 px-2.5 text-sm font-normal text-foreground', 
              'hover:text-primary hover:bg-background dark:hover:bg-zinc-900',
              'data-[selected=true]:bg-background dark:data-[selected=true]:bg-zinc-900 data-[selected=true]:text-primary [&[data-selected=true]_svg]:opacity-100',
            ),
            group: '',
          }}
        >
          {MENU_SIDEBAR.map((item, index) => {
            return (
              <AccordionMenuGroup key={index}>
                <AccordionMenuLabel>
                  {item.title}
                </AccordionMenuLabel>
                {item.children?.map((child, index) => {
                  return (
                    <AccordionMenuItem key={index} value={child.path || '#'}>
                      <Link to={child.path || '#'}>
                        {child.icon && <child.icon />}
                        <span>{child.title}</span>
                      </Link>          
                    </AccordionMenuItem>
                  )
                })}
              </AccordionMenuGroup>
            )
          })}
        </AccordionMenu>
      </ScrollArea>
    </div>
  );
}
