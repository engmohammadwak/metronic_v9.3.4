import { Metadata } from 'next';
import { LayoutProvider } from './components/layout-context';
import { MAIN_NAV } from '@/config/layout-15.config';
import { Layout } from './components/layout';

// Generate metadata for the layout
export async function generateMetadata(): Promise<Metadata> {
  // You can access route params here if needed
  // const { params } = props;
  
  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout15({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <Layout>
        {children}
      </Layout>
    </LayoutProvider>
  );
}
