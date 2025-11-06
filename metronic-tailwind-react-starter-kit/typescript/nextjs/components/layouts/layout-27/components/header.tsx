import { HeaderLogo } from './header-logo';
import { HeaderToolbar } from './header-toolbar';

export function Header() {
  return (
    <header className="flex items-stretch fixed z-10 top-0 start-0 end-0 shrink-0 bg-background border-b border-border h-(--header-height) pe-[var(--removed-body-scroll-bar-size,0px)]">
      <div className="grow pe-7.5 flex items-stretch justify-between gap-2.5">
        <div className="flex items-stretch">
          <HeaderLogo />
        </div>
        <HeaderToolbar />
      </div>
    </header>
  );
}
