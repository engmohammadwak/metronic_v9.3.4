function Toolbar({ children }) {
  return (
    <div className="flex flex-wrap items-center justify-between gap-3.5 pb-5">
      {children}
    </div>
  );
}

function ToolbarActions({ children }) {
  return <div className="flex items-center gap-2.5">{children}</div>;
}

function ToolbarHeading({ children }) {
  return (
    <div className="flex flex-col flex-wrap gap-1.5 lg:gap-1.5">{children}</div>
  );
}

function ToolbarPageTitle({ children }) {
  return (
    <h1 className="text-xl font-medium leading-none text-foreground">
      {children}
    </h1>
  );
}

export { Toolbar, ToolbarActions, ToolbarHeading, ToolbarPageTitle };
