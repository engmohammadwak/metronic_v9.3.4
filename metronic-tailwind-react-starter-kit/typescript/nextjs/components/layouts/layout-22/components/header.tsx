import { HeaderLogo } from './header-logo';
import { HeaderToolbar } from './header-toolbar';
import { Navbar } from './navbar';

export function Header() {

  return (
    <header className="flex flex-col items-stretch fixed z-10 top-0 start-0 end-0 shrink-0 bg-background/95 border-b border-border backdrop-blur-sm supports-backdrop-filter:bg-background/60 h-(--header-height-mobile) lg:h-(--header-height) lg:in-data-[header-sticky=true]:h-(--header-height-sticky) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="container-fluid lg:px-10 grow flex items-stretch justify-between gap-2.5">
        <HeaderLogo />
        <HeaderToolbar />
      </div>
      <Navbar />
    </header>
  );
}
