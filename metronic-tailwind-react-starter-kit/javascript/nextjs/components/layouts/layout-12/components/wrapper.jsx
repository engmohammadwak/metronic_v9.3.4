import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { useLayout } from './context';
import { Header } from './header';
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
      <Header />

      <div className="flex grow pt-(--header-height-mobile) lg:pt-(--header-height)">
        {!isMobile && <Sidebar />}
        <main
          className={cn(
            'lg:ps-(--sidebar-width) lg:in-data-[sidebar-open=false]:ps-0 duration-300 grow',
            enableTransitions
              ? 'transition-all duration-300'
              : 'transition-none',
          )}
          role="content"
        >
          {children}
        </main>
      </div>
    </>
  );
}
