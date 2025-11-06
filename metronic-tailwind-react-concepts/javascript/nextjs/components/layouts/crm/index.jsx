import { MAIN_NAV } from '@/app/crm/config/app.config';
import { Layout } from './components/layout';
import { LayoutProvider } from './components/layout-context';

export function DefaultLayout({ children }) {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <Layout>{children}</Layout>
    </LayoutProvider>
  );
}
