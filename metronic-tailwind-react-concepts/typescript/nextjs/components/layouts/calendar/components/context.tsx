import { createContext, ReactNode, useContext, useEffect, useMemo, useState } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { TooltipProvider } from '@/components/ui/tooltip';

// Define the shape of the layout state
interface LayoutState {
  style: React.CSSProperties;
  bodyClassName: string;
  isMobile: boolean;
  isSidebarOpen: boolean;
  isAsideExpandedOpen: boolean;
  asideExpandedToggle: () => void;
  sidebarToggle: () => void;
}

// Create the context
const LayoutContext = createContext<LayoutState | undefined>(undefined);

// Provider component
interface LayoutProviderProps {
  children: ReactNode;
  style?: React.CSSProperties;
  bodyClassName?: string;
}

export function LayoutProvider({ children, style: customStyle, bodyClassName = '' }: LayoutProviderProps) {
  const isMobile = useIsMobile();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [isAsideExpandedOpen, setIsAsideExpandedOpen] = useState(false);

  const defaultStyle = useMemo(() => ({
    '--sidebar-width': '250px',
    '--header-height-mobile': '60px',
  }), []);

  const style: React.CSSProperties = useMemo(() => ({
    ...defaultStyle,
    ...customStyle,
  }), [defaultStyle, customStyle]);

  // Sidebar toggle function
  const sidebarToggle = () => setIsSidebarOpen((open) => !open);
  
  // Aside expanded toggle function
  const asideExpandedToggle = () => setIsAsideExpandedOpen((open) => !open);

  // Apply CSS variables to HTML root and body className
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    
    // Store original values for cleanup
    const originalHtmlStyle = html.style.cssText;
    const originalBodyClasses = body.className;

    // Apply CSS variables to HTML root element from the merged style
    Object.entries(style).forEach(([property, value]) => {
      if (typeof value === 'string' && property.startsWith('--')) {
        html.style.setProperty(property, value);
      }
    });

    // Apply body className if provided
    if (bodyClassName) {
      body.className = `${originalBodyClasses} ${bodyClassName}`.trim();
    }

    // Add data attributes to body for layout states
    body.setAttribute('data-sidebar-open', isSidebarOpen.toString());
    body.setAttribute('data-aside-expanded', isAsideExpandedOpen.toString());

    // Cleanup function
    return () => {
      html.style.cssText = originalHtmlStyle;
      body.className = originalBodyClasses;
      body.removeAttribute('data-sidebar-open');
      body.removeAttribute('data-aside-expanded');
    };
  }, [style, bodyClassName, isSidebarOpen, isAsideExpandedOpen]);

  return (
    <LayoutContext.Provider
      value={{
        bodyClassName,
        style,
        isMobile,
        isSidebarOpen,
        isAsideExpandedOpen,
        asideExpandedToggle,
        sidebarToggle
      }}
    >
      <div
        data-slot="layout-wrapper"
        className="flex grow"
      >
        <TooltipProvider delayDuration={0}>
          {children}
        </TooltipProvider>
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
