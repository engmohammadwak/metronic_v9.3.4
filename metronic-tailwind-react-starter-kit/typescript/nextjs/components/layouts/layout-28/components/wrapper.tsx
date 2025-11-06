import { Header } from './header';
import { Sidebar } from './sidebar';
import { useLayout } from './context';

export function Wrapper({ children }: { children: React.ReactNode }) {
  const { isMobile } = useLayout();

  return (
    <>
      <Header />

      <div
        className="flex grow pt-(--header-height) lg:ms-[calc(var(--sidebar-width)+10px)]"
      >
        {!isMobile && <Sidebar />}
        <main className="grow py-5" role="content">
          {children}
        </main>
      </div>
    </>
  );
}
