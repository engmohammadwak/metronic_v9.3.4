import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

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
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
