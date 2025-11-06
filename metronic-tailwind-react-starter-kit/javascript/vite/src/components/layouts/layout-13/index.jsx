import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-13.config';
import { useMenu } from '@/hooks/use-menu';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout13() {
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
          '--sidebar-width': '240px',
          '--sidebar-right-width': '320px',
          '--sidebar-header-height': '60px',
          '--sidebar-width-mobile': '240px',
          '--header-height': '54px',
          '--header-height-mobile': '54px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
