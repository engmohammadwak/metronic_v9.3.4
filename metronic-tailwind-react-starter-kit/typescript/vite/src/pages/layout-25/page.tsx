import { Skeleton } from "@/components/ui/skeleton";
import { Toolbar, ToolbarHeading, ToolbarPageTitle, ToolbarActions } from "@/components/layouts/layout-25/components/toolbar";
import { ToolbarBreadcrumbs } from "@/components/layouts/layout-25/components/toolbar-breadcrumbs";
import { Button } from "@/components/ui/button";
import { MessageSquareCode, NotebookText, Pin, Plus } from "lucide-react";

export function Layout25Page() {
  return (
    <div className="container-fluid py-5"> 
      <Toolbar>
        <ToolbarHeading>
          <ToolbarPageTitle>Team Settings</ToolbarPageTitle>
          <ToolbarBreadcrumbs />
        </ToolbarHeading>

        <ToolbarActions>
          <Button mode="icon" variant="outline"><MessageSquareCode /></Button>
          <Button mode="icon" variant="outline"><Pin /></Button>
          <Button variant="outline"><NotebookText />Reports</Button>
          <Button variant="outline"><Plus /> Add</Button>
        </ToolbarActions>
      </Toolbar>
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
