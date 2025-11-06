'use client';

import { LayoutProvider } from './components/context';
import { Main } from './components/main';

// Generate metadata for the layout
export async function generateMetadata() {
  // You can access route params here if needed
  // const { params } = props;

  return {
    title: 'Dashboard | Metronic',
    description: 'Central Hub for Personal Customization',
  };
}

export function Layout1({ children }) {
  return (
    <LayoutProvider>
      <Main>{children}</Main>
    </LayoutProvider>
  );
}
