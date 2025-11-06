import { useLayout } from './context';
import { HeaderLogo } from './header-logo';
import { HeaderMenu } from './header-menu';
import { HeaderToolbar } from './header-toolbar';

export function Header() {
  const { isMobile } = useLayout();

  return (
    <header className="flex items-stretch fixed z-10 top-0 start-0 end-0 shrink-0 bg-background/95 border-b border-border backdrop-blur-sm supports-backdrop-filter:bg-background/60 h-(--header-height-mobile) lg:h-(--header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container-fluid grow flex items-stretch justify-between gap-2.5">
        <div className="flex items-stretch gap-5">
          <HeaderLogo />
          {!isMobile && <HeaderMenu/>}
        </div>
        <HeaderToolbar />
      </div>
    </header>
  );
}
