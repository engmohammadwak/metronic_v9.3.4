import {
  ChevronDown,
  CreditCard,
  FileText,
  HelpCircle,
  Settings,
  Shield,
  Users,
} from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { cn } from '@/lib/utils';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useLayout } from './context';

export function Navbar({ isVertical = false }) {
  const { isMobile } = useLayout();
  const location = useLocation();
  const isVerticalLayout = isVertical || isMobile;

  const navItems = [
    { label: 'Dashboard', href: '/' },
    { label: 'Database', href: '#' },
    { label: 'Compute', href: '#', badge: 'New' },
    { label: 'Storage', href: '#' },
  ];

  const moreItems = [
    { label: 'Users', href: '#', icon: Users },
    { label: 'Security', href: '#', icon: Shield },
    { label: 'Billing', href: '#', icon: CreditCard },
    { label: 'Settings', href: '#', icon: Settings },
    { label: 'Documentation', href: '#', icon: FileText },
    { label: 'Support', href: '#', icon: HelpCircle },
  ];

  return (
    <nav
      className={cn(
        // Base styles for both layouts
        'lg:border lg:border-input text-sm text-muted-foreground bg-background rounded-xl gap-2.5 overflow-auto p-5',
        // Conditional layout: horizontal (default) or vertical
        isVerticalLayout
          ? 'flex flex-col p-2 w-full' // Vertical layout for mobile
          : 'inline-flex p-1.5', // Horizontal layout for desktop
      )}
    >
      {navItems.map((item) => {
        const isActive =
          location.pathname === item.href ||
          location.pathname.startsWith(item.href);

        return (
          <Link
            key={item.href + item.label}
            to={item.href}
            className={cn(
              'flex items-center gap-2.5 px-3 py-2.5 rounded-lg font-normal transition-colors text-white/90 text-sm',
              'hover:bg-muted hover:text-foreground',
              isActive && 'bg-white/10 text-foreground font-semibold',
              isVerticalLayout ? 'w-full justify-start' : 'h-[30px]',
            )}
          >
            <span>{item.label}</span>
            {item.badge && (
              <Badge variant="success" size="sm" appearance="outline">
                {item.badge}
              </Badge>
            )}
          </Link>
        );
      })}

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className={cn(
              'flex items-center gap-2 px-3 py-2.5 rounded-lg border-0 font-normal transition-colors text-sm text-white/90',
              'hover:bg-muted hover:text-foreground',
              'data-[state=open]:bg-muted data-[state=open]:text-foreground',
              isVerticalLayout ? 'w-full justify-start' : 'h-[30px]',
            )}
          >
            <span>More</span>
            <ChevronDown className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="w-48">
          {moreItems.map((item) => {
            const Icon = item.icon;
            return (
              <DropdownMenuItem key={item.href + item.label} asChild>
                <Link to={item.href} className="flex items-center gap-2 w-full">
                  <Icon className="size-4" />
                  <span>{item.label}</span>
                </Link>
              </DropdownMenuItem>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}
