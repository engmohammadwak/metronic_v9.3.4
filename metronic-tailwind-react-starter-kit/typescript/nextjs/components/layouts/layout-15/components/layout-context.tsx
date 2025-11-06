import { createContext, useContext, useState, ReactNode } from 'react';
import { NavConfig } from '@/config/layout-15.config';

// Define the shape of the layout state
interface LayoutState {
  sidebarCollapse: boolean;
  setSidebarCollapse: (open: boolean) => void;
  sidebarPinnedNavItems: string[];
  pinSidebarNavItem: (id: string) => void;
  unpinSidebarNavItem: (id: string) => void;
  isSidebarNavItemPinned: (id: string) => boolean;
  getSidebarNavItems: () => NavConfig;
}

// Create the context
const LayoutContext = createContext<LayoutState | undefined>(undefined);

// Provider component
interface LayoutProviderProps {
  children: ReactNode;
  sidebarNavItems: NavConfig;
}

export function LayoutProvider({ children, sidebarNavItems }: LayoutProviderProps) {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const initialPinned = sidebarNavItems.filter(item => item.pinned).map(item => item.id);
  const [sidebarPinnedNavItems, setSidebarPinnedNavItems] = useState<string[]>(initialPinned);

  const pinSidebarNavItem = (id: string) => {
    setSidebarPinnedNavItems((prev) => prev.includes(id) ? prev : [...prev, id]);
  };
  const unpinSidebarNavItem = (id: string) => {
    setSidebarPinnedNavItems((prev) => prev.filter((itemId) => itemId !== id));
  };
  const isSidebarNavItemPinned = (id: string) => {
    return sidebarPinnedNavItems.includes(id);
  };   

  const getSidebarNavItems = () => {
    return sidebarNavItems.map((item) => {
      if (item.pinnable) {
        return {
          ...item,
          pinned: isSidebarNavItemPinned(item.id)
        };
      }
      return item;
    });
  };

  return (
    <LayoutContext.Provider value={{ sidebarCollapse, setSidebarCollapse, sidebarPinnedNavItems, getSidebarNavItems, pinSidebarNavItem, unpinSidebarNavItem, isSidebarNavItemPinned }}>
      {children}
    </LayoutContext.Provider>
  );
};

// Custom hook for consuming the context
export const useLayout = () => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error('useLayout must be used within a LayoutProvider');
  }
  return context;
};
