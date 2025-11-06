import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

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
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
