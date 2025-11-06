import { useMenu } from "@/hooks/use-menu";
import { cn } from "@/lib/utils";
import { MENU_HEADER } from "@/config/layout-25.config";
import { Button } from "@/components/ui/button";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function HeaderMenu() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  return (
    <div className="flex items-stretch">
      <nav className="list-none flex items-center gap-1.5">
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
              <Link href={item.path || '#'}>
                {item.icon && <item.icon className="size-4"/>}
                {item.title}
              </Link>
            </Button>
          )
        })}
      </nav>
    </div>
  );
}
