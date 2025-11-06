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

export function Layout35({ children }) {
  return (
    <LayoutProvider
      headerStickyOffset={100}
      style={{
        '--header-height': '90px',
        '--header-height-sticky': '70px',
        '--header-height-mobile': '70px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
