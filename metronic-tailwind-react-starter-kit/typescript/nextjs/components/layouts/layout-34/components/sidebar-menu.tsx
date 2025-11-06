import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { BookOpen, House, Layers, PanelLeft, SquareArrowOutUpRight } from "lucide-react";
import Link from "next/link";

export function SidebarMenu() {
  const items = [
    {
      id: 1,
      title: 'Overview',
      path: '/layout-34',
      icon: House,
    },
    {
      id: 2,
      title: 'Starter kits',
      path: '#',
      icon: Layers,
      badge: '34',
    },
    {
      id: 3,
      title: 'Apps & Concepts',
      path: '#',
      icon: SquareArrowOutUpRight,
      badge: '12',
    },
    {
      id: 4,
      title: 'Pages',
      path: '#',
      icon: BookOpen,
      badge: '72',
    },
    {
      id: 5,
      title: 'Demos',
      path: '#',
      icon: PanelLeft,
      badge: '10',
    },
  ];

  return (
    <nav className="flex flex-col space-y-0.5 px-2.5 pt-1">
      {items.map((item) => {
        const isActive = location.pathname === item.path;

        return (
          <Link
            key={item.id}
            href={item.path}
            className={cn(
              'flex items-center justify-between rounded-lg px-2.5 text-sm font-medium transition-colors h-[34px] border border-transparent',
              'hover:bg-muted/60 hover:text-foreground',
              isActive
                ? 'bg-muted text-foreground border-border'
                : 'text-muted-foreground'
            )}
          >
            <div className="flex items-center gap-2">
              <div className="size-[24px] flex items-center justify-center rounded-md border-[2px] border-background bg-muted shadow-[0_1px_3px_0_rgba(0,0,0,0.14)]">
                <item.icon className="size-3.5" />
              </div>
              <span>{item.title}</span>
            </div>

            {item.badge && (
              <Badge variant="secondary" appearance="light" size="sm">
                {item.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
}
