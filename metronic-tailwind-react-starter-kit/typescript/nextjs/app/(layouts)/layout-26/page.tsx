'use client';

import { Toolbar, ToolbarActions, ToolbarDescription, ToolbarHeading, ToolbarPageTitle, ToolbarSidebarToggle } from "@/components/layouts/layout-26/components/toolbar";
import { Button } from "@/components/ui/button";
import { ClipboardList, Coffee, MessageSquareCode, Pin, Plus } from "lucide-react";

export default function Page() {
  return (
    <div className="container-fluid"> 
      <Toolbar>
        <div className="flex items-center gap-3">
          <ToolbarSidebarToggle />
          <ToolbarHeading>
            <ToolbarPageTitle>Team Settings</ToolbarPageTitle>
            <ToolbarDescription>Some info tells the story</ToolbarDescription>
          </ToolbarHeading>
        </div>
        <ToolbarActions>
          <Button mode="icon" variant="outline"><Coffee /></Button>
          <Button mode="icon" variant="outline"><MessageSquareCode /></Button>
          <Button mode="icon" variant="outline"><Pin /></Button>
          <Button variant="outline"><ClipboardList /> Reports</Button>
          <Button variant="mono"><Plus /> Add</Button>
        </ToolbarActions>
      </Toolbar>
      <div className="rounded-lg grow h-screen border-2 border-dashed bg-background"></div>
    </div>
  );
}