'use client';

import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';  

export function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <LayoutProvider
        sidebarCollapsed={false}
        bodyClassName="bg-zinc-100 dark:bg-zinc-900 lg:overflow-hidden"
        style={{
          '--sidebar-width': '240px',
          '--sidebar-width-collapse': '60px',
          '--sidebar-width-mobile': '240px',
          '--aside-width': '50px',
          '--aside-width-mobile': '50px',
          '--page-space': '10px',
          '--header-height-mobile': '60px',
          '--mail-list-width': '400px',
        } as React.CSSProperties}
      > 
        <Wrapper>
          {children}
        </Wrapper>
      </LayoutProvider>
    </>
  );
}
