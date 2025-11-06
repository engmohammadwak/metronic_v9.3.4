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

export function Layout24({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider
      bodyClassName="lg:overflow-hidden"
      style={{
        '--sidebar-width': '80px',
        '--aside-width': '400px',
        '--sidebar-panel-width': '70px',
        '--page-space': '10px',
      } as React.CSSProperties}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </LayoutProvider>
  );
}
