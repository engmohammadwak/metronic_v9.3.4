import {
  Bell,
  Bookmark,
  Clock,
  Eye,
  Filter,
  Grid3X3,
  Layout,
  List,
  MessageSquare,
  Settings,
  Star,
  TrendingUp,
  Users,
  Zap,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/layout-12/components/toolbar';

export function Layout12Page() {
  return (
    <div className="py-5 max-w-5xl mx-auto">
      <div className="flex grow gap-10">
        <div className="container grow space-y-5">
          <Toolbar>
            <ToolbarHeading>
              <ToolbarPageTitle>Community Feeds</ToolbarPageTitle>
              <ToolbarDescription>
                Manage your feed preferences and filters
              </ToolbarDescription>
            </ToolbarHeading>
            <ToolbarActions>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="hover:[&_[data-slot=badge]]:bg-accent-foreground/10 data-[state=open]:[&_[data-slot=badge]]:bg-accent-foreground/10"
                  >
                    <Filter className="size-3.5" />
                    Manage Feeds
                    <Badge variant="secondary" size="sm">
                      3
                    </Badge>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {/* Feed Management */}
                  <DropdownMenuItem>
                    <Bookmark />
                    Saved Posts
                    <Badge variant="secondary" size="sm">
                      12
                    </Badge>
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Clock />
                    Recent Activity
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <TrendingUp />
                    Trending Today
                  </DropdownMenuItem>

                  <DropdownMenuSeparator />

                  {/* Filter Options */}
                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Filter />
                      Filter Posts
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-48">
                      <DropdownMenuItem>
                        <Star />
                        Showcase Only
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <MessageSquare />
                        Help Wanted
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Users />
                        Discussions
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Zap />
                        Tutorials
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSub>
                    <DropdownMenuSubTrigger>
                      <Eye />
                      View Options
                    </DropdownMenuSubTrigger>
                    <DropdownMenuSubContent className="w-48">
                      <DropdownMenuItem>
                        <Layout />
                        Compact View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Grid3X3 />
                        Card View
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <List />
                        List View
                      </DropdownMenuItem>
                    </DropdownMenuSubContent>
                  </DropdownMenuSub>

                  <DropdownMenuSeparator />

                  {/* Notifications */}
                  <DropdownMenuItem>
                    <Bell />
                    Notification Settings
                  </DropdownMenuItem>

                  <DropdownMenuItem>
                    <Settings />
                    Feed Preferences
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </ToolbarActions>
          </Toolbar>

          <Skeleton className="rounded-lg grow h-screen"></Skeleton>
        </div>
        <div className="hidden xl:flex gap-3.5 w-[250px] flex-shrink-0">
          <Skeleton className="rounded-lg grow h-[500px]"></Skeleton>
        </div>
      </div>
    </div>
  );
}
