import { useCallback } from "react";
import { Link, useLocation } from "react-router";
import { MENU_HEADER } from "@/config/layout-22.config";
import { ScrollArea } from "@/components/ui/scroll-area";

export function SidebarMenu() {
  const { pathname } = useLocation();

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path: string): boolean =>
      path === pathname || (path.length > 1 && pathname.startsWith(path) && path !== '/layout-22'),
    [pathname],
  );

  return (
    <ScrollArea className="grow h-[calc(100vh-6.5rem)] lg:h-[calc(100vh-4rem)] my-2.5 lg:my-7.5 px-2.5 me-0.5 pe-2">
      <nav className="space-y-1">
        {MENU_HEADER.map((item, index) => {
          const isSelected = matchPath(item.path || '#');
          
          return (
            <Link
              key={index}
              to={item.path || '#'}
              className={`
                flex items-center h-10 px-3 text-sm font-normal rounded-md transition-colors
                ${isSelected 
                  ? 'bg-muted font-medium text-foreground border' 
                  : 'text-foreground hover:text-primary hover:bg-muted'
                }
              `}
            >
              <span>{item.title}</span>
            </Link>
          );
        })}
      </nav>
    </ScrollArea>
  );
}
