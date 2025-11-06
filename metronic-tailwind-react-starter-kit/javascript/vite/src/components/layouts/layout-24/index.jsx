import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout24() {
  return (
    <>
      <Helmet>
        <title>Layout 24</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="lg:overflow-hidden"
        style={{
          '--sidebar-width': '80px',
          '--aside-width': '400px',
          '--sidebar-panel-width': '70px',
          '--page-space': '10px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
