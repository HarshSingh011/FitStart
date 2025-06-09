import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header"
import Hero from "./components/Hero";
import GymCategories from "./components/GymCategories";
import FeaturedGyms from "./components/FeaturedGyms";
import Footer from "./components/Footer";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <GymCategories />
      <FeaturedGyms />
      <Footer />
    </div>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;