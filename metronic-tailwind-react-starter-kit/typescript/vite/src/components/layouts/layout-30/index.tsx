import { Helmet } from 'react-helmet-async';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

export function Layout30() {
  return (
    <>
      <Helmet>
        <title>Layout 30</title>
      </Helmet>

      <LayoutProvider
        style={{
          '--header-height': '60px',
          '--sidebar-width': '60px',
          '--sidebar-menu-width': '240px',
        } as React.CSSProperties}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
