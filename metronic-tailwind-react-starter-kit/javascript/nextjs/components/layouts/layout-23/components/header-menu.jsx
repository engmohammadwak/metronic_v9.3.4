import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MENU_HEADER } from '@/config/layout-23.config';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

export function HeaderMenu() {
  const pathname = usePathname();
  const { isActive } = useMenu(pathname);

  return (
    <div className="flex items-stretch">
      <Separator
        orientation="vertical"
        className="hidden lg:block h-7 mx-5 my-auto bg-[#26272F]"
      />
      <div className="grid">
        <nav className="list-none flex items-center gap-2.5">
          {MENU_HEADER.map((item, index) => {
            const active = isActive(item.path);
            return (
              <Button
                key={index}
                variant="ghost"
                className={cn(
                  'inline-flex items-center text-sm font-medium',
                  active
                    ? 'bg-[#26272F] text-white hover:text-white border font-normal border-[#363843] hover:bg-[#26272F]'
                    : 'text-white/80 hover:text-white hover:bg-[#26272F]',
                )}
                asChild
              >
                <Link href={item.path || '#'}>
                  {item.icon && <item.icon className="size-4" />}
                  {item.title}
                </Link>
              </Button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
