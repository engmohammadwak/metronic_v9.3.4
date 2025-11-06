import { Helmet } from 'react-helmet-async';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';  

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
        } as React.CSSProperties}
      > 
        <Wrapper /> 
      </LayoutProvider>
    </>
  );
}
