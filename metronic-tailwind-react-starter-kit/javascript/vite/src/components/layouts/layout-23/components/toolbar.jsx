import { PanelRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLayout } from './context';

function Toolbar({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3.5 py-5">
      {children}
    </div>
  );
}

function ToolbarActions({ children }) {
  return <div className="flex items-center gap-2.5">{children}</div>;
}

function ToolbarHeading({ children }) {
  return <div className="flex flex-col justify-center gap-2">{children}</div>;
}

function ToolbarPageTitle({ children }) {
  return (
    <h1 className="text-base font-medium leading-none text-foreground">
      {children}
    </h1>
  );
}

function ToolbarDescription({ children }) {
  return (
    <div className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
      {children}
    </div>
  );
}

function ToolbarSidebarToggle() {
  const { isMobile, isSidebarOpen, sidebarToggle } = useLayout();

  if (isMobile || isSidebarOpen) {
    return null;
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={sidebarToggle}
      className="text-muted-foreground hover:text-foreground"
    >
      <PanelRight className="opacity-100" />
    </Button>
  );
}

export {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription,
  ToolbarSidebarToggle,
};
