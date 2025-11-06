import { LayoutProvider } from './components/context';
import { Wrapper } from './components/wrapper';

// Generate metadata for the layout
export async function generateMetadata() {
  // You can access route params here if needed
  // const { params } = props;

  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout14({ children }) {
  return (
    <LayoutProvider
      style={{
        '--sidebar-width': '300px',
        '--sidebar-collapsed-width': '60px',
        '--sidebar-header-height': '54px',
        '--header-height': '60px',
        '--header-height-mobile': '60px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
