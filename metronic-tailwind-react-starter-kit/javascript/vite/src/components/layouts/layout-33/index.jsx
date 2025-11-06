import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout33() {
  return (
    <>
      <Helmet>
        <title>Layout 33</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="bg-muted/30 dark:bg-zinc-900"
        style={{
          '--sidebar-width': '310px',
          '--sidebar-header-height': '60px',
          '--header-height': '60px',
          '--header-height-mobile': '60px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
