'use client';

import { cn } from '@/lib/utils';
import { useLayout } from './context';

export function MailViewWrapper({ children, className }) {
  const { isMailViewExpanded, isMobile } = useLayout();

  return (
    <div
      className={cn(
        'bg-background border border-input rounded-xl shadow-xs grow',
        'lg:w-[calc(100%-300px)] xl:w-(--mail-view-width)',
        // Desktop: always visible
        'lg:block',
        // Mobile: positioned absolutely over the list when expanded
        isMobile && !isMailViewExpanded && 'hidden',
        isMobile && isMailViewExpanded && 'fixed inset-0 z-50 m-0 rounded-none',
        className,
      )}
    >
      {children}
    </div>
  );
}
