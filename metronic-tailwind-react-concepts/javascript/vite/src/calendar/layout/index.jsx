import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function DefaultLayout() {
  return (
    <>
      <Helmet>
        <title>Calendar</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="bg-zinc-950 lg:overflow-hidden"
        style={{
          '--sidebar-width': '260px',
          '--header-height-mobile': '60px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
