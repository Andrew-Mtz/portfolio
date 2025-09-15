import { createContext, useContext } from "react";

export type ViewType = "grid" | "list" | "columns";

interface NavigationContextProps {
  view: ViewType;
  setView: (view: ViewType) => void;
  currentPath: string[];
  setCurrentPath: (path: string[]) => void;
  selectedItem: string | null;
  setSelectedItem: (item: string | null) => void;
}

export const NavigationContext = createContext<
  NavigationContextProps | undefined
>(undefined);

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "useNavigation debe usarse dentro de un NavigationProvider"
    );
  }
  return context;
};
