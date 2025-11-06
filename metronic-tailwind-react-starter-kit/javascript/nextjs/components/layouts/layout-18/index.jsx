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

export function Layout18({ children }) {
  return (
    <LayoutProvider
      bodyClassName="bg-muted lg:overflow-hidden"
      style={{
        '--sidebar-width': '260px',
        '--sidebar-width-mobile': '260px',
        '--header-height': '136px',
        '--header-height-mobile': '108px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
