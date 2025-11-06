import { Metadata } from 'next';
import { Wrapper } from './components/wrapper';
import { LayoutProvider } from './components/context';

// Generate metadata for the layout
export async function generateMetadata(): Promise<Metadata> {
  // You can access route params here if needed
  // const { params } = props;
  
  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout37({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider
      sidebarCollapsed={false}
      bodyClassName="bg-zinc-100 dark:bg-zinc-900 lg:overflow-hidden"
      style={{
        '--sidebar-width': '240px',
        '--sidebar-width-collapse': '60px',
        '--sidebar-width-mobile': '240px',
        '--aside-width': '50px',
        '--aside-width-mobile': '50px',
        '--page-space': '10px',
        '--header-height-mobile': '60px',
        '--mail-list-width': '400px',
      } as React.CSSProperties}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </LayoutProvider>
  );
}
