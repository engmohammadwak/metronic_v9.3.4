'use client';

import { useEffect, useState } from 'react';
import { DefaultLayout } from '@/components/layouts/crm';
import { LayoutProvider } from '@/components/layouts/crm/components/layout-context';
import { ScreenLoader } from '@/components/screen-loader';
import { MAIN_NAV } from '@/app/crm/config/app.config';

export default function CrmLayout({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate short loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // 1 second loading time

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <ScreenLoader />;
  }

  return (
    <LayoutProvider sidebarNavItems={MAIN_NAV}>
      <DefaultLayout>{children}</DefaultLayout>
    </LayoutProvider>
  );
}
