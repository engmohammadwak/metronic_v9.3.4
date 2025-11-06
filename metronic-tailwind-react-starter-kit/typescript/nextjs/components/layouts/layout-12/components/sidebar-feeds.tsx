import { Plus } from "lucide-react";
import {
  AccordionMenu,
  AccordionMenuIndicator,
  AccordionMenuSub,
  AccordionMenuSubTrigger,
  AccordionMenuSubContent,
  AccordionMenuItem,
} from '@/components/ui/accordion-menu';
import { Button } from "@/components/ui/button";
import Link from 'next/link';

export function SidebarFeeds() {
  const feeds = [
    {
      id: 1,
      title: 'New order received',
      description: 'New order received',
      icon: 'plus',
    },
    {
      id: 2,
      title: 'New customer registered',
      description: 'New customer registered',
      icon: 'plus',
    },
  ];

  return (
    <AccordionMenu
      type="single"
      collapsible
      defaultValue="feeds-trigger"
      selectedValue="feeds-trigger"
      className="space-y-7.5 px-2.5"
      classNames={{
        item: 'h-8.5 px-2.5 text-sm font-normal text-foreground hover:text-primary data-[selected=true]:bg-muted data-[selected=true]:text-foreground [&[data-selected=true]_svg]:opacity-100',
        subTrigger: 'text-xs font-normal text-muted-foreground hover:bg-transparent',
        subContent: 'ps-0',
      }}
    >
        <AccordionMenuSub value="feeds">
          <AccordionMenuSubTrigger value="feeds-trigger">
            <span>Custom Feed</span>
            <AccordionMenuIndicator />
          </AccordionMenuSubTrigger>
          <AccordionMenuSubContent type="single" collapsible parentValue="feeds-trigger">
            <AccordionMenuItem value="add-feed" asChild>
              <Button variant="ghost" className="flex items-center gap-2 w-full justify-start font-normal text-[13px]">
                <Plus />
                Create a custom feed
              </Button>
            </AccordionMenuItem>

            {feeds.map((feed, index) => (
              <AccordionMenuItem key={index} value={`feed-${feed.id}`} asChild>
                <Link href="#">
                  <div className="flex items-center justify-center w-4">
                    <div className="size-1.5 rounded-full bg-green-500" />
                  </div>
                  {feed.title}
                </Link>
              </AccordionMenuItem>
            ))}

          </AccordionMenuSubContent>
        </AccordionMenuSub>
      </AccordionMenu>
  );
}
