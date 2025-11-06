import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { Footer } from './footer';
import { Header } from './header';
import { Sidebar } from './sidebar';

export function Main({ children }) {
  const isMobile = useIsMobile();

  useBodyClass(`
    [--header-height:60px]
    [--sidebar-width:270px]
    lg:overflow-hidden
    bg-muted!
  `);

  return (
    <div className="flex grow">
      {!isMobile && <Sidebar />}

      {isMobile && <Header />}

      <div className="flex flex-col lg:flex-row grow pt-(--header-height) lg:pt-0">
        <div className="flex flex-col grow items-stretch rounded-xl bg-background border border-input lg:ms-(--sidebar-width) mt-0 lg:mt-[15px] m-[15px]">
          <div className="flex flex-col grow kt-scrollable-y-auto [--kt-scrollbar-width:auto] pt-5">
            <main className="grow" role="content">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
}
