import { Skeleton } from '@/components/ui/skeleton';
import { useLayout } from '@/components/layouts/layout-16/components/context';
import { HeaderTitle } from '@/components/layouts/layout-16/components/header-title';

export function Layout16Page() {
  const { isMobile } = useLayout();

  return (
    <div className="container-fluid">
      {isMobile && <HeaderTitle />}
      <Skeleton className="rounded-lg grow h-screen"></Skeleton>
    </div>
  );
}
