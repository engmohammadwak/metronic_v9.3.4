
import { LayoutProvider } from './components/layout-context';
import { MAIN_NAV } from '@/config/layout-15.config';
import { Layout } from './components/layout';

export function Layout15() {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <Layout/>
    </LayoutProvider>
  );
}
