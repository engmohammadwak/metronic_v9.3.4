import { createContext, useContext, useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { useScrollPosition } from '@/hooks/use-scroll-position';
import { TooltipProvider } from '@/components/ui/tooltip';

const HEADER_HEIGHT = '124px';
const HEADER_HEIGHT_STICKY = '60px';
const HEADER_HEIGHT_MOBILE = '124px';
// Define the shape of the layout state

// Create the context
const LayoutContext = createContext(undefined);

// Provider component

export function LayoutProvider({
  children,
  style: customStyle,
  bodyClassName = '',
  headerStickyOffset = 100,
}) {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const scrollPosition = useScrollPosition();

  const defaultStyle = {
    '--header-height': HEADER_HEIGHT,
    '--header-height-sticky': HEADER_HEIGHT_STICKY,
    '--header-height-mobile': HEADER_HEIGHT_MOBILE,
  };

  const style = {
    ...defaultStyle,
    ...customStyle,
  };

  // Sidebar toggle function
  const sidebarToggle = () => setIsSidebarOpen((open) => !open);

  // Set body className and data attributes on mount and clean up on unmount
  useEffect(() => {
    const body = document.body;
    const existingClasses = body.className;

    // Add new classes
    if (bodyClassName) {
      body.className = `${existingClasses} ${bodyClassName}`.trim();
    }

    // Set header sticky state
    body.setAttribute(
      'data-header-sticky',
      String(scrollPosition > headerStickyOffset),
    );

    // Cleanup function to remove classes and data attributes on unmount
    return () => {
      body.className = existingClasses;
      if (scrollPosition > headerStickyOffset) {
        body.setAttribute('data-header-sticky', 'true');
      } else {
        body.removeAttribute('data-header-sticky');
      }
    };
  }, [bodyClassName, scrollPosition, headerStickyOffset]);

  return (
    <LayoutContext.Provider
      value={{
        bodyClassName,
        style,
        headerStickyOffset,
        isMobile,
        isSidebarOpen,
        sidebarToggle,
      }}
    >
      <div
        data-slot="layout-wrapper"
        className="flex grow"
        data-sidebar-open={isSidebarOpen}
        style={style}
      >
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
