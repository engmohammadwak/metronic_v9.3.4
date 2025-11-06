import { useBodyClass } from '@/hooks/use-body-class';
import { Footer } from './footer';
import { Header } from './header';

export function Main({ children }) {
  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClass(`
    [--header-height:70px]  
    lg:[--header-height:100px]
    [--header-height-sticky:70px]  
  `);

  return (
    <div className="flex grow flex-col in-data-[header-sticky=on]:pt-(--header-height)">
      <Header />

      <div className="grow" role="content">
        {children}
      </div>

      <Footer />
    </div>
  );
}
