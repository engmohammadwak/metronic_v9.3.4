import { useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { MENU_SIDEBAR } from '@/config/layout-30.config';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { ScrollArea } from '@/components/ui/scroll-area';
import { useLayout } from './context';
import { Navbar } from './navbar';

export function SidebarMenu() {
  const { pathname } = useLocation();
  const { isMobile } = useLayout();

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path) =>
      path === pathname ||
      (path.length > 1 && pathname.startsWith(path) && path !== '/layout-30'),
    [pathname],
  );

  return (
    <div className="lg:fixed lg:z-10 lg:top-(--header-height) lg:bottom-0 flex flex-col items-stretch lg:border-e border-border bg-background p-2.5 lg:p-3.5 w-[250px] lg:w-(--sidebar-menu-width)">
      {isMobile && <Navbar />}
      <ScrollArea className="grow h-[calc(100vh-6rem)] lg:h-[calc(100vh-4rem)] pe-2.5 -me-2.5">
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
