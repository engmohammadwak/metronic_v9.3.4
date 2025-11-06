import { useState } from 'react';
import { addDays, format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { useBodyClass } from '@/hooks/use-body-class';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Footer } from './footer';
import { Header } from './header';
import { Navbar } from './navbar';
import { Sidebar } from './sidebar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';

export function Main({ children }) {
  const isMobile = useIsMobile();

  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClass(`
    [--header-height:54px]
    [--sidebar-width:200px]  
  `);

  return (
    <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height)">
      <Header />
      <Navbar />

      <div className="container-fluid flex">
        {!isMobile && <Sidebar />}

        <main className="container flex flex-col grow">
          <Toolbar>
            <ToolbarHeading />
            <ToolbarActions>
              <Popover>
                <PopoverTrigger asChild>
                  <Button id="date" variant="outline" mode="input">
                    <CalendarDays />
                    {date?.from ? (
                      date.to ? (
                        <span>
                          {format(date.from, 'LLL dd, y')} -{' '}
                          {format(date.to, 'LLL dd, y')}
                        </span>
                      ) : (
                        format(date.from, 'LLL dd, y')
                      )
                    ) : (
                      <span>Pick a date range</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="end">
                  <Calendar
                    mode="range"
                    defaultMonth={date?.from}
                    selected={date}
                    onSelect={setDate}
                    numberOfMonths={2}
                  />
                </PopoverContent>
              </Popover>
            </ToolbarActions>
          </Toolbar>

          {children}

          <Footer />
        </main>
      </div>
    </div>
  );
}
