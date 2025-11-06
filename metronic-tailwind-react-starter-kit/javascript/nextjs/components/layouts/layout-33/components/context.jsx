import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { TooltipProvider } from '@/components/ui/tooltip';

// Define the shape of the layout state

// Create the context
const LayoutContext = createContext(undefined);

// Provider component

export function LayoutProvider({
  children,
  style: customStyle,
  bodyClassName = '',
}) {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const cssVariables = useMemo(
    () => ({
      '--sidebar-width': '310px',
      '--sidebar-width-mobile': '60px',
      '--header-height': '60px',
      '--header-height-mobile': '60px',
      ...(customStyle || {}),
    }),
    [customStyle],
  );

  const style = useMemo(
    () => ({
      ...cssVariables,
    }),
    [cssVariables],
  );

  // Sidebar toggle function
  const sidebarToggle = () => setIsSidebarOpen((open) => !open);

  // Apply CSS variables to HTML root and set body attributes/classes
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    const originalHtmlStyle = html.style.cssText;
    const originalBodyClasses = body.className;

    // Apply CSS variables to :root
    Object.entries(cssVariables).forEach(([prop, val]) => {
      html.style.setProperty(prop, val);
    });

    // Apply body classes
    if (bodyClassName) {
      body.className = `${originalBodyClasses} ${bodyClassName}`.trim();
    }

    // Reflect layout state via data attributes on body
    body.setAttribute('data-sidebar-open', isSidebarOpen.toString());

    return () => {
      html.style.cssText = originalHtmlStyle;
      body.className = originalBodyClasses;
      body.removeAttribute('data-sidebar-open');
    };
  }, [cssVariables, bodyClassName, isSidebarOpen]);

  return (
    <LayoutContext.Provider
      value={{
        bodyClassName,
        style,
        isMobile,
        isSidebarOpen,
        sidebarToggle,
      }}
    >
      <div data-slot="layout-wrapper" className="flex grow">
        <TooltipProvider delayDuration={0}>{children}</TooltipProvider>
      </div>
    </LayoutContext.Provider>
  );
}

// Custom hook for consuming the context
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
