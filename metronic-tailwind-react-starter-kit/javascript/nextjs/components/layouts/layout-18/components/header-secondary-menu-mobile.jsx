import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { MENU_NAVBAR } from '@/config/layout-18.config';
import { useMenu } from '@/hooks/use-menu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function HeaderSecondaryMenuMobile() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  return (
    <div className="px-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <Menu /> Secondary Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
          {MENU_NAVBAR.map((item, index) => {
            const active = isActive(item.path);

            return (
              <DropdownMenuItem
                key={index}
                asChild
                {...(active && { 'data-here': 'true' })}
              >
                <Link href={item.path || '#'}>
                  {item.icon && <item.icon className="size-4" />}
                  <span>{item.title}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
