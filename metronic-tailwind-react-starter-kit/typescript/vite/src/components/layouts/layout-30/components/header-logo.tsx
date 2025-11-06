import { Link } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';
import { useState } from 'react';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetBody } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { SidebarMenu } from './sidebar-menu';
import { HeaderTitle } from './header-title';
import { HeaderBreadcrumbs } from './header-breadcrumbs';
import { Sidebar } from './sidebar';
import { HeaderTitleDefault } from './header-title-default';
import { Breadcrumb, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

export function HeaderLogo() {
  const { isMobile } = useLayout();
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="flex items-center gap-2.5">
      <div className="flex items-center justify-center">
        {isMobile && (
          <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="dim" mode="icon" className="size-6 -ms-2">
                <Menu />
              </Button>
            </SheetTrigger>
            <SheetContent
              className="p-0 gap-0 w-[250px]"
              side="left"
              close={false}
            >
              <SheetHeader className="p-0 space-y-0" />
              <SheetBody className="flex grow p-0">
                <Sidebar />
                <SidebarMenu />
              </SheetBody>
            </SheetContent>
          </Sheet>
        )}
      
        {/* Brand */}
        <div className="flex items-center justify-between -ms-2 lg:ms-0">
          {/* Logo */}
          <div className="flex items-center justify-center min-w-8">
            <Link to="/layout-30" className="">
              <img
                src={toAbsoluteUrl('/media/app/mini-logo-gray.svg')}
                className="dark:hidden shrink-0 size-7.5"
                alt="image"
              />
              <img
                src={toAbsoluteUrl('/media/app/mini-logo-gray-dark.svg')}
                className="hidden dark:inline-block shrink-0 size-7.5"
                alt="image"
              />
            </Link>
          </div>
        </div>
      </div>

      <HeaderTitleDefault />

      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbSeparator className="text-xs text-muted-foreground px-1.5">/</BreadcrumbSeparator>
        </BreadcrumbList>
      </Breadcrumb>

      <HeaderTitle />


      {!isMobile && <HeaderBreadcrumbs/>}
    </div>
  );
}
