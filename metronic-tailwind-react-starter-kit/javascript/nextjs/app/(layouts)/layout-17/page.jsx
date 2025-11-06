'use client';

import { Skeleton } from '@/components/ui/skeleton';
import { Toolbar } from '@/components/layouts/layout-17/components/toolbar';

export default function Page() {
  return (
    <div className="container-fluid">
      <Toolbar />
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
