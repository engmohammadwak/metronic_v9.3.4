import { useState } from 'react';
import {
  AlarmClock,
  BookOpen,
  Code2,
  Database,
  Facebook,
  FileText,
  Github,
  Grid,
  MessageCircle,
  MessageSquare,
  Palette,
  Server,
  Slack,
  Table,
  Upload,
  Workflow,
  Youtube,
  Zap,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { ScrollArea } from '@/components/ui/scroll-area';

export function SidebarContent() {
  const templates = [
    { icon: FileText, title: 'Form Template' },
    { icon: Facebook, title: 'Facebook App' },
    { icon: Code2, title: 'Code Snippet' },
    { icon: Youtube, title: 'Media Embed' },
    { icon: MessageSquare, title: 'Snapchat Bot' },
    { icon: Palette, title: 'Design Board' },
    { icon: Upload, title: 'File Upload' },
    { icon: Grid, title: 'Gallery Grid' },
    { icon: MessageCircle, title: 'Messaging Widget' },
  ];

  const dataSources = [
    { icon: Database, title: 'Database' },
    { icon: Server, title: 'API' },
    { icon: Table, title: 'Spreadsheet' },
  ];

  const automation = [
    { icon: Workflow, title: 'Workflow' },
    { icon: AlarmClock, title: 'Scheduler' },
    { icon: Zap, title: 'Trigger' },
  ];

  const integrations = [
    { icon: Slack, title: 'Slack' },
    { icon: Github, title: 'GitHub' },
    { icon: BookOpen, title: 'Notion' },
  ];

  const [selected, setSelected] = useState(2);

  const renderItems = (items) => (
    <div className="grid grid-cols-2 gap-2 shrink-0">
      {items.map((item, index) => (
        <button
          key={index}
          onClick={() => setSelected(index)}
          className={cn(
            'cursor-pointer w-full flex flex-col items-center justify-center gap-2.5 shrink-0 h-[90px] rounded-lg',
            selected === index
              ? 'border-black dark:border-white border-2 bg-muted/80'
              : 'border border-border',
          )}
        >
          <div className="size-[36px] flex items-center justify-center p-2 rounded-md border-2 border-background bg-muted/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)]">
            <item.icon className="h-5 w-5 text-muted-foreground shrink-0" />
          </div>
          <span className="text-xs font-medium text-foreground">
            {item.title}
          </span>
        </button>
      ))}
    </div>
  );

  return (
    <div className="w-full flex flex-col items-stretch">
      <ScrollArea className="grow h-[calc(100vh-5rem)] lg:h-[calc(100vh-4rem)] pe-2.5 -me-2.5">
        <Accordion
          type="single"
          variant="outline"
          collapsible
          defaultValue="reui-1"
          className="w-full lg:w-[100%] bg-background"
        >
          <AccordionItem value="reui-1">
            <AccordionTrigger className="text-secondary-foreground font-inter text-[13px] font-normal leading-[14px]">
              Pre-built Templates
            </AccordionTrigger>
            <AccordionContent>{renderItems(templates)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="reui-2">
            <AccordionTrigger className="text-secondary-foreground font-inter text-[13px] font-normal leading-[14px]">
              Data Sources
            </AccordionTrigger>
            <AccordionContent>{renderItems(dataSources)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="reui-3">
            <AccordionTrigger className="text-secondary-foreground font-inter text-[13px] font-normal leading-[14px]">
              Automation
            </AccordionTrigger>
            <AccordionContent>{renderItems(automation)}</AccordionContent>
          </AccordionItem>

          <AccordionItem value="reui-4">
            <AccordionTrigger className="text-secondary-foreground font-inter text-[13px] font-normal leading-[14px]">
              Integrations
            </AccordionTrigger>
            <AccordionContent>{renderItems(integrations)}</AccordionContent>
          </AccordionItem>
        </Accordion>
      </ScrollArea>
    </div>
  );
}
