import { Outlet } from 'react-router-dom';
import { Sidebar } from './sidebar';
import { Header } from './header';
import { useLayout } from './context';

export function Wrapper() {
  const { isMobile } = useLayout();

  return (
    <div className="flex h-screen w-full [&_.container-fluid]:px-6">
      {!isMobile && <Sidebar />}
      
      <div className="flex flex-col flex-1 min-w-0 w-full">
        <Header />
        <main 
          className="flex-1 grow-full transition-all duration-300 lg:ps-[calc(0.6rem+var(--sidebar-collapsed-width))] lg:in-data-[sidebar-open=true]:ps-[calc(var(--sidebar-width)+0.6rem)] pt-(--header-height-mobile) lg:pt-(--header-height) pb-2.5" 
          role="content"
        >
          <Outlet />
        </main>
      </div>
    </div>
  );
}
