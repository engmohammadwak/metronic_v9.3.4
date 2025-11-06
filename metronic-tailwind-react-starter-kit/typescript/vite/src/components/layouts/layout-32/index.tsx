import { Helmet } from 'react-helmet-async';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

export function Layout32() {
  return (
    <>
      <Helmet>
      <title>Layout 32</title>
      </Helmet>

      <LayoutProvider
        headerStickyOffset={100}
        style={{
          '--header-height': '60px',
          '--header-height-sticky': '60px',
          '--header-height-mobile': '60px',
        } as React.CSSProperties}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
