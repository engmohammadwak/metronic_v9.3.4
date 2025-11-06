import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { MENU_TOOLBAR } from '@/config/layout-14.config';
import { useMenu } from '@/hooks/use-menu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function ToolbarMenuMobile() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="w-full justify-start">
          <Menu /> Page Menu
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
        {MENU_TOOLBAR.map((item, index) => {
          const active = isActive(item.path);

          return (
            <DropdownMenuItem
              key={index}
              asChild
              {...(active && { 'data-here': 'true' })}
            >
              <Link href={item.path || '#'} className="flex items-center gap-2">
                {item.icon && <item.icon />}
                {item.title}
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
