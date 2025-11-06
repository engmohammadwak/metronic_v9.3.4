import { useCallback, useState } from "react";
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { cn } from "@/lib/utils";
import { LucideIcon, Plus, Clock, Archive, AlertTriangle, Trash, Tag } from "lucide-react";
import { Button } from '@/components/ui/button';
import CreateLabelDialog from './create-label';
import { usePathname } from "next/navigation";
import Link from "next/link";

interface MenuLabelConfig {
  title: string;
  icon?: LucideIcon;
  count?: number;
  path?: string;
  children?: MenuLabelConfig[];
}

const MENU_LABELS_CONFIG: MenuLabelConfig[] = [
  {
    title: 'Labels',
    children: [
      {
        title: 'Archive',
        path: '#',
        count: 12,
        icon: Archive,
      },
      {
        title: 'Snoozed',
        path: '#',
        count: 4,
        icon: Clock,
      },
      {
        title: 'Spam',
        path: '#',
        count: 3,
        icon: AlertTriangle,
      },
      {
        title: 'Trash',
        path: '#',
        count: 34,
        icon: Trash,
      },
    ],
  },
];

export function SidebarLabels() {
  const pathname = usePathname();
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const [customLabels, setCustomLabels] = useState<{ labelTitle: string; icon?: LucideIcon }[]>([]);

  // Memoize matchPath to prevent unnecessary re-renders
  const matchPath = useCallback(
    (path: string): boolean =>
      path === pathname || (path.length > 1 && pathname.startsWith(path) && path !== '/layout-37'),
    [pathname],
  );

  return (
    <AccordionMenu
      selectedValue={pathname}
      matchPath={matchPath}
      type="multiple"
      className="mt-5 space-y-7.5 in-data-[sidebar-collapsed=true]:flex items-center in-data-[sidebar-collapsed=true]:justify-center"
      classNames={{
        label: 'text-xs font-normal text-muted-foreground',
        item: cn(
          'h-8 px-2 text-2sm font-normal text-foreground mx-2', 
          'hover:text-primary hover:bg-background dark:hover:bg-zinc-900 in-data-[sidebar-collapsed=true]:w-8',
          'data-[selected=true]:bg-background dark:data-[selected=true]:bg-zinc-900 data-[selected=true]:text-primary [&[data-selected=true]_svg]:opacity-100',
        ),
        group: '',
      }}
    >
      {MENU_LABELS_CONFIG.map((item, index) => {
        return (
          <AccordionMenuGroup key={index}>
            <AccordionMenuLabel className="flex items-center justify-between">
              <span className="in-data-[sidebar-collapsed=true]:hidden">{item.title}</span>
              <Button className="in-data-[sidebar-collapsed=true]:mx-auto hover:text-primary hover:bg-background dark:hover:bg-zinc-900 size-8 rounded-lg" size="sm" variant="ghost" mode="icon" onClick={() => setIsCreateOpen(true)}>
                <Plus />
              </Button>
            </AccordionMenuLabel>
            <CreateLabelDialog 
              open={isCreateOpen} 
              onOpenChange={setIsCreateOpen}
              onCreate={({ name }) => {
                if (name) {
                  setCustomLabels((prev) => [...prev, { labelTitle: name, icon: Tag }]);
                }
              }}
            />
            {item.children?.map((child, index) => {
              return (
                <AccordionMenuItem key={index} value={child.path || '#'}>
                  <Link href={child.path || '#'} className="">
                    {child.icon && <child.icon />}
                    <span className="in-data-[sidebar-collapsed=true]:hidden">{child.title}</span>

                    {child.count && <span className="ms-auto text-xs text-muted-foreground md:in-data-[sidebar-collapsed=true]:hidden">{child.count}</span>}
                  </Link>   
                </AccordionMenuItem>
              )
            })}
            {customLabels.map((child, index) => (
              <AccordionMenuItem key={`custom-${index}`} value={'#'}>
                <Link href={'#'} className="">
                  {child.icon && <child.icon />}
                  <span className="in-data-[sidebar-collapsed=true]:hidden">{child.labelTitle}</span>
                </Link>          
              </AccordionMenuItem>
            ))}
          </AccordionMenuGroup>
        )
      })}
    </AccordionMenu>
  );
}
