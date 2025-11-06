import { useCallback, useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Badge,
  ChevronDown,
  FileText,
  Settings,
  SquareCode,
  UserCircle,
} from 'lucide-react';
import {
  AccordionMenu,
  AccordionMenuGroup,
  AccordionMenuItem,
  AccordionMenuLabel,
} from '@/components/ui/accordion-menu';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function SidebarMenuDashboard() {
  const pathname = usePathname();

  const dropdownItems = useMemo(
    () => [
      {
        title: 'Client API',
        path: '#',
        icon: SquareCode,
        active: true,
      },
      {
        title: 'Profile',
        path: '#',
        icon: UserCircle,
      },
      {
        title: 'My Account',
        path: '#',
        icon: Settings,
      },
      {
        title: 'Projects',
        path: '#',
        icon: FileText,
      },
      {
        title: 'Personal info',
        path: '#',
        icon: Badge,
      },
    ],

    [],
  );

  const currentDropdownItem = dropdownItems[0];

  const menuItems = useMemo(
    () => [
      { label: 'Configuration' },
      { title: 'API Setup', path: '#' },
      { title: 'Team Settings', path: '#' },
      { title: 'Authentication', path: '#' },
      { title: 'Endpoints Configs', path: '#' },
      { title: 'Rate Limiting', path: '#' },
      { label: 'Security' },
      { title: 'Data Encryption', path: '#' },
      { title: 'Text', path: '#' },
      { title: 'Access Control', path: '#' },
      { label: 'Analytics' },
      {
        title: 'Incident Response',
        path: '#',
      },
      { title: 'Fetching Data', path: '#' },
      { title: 'Custom Reports', path: '#' },
      {
        title: 'Real Time Analytics',
        path: '#',
      },
      { title: 'Exporting Data', path: '#' },
      { title: 'Dashboard Integration', path: '#' },
    ],

    [], // Empty dependency array since the data is static
  );

  const classNames = {
    root: 'space-y-1',
    label:
      'uppercase text-xs font-medium text-muted-foreground/80 pt-6 mb-2 pb-0',
    item: 'h-8 hover:bg-background border-accent text-accent-foreground hover:text-primary data-[selected=true]:text-primary data-[selected=true]:bg-background data-[selected=true]:font-medium',
  };

  const matchPath = useCallback(
    (path) =>
      path === pathname || (path.length > 1 && pathname.startsWith(path)),
    [pathname],
  );

  const buildDropdown = () => {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            mode="input"
            className="w-full justify-between focus-visible:ring-0 focus-visible:ring-offset-0"
          >
            <span className="flex items-center gap-2">
              <currentDropdownItem.icon />
              {currentDropdownItem.title}
            </span>
            <ChevronDown className="size-3.5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
          {dropdownItems.map((item, index) => (
            <DropdownMenuItem key={index} asChild>
              <Link href={item.path}>
                <item.icon />
                <span>{item.title}</span>
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    );
  };

  const memoizedMenu = useMemo(
    () => (
      <AccordionMenuGroup>
        {menuItems.map((item, index) =>
          'label' in item ? (
            <AccordionMenuLabel key={index}>{item.label}</AccordionMenuLabel>
          ) : (
            <AccordionMenuItem
              key={index}
              value={item.path || `item-${index}`}
              className="text-sm"
            >
              <Link href={item.path || '#'}>{item.title}</Link>
            </AccordionMenuItem>
          ),
        )}
      </AccordionMenuGroup>
    ),

    [menuItems],
  );

  const buildMenu = () => {
    return (
      <AccordionMenu
        selectedValue={'#dashbaord'}
        matchPath={matchPath}
        type="single"
        collapsible
        classNames={classNames}
      >
        {memoizedMenu}
      </AccordionMenu>
    );
  };

  return (
    <div className="w-full space-y-1">
      {buildDropdown()}
      {buildMenu()}
    </div>
  );
}
