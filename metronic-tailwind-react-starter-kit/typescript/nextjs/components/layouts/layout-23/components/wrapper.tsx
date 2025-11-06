import { useLayout } from './context';
import { Sidebar } from './sidebar';
import { Header } from './header';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const {isMobile} = useLayout();

  return (
    <>
      <Header />

      <div className="flex flex-col lg:flex-row grow pt-(--header-height)">
        <div className="flex grow rounded-xl bg-background border border-input m-2.5 mt-0">
          {!isMobile && <Sidebar />}
          <div className="grow lg:overflow-y-auto">
            <main className="grow pb-5" role="content">
              {children}
            </main>
          </div>
        </div>
      </div>
    </>
  );
}
