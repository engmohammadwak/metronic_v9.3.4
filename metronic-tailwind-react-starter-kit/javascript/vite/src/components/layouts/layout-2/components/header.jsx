import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { HeaderLogo } from './header-logo';
import { HeaderTopbar } from './header-topbar';

export function Header() {
  const scrollPosition = useScrollPosition();
  const headerSticky = scrollPosition > 0;

  return (
    <header
      className={cn(
        'flex items-center shrink-0 h-(--header-height) [&[data-header-sticky=on]]:pe-[var(--removed-body-scroll-bar-size,0px)]',
        headerSticky &&
          'fixed z-10 top-0 start-0 end-0 shadow-xs backdrop-blur-md bg-background/70',
      )}
      data-header-sticky={headerSticky ? 'on' : 'off'}
    >
      <div className="container flex justify-between items-center lg:gap-4">
        <HeaderLogo />
        <HeaderTopbar />
      </div>
    </header>
  );
}
