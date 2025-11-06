import { Sidebar } from './sidebar';
import { useLayout } from './context';
import { HeaderMobile } from './header-mobile';
import { Aside } from './aside';
import { SidebarPanel } from './sidebar-panel';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useLayout();

  return (
    <>
      <div className="flex flex-col lg:flex-row grow">
        {isMobile && <HeaderMobile />}
        <div 
          className="flex grow rounded-xl bg-background border border-input m-(--page-space)"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='12' height='12' viewBox='0 0 12 12' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%236b7280' fill-opacity='0.3'%3E%3Ccircle cx='6' cy='6' r='0.8'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}
        >
          {!isMobile && <Sidebar />}
          {!isMobile && <SidebarPanel />}
          {!isMobile && <Aside />}
          <div className="grow lg:overflow-y-auto">
            <main className="grow" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
