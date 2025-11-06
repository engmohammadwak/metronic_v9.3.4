import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div className="flex grow pt-(--header-height-mobile) lg:pt-(--header-height)">
        {!isMobile && <Sidebar />}
        <div className="grow lg:overflow-y-auto p-5">
          <main className="grow" role="content">
            <Outlet />
          </main>
        </div>
      </div>
    </>
  );
}
