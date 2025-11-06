import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";
import { MENU_NAVBAR } from "@/config/layout-22.config";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export function Navbar() {
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);

  return (
    <div className="container-fluid lg:px-10 flex items-stretch w-full h-[54px] gap-5 lg:in-data-[header-sticky=true]:hidden">
      <ScrollArea>
        <nav className="list-none flex items-stretch overflow-x-auto gap-7.5 h-[54px]">
          {MENU_NAVBAR.map((item, index) => {
            const active = isActive(item.path);
            return (
              <li key={index} className="flex items-stretch">
                <Link
                  to={item.path || '#'}
                  className={cn(
                    "gap-2 inline-flex items-center border-b border-transparent text-sm font-normal whitespace-nowrap text-secondary-foreground hover:text-primary py-2.5 lg:py-0", 
                    "[&_svg]:text-muted-foreground",
                    active && "text-primary border-primary [&_svg]:text-primary")}
                >
                  {item.icon && <item.icon className="size-4"/>}
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </nav>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
}
