import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Pricing from "./pages/Pricing";
import Signup from "./pages/Signup";
import EmailSignup1 from "./pages/EmailSignup1";
import EmailSignup2 from "./pages/EmailSignup2";
import Apply from "./pages/Apply";
import Terms from "./pages/Terms";
import Blueprint from "./pages/Blueprint";
import Links from "./pages/Links";
import Macros from "./pages/Macros";
import Verdskra from "./pages/Verdskra";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Exercises from "./pages/Exercises";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/fjarþjálfun" element={<HowItWorks />} />
              <Route path="/um-mig" element={<About />} />
              <Route path="/hafdu-samband" element={<Contact />} />
              <Route path="/tilbun-progrom" element={<Pricing />} />
              <Route path="/skraning" element={<Signup />} />
              <Route path="/email1" element={<EmailSignup1 />} />
              <Route path="/email2" element={<EmailSignup2 />} />
              <Route path="/umsokn" element={<Apply />} />
              <Route path="/skilmalar" element={<Terms />} />
              <Route path="/blueprint" element={<Blueprint />} />
              <Route path="/links" element={<Links />} />
              <Route path="/macros" element={<Macros />} />
              <Route path="/verdskra" element={<Verdskra />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/æfingar" element={<Exercises />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
