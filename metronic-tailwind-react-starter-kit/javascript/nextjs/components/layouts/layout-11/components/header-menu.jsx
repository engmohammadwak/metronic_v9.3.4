import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_HEADER } from '@/config/layout-11.config';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';
import { Separator } from '@/components/ui/separator';

export function HeaderMenu() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  return (
    <div className="flex items-stretch">
      <Separator
        orientation="vertical"
        className="hidden lg:block h-7 mx-5 my-auto"
      />
      <div className="grid">
        <nav className="list-none flex items-stretch overflow-x-auto gap-7.5">
          {MENU_HEADER.map((item, index) => {
            const active = isActive(item.path);
            return (
              <li key={index} className="flex items-stretch">
                <Link
                  href={item.path || '#'}
                  className={cn(
                    'inline-flex items-center border-b border-transparent text-sm font-medium whitespace-nowrap text-secondary-foreground hover:text-primary py-2.5 lg:py-0',
                    active && 'text-primary border-primary',
                  )}
                >
                  {item.title}
                </Link>
              </li>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
