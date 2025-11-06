import { Helmet } from 'react-helmet-async';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

export function Layout26() {

  return (
    <>
      <Helmet>
        <title>Layout 26</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="bg-zinc-100 dark:bg-zinc-900 lg:overflow-hidden"
        style={{
          '--sidebar-width': '240px',
          '--sidebar-width-mobile': '100px',
          '--header-height': '60px',
          '--header-height-mobile': '60px',
        } as React.CSSProperties}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
