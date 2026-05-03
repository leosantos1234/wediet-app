import { motion } from "framer-motion";

const metrics = [
  { value: "2.400+", label: "Pacientes convertidos" },
  { value: "500+", label: "Nutricionistas" },
  { value: "98%", label: "Satisfação" },
  { value: "3x", label: "Mais consultas" },
];

const testimonials = [
  {
    quote: "O WeDiet triplicou minha base de pacientes em apenas 3 meses. A automação de leads é incrível.",
    name: "Dra. Ana Silva",
    role: "Nutricionista Clínica",
  },
  {
    quote: "Eu gastava horas com follow-ups. Agora a IA cuida disso e minha taxa de conversão foi de 15% para 48%.",
    name: "Carlos Mendes",
    role: "Nutricionista Esportivo",
  },
  {
    quote: "A análise corporal 360° dá aos meus pacientes prova visual do progresso. A retenção disparou.",
    name: "Marina Costa",
    role: "Nutricionista Funcional",
  },
];

const SocialProofSection = () => {
  return (
    <section className="py-20 bg-surface-elevated">
      <div className="container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-extrabold text-gradient">{m.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{m.label}</div>
            </motion.div>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="p-6 rounded-2xl bg-card border border-border/50 shadow-sm"
            >
              <p className="text-foreground/90 mb-4 leading-relaxed">"{t.quote}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;






