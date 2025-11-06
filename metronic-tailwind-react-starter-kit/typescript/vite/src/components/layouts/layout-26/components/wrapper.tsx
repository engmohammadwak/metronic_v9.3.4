import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { Sidebar } from './sidebar';
import { HeaderMobile } from './header-mobile';
import { Aside } from './aside';
import { AsideToolbar } from './aside-toolbar';

export function Wrapper() {
  const {isMobile} = useLayout();

  return (
    <>
      {isMobile && <HeaderMobile />}

      <div className="flex flex-col lg:flex-row grow pt-(--header-height-mobile) lg:pt-0 mb-2.5 lg:my-2.5">
        <div className="flex grow rounded-xl mt-0">
          {!isMobile && <Sidebar />}
          {!isMobile && <Aside />}
          {!isMobile && <AsideToolbar />}

          <div className="grow lg:overflow-y-auto lg:ms-(--sidebar-width) lg:in-data-[sidebar-open=false]:ms-2.5 lg:transition-[margin] lg:duration-300 mx-2 lg:me-[calc(var(--aside-width)+var(--aside-toolbar-width)+10px)] bg-background border border-input rounded-xl shadow-xs">
            <main className="grow pb-5" role="content">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
