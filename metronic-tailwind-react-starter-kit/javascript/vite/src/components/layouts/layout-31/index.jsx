import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout31() {
  return (
    <>
      <Helmet>
        <title>Layout 31</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="lg:overflow-hidden"
        style={{
          '--sidebar-width': '60px',
          '--sidebar-width-mobile': '60px',
          '--header-height': '60px',
          '--header-height-mobile': '60px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
