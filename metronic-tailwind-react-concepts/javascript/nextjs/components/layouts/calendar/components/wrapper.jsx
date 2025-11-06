import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
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

      <div className="flex flex-col lg:flex-row grow pt-(--header-height-mobile) lg:pt-0 mb-2.5 lg:my-2.5">
        <div className="flex grow rounded-xl mt-0">
          {!isMobile && <Sidebar />}

          <div
            className={cn(
              'grow lg:overflow-y-auto lg:ms-(--sidebar-width) lg:in-data-[sidebar-open=false]:ms-2.5 mx-2 bg-background border border-input rounded-xl shadow-xs',
              enableTransitions
                ? 'lg:transition-[margin] lg:duration-300'
                : 'lg:transition-none',
            )}
          >
            <main className="grow" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
