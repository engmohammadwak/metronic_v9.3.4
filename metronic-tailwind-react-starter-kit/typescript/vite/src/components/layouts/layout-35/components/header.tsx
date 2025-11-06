import { HeaderLogo } from './header-logo';
import { HeaderToolbar } from './header-toolbar';
import { Navbar } from './navbar';
import { useLayout } from './context';

export function Header() {
  const {isMobile} = useLayout();

  return (
    <header className="dark flex flex-col items-stretch fixed z-10 top-0 start-0 end-0 shrink-0 border-b border-border backdrop-blur-sm supports-backdrop-filter:bg-zinc-950 h-(--header-height-mobile) lg:h-(--header-height) lg:in-data-[header-sticky=true]:h-(--header-height-sticky) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container grow flex items-center justify-between gap-2.5">
        <HeaderLogo />
        {!isMobile && <Navbar />}
        <HeaderToolbar />
      </div>
    </header>
  );
}
