import { Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { MENU_HEADER } from "@/config/layout-32.config";
import { Link } from "react-router";
import { useLocation } from "react-router-dom";
import { useMenu } from "@/hooks/use-menu";
import { useLayout } from "./context";
import { Separator } from "@/components/ui/separator";

export function HeaderToolbar() {
  const { theme, setTheme } = useTheme();
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);
  const {isMobile} = useLayout();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-end gap-2.5">
      {!isMobile && (
        <nav className="list-none flex items-center gap-1">
          {MENU_HEADER.map((item, index) => {
            const active = isActive(item.path);
            return (
              <Button 
                key={index}
                variant="ghost"
                className={cn(
                  "inline-flex items-center text-sm font-normal",
                  active 
                    ? "bg-background text-foreground border" 
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
      )}

      <Separator orientation="vertical" className="hidden lg:block h-6 mx-2.5 my-auto"/>

      <Button variant="ghost">Log in</Button>
      <Button variant="mono">Sign up</Button>

      {/* Theme Toggle */}
      <Button variant="dim" mode="icon" onClick={toggleTheme}>
        {theme === "light" ? <Moon className="size-4" /> : <Sun className="size-4" />}
        <span>{theme === "light" ? "" : ""}</span>
      </Button>
    </div>
  );
}
