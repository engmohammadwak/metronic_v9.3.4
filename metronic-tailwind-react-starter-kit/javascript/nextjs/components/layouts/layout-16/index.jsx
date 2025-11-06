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

export function Layout16({ children }) {
  return (
    <LayoutProvider
      style={{
        '--sidebar-width': '350px',
        '--sidebar-collapsed-width': '70px',
        '--sidebar-header-height': '54px',
        '--header-height': '80px',
        '--header-height-mobile': '60px',
        '--toolbar-height': '0px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
