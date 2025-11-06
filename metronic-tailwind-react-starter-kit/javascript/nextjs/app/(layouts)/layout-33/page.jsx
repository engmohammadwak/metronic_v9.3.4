'use client';

import { PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useLayout } from '@/components/layouts/layout-33/components/context';
import { Navbar } from '@/components/layouts/layout-33/components/navbar';
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
} from '@/components/layouts/layout-33/components/toolbar';

export default function Page() {
  const { isSidebarOpen, isMobile, sidebarToggle } = useLayout();

  return (
    <div className="container-fluid">
      <Toolbar>
        <div className="flex items-center gap-3">
          {!isSidebarOpen && !isMobile && (
            <Button
              mode="icon"
              variant="dim"
              onClick={() => sidebarToggle()}
              className="-ms-2"
            >
              <PanelRight />
            </Button>
          )}
          <ToolbarHeading>
            <Tabs
              defaultValue="overview"
              className="text-sm text-muted-foreground"
            >
              <TabsList size="xs">
                <TabsTrigger value="overview">Overview</TabsTrigger>
                <TabsTrigger value="activity">Activity</TabsTrigger>
                <TabsTrigger value="metrics">Metrics</TabsTrigger>
                <TabsTrigger value="reports">Reports</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
              </TabsList>
            </Tabs>
          </ToolbarHeading>
        </div>
        {!isMobile && (
          <ToolbarActions>
            <Navbar />
          </ToolbarActions>
        )}
      </Toolbar>

      <Skeleton
        className="rounded-lg grow h-screen border border-dashed border-input bg-background text-subtle-stroke relative text-border"
        style={{
          backgroundImage:
            'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)',
        }}
      ></Skeleton>
    </div>
  );
}
