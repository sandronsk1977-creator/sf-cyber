import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ContactRail } from "./components/ContactRail";
import Home from "./pages/Home";
import { SimulatorPage } from "./pages/SimulatorPage";
import { SimulatorSecurityPage } from "./pages/SimulatorSecurityPage";
import { SimulatorWebPage } from "./pages/SimulatorWebPage";

function Router() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <WouterRouter base={base}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/simulador-vlan" component={SimulatorPage} />
        <Route path="/simulador-seguranca" component={SimulatorSecurityPage} />
        <Route path="/simulador-web" component={SimulatorWebPage} />
        <Route path="/404" component={NotFound} />

        {/* Final fallback route */}
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), then change color palette in index.css
//   to keep consistent foreground/background across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook
function App() {
  return (
    <ThemeProvider defaultTheme="dark">
      <ErrorBoundary>
        <TooltipProvider>
          <Router />
          <ContactRail />
          <Toaster />
        </TooltipProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
