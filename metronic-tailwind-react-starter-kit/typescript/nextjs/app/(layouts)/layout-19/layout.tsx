'use client';

import { Layout19 } from '@/components/layouts/layout-19';
import { ReactNode, useEffect, useState } from 'react';

import { ScreenLoader } from '@/components/screen-loader';

export default function Layout({children}: {children: ReactNode}) {
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
    <Layout19>
      {children}
    </Layout19>
  );
}
