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

export function Layout27({ children }) {
  return (
    <LayoutProvider
      style={{
        '--header-height': '60px',
        '--sidebar-width': '60px',
        '--sidebar-menu-width': '300px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
