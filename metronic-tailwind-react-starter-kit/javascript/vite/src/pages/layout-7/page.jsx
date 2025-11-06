import { useState } from 'react';
import { addDays, format } from 'date-fns';
import { CalendarDays, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Skeleton } from '@/components/ui/skeleton';
import {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
} from '@/components/layouts/layout-7/components/toolbar';

export function Layout7Page() {
  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  return (
    <>
      <Toolbar>
        <ToolbarHeading title="Dashboard" />

        <ToolbarActions>
          <Button variant="outline" asChild>
            <Link to={'#'}>
              <Download />
              Export
            </Link>
          </Button>

          <Popover>
            <PopoverTrigger asChild>
              <Button id="date" variant="outline">
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

      <div className="container">
        <Skeleton className="rounded-lg grow h-screen"></Skeleton>
      </div>
    </>
  );
}
