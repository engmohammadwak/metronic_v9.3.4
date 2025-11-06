import { toAbsoluteUrl } from "@/lib/helpers";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetBody } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useEffect, useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { SidebarContent } from "./sidebar-content";
import { useLocation } from "react-router";

export function HeaderBrand() {
  const { pathname } = useLocation();
  const isMobile = useIsMobile();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);
  
  return (
    <div className="flex items-center -ms-1">
      <img src={toAbsoluteUrl('/media/app/mini-logo.svg')} alt="" className="h-4"/>
      {isMobile && (
        <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
          <SheetTrigger asChild>
            <Button variant="dim" mode="icon" className="hover:text-white">
              <Menu />
            </Button>
          </SheetTrigger>
          <SheetContent
            className="p-0 gap-0 w-(--sidebar-width)"
            side="left"
            close={false}
          >
            <SheetHeader className="p-0 space-y-0" />
            <SheetBody className="flex flex-col grow p-0 [--sidebar-space-x:calc(var(--spacing)*2.5)]">
              <SidebarContent />
            </SheetBody>
          </SheetContent>
        </Sheet>
      )}
    </div>
  );
};

