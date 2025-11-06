import { Download } from 'lucide-react';
import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Footer } from './footer';
import { Header } from './header';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export function Main({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isMobileMode = useIsMobile();

  useBodyClass(`
    [--header-height:58px] 
    [--sidebar-width:58px] 
    [--navbar-height:56px] 
    lg:overflow-hidden 
    bg-muted!
  `);

  return (
    <div className="flex grow">
      <Header />

      <div className="flex flex-col lg:flex-row grow pt-(--header-height)">
        {!isMobileMode && <Sidebar />}

        <Navbar />

        <div className="flex grow rounded-b-xl bg-background border-x border-b border-border lg:mt-(--navbar-height) mx-5 lg:ms-(--sidebar-width) mb-5">
          <div className="flex flex-col grow kt-scrollable-y lg:[scrollbar-width:auto] pt-7 lg:[&_[data-slot=container]]:pe-2">
            <main className="grow" role="content">
              {pathname === '/' && (
                <Toolbar>
                  <ToolbarHeading />
                  <ToolbarActions>
                    <Button variant="outline" size="sm" asChild>
                      <Link href={'/layout-3/empty'}>
                        <Download />
                        Export
                      </Link>
                    </Button>
                  </ToolbarActions>
                </Toolbar>
              )}
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
