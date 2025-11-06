import { useCallback } from 'react';
import { Link, useLocation } from 'react-router';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-20.config';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
} from '@/components/ui/accordion-menu';
import { Badge } from '@/components/ui/badge';

export function SidebarPrimaryMenu() {
  const { pathname } = useLocation();

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path) =>
      path === pathname ||
      (path.length > 1 && pathname.startsWith(path) && path !== '/layout-20'),
    [pathname],
  );

  return (
    <AccordionMenu
      selectedValue={pathname}
      matchPath={matchPath}
      type="multiple"
      className="space-y-7.5 px-2.5 pt-1"
      classNames={{
        label: 'text-xs font-normal text-muted-foreground mb-2',
        item: 'h-8.5 px-2.5 text-sm font-normal text-foreground hover:text-white border border-transparent hover:bg-zinc-800/80 data-[selected=true]:bg-zinc-800/60 data-[selected=true]:text-foreground data-[selected=true]:border-zinc-700/60 [&[data-selected=true]_svg]:opacity-100',
        group: '',
      }}
    >
      {MENU_SIDEBAR_MAIN.map((item, index) => {
        return (
          <AccordionMenuGroup key={index}>
            {item.children?.map((child, index) => {
              return (
                <AccordionMenuItem key={index} value={child.path || '#'}>
                  <Link to={child.path || '#'}>
                    {child.icon && <child.icon />}
                    <span>{child.title}</span>
                    {child.badge == 'Beta' && (
                      <Badge size="sm" variant="destructive" appearance="light">
                        {child.badge}
                      </Badge>
                    )}
                  </Link>
                </AccordionMenuItem>
              );
            })}
          </AccordionMenuGroup>
        );
      })}
    </AccordionMenu>
  );
}
