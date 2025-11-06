import { useState } from 'react';
import { Calendar, Clock, CheckSquare, Bell, Users, Settings } from 'lucide-react';
import { cn } from '@/lib/utils';

interface MenuItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  count?: number;
  color?: string;
}

export function SidebarCalendarMenu() {
  const [activeItem, setActiveItem] = useState<string>('events');

  const menuItems: MenuItem[] = [
    {
      id: 'events',
      label: 'Events',
      icon: <Calendar className="w-4 h-4" />,
      count: 12,
      color: 'text-blue-400'
    },
    {
      id: 'meetings',
      label: 'Meetings',
      icon: <Users className="w-4 h-4" />,
      count: 5,
      color: 'text-purple-400'
    },
    {
      id: 'tasks',
      label: 'Tasks',
      icon: <CheckSquare className="w-4 h-4" />,
      count: 23,
      color: 'text-green-400'
    },
    {
      id: 'reminders',
      label: 'Reminders',
      icon: <Bell className="w-4 h-4" />,
      count: 8,
      color: 'text-yellow-400'
    },
    {
      id: 'schedule',
      label: 'Schedule',
      icon: <Clock className="w-4 h-4" />,
      color: 'text-orange-400'
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: <Settings className="w-4 h-4" />,
      color: 'text-gray-400'
    }
  ];

  const handleItemClick = (id: string) => {
    setActiveItem(id);
    console.log(`Menu item clicked: ${id}`);
  };

  return (
    <div className="px-4 space-y-3.5 pt-6">
      <div className="text-[0.725rem] font-medium text-muted-foreground tracking-wider uppercase">
        Calendars
      </div>
      <div className="space-y-0.5">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleItemClick(item.id)}
            className={cn(
              'w-full flex items-center justify-between px-2 py-1.5 rounded-lg transition-all duration-200',
              'hover:bg-white/5 active:scale-[0.98]',
              activeItem === item.id
                ? 'bg-white/10 shadow-sm'
                : 'bg-transparent'
            )}
          >
            <div className="flex items-center gap-3">
              <div className={cn(
                'flex items-center justify-center size-7 rounded-md',
                activeItem === item.id 
                  ? 'bg-white/10' 
                  : 'bg-white/5'
              )}>
                <span className={item.color}>
                  {item.icon}
                </span>
              </div>
              <span className={cn(
                'text-sm font-medium',
                activeItem === item.id ? 'text-white' : 'text-gray-300'
              )}>
                {item.label}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {item.count !== undefined && (
                <span className={cn(
                  'text-xs font-semibold px-2 py-0.5 rounded-full',
                  activeItem === item.id
                    ? 'bg-white/20 text-white'
                    : 'bg-white/5 text-gray-400'
                )}>
                  {item.count}
                </span>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
