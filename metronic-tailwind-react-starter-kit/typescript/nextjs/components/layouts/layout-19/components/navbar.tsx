import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";
import { MENU_HEADER } from "@/config/layout-19.config";
import { Button } from "@/components/ui/button";
import { useLayout } from "./context";
import { ChevronDown, HelpCircle, BookOpen, MessageCircle, Video, FileText, ExternalLink } from "lucide-react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuSeparator, DropdownMenuLabel } from "@/components/ui/dropdown-menu";
import { usePathname } from "next/navigation";
import Link from "next/link";

export function Navbar() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);
  const { isMobile } = useLayout();

  return (
    <div
      className={cn(
        "flex items-stretch w-full h-[54px] px-5 gap-5",
        isMobile ? "justify-end" : "justify-between"
      )}
    >
      {!isMobile && (
        <ScrollArea>
          <nav className="list-none flex items-stretch overflow-x-auto gap-7.5 h-[54px]">
            {MENU_HEADER.map((item, index) => {
              const active = isActive(item.path);
              return (
                <li key={index} className="flex items-stretch">
                  <Link
                    href={item.path || '#'}
                    className={cn("gap-2 inline-flex items-center border-b border-transparent text-sm font-normal whitespace-nowrap text-secondary-foreground hover:text-primary py-2.5 lg:py-0", active && "text-primary border-primary")}
                  >
                    {item.icon && <item.icon size={16} />}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </nav>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}

      <div className="flex items-center">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost">
              Help <ChevronDown />
            </Button>
          </DropdownMenuTrigger>
          
          <DropdownMenuContent className="w-56" align="end">
            <DropdownMenuLabel>Help & Support</DropdownMenuLabel>
            <DropdownMenuItem>
              <HelpCircle />
              Help Center
            </DropdownMenuItem>
            <DropdownMenuItem>
              <BookOpen />
              Documentation
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Video />
              Video Tutorials
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuLabel>Contact</DropdownMenuLabel>
            <DropdownMenuItem>
              <MessageCircle />
              Live Chat
            </DropdownMenuItem>
            <DropdownMenuItem>
              <FileText />
              Submit Ticket
            </DropdownMenuItem>
            
            <DropdownMenuSeparator />
            
            <DropdownMenuItem>
              <ExternalLink />
              Community Forum
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
