'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function Page() {
  return (
    <div className="container">
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
