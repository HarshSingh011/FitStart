import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GymCategories from "@/components/GymCategories";
import FeaturedGyms from "@/components/FeaturedGyms";
import Footer from "@/components/Footer";

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

export default Index;
