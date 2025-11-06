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

export function Layout24({ children }) {
  return (
    <LayoutProvider
      bodyClassName="lg:overflow-hidden"
      style={{
        '--sidebar-width': '80px',
        '--aside-width': '400px',
        '--sidebar-panel-width': '70px',
        '--page-space': '10px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
