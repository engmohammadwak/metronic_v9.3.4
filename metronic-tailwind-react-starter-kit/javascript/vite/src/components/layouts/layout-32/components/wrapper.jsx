import { Outlet } from 'react-router-dom';
import { Header } from './header';

export function Wrapper() {
  return (
    <>
      <Header />

      <main
        className="flex flex-col grow pt-(--header-height-mobile) lg:pt-(--header-height) bg-muted/30"
        role="content"
      >
        <Outlet />
      </main>
    </>
  );
}
