import { motion } from "framer-motion";
import { BellRing, Mic, Trophy, Utensils, CalendarCheck, Bot } from "lucide-react";

const features = [
  {
    icon: Bot,
    title: "NuPilot, seu copiloto de consultas",
    description:
      "Apoio inteligente para acelerar tarefas repetitivas e manter o atendimento mais fluido.",
  },
  {
    icon: Mic,
    title: "Transcricao de consultas com IA",
    description:
      "Automaticamente transforme atendimentos em registros organizados, sem perder o contexto.",
  },
  {
    icon: BellRing,
    title: "Follow-up automatizado",
    description:
      "Lembretes, retornos e reativacao de pacientes sem depender de controles manuais.",
  },
  {
    icon: Utensils,
    title: "Planos alimentares personalizados",
    description:
      "Crie orientacoes mais rapidas e consistentes, com a flexibilidade que o consultorio precisa.",
  },
  {
    icon: Trophy,
    title: "Desafios e gamificacao",
    description:
      "Recursos para engajar pacientes e aumentar a adesao ao tratamento.",
  },
  {
    icon: CalendarCheck,
    title: "Agenda integrada ao Google Agenda",
    description:
      "Organize consultas com sincronizacao direta e menos chance de conflitos de horario.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-20 md:py-28 bg-surface-elevated">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Recursos que <span className="text-gradient">fazem a rotina girar</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Um conjunto de ferramentas pensado para nutricionistas que querem mais agilidade,
            controle e conversao.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group p-6 rounded-2xl bg-card border border-border/50 shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <f.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
