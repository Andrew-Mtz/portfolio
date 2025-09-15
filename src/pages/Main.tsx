import { NavigationProvider } from "../contexts/NavigationContext";
import { MainLayout } from "../layouts/MainLayout/MainLayout";

export function Main() {
  return (
    <NavigationProvider>
      <MainLayout />
    </NavigationProvider>
  );
}
