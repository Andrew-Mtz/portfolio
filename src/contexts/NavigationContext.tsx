import { useState, ReactNode } from "react";
import { NavigationContext, ViewType } from "./useNavigation";

export const NavigationProvider = ({ children }: { children: ReactNode }) => {
  const [view, setView] = useState<ViewType>("grid");
  const [currentPath, setCurrentPath] = useState<string[]>([]); // ej: ['Work', 'Projects']
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  return (
    <NavigationContext.Provider
      value={{
        view,
        setView,
        currentPath,
        setCurrentPath,
        selectedItem,
        setSelectedItem,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};
