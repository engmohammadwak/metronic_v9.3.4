import { Link } from "react-router";
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

export function SidebarPage() {
  const pages = [
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
      defaultValue="pages-trigger"
      selectedValue="pages-trigger"
      className="space-y-7.5 px-2.5"
      classNames={{
        item: 'h-8.5 px-2.5 text-sm font-normal text-foreground hover:text-primary data-[selected=true]:bg-muted data-[selected=true]:text-foreground [&[data-selected=true]_svg]:opacity-100',
        subTrigger: 'text-xs font-normal text-muted-foreground hover:bg-transparent',
        subContent: 'ps-0',
      }}
    >
        <AccordionMenuSub value="pages">
          <AccordionMenuSubTrigger value="pages-trigger">
            <span>Custom Page</span>
            <AccordionMenuIndicator />
          </AccordionMenuSubTrigger>
          <AccordionMenuSubContent type="single" collapsible parentValue="pages-trigger">
            <AccordionMenuItem value="add-page" asChild>
              <Button variant="ghost" className="flex items-center gap-2 w-full justify-start font-normal text-[13px]">
                <Plus />
                Create a custom Page
              </Button>
            </AccordionMenuItem>

            {pages.map((page, index) => (
              <AccordionMenuItem key={index} value={`page-${page.id}`} asChild>
                <Link to="#">
                  <div className="flex items-center justify-center w-4">
                    <div className="size-1.5 rounded-full bg-green-500" />
                  </div>
                  {page.title}
                </Link>
              </AccordionMenuItem>
            ))}

          </AccordionMenuSubContent>
        </AccordionMenuSub>
      </AccordionMenu>
  );
}
