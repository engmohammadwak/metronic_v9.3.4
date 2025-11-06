import { cn } from '@/lib/utils';
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

export function Layout28({ children }) {
  return (
    <LayoutProvider
      bodyClassName={cn(
        `bg-[url("data:image/svg+xml,%3Csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20xmlns='http://www.w3.org/2000/svg'%3E%3Cg%20fill='%236b7280'%20fill-opacity='0.3'%3E%3Ccircle%20cx='6'%20cy='6'%20r='0.8'/%3E%3C/g%3E%3C/svg%3E")]`,
        'bg-repeat bg-fixed',
      )}
      style={{
        '--header-height': '66px',
        '--sidebar-width': '300px',
        '--sidebar-width-mobile': '300px',
      }}
    >
      <Wrapper>{children}</Wrapper>
    </LayoutProvider>
  );
}
