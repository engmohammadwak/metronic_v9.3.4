'use client';

import {
  Coffee,
  MessageSquareCode,
  NotebookText,
  Pin,
  Plus,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Toolbar,
  ToolbarActions,
  ToolbarDescription,
  ToolbarHeading,
  ToolbarPageTitle,
} from '@/components/layouts/layout-27/components/toolbar';

export default function Page() {
  return (
    <div className="p-2.5">
      <Toolbar>
        <div className="flex items-center gap-3">
          <ToolbarHeading>
            <ToolbarPageTitle>Team Settings</ToolbarPageTitle>
            <ToolbarDescription>
              Manage roles, permissions, and collaboration settings
            </ToolbarDescription>
          </ToolbarHeading>
        </div>
        <ToolbarActions>
          <Button mode="icon" variant="outline">
            <Coffee />
          </Button>
          <Button mode="icon" variant="outline">
            <MessageSquareCode />
          </Button>
          <Button mode="icon" variant="outline">
            <Pin />
          </Button>
          <Button variant="outline">
            <NotebookText />
            Reports
          </Button>
          <Button variant="mono">
            <Plus /> Add
          </Button>
        </ToolbarActions>
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
