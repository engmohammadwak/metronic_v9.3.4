import { MessageCircleMore, MessageSquareDot, Search } from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { ChatSheet } from '../../layout-1/shared/topbar/chat-sheet';
import { SearchDialog } from '../../layout-1/shared/dialogs/search/search-dialog';
import { UserDropdownMenu } from '../../layout-1/shared/topbar/user-dropdown-menu';
import { NotificationsSheet } from '../../layout-1/shared/topbar/notifications-sheet';

export function HeaderTopbar() {
  return (
    <>
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <SearchDialog
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                shape="circle"
                className="size-9"
              >
                <Search className="size-4.5!" />
              </Button>
            }
          />
          <ChatSheet
            trigger={
              <Button
                variant="ghost"
                mode="icon"
                shape="circle"
                className="size-9"
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
                size="sm"
                shape="circle"
                className="size-9"
              >
                <MessageSquareDot className="size-4.5!" />
              </Button>
            }
          />
        </div>
        <UserDropdownMenu
          trigger={
            <img
              className="cursor-pointer size-9 rounded-full justify-center border border-gray-500 shrink-0"
              src={toAbsoluteUrl('/media/avatars/gray/5.png')}
              alt=""
            />
          }
        />
      </div>
    </>
  );
}
