import { Outlet } from 'react-router-dom';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { useLayout } from './context';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div
        className="flex grow pt-(--header-height) lg:ms-[calc(var(--sidebar-width)+10px)]"
      >
        {!isMobile && <Sidebar />}
        <main className="grow py-5" role="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
