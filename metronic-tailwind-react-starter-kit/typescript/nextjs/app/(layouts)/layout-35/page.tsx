'use client';

import { Skeleton } from "@/components/ui/skeleton"
import { Button } from '@/components/ui/button';
import {
  Toolbar,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription,
  ToolbarActions,
} from "@/components/layouts/layout-35/components/toolbar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { AudioLines, Download, Plus } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <>
      <Toolbar>
        <ToolbarHeading>
          <div className="flex items-center gap-2.5">
            <div className="flex items-center justify-center size-8 bg-fuchsia-600 rounded-lg">
              <AudioLines className="size-5 text-white" />
            </div>
            <ToolbarPageTitle>Dashboard</ToolbarPageTitle>
          </div>
          <ToolbarDescription>Manage your cloud infrastructure, AI workloads, and computing resources.</ToolbarDescription>
        </ToolbarHeading>
        <ToolbarActions>
          <div className="flex items-center space-x-1">
            <Switch id="auto-update" size="sm" defaultChecked />
            <Label htmlFor="auto-update">Auto sync</Label>
          </div>
          <Button variant="outline"><Download/> Import</Button>
          <Button variant="mono"><Plus />Create</Button>
        </ToolbarActions>
      </Toolbar>

      <div className="container"> 
        <Tabs defaultValue="overview" className="text-sm text-muted-foreground pt-5 mb-8">
          <TabsList variant="line">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="compute">Compute</TabsTrigger>
            <TabsTrigger value="storage">
              Storage
              <Badge variant="success" size="sm" appearance="outline">New</Badge>
            </TabsTrigger>
            <TabsTrigger value="database">Database</TabsTrigger>
            <TabsTrigger value="networking">Networking</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>
        </Tabs>

        <Skeleton
          className="rounded-lg grow h-[calc(100vh-10rem)] my-5 border border-dashed border-input bg-background text-subtle-stroke relative text-border"
          style={{
            backgroundImage: 'repeating-linear-gradient(125deg, transparent, transparent 5px, currentcolor 5px, currentcolor 6px)'
          }}
        >
        </Skeleton>
      </div>
    </>
  );
}