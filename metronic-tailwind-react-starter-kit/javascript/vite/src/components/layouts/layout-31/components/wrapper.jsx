import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { HeaderMobile } from './header-mobile';
import { Sidebar } from './sidebar';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      {isMobile && <HeaderMobile />}

      <div className="flex flex-col lg:flex-row grow pt-(--header-height-mobile) lg:pt-0 mb-2.5 lg:my-2.5">
        <div className="flex grow rounded-xl mt-0">
          {!isMobile && <Sidebar />}

          <div className="grow bg-muted/20 overflow-y-auto lg:ms-(--sidebar-width) lg:in-data-[sidebar-open=false]:ms-2.5 lg:transition-[margin] lg:duration-300 mx-2 border border-input rounded-xl shadow-xs">
            <main className="grow" role="content">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
