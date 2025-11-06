import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  BarChart3,
  Bell,
  CheckSquare,
  Code,
  LayoutGrid,
  MessageCircleMore,
  MessageSquare,
  Settings,
  Shield,
  ShoppingCart,
  UserCircle,
  Users,
} from 'lucide-react';
import { getHeight } from '@/lib/dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { useViewport } from '@/hooks/use-viewport';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { AppsDropdownMenu } from '@/components/layouts/layout-1/shared/topbar/apps-dropdown-menu';
import { ChatSheet } from '@/components/layouts/layout-1/shared/topbar/chat-sheet';
import { UserDropdownMenu } from '@/components/layouts/layout-1/shared/topbar/user-dropdown-menu';

const menuItems = [
  { icon: BarChart3, tooltip: 'Dashboard', path: '#', rootPath: '#' },
  {
    icon: UserCircle,
    tooltip: 'Profile',
    path: '#',
    rootPath: '#',
  },
  {
    icon: Settings,
    tooltip: 'Account',
    path: '#',
    rootPath: '#',
  },
  {
    icon: Users,
    tooltip: 'Network',
    path: '#',
    rootPath: '#',
  },
  {
    icon: ShoppingCart,
    tooltip: 'Store - Client',
    path: '#',
    rootPath: '#',
  },
  {
    icon: Shield,
    tooltip: 'Authentication',
    path: '#',
    rootPath: '#',
  },
  {
    icon: MessageSquare,
    tooltip: 'Security Logs',
    path: '#',
    rootPath: '#',
  },
  {
    icon: Bell,
    tooltip: 'Notifications',
    path: '#',
    rootPath: '#',
  },
  {
    icon: CheckSquare,
    tooltip: 'ACL',
    path: '#',
    rootPath: '#',
  },
  { icon: Code, tooltip: 'API Keys', path: '#', rootPath: '' },
];

export function SidebarPrimary() {
  const headerRef = useRef(null);
  const footerRef = useRef(null);
  const [scrollableHeight, setScrollableHeight] = useState(0);
  const [viewportHeight] = useViewport();
  const scrollableOffset = 80;
  const pathname = usePathname();

  useEffect(() => {
    if (headerRef.current && footerRef.current) {
      const headerHeight = getHeight(headerRef.current);
      const footerHeight = getHeight(footerRef.current);
      const availableHeight =
        viewportHeight - headerHeight - footerHeight - scrollableOffset;
      setScrollableHeight(availableHeight);
    } else {
      setScrollableHeight(viewportHeight);
    }
  }, [viewportHeight]);

  const [selectedMenuItem, setSelectedMenuItem] = useState(menuItems[0]);

  useEffect(() => {
    menuItems.forEach((item) => {
      if (
        item.rootPath === pathname ||
        (item.rootPath && pathname.includes(item.rootPath))
      ) {
        setSelectedMenuItem(item);
      }
    });
  }, [pathname]);

  return (
    <TooltipProvider>
      <div className="flex flex-col items-stretch shrink-0 gap-5 py-5 w-[70px] border-e border-input">
        <div
          ref={headerRef}
          className="hidden lg:flex items-center justify-center shrink-0"
        >
          <Link href="/layout-4">
            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
              className="dark:hidden min-h-[30px]"
              alt=""
            />

            <img
              src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
              className="hidden dark:block min-h-[30px]"
              alt=""
            />
          </Link>
        </div>

        <div className="flex grow shrink-0">
          <div
            className="kt-scrollable-y-hover grow gap-2.5 shrink-0 flex ps-4 flex-col"
            style={{ height: `${scrollableHeight}px` }}
          >
            {menuItems.map((item, index) => (
              <Tooltip key={index}>
                <TooltipTrigger asChild>
                  <Button
                    asChild
                    variant="ghost"
                    mode="icon"
                    {...(item === selectedMenuItem
                      ? { 'data-state': 'open' }
                      : {})}
                    className={cn(
                      'shrink-0 rounded-md size-9',
                      'data-[state=open]:bg-background data-[state=open]:border data-[state=open]:border-input data-[state=open]:text-primary',
                      'hover:bg-background hover:border hover:border-input hover:text-primary',
                    )}
                  >
                    <Link href={item.path}>
                      <item.icon className="size-4.5!" />
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="right">{item.tooltip}</TooltipContent>
              </Tooltip>
            ))}
          </div>
        </div>

        <div
          ref={footerRef}
          className="flex flex-col gap-4 items-center shrink-0"
        >
          <ChatSheet
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                className="size-9 hover:bg-background hover:[&_svg]:text-primary"
              >
                <MessageCircleMore className="size-4.5!" />
              </Button>
            }
          />

          <AppsDropdownMenu
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                className="size-9 hover:bg-background hover:[&_svg]:text-primary"
              >
                <LayoutGrid className="size-4.5!" />
              </Button>
            }
          />

          <UserDropdownMenu
            trigger={
              <img
                className="size-9 rounded-full border border-border shrink-0 cursor-pointer"
                src={toAbsoluteUrl('/media/avatars/300-2.png')}
                alt="User Avatar"
              />
            }
          />
        </div>
      </div>
    </TooltipProvider>
  );
}
