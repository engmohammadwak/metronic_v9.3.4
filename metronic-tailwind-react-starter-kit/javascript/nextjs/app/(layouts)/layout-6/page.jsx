'use client';

import { useState } from 'react';
import Link from 'next/link';
import { addDays, format } from 'date-fns';
import { CalendarDays, Download } from 'lucide-react';
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
} from '@/components/layouts/layout-6/components/toolbar';

export default function Page() {
  const [date, setDate] = useState({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  return (
    <div className="container">
      <Toolbar>
        <ToolbarHeading
          title="Team Settings"
          description="Overview of your business"
        />
        <ToolbarActions>
          <Button variant="outline" asChild>
            <Link href={'/layout-6/empty'}>
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

      <Skeleton className="rounded-lg grow h-[calc(100vh-175px)]"></Skeleton>
    </div>
  );
}
