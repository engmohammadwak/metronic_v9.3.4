import { Helmet } from 'react-helmet-async';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

export function Layout29() {
  return (
    <>
      <Helmet>
        <title>Layout 29</title>
      </Helmet>

      <LayoutProvider
        style={{
          '--sidebar-width': '300px',
          '--sidebar-collapsed-width': '60px',
          '--sidebar-header-height': '60px',
          '--header-height': '60px',
          '--header-height-mobile': '60px',
          '--toolbar-height': '0px',
        } as React.CSSProperties}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
