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

export function Layout33({ children }) {
  return (
    <LayoutProvider
      bodyClassName="bg-muted/30 dark:bg-zinc-900"
      style={{
        '--sidebar-width': '310px',
        '--sidebar-header-height': '60px',
        '--header-height': '60px',
        '--header-height-mobile': '60px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
