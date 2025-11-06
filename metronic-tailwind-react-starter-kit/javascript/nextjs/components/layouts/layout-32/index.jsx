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

export function Layout32({ children }) {
  return (
    <LayoutProvider
      headerStickyOffset={100}
      style={{
        '--header-height': '60px',
        '--header-height-sticky': '60px',
        '--header-height-mobile': '60px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
