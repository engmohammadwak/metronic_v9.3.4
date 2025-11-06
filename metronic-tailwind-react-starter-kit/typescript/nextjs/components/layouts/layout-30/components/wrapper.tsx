import { Sidebar } from './sidebar';
import { Header } from './header';
import { useLayout } from './context';
import { SidebarMenu } from './sidebar-menu';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div className="flex grow pt-(--header-height)">
        {!isMobile && <Sidebar />}

        <div className="flex flex-col grow lg:ps-(--sidebar-width)">
          <div className="flex flex-grow">
            {!isMobile && <SidebarMenu />}

            <main className="grow lg:ps-[calc(var(--sidebar-menu-width))]" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
