import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Aside } from './aside';
import { useLayout } from './context';
import { HeaderMobile } from './header-mobile';
import { Sidebar } from './sidebar';

export function Wrapper({ children }) {
  const { isMobile } = useLayout();
  const [enableTransitions, setEnableTransitions] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEnableTransitions(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <>
      {isMobile && <HeaderMobile />}

      <div className="flex flex-col lg:flex-row grow py-(--page-space)">
        <div className="flex grow rounded-xl">
          {!isMobile && <Sidebar />}
          {!isMobile && <Aside />}

          <div
            className={cn(
              'grow pt-(--header-height-mobile) lg:pt-0 lg:overflow-hidden lg:ms-(--sidebar-width) lg:in-data-[sidebar-collapsed=true]:ms-(--sidebar-width-collapse) lg:duration-300 lg:me-[calc(var(--aside-width))]',
              enableTransitions
                ? 'lg:transition-[margin]'
                : 'lg:transition-none',
            )}
          >
            <main className="grow px-2.5 lg:p-0" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
