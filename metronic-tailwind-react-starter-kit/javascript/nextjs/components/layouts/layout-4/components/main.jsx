import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Download, MessageSquareDot, Search } from 'lucide-react';
import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { SearchDialog } from '@/components/layouts/layout-1/shared/dialogs/search/search-dialog';
import { NotificationsSheet } from '@/components/layouts/layout-1/shared/topbar/notifications-sheet';
import { StoreClientTopbar } from '@/components/layouts/layout-1/shared/topbar/topbar';
import { Footer } from './footer';
import { Header } from './header';
import { Sidebar } from './sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';

export function Main({ children }) {
  const pathname = usePathname();
  const isMobileMode = useIsMobile();

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClass(`
    [--header-height:60px] 
    [--sidebar-width:290px] 
    lg:overflow-hidden 
    bg-muted!
  `);

  return (
    <div className="flex grow">
      {isMobileMode && <Header />}

      <div className="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
        {!isMobileMode && <Sidebar />}

        <div className="flex grow rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-5 m-5">
          <div className="flex flex-col grow kt-scrollable-y-auto lg:[--kt-scrollbar-width:auto] pt-5">
            <main className="grow" role="content">
              {!pathname.includes('/layout-4/empty') && (
                <Toolbar>
                  <ToolbarHeading />

                  <ToolbarActions>
                    <>
                      {pathname.startsWith('/store-client') ? (
                        <StoreClientTopbar />
                      ) : (
                        <>
                          <SearchDialog
                            trigger={
                              <Button
                                variant="ghost"
                                mode="icon"
                                className="hover:bg-primary/10 hover:[&_svg]:text-primary"
                              >
                                <Search className="size-4.5!" />
                              </Button>
                            }
                          />

                          <NotificationsSheet
                            trigger={
                              <Button
                                variant="ghost"
                                mode="icon"
                                className="hover:bg-primary/10 hover:[&_svg]:text-primary"
                              >
                                <MessageSquareDot className="size-4.5!" />
                              </Button>
                            }
                          />

                          <Button
                            variant="outline"
                            className="hover:bg-background hover:[&_svg]:text-primary hover:text-primary ms-2.5 "
                            asChild
                          >
                            <Link href={'/layout-4/empty'}>
                              <Download />
                              Export
                            </Link>
                          </Button>
                        </>
                      )}
                    </>
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
