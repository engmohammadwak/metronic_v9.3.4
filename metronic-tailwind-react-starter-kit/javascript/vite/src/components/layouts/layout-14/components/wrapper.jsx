import { Eye, Funnel, MessageSquareCode, Search } from 'lucide-react';
import { Outlet } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';
import { Header } from './header';
import { HeaderBreadcrumbs } from './header-breadcrumbs';
import { Sidebar } from './sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';
import { ToolbarMenu } from './toolbar-menu';
import { ToolbarMenuMobile } from './toolbar-menu-mobile';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />
      {!isMobile && <Sidebar />}

      <div className="grow overflow-y-auto pt-(--header-height-mobile) lg:pt-[calc(var(--header-height)+var(--toolbar-height))] lg:ps-(--sidebar-width) lg:in-data-[sidebar-open=false]:ps-(--sidebar-collapsed-width) transition-all duration-300">
        <Toolbar>
          <ToolbarHeading>
            {isMobile ? <ToolbarMenuMobile /> : <ToolbarMenu />}
          </ToolbarHeading>
          <ToolbarActions>
            <Button size="sm" variant="outline">
              <Funnel />
              Sort
            </Button>
            <Button size="sm" variant="outline">
              <Eye />
              View
            </Button>
            <Button size="sm" variant="outline">
              <MessageSquareCode />
              Filter
            </Button>
            <Button size="sm" variant="outline" mode="icon">
              <Search />
            </Button>
          </ToolbarActions>
        </Toolbar>

        <main className="grow p-5" role="content">
          {isMobile && <HeaderBreadcrumbs />}
          <Outlet />
        </main>
      </div>
    </>
  );
}
