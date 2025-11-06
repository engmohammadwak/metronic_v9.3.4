import { Aside } from './aside';
import { useLayout } from './context';
import { HeaderMobile } from './header-mobile';
import { Sidebar } from './sidebar';

export function Wrapper({ children }) {
  const { isMobile } = useLayout();

  return (
    <>
      {isMobile && <HeaderMobile />}

      <div className="flex flex-col lg:flex-row grow py-(--page-space)">
        <div className="flex grow rounded-xl">
          {!isMobile && <Sidebar />}
          {!isMobile && <Aside />}

          <div className="grow pt-(--header-height-mobile) lg:pt-(--header-height) lg:overflow-hidden lg:ms-(--sidebar-width) lg:in-data-[sidebar-collapsed=true]:ms-(--sidebar-width-collapse) lg:transition-[margin] lg:duration-300 lg:me-[calc(var(--aside-width))]">
            <main className="grow px-2.5 lg:p-0" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
