import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Navigation } from "./components/Navigation";
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Index from "./pages/Index";
import Wallet from "./pages/Wallet";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Profile from "./pages/Profile";
import Auth from "./pages/Auth";

const queryClient = new QueryClient();

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsAuthenticated(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsAuthenticated(!!session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          {isAuthenticated && <Navigation />}
          <Routes>
            <Route
              path="/"
              element={isAuthenticated ? <Index /> : <Navigate to="/auth" />}
            />
            <Route
              path="/wallet"
              element={isAuthenticated ? <Wallet /> : <Navigate to="/auth" />}
            />
            <Route
              path="/blog"
              element={isAuthenticated ? <Blog /> : <Navigate to="/auth" />}
            />
            <Route
              path="/shop"
              element={isAuthenticated ? <Shop /> : <Navigate to="/auth" />}
            />
            <Route
              path="/profile"
              element={isAuthenticated ? <Profile /> : <Navigate to="/auth" />}
            />
            <Route
              path="/auth"
              element={!isAuthenticated ? <Auth /> : <Navigate to="/" />}
            />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;