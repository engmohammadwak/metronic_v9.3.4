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

export function Layout36({ children }) {
  return (
    <LayoutProvider
      bodyClassName="bg-zinc-950 lg:overflow-hidden"
      style={{
        '--sidebar-width': '260px',
        '--header-height-mobile': '60px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
