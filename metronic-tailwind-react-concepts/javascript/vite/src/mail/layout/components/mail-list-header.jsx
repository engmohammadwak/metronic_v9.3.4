import {
  PanelLeftClose,
  PanelLeftOpen,
  RefreshCcw,
  Search,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input, InputWrapper } from '@/components/ui/input';
import { CategorySelector } from './category-selector';
import { useLayout } from './context';

export function MailListHeader() {
  const { toggleSidebar, sidebarCollapsed } = useLayout();

  return (
    <div className="flex items-center justify-between px-2 py-3 gap-1">
      <Button
        variant="ghost"
        mode="icon"
        onClick={toggleSidebar}
        className="hidden lg:inline-flex"
      >
        {sidebarCollapsed ? <PanelLeftOpen /> : <PanelLeftClose />}
      </Button>
      <div className="flex items-center w-full gap-1">
        <InputWrapper className="w-full">
          <Search />
          <Input type="text" placeholder="Search..." />
        </InputWrapper>
        <div className="flex items-center gap-px">
          <CategorySelector />
          <Button variant="ghost" mode="icon">
            <RefreshCcw />
          </Button>
        </div>
      </div>
    </div>
  );
}
