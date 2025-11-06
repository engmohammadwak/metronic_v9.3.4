import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-16.config';
import { useMenu } from '@/hooks/use-menu';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout16() {
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR_MAIN);

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>

      <LayoutProvider
        style={{
          '--sidebar-width': '350px',
          '--sidebar-collapsed-width': '70px',
          '--sidebar-header-height': '54px',
          '--header-height': '80px',
          '--header-height-mobile': '60px',
          '--toolbar-height': '0px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
