import { Outlet } from 'react-router-dom';
import { useLayout } from './context';
import { Sidebar } from './sidebar';
import { Header } from './header';

export function Wrapper() {
  const {isMobile} = useLayout();

  return (
    <>
      <Header />

      <div className="flex grow pt-(--header-height-mobile) lg:pt-(--header-height)">
        {!isMobile && <Sidebar />}
        <main className="lg:ps-(--sidebar-width) lg:in-data-[sidebar-open=false]:ps-0 transition-all duration-300 grow" role="content">
          <Outlet />
        </main>
      </div>
    </>
  );
}
