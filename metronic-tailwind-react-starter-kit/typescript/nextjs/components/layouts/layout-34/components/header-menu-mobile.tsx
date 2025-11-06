import { useMenu } from "@/hooks/use-menu";
import { Menu, ChevronDown } from "lucide-react";
import { MENU_HEADER } from "@/config/layout-34.config";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toAbsoluteUrl } from "@/lib/helpers";
import { cn } from "@/lib/utils";
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function HeaderMenuMobile() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  const renderMenuItem = (item: typeof MENU_HEADER[number], index: number) => {
    const active = isActive(item.path);
    const hasChildren = item.children && item.children.length > 0;

    if (hasChildren) {
      return (
        <DropdownMenu key={index}>
          <DropdownMenuTrigger asChild>
            <Button
              variant="ghost"
              className={cn(
                "w-full justify-start items-center gap-1 text-sm font-normal px-2.5 h-[36px]",
                active
                  ? "bg-muted text-foreground border"
                  : "text-secondary-foreground hover:text-primary"
              )}
            >
              {item.img && (
                <div className="size-[22px] flex items-center justify-center rounded-md border-2 border-background bg-muted/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)]">
                  <img
                    src={toAbsoluteUrl(`/media/app/${item.img}`)}
                    className="size-4"
                    alt={`${item.title} icon`}
                  />
                </div>
              )}
              {item.title}
              <ChevronDown className="h-3.5 w-3.5 opacity-60" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            side="right"
            sideOffset={9}
            className="w-[300px] p-3"
          >
            <div className="space-y-1">
              {item.children?.map((child, childIndex) => (
                <DropdownMenuItem key={childIndex} asChild>
                  <Link
                    href={child.path || '#'}
                    className="flex flex-col items-start gap-1 px-2 py-2.5 cursor-pointer"
                  >
                    <div className="text-sm font-medium text-foreground">
                      {child.title}
                    </div>
                    {child.desc && (
                      <div className="text-xs text-muted-foreground leading-relaxed">
                        {child.desc}
                      </div>
                    )}
                  </Link>
                </DropdownMenuItem>
              ))}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }

    return (
      <DropdownMenuItem
        key={index}
        asChild
        {...(active && { 'data-here': 'true' })}
      >
        <Link
          href={item.path || '#'}
          className={cn(
            "flex items-center gap-1 text-sm font-normal px-2.5 py-2.5",
            active
              ? "bg-muted text-foreground border"
              : "text-secondary-foreground hover:text-primary"
          )}
        >
          {item.img && (
            <div className="size-[22px] flex items-center justify-center rounded-md border-2 border-background bg-muted/80 shadow-[0_1px_3px_0_rgba(0,0,0,0.14)]">
              <img
                src={toAbsoluteUrl(`/media/app/${item.img}`)}
                className="size-4"
                alt={`${item.title} icon`}
              />
            </div>
          )}
          {item.title}
        </Link>
      </DropdownMenuItem>
    );
  };

  return (
    <div className="px-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-full justify-start">
            <Menu /> Main Menu
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-(--radix-dropdown-menu-trigger-width)">
          {MENU_HEADER.map(renderMenuItem)}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}