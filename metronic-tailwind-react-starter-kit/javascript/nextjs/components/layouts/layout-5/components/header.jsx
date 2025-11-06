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
        'flex items-center transition-[height] shrink-0 bg-(--header-bg) dark:bg-(--header-bg-dark) h-(--header-height)',
        headerSticky &&
          'transition-[height] fixed z-10 top-0 start-0 end-0 shadow-xs backdrop-blur-md bg-white/70',
      )}
    >
      <div className="container-fluid flex flex-wrap justify-between items-center lg:gap-4">
        <HeaderLogo />
        <HeaderTopbar />
      </div>
    </header>
  );
};

export { Header };
