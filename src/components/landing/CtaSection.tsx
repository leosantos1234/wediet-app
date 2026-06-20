import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl bg-hero-gradient p-12 md:p-20 text-center overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-background/5 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-background/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-extrabold text-primary-foreground mb-4">
              Pronto para crescer seu consultório?
            </h2>
            <p className="text-primary-foreground/80 max-w-lg mx-auto mb-8 text-lg">
              Junte-se a centenas de nutricionistas que já usam o NuDiet para converter mais leads e entregar melhores resultados.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button asChild size="lg" variant="secondary" className="text-base px-8 h-12 gap-2 font-semibold rounded-full">
                <a href="/#pricing">
                  Comecar gratis 30 dias <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="ghost" className="text-base px-8 h-12 text-primary-foreground hover:bg-primary-foreground/10 rounded-full">
                Agendar demo
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;








