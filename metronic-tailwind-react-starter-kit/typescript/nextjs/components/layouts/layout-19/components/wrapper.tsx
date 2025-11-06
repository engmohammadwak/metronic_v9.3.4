import { useLayout } from './context';
import { Sidebar } from './sidebar';
import { Header } from './header';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const {isMobile} = useLayout();

  return (
    <>
      <Header />

      <div className="flex grow pt-(--header-height-mobile) lg:pt-(--header-height)">
        {!isMobile && <Sidebar />}
        <div className="grow lg:overflow-y-auto p-5">
          <main className="grow" role="content">
            {children}
          </main>
        </div>
      </div>
    </>
  );
}
