import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { RiGatsbyLine, RiNextjsLine, RiReactjsLine } from '@remixicon/react';
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { GitFork } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function SidebarPrimary() {
  return (
    <div className="flex flex-col items-center justify-between shrink-0 p-3.5 gap-2.5">
      <div className="grid w-full">
        <div className="overflow-auto">
          <Tabs defaultValue="directory" className="w-full flex text-sm text-muted-foreground grow [&_[data-slot=tabs-trigger]]:flex-1">
            <TabsList size="xs" className="w-full border border-border/80 bg-muted/80 [&_[data-slot=tabs-trigger]]:text-foreground [&_[data-slot=tabs-trigger]]:font-normal [&_[data-slot=tabs-trigger][data-state=active]]:shadow-lg">
              <TabsTrigger value="directory">
                Directory
              </TabsTrigger>
              <TabsTrigger value="elements">
                Elements
              </TabsTrigger>
              <TabsTrigger value="control-panel">
                Control Panel
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </div>

      <Separator />

      <Select defaultValue="1" indicatorPosition="right">
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Select framework" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="1">
            <span className="flex items-center gap-2">
              <GitFork className="size-4 opacity-60" />
              <span>Workspace: DevOps</span>
            </span>
          </SelectItem>
          <SelectItem value="2">
            <span className="flex items-center gap-2">
              <RiReactjsLine className="size-4 opacity-60" />
              <span>React</span>
            </span>
          </SelectItem>
          <SelectItem value="3">
            <span className="flex items-center gap-2">
              <RiNextjsLine className="size-4 opacity-60" />
              <span>Next.js</span>
            </span>
          </SelectItem>
          <SelectItem value="4">
            <span className="flex items-center gap-2">
              <RiGatsbyLine className="size-4 opacity-60" />
              <span>Gatsby</span>
            </span>
          </SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
