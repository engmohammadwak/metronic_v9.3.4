import { LayoutProvider } from './components/context';
import { Main } from './components/main';

export function DefaultLayout({ children }: { children: React.ReactNode }) {
  return (
    <LayoutProvider>
      <Main>{children}</Main>
    </LayoutProvider>
  );
}
