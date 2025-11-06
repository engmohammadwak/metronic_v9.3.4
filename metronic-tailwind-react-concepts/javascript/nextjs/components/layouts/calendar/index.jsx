'use client';

import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function DefaultLayout({ children }) {
  return (
    <>
      <LayoutProvider
        bodyClassName="bg-zinc-950 lg:overflow-hidden"
        style={{
          '--sidebar-width': '260px',
          '--header-height-mobile': '60px',
        }}
      >
        <Wrapper>{children}</Wrapper>
      </LayoutProvider>
    </>
  );
}
