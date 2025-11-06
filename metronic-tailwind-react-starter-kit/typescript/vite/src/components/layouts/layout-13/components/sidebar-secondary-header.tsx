import { Button } from "@/components/ui/button";
import { Component, X } from "lucide-react";
import { useLayout } from "./context";

export function SidebarSecondaryHeader() {
  const { sidebarSecondaryToggle } = useLayout();
  
  return (
    <div className="flex items-center justify-between gap-2.5 shrink-0">
      <div className="flex items-center gap-2">
        <div className="size-6 rounded-md bg-indigo-500 text-white flex items-center justify-center">
          <Component className="size-4" />
        </div>
        <h3 className="text-sm font-medium">AI Summary by Thunder</h3>
      </div>
      <div className="flex items-center gap-2.5">
        <Button size="sm" variant="dim" className="-me-1.5" onClick={sidebarSecondaryToggle}><X className="size-4" /></Button>
      </div>
    </div>
  );
}
