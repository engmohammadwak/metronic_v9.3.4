import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-27.config';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

export function SidebarContent() {
  const pathname = usePathname();
  const [selectedMenuItem, setSelectedMenuItem] = useState(
    MENU_SIDEBAR_MAIN[0],
  );

  useEffect(() => {
    MENU_SIDEBAR_MAIN.forEach((item) => {
      if (
        item.rootPath === pathname ||
        (item.rootPath && pathname.includes(item.rootPath))
      ) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);

  return (
    <ScrollArea className="grow w-full h-[calc(100vh-10rem)] lg:h-[calc(100vh-5.5rem)]">
      <div className="grow gap-2.5 shrink-0 flex items-center flex-col">
        {MENU_SIDEBAR_MAIN.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                asChild
                variant="ghost"
                mode="icon"
                {...(item === selectedMenuItem ? { 'data-state': 'open' } : {})}
                className={cn(
                  'border border-transparent data-[state=open]:border-input shrink-0 rounded-md size-9',
                  'hover:text-primary data-[state=open]:border-input',
                )}
              >
                {item.path ? (
                  <Link href={item.path}>
                    {item.icon ? <item.icon className="size-4.5!" /> : null}
                  </Link>
                ) : item.icon ? (
                  <item.icon className="size-4.5!" />
                ) : null}
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.title}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </ScrollArea>
  );
}
