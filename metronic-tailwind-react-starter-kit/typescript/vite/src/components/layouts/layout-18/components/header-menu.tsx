import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";
import { MENU_HEADER } from "@/config/layout-18.config";
import { Button } from "@/components/ui/button";

export function HeaderMenu() {
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);

  return (
    <div className="flex items-stretch">
      <nav className="list-none flex items-center gap-2">
        {MENU_HEADER.map((item, index) => {
          const active = isActive(item.path);
          return (
            <Button 
              key={index}
              variant="ghost"
              className={cn(
                "inline-flex items-center text-sm font-medium",
                active 
                  ? "bg-muted text-foreground border" 
                  : "text-secondary-foreground hover:text-primary"
              )}
              asChild
            >
              <Link to={item.path || '#'}>
                {item.title}
              </Link>
            </Button>
          )
        })}
      </nav>
    </div>
  );
}
