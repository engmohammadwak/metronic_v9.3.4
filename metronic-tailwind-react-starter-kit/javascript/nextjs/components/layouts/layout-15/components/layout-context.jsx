import { createContext, useContext, useState } from 'react';

// Define the shape of the layout state

// Create the context
const LayoutContext = createContext(undefined);

// Provider component

export function LayoutProvider({ children, sidebarNavItems }) {
  const [sidebarCollapse, setSidebarCollapse] = useState(false);
  const initialPinned = sidebarNavItems
    .filter((item) => item.pinned)
    .map((item) => item.id);
  const [sidebarPinnedNavItems, setSidebarPinnedNavItems] =
    useState(initialPinned);

  const pinSidebarNavItem = (id) => {
    setSidebarPinnedNavItems((prev) =>
      prev.includes(id) ? prev : [...prev, id],
    );
  };
  const unpinSidebarNavItem = (id) => {
    setSidebarPinnedNavItems((prev) => prev.filter((itemId) => itemId !== id));
  };
  const isSidebarNavItemPinned = (id) => {
    return sidebarPinnedNavItems.includes(id);
  };

  const getSidebarNavItems = () => {
    return sidebarNavItems.map((item) => {
      if (item.pinnable) {
        return {
          ...item,
          pinned: isSidebarNavItemPinned(item.id),
        };
      }
      return item;
    });
  };

  return (
    <LayoutContext.Provider
      value={{
        sidebarCollapse,
        setSidebarCollapse,
        sidebarPinnedNavItems,
        getSidebarNavItems,
        pinSidebarNavItem,
        unpinSidebarNavItem,
        isSidebarNavItemPinned,
      }}
    >
      {children}
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
