import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MENU_SIDEBAR_MAIN } from '@/config/layout-12.config';
import { useMenu } from '@/hooks/use-menu';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout12() {
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
