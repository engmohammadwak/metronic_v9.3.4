import {
  createContext,
  ReactNode,
  useContext,
  useEffect,useState
} from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { TooltipProvider } from '@/components/ui/tooltip';

const HEADER_HEIGHT = "60px";
const SIDEBAR_WIDTH = "16rem";
const SIDEBAR_HEADER_HEIGHT = "60px";
// Define the shape of the layout state
interface LayoutState {
  style: React.CSSProperties;
  bodyClassName: string;
  isMobile: boolean;
  isSidebarSecondaryOpen: boolean;
  sidebarSecondaryToggle: () => void;
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
  const [isSidebarSecondaryOpen, setIsSidebarSecondaryOpen] = useState(true);

  const defaultStyle: React.CSSProperties = {
    '--sidebar-width': SIDEBAR_WIDTH,
    '--header-height': HEADER_HEIGHT,
    '--sidebar-header-height': SIDEBAR_HEADER_HEIGHT
  } as React.CSSProperties;

  const style: React.CSSProperties = {
    ...defaultStyle,
    ...customStyle,
  };

  // Sidebar toggle function
  const sidebarSecondaryToggle = () => setIsSidebarSecondaryOpen((open) => !open);

  // Set body className on mount and clean up on unmount
  useEffect(() => {
    if (bodyClassName) {
      const body = document.body;
      const existingClasses = body.className;

      // Add new classes
      body.className = `${existingClasses} ${bodyClassName}`.trim();

      // Cleanup function to remove classes on unmount
      return () => {
        body.className = existingClasses;
      };
    }
  }, [bodyClassName]);

  return (
    <LayoutContext.Provider
      value={{
        bodyClassName,
        style,
        isMobile,
        isSidebarSecondaryOpen,
        sidebarSecondaryToggle
      }}
    >
      <div
        data-slot="layout-wrapper"
        className="flex grow"
        data-sidebar-secondary-open={isSidebarSecondaryOpen}
        style={style}
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
