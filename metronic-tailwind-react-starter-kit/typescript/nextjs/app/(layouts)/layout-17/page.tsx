'use client';

import { Toolbar } from '@/components/layouts/layout-17/components/toolbar';
import { Skeleton } from '@/components/ui/skeleton';

export default function Page() {
  return (
    <div className="container-fluid">
      <Toolbar />
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}