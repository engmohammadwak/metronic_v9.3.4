'use client';

import { Metadata } from 'next';
import { LayoutProvider } from './components/context';
import { Main } from './components/main';

// Generate metadata for the layout
export async function generateMetadata(): Promise<Metadata> {
  // You can access route params here if needed
  // const { params } = props;
  
  return {
    title: 'Dashboard | Metronic',
    description: 'Central Hub for Personal Customization',
  };
}

export function Layout1({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <Main>
        {children}
      </Main>
    </LayoutProvider>
  );
}