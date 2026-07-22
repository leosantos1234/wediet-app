import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroPremiumSection";
import SocialProofSection from "@/components/landing/SocialProofSection";
import FeaturesTabsSection from "@/components/landing/FeaturesTabsSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProductPreviewSection from "@/components/landing/ProductPreviewSection";
import PricingSection from "@/components/landing/PricingSection";
import AmbassadorsSection from "@/components/landing/AmbassadorsSection";
import CtaSection from "@/components/landing/CtaSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import SupportWidget from "@/components/landing/SupportWidget";

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
      <AmbassadorsSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <SupportWidget />
    </div>
  );
};

export default Index;
