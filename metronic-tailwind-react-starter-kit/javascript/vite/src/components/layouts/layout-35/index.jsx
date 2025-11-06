import { Helmet } from 'react-helmet-async';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout35() {
  return (
    <>
      <Helmet>
        <title>Layout 35</title>
      </Helmet>

      <LayoutProvider
        headerStickyOffset={100}
        style={{
          '--header-height': '90px',
          '--header-height-sticky': '70px',
          '--header-height-mobile': '70px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
