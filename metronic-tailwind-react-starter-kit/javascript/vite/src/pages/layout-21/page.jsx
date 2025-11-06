import { Eye, Funnel, MessageSquareCode, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarWrapper,
} from '@/components/layouts/layout-21/components/toolbar';

export function Layout21Page() {
  return (
    <div className="container-fluid">
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Dashboard</ToolbarPageTitle>
        </ToolbarHeading>
        <ToolbarWrapper>
          <Tabs
            defaultValue="overview"
            className="text-sm text-muted-foreground"
          >
            <TabsList size="xs">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="permissions">Permissions</TabsTrigger>
              <TabsTrigger value="billing">Billing</TabsTrigger>
              <TabsTrigger value="members">Members</TabsTrigger>
            </TabsList>
          </Tabs>

          <ToolbarActions>
            <Button size="sm" variant="outline">
              <Funnel />
              Sort
            </Button>
            <Button size="sm" variant="outline">
              <Eye />
              View
            </Button>
            <Button size="sm" variant="outline">
              <MessageSquareCode />
              Filter
            </Button>
            <Button size="sm" variant="outline" mode="icon">
              <Search />
            </Button>
          </ToolbarActions>
        </ToolbarWrapper>
      </Toolbar>
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
