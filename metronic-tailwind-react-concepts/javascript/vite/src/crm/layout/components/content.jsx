import { cn } from '@/lib/utils';

export function Content({ children, className }) {
  return <div className={cn('flex flex-1 py-5', className)}>{children}</div>;
}
