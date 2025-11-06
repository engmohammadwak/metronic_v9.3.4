'use client';

import { useEffect, useState } from 'react';
import { Layout23 } from '@/components/layouts/layout-23';
import { ScreenLoader } from '@/components/screen-loader';

export default function Layout({ children }) {
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

  return <Layout23>{children}</Layout23>;
}
