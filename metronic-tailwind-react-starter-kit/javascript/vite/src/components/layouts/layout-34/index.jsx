import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout34() {
  return (
    <>
      <Helmet>
        <title>Layout 34</title>
      </Helmet>

      <LayoutProvider
        style={{
          '--sidebar-width': '240px',
          '--sidebar-collapsed-width': '0',
          '--header-height': '60px',
          '--header-height-mobile': '60px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
