import { useState } from 'react';

import { addDays, format } from 'date-fns';
import { CalendarDays } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Outlet, useLocation } from 'react-router-dom';
import { useBodyClass } from '@/hooks/use-body-class';
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
import { Toolbar, ToolbarActions, ToolbarHeading } from './toolbar';

export function Main() {
  const { pathname } = useLocation();

  // Using the custom hook to set multiple CSS variables and class properties
  useBodyClass(`
    [--header-height-default:70px]  
    lg:[--header-height-default:80px]
    [--header-height:var(--header-height-default)]	
    [&_[data-header-sticky=on]]:[--header-height:60px]
  `);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  return (
    <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height-default)">
      <Header />

      <Navbar />

      <main className="grow" role="content">
        {!pathname.includes('#') && (
          <Toolbar>
            <ToolbarHeading title="Dashboard" />
            <ToolbarActions>
              <Popover>
                <PopoverTrigger asChild>
                  <Button mode="input" variant="outline">
                    <CalendarDays />
                    {date?.from ? (
                      date.to ? (
                        <>
                          {format(date.from, 'LLL dd, y')} -{' '}
                          {format(date.to, 'LLL dd, y')}
                        </>
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
                    initialFocus
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
        )}
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
