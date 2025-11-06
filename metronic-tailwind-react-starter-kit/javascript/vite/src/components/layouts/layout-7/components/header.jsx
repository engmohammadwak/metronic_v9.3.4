import { cn } from '@/lib/utils';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { HeaderLogo } from './header-logo';
import { HeaderTopbar } from './header-topbar';

const Header = () => {
  const scrollPosition = useScrollPosition();
  const headerSticky = scrollPosition > 0;

  return (
    <header
      className={cn(
        'flex items-center shrink-0 bg-background py-4 lg:py-0 h-(--header-height) [&[data-header-sticky=on]]:h-(--header-height-sticky) lg:transition-all lg:duration-300',
        headerSticky &&
          'fixed z-10 top-0 left-0 right-0 shadow-xs backdrop-blur-md bg-background/70 pe-[var(--removed-body-scroll-bar-size,0px)]',
      )}
      data-header-sticky={headerSticky ? 'on' : 'off'}
    >
      <div className="container flex flex-wrap gap-2 items-center lg:gap-4">
        <HeaderLogo />
        <HeaderTopbar />
      </div>
    </header>
  );
};

export { Header };
