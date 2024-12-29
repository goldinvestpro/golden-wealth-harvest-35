import React from 'react';
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SessionContextProvider } from '@supabase/auth-helpers-react';
import { supabase } from "@/integrations/supabase/client";
import { Navigation } from "./components/Navigation";
import Index from "./pages/Index";
import Wallet from "./pages/Wallet";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";

// Create a client outside of the component
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5000,
      retry: 1,
    },
  },
});

// Use function declaration instead of arrow function
function App() {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <SessionContextProvider supabaseClient={supabase}>
          <TooltipProvider>
            <Toaster />
            <Sonner />
            <BrowserRouter>
              <Navigation />
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/wallet" element={<Wallet />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/auth" element={<Auth />} />
              </Routes>
            </BrowserRouter>
          </TooltipProvider>
        </SessionContextProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;