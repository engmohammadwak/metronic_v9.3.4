import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MENU_SIDEBAR } from '@/config/layout-18.config';
import { useMenu } from '@/hooks/use-menu';
import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

export function Layout18() {
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_SIDEBAR);

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>

      <LayoutProvider
        bodyClassName="bg-muted lg:overflow-hidden"
        style={{
          '--sidebar-width': '260px',
          '--sidebar-width-mobile': '260px',
          '--header-height': '136px',
          '--header-height-mobile': '108px',
        }}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
