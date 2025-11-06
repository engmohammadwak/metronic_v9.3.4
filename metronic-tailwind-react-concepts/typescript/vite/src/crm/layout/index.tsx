import { MAIN_NAV } from '@/crm/config/app.config';
import { Layout } from './components/layout';
import { LayoutProvider } from './components/layout-context';

export function DefaultLayout() {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <Layout />
    </LayoutProvider>
  );
}
