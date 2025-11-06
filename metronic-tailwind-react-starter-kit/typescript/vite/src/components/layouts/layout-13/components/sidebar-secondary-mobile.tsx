import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetBody } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PanelRightOpen } from "lucide-react";
import { SidebarSecondaryHeader } from "./sidebar-secondary-header";
import { SidebarSecondaryContent } from "./sidebar-secondary-content";

export function SidebarSecondaryMobile() {
  const { pathname } = useLocation();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  // Close sheet when route changes
  useEffect(() => {
    setIsSheetOpen(false);
  }, [pathname]);

  return (
    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
      <SheetTrigger asChild>
        <Button variant="outline" mode="icon" size="sm">
          <PanelRightOpen className="size-4" />
        </Button>
      </SheetTrigger>
      <SheetContent
        className="p-0 gap-0 w-[275px]"
        side="left"
        close={false}
      >
        <SheetHeader className="p-0 space-y-0" />
        <SheetBody className="flex flex-col grow p-4">
          <SidebarSecondaryHeader />
          <SidebarSecondaryContent />
        </SheetBody>
      </SheetContent>
    </Sheet>
  );
}
