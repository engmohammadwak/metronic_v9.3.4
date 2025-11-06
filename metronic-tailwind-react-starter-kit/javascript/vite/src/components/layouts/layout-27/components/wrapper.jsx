import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { SidebarMenu } from './sidebar-menu';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div className="flex grow pt-(--header-height)">
        {!isMobile && <Sidebar />}

        <div className="flex flex-col grow lg:ps-(--sidebar-width)">
          <div className="flex flex-grow lg:bg-muted">
            {!isMobile && <SidebarMenu />}

            <main
              className="grow lg:ps-[calc(var(--sidebar-menu-width)+10px)]"
              role="content"
            >
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
