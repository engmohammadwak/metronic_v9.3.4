import { PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';

function ToolbarSidebarToggle() {
  const { isMobile, isSidebarOpen, sidebarToggle } = useLayout();

  if (isMobile || isSidebarOpen) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      mode="icon"
      onClick={sidebarToggle}
      className="text-muted-foreground hover:text-foreground"
    >
      <PanelRight className="size-5 opacity-100" />
    </Button>
  );
}

export { ToolbarSidebarToggle };
