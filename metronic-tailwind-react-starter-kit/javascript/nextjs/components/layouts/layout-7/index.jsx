import { LayoutProvider } from '@/components/layouts/layout-1/components/context';
import { Main } from './components/main';

// Generate metadata for the layout
export async function generateMetadata() {
  // You can access route params here if needed
  // const { params } = props;

  return {
    title: 'Dashboard',
    description: '',
  };
}

export function Layout7({ children }) {
  return (
    <>
      <LayoutProvider>
        <Main>{children}</Main>
      </LayoutProvider>
    </>
  );
}
