import { ReactNode } from 'react';

function Toolbar({ children }: { children?: ReactNode }) {
  return (
    <div className="py-5 bg-background border-b border-border">
      <div className="container flex flex-wrap items-center justify-between gap-2.5 shrink-0"> 
        {children}
      </div>
    </div>
  );
}

function ToolbarActions({ children }: { children?: ReactNode }) {
  return <div className="flex items-center gap-2.5">{children}</div>;
}

function ToolbarHeading ({ children }: { children: ReactNode }) {
  return <div className="flex flex-col justify-center gap-1">{children}</div>;
}

function ToolbarPageTitle ({ children }: { children?: string }) {
  return (
    <h1 className="text-2xl font-semibold leading-none text-foreground">
      {children}
    </h1>
  );
};

function ToolbarDescription ({ children }: { children: ReactNode }) {
  return (
    <div className="flex items-center gap-2 text-sm font-normal text-muted-foreground">
      {children}
    </div>
  );
};

export {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription
};
