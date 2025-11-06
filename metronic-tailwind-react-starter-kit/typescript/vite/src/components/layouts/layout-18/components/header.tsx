import { useLayout } from './context';
import { HeaderLogo } from './header-logo';
import { HeaderMenu } from './header-menu';
import { HeaderToolbar } from './header-toolbar';
import { Navbar } from './navbar';

export function Header() {
  const { isMobile } = useLayout();

  return (
    <header className="fixed z-10 top-0 start-0 end-0 shrink-0 py-3.5 bg-muted lg:bg-transparent h-(--header-height-mobile) lg:h-(--header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="bg-background rounded-lg mx-3.5 border border-input">
        <div className="flex justify-between gap-2.5 h-[62px] px-5 border-b border-border/60">
          <div className="flex items-stretch gap-5">
            <HeaderLogo />
            {!isMobile && <HeaderMenu/>}
          </div>
          <HeaderToolbar />
        </div>
        <Navbar />
      </div>     
    </header>
  );
}
