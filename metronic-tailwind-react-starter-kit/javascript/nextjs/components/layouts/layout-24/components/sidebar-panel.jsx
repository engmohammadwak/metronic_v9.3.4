import Link from 'next/link';
import {
  Crop,
  Eraser,
  Pencil,
  PenTool,
  Plus,
  Tangent,
  TypeOutline,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from '@/components/ui/tooltip';

const toolbarItems = [
  { icon: Plus, label: 'Analytics', path: '#' },
  { icon: Tangent, label: 'Goals', path: '#' },
  { icon: Pencil, label: 'Recent Activity', path: '#' },
  { icon: Eraser, label: 'Erase', path: '#' },
  { icon: Crop, label: 'Crop', path: '#' },
  { icon: PenTool, label: 'Draw', path: '#' },
  { icon: TypeOutline, label: 'Text Tool', path: '#' },
];

export function SidebarPanel() {
  return (
    <div className="lg:fixed lg:top-0 lg:bottom-0 lg:start-[calc(var(--sidebar-width)+(var(--page-space)))] ms-1.5 lg:ms-0 w-[50px] lg:w-(--sidebar-panel-width) flex flex-col items-end justify-top shrink-0 py-2.5 lg:py-7.5 gap-2.5">
      <div className="flex flex-col gap-2.5">
        {toolbarItems.map((item, index) => (
          <Tooltip key={index}>
            <TooltipTrigger asChild>
              <Button
                asChild
                mode="icon"
                shape="circle"
                variant="outline"
                size="sm"
                className="size-[50px] border-input/60"
              >
                <Link href={item.path}>
                  <item.icon className="size-5 opacity-100" />
                </Link>
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">{item.label}</TooltipContent>
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
