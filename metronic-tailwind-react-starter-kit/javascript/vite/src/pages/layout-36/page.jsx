import { useState } from 'react';
import { ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import AvatarDemo from '@/components/layouts/layout-36/components/avatar';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarSidebarToggle,
} from '@/components/layouts/layout-36/components/toolbar';

export function Layout36Page() {
  const [viewMode, setViewMode] = useState('Week');

  const moreItems = [
    { label: 'Month', icon: 'M' },
    { label: 'Week', icon: 'W' },
    { label: 'Day', icon: 'D' },
  ];

  const KeyIcon = ({ label }) => (
    <div className="size-5 border text-[0.625rem] rounded-md flex items-center justify-center text-foreground/80">
      {label.toUpperCase()}
    </div>
  );

  return (
    <div className="container-fluid">
      <Toolbar>
        <div className="flex items-center gap-3">
          <ToolbarSidebarToggle />
          <ToolbarHeading>
            <ToolbarPageTitle>October 2025</ToolbarPageTitle>
            <ToolbarDescription>
              <AvatarDemo />
            </ToolbarDescription>
          </ToolbarHeading>
        </div>

        <ToolbarActions>
          <Button variant="ghost" mode="icon">
            <ChevronLeft />
          </Button>
          <Button variant="ghost" mode="icon">
            <ChevronRight />
          </Button>
          <Button variant="mono">Today</Button>
          <Button variant="outline">New Event</Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <span>{viewMode}</span>
                <ChevronDown className="opacity-100" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {moreItems.map((item) => (
                <DropdownMenuItem
                  key={item.label}
                  onSelect={() => setViewMode(item.label)}
                  className="flex items-center justify-between"
                >
                  <span>{item.label}</span>
                  <KeyIcon label={item.icon} />
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </ToolbarActions>
      </Toolbar>

      <Skeleton
        className="rounded-lg grow h-[calc(100vh-8.5rem)] border border-dashed border-input bg-background text-subtle-stroke relative text-border"
        style={{
          backgroundImage:
            'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)',
        }}
      />
    </div>
  );
}
