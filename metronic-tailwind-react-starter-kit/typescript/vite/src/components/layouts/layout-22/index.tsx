import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import { MENU_NAVBAR } from '@/config/layout-22.config';
import { useMenu } from '@/hooks/use-menu';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

export function Layout22() {
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const item = getCurrentItem(MENU_NAVBAR);

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>

      <LayoutProvider
        headerStickyOffset={100}
        style={{
          '--header-height': '124px',
          '--header-height-sticky': '70px',
          '--header-height-mobile': '124px',
        } as React.CSSProperties}
      >
        <Wrapper />
      </LayoutProvider>
    </>
  );
}
