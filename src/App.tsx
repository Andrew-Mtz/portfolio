import { BrowserRouter } from "react-router";
import AppRouter from "./router/AppRouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        {/* <LayoutProvider> */}
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
        {/* </LayoutProvider> */}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
