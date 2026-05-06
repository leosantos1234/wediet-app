import { motion } from "framer-motion";
import { Magnet, Bot, CalendarCheck } from "lucide-react";

const steps = [
  {
    icon: Magnet,
    title: "Capture leads automaticamente",
    description: "Atraia potenciais pacientes através de landing pages inteligentes, integração com redes sociais e formulários automáticos.",
  },
  {
    icon: Bot,
    title: "IA qualifica e engaja",
    description: "Nossa IA responde instantaneamente, tira dúvidas e qualifica leads — 24/7, sem esforço humano.",
  },
  {
    icon: CalendarCheck,
    title: "Converta em consultas",
    description: "Leads qualificados são automaticamente agendados no seu calendário. Você só precisa atender.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-28 bg-surface-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            De lead a paciente em <span className="text-gradient">3 passos simples</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Pare de correr atrás de leads manualmente. Deixe o NuDiet automatizar todo o seu funil.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line */}
          <div className="hidden md:block absolute top-[60px] left-[16%] right-[16%] h-0.5 bg-border" />

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="relative text-center p-8 bg-card rounded-2xl border border-border/50"
            >
              <div className="w-12 h-12 rounded-full bg-hero-gradient flex items-center justify-center mx-auto mb-5 text-lg font-bold text-primary-foreground relative z-10">
                {i + 1}
              </div>

              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{step.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;






