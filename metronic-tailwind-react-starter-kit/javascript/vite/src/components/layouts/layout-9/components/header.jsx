import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { HeaderLogo } from './header-logo';
import { HeaderSearch } from './header-search';
import { HeaderTopbar } from './header-topbar';

export function Header() {
  const scrollPosition = useScrollPosition();
  const headerSticky = scrollPosition > 0;

  return (
    <header
      className={cn(
        'fixed z-10 top-0 start-0 end-0 flex items-center bg-background/70 transition-all duration-300 shrink-0 h-(--header-height)',
        headerSticky && 'shadow-xs backdrop-blur-md',
      )}
    >
      <div className="container flex lg:justify-between items-center gap-2.5">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderTopbar />
      </div>
    </header>
  );
}
