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
      {!isMobile && <Sidebar />}
      <div
        className={cn(
          'grow pt-(--header-height-mobile) lg:pt-(--header-height) lg:ps-(--sidebar-width) lg:in-data-[sidebar-open=false]:ps-(--sidebar-collapsed-width) transition-all duration-300',
          enableTransitions ? 'transition-all duration-300' : 'transition-none',
        )}
      >
        <main className="grow" role="content">
          {children}
        </main>
      </div>
    </>
  );
}
