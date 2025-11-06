function Toolbar({ children }) {
  return (
    <div className="py-4 lg:py-9 border-b border-border bg-muted">
      <div className="container flex flex-wrap items-center justify-between gap-2.5 shrink-0">
        {children}
      </div>
    </div>
  );
}

function ToolbarActions({ children }) {
  return <div className="flex items-center gap-3.5">{children}</div>;
}

function ToolbarHeading({ children }) {
  return <div className="flex flex-col justify-center gap-2.5">{children}</div>;
}

function ToolbarPageTitle({ children }) {
  return (
    <h1 className="text-[1.75rem] font-semibold leading-none text-foreground">
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

export {
  Toolbar,
  ToolbarActions,
  ToolbarHeading,
  ToolbarPageTitle,
  ToolbarDescription,
};
