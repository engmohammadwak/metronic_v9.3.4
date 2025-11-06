import { Coffee, MessageSquareCode, Pin, Search } from 'lucide-react';
import { Link } from 'react-router';
import { useLocation } from 'react-router-dom';
import { MENU_NAVBAR } from '@/config/layout-18.config';
import { cn } from '@/lib/utils';
import { useMenu } from '@/hooks/use-menu';
import { Button } from '@/components/ui/button';
import { Input, InputWrapper } from '@/components/ui/input';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { useLayout } from './context';

export function Navbar() {
  const { pathname } = useLocation();
  const { isActive } = useMenu(pathname);
  const { isMobile } = useLayout();

  const handleInputChange = () => {};

  return (
    <div
      className={cn(
        'flex items-stretch w-full h-[46px] px-5 gap-5',
        isMobile ? 'justify-end' : 'justify-between',
      )}
    >
      {!isMobile && (
        <ScrollArea>
          <nav className="list-none flex items-stretch overflow-x-auto gap-7.5 h-[46px]">
            {MENU_NAVBAR.map((item, index) => {
              const active = isActive(item.path);
              return (
                <li key={index} className="flex items-stretch">
                  <Link
                    to={item.path || '#'}
                    className={cn(
                      'gap-2 inline-flex items-center border-b border-transparent text-sm font-normal whitespace-nowrap text-secondary-foreground hover:text-primary py-2.5 lg:py-0',
                      '[&_svg]:text-muted-foreground',
                      active &&
                        'text-primary border-primary [&_svg]:text-primary',
                    )}
                  >
                    {item.icon && <item.icon className="size-4" />}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </nav>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      )}

      <div className="flex items-center gap-2.5">
        <Button mode="icon" variant="outline" size="sm">
          <Coffee />
        </Button>
        <Button mode="icon" variant="outline" size="sm">
          <MessageSquareCode />
        </Button>
        <Button mode="icon" variant="outline" size="sm">
          <Pin />
        </Button>

        <InputWrapper className="w-full lg:w-40" variant="sm">
          <Search />
          <Input
            type="search"
            placeholder="Search Account"
            onChange={handleInputChange}
          />
        </InputWrapper>
      </div>
    </div>
  );
}
