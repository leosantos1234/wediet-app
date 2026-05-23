import { motion } from "framer-motion";
import { ArrowRight, Play, Monitor, Apple, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-nutritionist.jpg";
import mobileMockup from "@/assets/mobile-mockup.jpg";

const HeroSection = () => {
  return (
    <section className="relative pt-24 pb-0 md:pt-28 overflow-hidden">
      {/* Soft gradient background */}
      <div className="absolute inset-0 bg-hero-gradient-soft pointer-events-none" />

      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="py-12 md:py-20"
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight leading-[1.15] mb-6">
              O melhor software de Nutrição para{" "}
              <span className="text-gradient">converter pacientes</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg mb-8 leading-relaxed">
              O NuDiet facilita sua rotina, automatiza a captação de leads, 
              qualifica com IA e converte em consultas — tudo em uma única plataforma.
            </p>

            <div className="flex items-center gap-4 mb-8">
              <span className="text-sm text-muted-foreground font-medium">Disponível em:</span>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                  <Monitor className="h-4 w-4 text-foreground" />
                </div>
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                  <Apple className="h-4 w-4 text-foreground" />
                </div>
                <div className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center">
                  <Smartphone className="h-4 w-4 text-foreground" />
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-3">
              <Button asChild size="lg" className="text-base px-8 h-12 gap-2 rounded-full">
                <a href="/#pricing">
                  Experimente grátis agora <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" className="text-base px-8 h-12 gap-2 rounded-full">
                <Play className="h-4 w-4" /> Agendar demo
              </Button>
            </div>
          </motion.div>

          {/* Right - Hero image with floating mockups */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <img
              src={heroImage}
              alt="Nutricionista profissional usando o NuDiet"
              className="w-full rounded-tl-3xl object-cover"
              width={1200}
              height={800}
            />
            {/* Floating mobile mockup */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-8 w-36"
            >
              <img
                src={mobileMockup}
                alt="App do paciente NuDiet"
                className="w-full rounded-2xl shadow-2xl"
                loading="lazy"
                width={600}
                height={900}
              />
            </motion.div>

            {/* Stats floating card */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-8 -left-4 bg-card rounded-xl shadow-lg border border-border/50 p-4"
            >
              <div className="text-2xl font-extrabold text-gradient">+2.400</div>
              <div className="text-xs text-muted-foreground">pacientes convertidos</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;








