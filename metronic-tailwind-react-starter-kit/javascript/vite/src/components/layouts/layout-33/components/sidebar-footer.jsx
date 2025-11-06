import { LogOut, Mails, NotepadText, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { UserDropdownMenu } from './user-dropdown-menu';

export function SidebarFooter() {
  return (
    <div className="flex items-center justify-between shrink-0 px-5 py-2.5 border-t border-border">
      <div className="flex items-center gap-1">
        <UserDropdownMenu />

        <Button
          variant="ghost"
          mode="icon"
          className="text-muted-foreground hover:text-foreground ms-2.5"
        >
          <Mails className="opacity-100 size-4.5!" />
        </Button>

        <Button
          variant="ghost"
          mode="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <NotepadText className="opacity-100 size-4.5!" />
        </Button>

        <Button
          variant="ghost"
          mode="icon"
          className="text-muted-foreground hover:text-foreground"
        >
          <Settings className="opacity-100 size-4.5!" />
        </Button>
      </div>

      <Button
        variant="ghost"
        mode="icon"
        className="text-muted-foreground hover:text-foreground"
      >
        <LogOut className="opacity-100 size-4.5!" />
      </Button>
    </div>
  );
}
