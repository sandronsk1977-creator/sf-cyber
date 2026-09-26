import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Router as WouterRouter, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { SimulatorPage } from "./pages/SimulatorPage";
import { SimulatorSecurityPage } from "./pages/SimulatorSecurityPage";
import { SimulatorWebPage } from "./pages/SimulatorWebPage";
import { SimulatorDnsPage } from "./pages/SimulatorDnsPage";

const FALLBACK_ROUTE_KEY = "sfcyberRoute";

function AppRoutes() {
  const [location, navigate] = useLocation();
  const [pending, setPending] = useState<string | null>(() => {
    try {
      const stored = sessionStorage.getItem(FALLBACK_ROUTE_KEY);
      if (stored && stored !== location) {
        sessionStorage.removeItem(FALLBACK_ROUTE_KEY);
        return stored;
      }
    } catch {
      /* storage bloqueado */
    }
    return null;
  });

  useEffect(() => {
    if (!pending) return;
    sessionStorage.removeItem(FALLBACK_ROUTE_KEY);
    setPending(null);
    navigate(pending, { replace: true });
  }, [pending, navigate]);

  if (pending) return null;

  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/simulador-vlan" component={SimulatorPage} />
      <Route path="/simulador-seguranca" component={SimulatorSecurityPage} />
      <Route path="/simulador-web" component={SimulatorWebPage} />
      <Route path="/simulador-dns" component={SimulatorDnsPage} />
      <Route path="/404" component={NotFound} />

      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function Router() {
  const base = import.meta.env.BASE_URL.replace(/\/$/, "");

  return (
    <WouterRouter base={base}>
      <AppRoutes />
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
          <Toaster />
        </TooltipProvider>
      </ErrorBoundary>
    </ThemeProvider>
  );
}

export default App;
