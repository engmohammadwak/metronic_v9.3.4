
import {
  LayoutGrid,
  MessageCircleMore,
  MessageSquareDot,
  Search,
  Users,
} from 'lucide-react';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { ChatSheet } from '../../layout-1/shared/topbar/chat-sheet';
import { SearchDialog } from '../../layout-1/shared/dialogs/search/search-dialog';
import { AppsDropdownMenu } from '../../layout-1/shared/topbar/apps-dropdown-menu';
import { UserDropdownMenu } from '../../layout-1/shared/topbar/user-dropdown-menu';
import { NotificationsSheet } from '../../layout-1/shared/topbar/notifications-sheet';
import Link from 'next/link';

export function HeaderTopbar() {

  return (
    <div className="flex items-center gap-2 lg:gap-3.5">
      <Button variant="outline" asChild>
        <Link href="#">
          <Users />
          Add <span className="hidden md:inline">Teammate</span>
        </Link>
      </Button>

      <div className="flex items-center gap-1">
        <SearchDialog
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
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
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <MessageCircleMore className="size-4.5!" />
            </Button>
          }
        />
        <AppsDropdownMenu
          trigger={
            <Button
              variant="ghost"
              mode="icon"
              shape="circle"
              className="hover:bg-transparent hover:[&_svg]:text-primary"
            >
              <LayoutGrid className="size-4.5!" />
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
      </div>

      <UserDropdownMenu
        trigger={
          <img
            className="cursor-pointer size-9 rounded-full border-2 border-mono/25 shrink-0"
            src={toAbsoluteUrl('/media/avatars/300-2.png')}
            alt="User Avatar"
          />
        }
      />
    </div>
  );
}
