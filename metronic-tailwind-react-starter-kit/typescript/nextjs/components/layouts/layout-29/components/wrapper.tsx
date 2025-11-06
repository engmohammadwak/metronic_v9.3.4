import { Sidebar } from './sidebar';
import { Header } from './header';
import { useLayout } from './context';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useLayout();
  const [enableTransitions, setEnableTransitions] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setEnableTransitions(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className="flex h-screen w-full [&_.container-fluid]:px-5">
      {!isMobile && <Sidebar />}
      
      <div className="flex flex-col flex-1 min-w-0 w-full">
        {isMobile && <Header />}

        <main className={cn(
          'flex-1 grow-full duration-300 lg:ps-0 lg:in-data-[sidebar-open=true]:ps-[calc(var(--sidebar-width)+0.6rem)] pt-(--header-height-mobile) lg:pt-0 py-2.5', 
          enableTransitions ? 'transition-all duration-300' : 'transition-none'
        )} role="content">
          {children}
        </main>
      </div>
    </div>
  );
}
