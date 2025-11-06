import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  Toolbar,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription,
  ToolbarActions,
} from "@/components/layouts/layout-32/components/toolbar";

export function Layout32Page() {
  return (
    <>
      <Toolbar>
        <ToolbarHeading>
          <div className="flex items-center gap-2">
            <ToolbarPageTitle>Main Page</ToolbarPageTitle>
            <Badge size="sm" appearance="light">Plus</Badge>
          </div>
          <ToolbarDescription>Manage invoices, plans, and payment methods.</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <Button variant="outline">Billing plan</Button>
          <Button variant="outline">Invoices</Button>
        </ToolbarActions>
      </Toolbar>

      <div className="container"> 
        <Skeleton
          className="rounded-lg grow h-[calc(100vh-10rem)] mt-10 mb-5 border border-dashed border-input bg-background text-subtle-stroke relative text-border"
          style={{
            backgroundImage: 'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)'
          }}
        >

        </Skeleton>
      </div>
    </>
  );
}
