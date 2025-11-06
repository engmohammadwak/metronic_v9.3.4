import { ScrollArea } from "@/components/ui/scroll-area";
import { SidebarHeader } from "./sidebar-header";
import { useLayout } from "./context";
import { useState } from "react";
import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Boxes,
  Briefcase,
  AppWindow,
  UserSquare,
  Settings,
  Share2,
  Shield,
} from "lucide-react";
import { SidebarFooter } from "./sidebar-footer";

export function SidebarContent() {
  const { isMobile } = useLayout();

  const templates = [
    { icon: LayoutDashboard, title: "Dashboard" },
    { icon: Boxes, title: "UI Bloks" },
    { icon: Briefcase, title: "Business Concepts" },
    { icon: AppWindow, title: "Apps" },
    { icon: UserSquare, title: "Public Profiles" },
    { icon: Settings, title: "Account Settings" },
    { icon: Share2, title: "Network" },
    { icon: Shield, title: "Authentication" },
  ];

  const [selected, setSelected] = useState<number | null>(0);

  const renderItems = (items: { icon: LucideIcon; title: string }[]) => (
    <div className="grid grid-cols-2 gap-2.5 shrink-0 p-5">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={cn(
            "cursor-pointer w-full flex flex-col items-center justify-center gap-2.5 shrink-0 h-[90px] rounded-lg border transition-all duration-200",
            selected === index
              ? "border-black dark:border-white border-2 bg-muted/80"
              : "border border-border hover:border-zinc-950 dark:hover:border-zinc-300 hover:bg-muted/40"
          )}
        >
          <div
            className={cn(
              "size-[36px] flex items-center justify-center p-2 rounded-md border-2 border-background bg-muted/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)] transition-colors duration-200",
              selected === index ? "bg-zinc-950" : "hover:bg-muted"
            )}
          >
            <item.icon
              className={cn(
                "h-5 w-5 shrink-0 transition-colors duration-200",
                selected === index ? "text-white" : "text-muted-foreground"
              )}
            />
          </div>
          <span className="text-xs font-medium text-foreground">{item.title}</span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="flex flex-col items-stretch grow">
      {!isMobile && <SidebarHeader />}
      <ScrollArea className="shrink-0 h-[calc(100vh-3.5rem)] lg:h-[calc(100vh-8.5rem)]">
        {renderItems(templates)}
      </ScrollArea>
      <SidebarFooter />
    </div>
  );
}
