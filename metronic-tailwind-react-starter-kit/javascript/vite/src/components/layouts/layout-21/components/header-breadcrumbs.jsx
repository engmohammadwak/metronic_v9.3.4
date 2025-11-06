import { PanelRight } from 'lucide-react';
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

export function HeaderBreadcrumbs() {
  const { isMobile, sidebarToggle } = useLayout();

  return (
    <div className="flex flex-row items-center flex-wrap gap-1 mb-5 lg:mb-0 px-4 pt-3.5 lg:pt-0 lg:px-0">
      {!isMobile && (
        <Button
          variant="ghost"
          mode="icon"
          onClick={sidebarToggle}
          className="hidden in-data-[sidebar-open=false]:inline-flex"
        >
          <PanelRight className="opacity-100" />
        </Button>
      )}
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Teams</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-xs text-muted-foreground">
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink href="/">Thunder AI</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-xs text-muted-foreground">
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Dashboard</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
}
