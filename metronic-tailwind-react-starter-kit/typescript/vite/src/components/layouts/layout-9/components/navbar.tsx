import { MegaMenu } from './mega-menu';

export function Navbar() {
  return (
    <div className="bg-muted/80 lg:flex lg:items-stretch border-y border-border">
      <div className="container flex flex-wrap justify-between items-center gap-2 px-0 lg:px-7.5">
        <MegaMenu />
      </div>
    </div>
  );
}
