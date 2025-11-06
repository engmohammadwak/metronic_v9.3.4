'use client';

import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';  

export function DefaultLayout({ children }: { children: React.ReactNode }) {

  return (
    <>
      <LayoutProvider
        bodyClassName="bg-zinc-950 lg:overflow-hidden"
        style={{
          '--sidebar-width': '260px',
          '--header-height-mobile': '60px',
        } as React.CSSProperties}
      > 
        <Wrapper>
          {children}
        </Wrapper>
      </LayoutProvider>
    </>
  );
}

