import { ChevronDown, MessageCircleMore, MessageSquareDot } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { DropdownMenu2 } from '../../layout-1/shared/dropdown-menu/dropdown-menu-2';
import { ChatSheet } from '../../layout-1/shared/topbar/chat-sheet';
import { NotificationsSheet } from '../../layout-1/shared/topbar/notifications-sheet';
import { UserDropdownMenu } from '../../layout-1/shared/topbar/user-dropdown-menu';

export function HeaderTopbar() {
  return (
    <div className="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
      <div className="flex items-center gap-2 me-0.5">
        <ChatSheet
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <MessageCircleMore className="size-4.5!" />
            </Button>
          }
        />

        <NotificationsSheet
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <MessageSquareDot className="size-4.5!" />
            </Button>
          }
        />

        <UserDropdownMenu
          trigger={
            <img
              className="ms-2.5 size-9 rounded-full border-2 border-success shrink-0 cursor-pointer"
              src={toAbsoluteUrl('/media/avatars/300-2.png')}
              alt="User Avatar"
            />
          }
        />
      </div>

      <div className="border-e border-border h-5"></div>

      <div className="flex items-center space-x-2">
        <Switch id="auto-update" size="sm" defaultChecked />
        <Label htmlFor="auto-update">Pro</Label>
      </div>

      <div className="border-e border-border h-5"></div>

      <DropdownMenu2
        trigger={
          <Button variant="mono">
            Create
            <ChevronDown />
          </Button>
        }
      />
    </div>
  );
}
