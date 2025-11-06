import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div className="flex flex-col lg:flex-row grow pt-(--header-height)">
        <div className="flex grow rounded-xl bg-background border border-input m-3.5 mt-0">
          {!isMobile && <Sidebar />}
          <div className="grow lg:overflow-y-auto p-5">
            <main className="lg:grow" role="content">
              <Outlet />
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
