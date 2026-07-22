import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroPremiumSection";
import ToolsAndNuPilotSection from "@/components/landing/ToolsAndNuPilotSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import BenefitsSection from "@/components/landing/BenefitsSection";
import ProductPreviewSection from "@/components/landing/ProductPreviewSection";
import EcosystemProofSection from "@/components/landing/EcosystemProofSection";
import PricingSection from "@/components/landing/PricingSection";
import CtaSection from "@/components/landing/CtaSection";
import FaqSection from "@/components/landing/FaqSection";
import Footer from "@/components/landing/Footer";
import SupportWidget from "@/components/landing/SupportWidget";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <ToolsAndNuPilotSection />
      <HowItWorksSection />
      <BenefitsSection />
      <ProductPreviewSection />
      <EcosystemProofSection />
      <PricingSection />
      <CtaSection />
      <FaqSection />
      <Footer />
      <SupportWidget />
    </div>
  );
};

export default Index;
