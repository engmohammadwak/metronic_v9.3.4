import { Fragment } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-13.config';
import { useMenu } from '@/hooks/use-menu';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

function Toolbar({ children }) {
  return (
    <div className="px-5 py-2.5 flex flex-wrap items-center justify-between gap-2.5 min-h-(--sidebar-header-height) border-b border-border shrink-0 bg-muted/40">
      {children}
    </div>
  );
}

function ToolbarActions({ children }) {
  return <div className="flex items-center gap-2.5">{children}</div>;
}

function ToolbarBreadcrumbs() {
  const pathname = usePathname();
  const { getBreadcrumb } = useMenu(pathname);
  const items = getBreadcrumb(MENU_SIDEBAR_MAIN);

  if (items.length === 0) {
    return null;
  }

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;

          return (
            <Fragment key={index}>
              {index !== items.length && (
                <BreadcrumbSeparator className="text-xs text-muted-foreground">
                  /
                </BreadcrumbSeparator>
              )}
              <BreadcrumbItem>
                {!isLast ? (
                  <BreadcrumbLink asChild>
                    <Link href={item.path || '#'}>{item.title}</Link>
                  </BreadcrumbLink>
                ) : (
                  <BreadcrumbPage>{item.title}</BreadcrumbPage>
                )}
              </BreadcrumbItem>
            </Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function ToolbarHeading() {
  return (
    <div className="flex flex-col md:flex-row md:items-center flex-wrap gap-1 lg:gap-5">
      <ToolbarBreadcrumbs />
    </div>
  );
}

function ToolbarPageTitle({ children }) {
  const pathname = usePathname();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR_MAIN);

  return (
    <h1 className="text-base font-medium leading-none text-foreground">
      {children ? children : item?.title || 'Untitled'}
    </h1>
  );
}

function ToolbarDescription({ children }) {
  return (
    <div className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
      {children}
    </div>
  );
}

export {
  Toolbar,
  ToolbarActions,
  ToolbarBreadcrumbs,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription,
};
