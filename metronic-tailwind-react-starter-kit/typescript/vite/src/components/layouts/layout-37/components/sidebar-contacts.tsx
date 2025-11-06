import { Avatar, AvatarFallback, AvatarImage, AvatarIndicator, AvatarStatus } from '@/components/ui/avatar';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { toAbsoluteUrl } from '@/lib/helpers';

interface Contact {
  id: string;
  name: string;
  avatar: string;
  isOnline: boolean;
  isYou?: boolean;
}

const contacts: Contact[] = [
  {
    id: '1',
    name: 'Kou Tanaka',
    avatar: '/media/avatars/300-1.png',
    isOnline: true,
    isYou: true,
  },
  {
    id: '2',
    name: 'Isabella Stewart',
    avatar: '/media/avatars/300-2.png',
    isOnline: false,
  },
  {
    id: '3',
    name: 'Yui Mimura',
    avatar: '/media/avatars/300-3.png',
    isOnline: false,
  },
];

export function SidebarContacts() {
  return (
    <div className="space-y-0.5 pt-5">
      <h3 className="text-xs font-normal text-muted-foreground px-2 py-1 mb-1 in-data-[sidebar-collapsed=true]:hidden">
        Direct Messages
      </h3>
      
      <div className="space-y-1">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={cn(
              "flex items-center gap-2 p-2 rounded-lg cursor-pointer transition-colors mx-2 h-8",
              "hover:bg-background dark:hover:bg-zinc-900 group",
              "in-data-[sidebar-collapsed=true]:mx-0 in-data-[sidebar-collapsed=true]:w-8 in-data-[sidebar-collapsed=true]:justify-center"
            )}
          >
            <Avatar className="size-5">
              <AvatarImage src={toAbsoluteUrl(contact.avatar)} alt={contact.name} />
              <AvatarFallback>
                {contact.name.split(' ').map(n => n[0]).join('')}
              </AvatarFallback>
              {contact.isOnline && (
                <AvatarIndicator className="-end-2 -bottom-2">
                  <AvatarStatus variant="online" className="size-2" />
                </AvatarIndicator>
              )}
            </Avatar>
            
            <div className="flex-1 min-w-0 in-data-[sidebar-collapsed=true]:hidden">
              <div className="flex items-center gap-1">
                <span className="text-2sm font-normal text-foreground group-hover:text-primary">
                  {contact.name}
                </span>
                {contact.isYou && (
                  <span className="text-xs text-muted-foreground group-hover:text-primary">
                    (You)
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
        
        <div
          className={cn(
            "flex items-center gap-2 py-2 px-3 rounded-lg cursor-pointer transition-colors mx-2 h-8",
            "hover:bg-background dark:hover:bg-zinc-900 group",
            "in-data-[sidebar-collapsed=true]:mx-0 in-data-[sidebar-collapsed=true]:w-8 in-data-[sidebar-collapsed=true]:justify-center"
          )}
        >
         
          <Plus className="size-3.5 group-hover:text-primary shrink-0" />
          <span className="text-2sm font-medium text-muted-foreground group-hover:text-primary in-data-[sidebar-collapsed=true]:hidden">
            Add Teammates
          </span>
        </div>
      </div>
    </div>
  );
}
