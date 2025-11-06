import { MAIN_NAV } from '@/config/layout-15.config';
import { Layout } from './components/layout';
import { LayoutProvider } from './components/layout-context';

// Generate metadata for the layout
export async function generateMetadata() {
  // You can access route params here if needed
  // const { params } = props;

  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout15({ children }) {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <Layout>{children}</Layout>
    </LayoutProvider>
  );
}
