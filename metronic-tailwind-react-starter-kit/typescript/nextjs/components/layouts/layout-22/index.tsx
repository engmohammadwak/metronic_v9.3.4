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

export function Layout22({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider
      headerStickyOffset={100}
      style={{
        '--header-height': '124px',
        '--header-height-sticky': '70px',
        '--header-height-mobile': '124px',
      } as React.CSSProperties}
    >
      <Wrapper>
        {children}
      </Wrapper>
    </LayoutProvider>
  );
}
