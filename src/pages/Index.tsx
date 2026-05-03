import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FeaturesTabsSection from "@/components/landing/FeaturesTabsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProductPreviewSection from "@/components/landing/ProductPreviewSection";
import PricingSection from "@/components/landing/PricingSection";
import CtaSection from "@/components/landing/CtaSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <SocialProofSection />
      <FeaturesTabsSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ProductPreviewSection />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;
