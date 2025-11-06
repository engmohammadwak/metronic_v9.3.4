'use client';

import * as React from 'react';
import { format } from 'date-fns';
import { PlusIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';

const events = [
  {
    title: 'Team Sync Meeting',
    from: '2025-06-12T09:00:00',
    to: '2025-06-12T10:00:00',
    color: 'after:bg-green-500',
  },
  {
    title: 'Design Review',
    from: '2025-06-12T11:30:00',
    to: '2025-06-12T12:30:00',
    color: 'after:bg-violet-500',
  },
  {
    title: 'Client Presentation',
    from: '2025-06-12T14:00:00',
    to: '2025-06-12T15:00:00',
    color: 'after:bg-yellow-500',
  },
];

export default function SidebarCalendar() {
  const [date, setDate] = React.useState(new Date(2025, 5, 12));

  return (
    <div className="w-full space-y-6 pt-6 lg:py-2 pb-6">
      <div className="px-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full bg-transparent text-white p-0"
          required
        />
      </div>
      <div className="flex flex-col items-start gap-3 px-4">
        <div className="flex w-full items-center justify-between px-1">
          <div className="text-white text-sm font-medium">
            {date?.toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="size-6"
            title="Add Event"
          >
            <PlusIcon />
            <span className="sr-only">Add Event</span>
          </Button>
        </div>
        <div className="flex w-full flex-col gap-2">
          {events.map((event) => (
            <div
              key={event.title}
              className={cn(
                'text-white bg-muted relative rounded-md p-2 pl-6 text-sm after:absolute after:inset-y-2 after:left-2 after:w-1 after:rounded-full',
                event.color,
              )}
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-muted-foreground text-xs">
                {format(new Date(event.from), 'h:mm a')} -{' '}
                {format(new Date(event.to), 'h:mm a')}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
