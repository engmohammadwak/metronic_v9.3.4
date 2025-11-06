import { PanelRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';

export function HeaderTitle() {
  const { isSidebarOpen, isMobile, sidebarToggle } = useLayout();

  return (
    <div className="flex flex-col items-start justify-center gap-0.5 pb-5 lg:pb-0 lg:mb-0 lg:px-0">
      <div className="flex items-center gap-2">
        {!isSidebarOpen && !isMobile && (
          <Button
            mode="icon"
            variant="dim"
            onClick={() => sidebarToggle()}
            className="-ms-2"
          >
            <PanelRight />
          </Button>
        )}
        <div className="">
          <h1 className="text-base font-semibold">Updates</h1>
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-xs text-muted-foreground">
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbLink asChild>
                  <Link to="/">Account</Link>
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="text-xs text-muted-foreground">
                /
              </BreadcrumbSeparator>
              <BreadcrumbItem>
                <BreadcrumbPage>Updates</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
}
