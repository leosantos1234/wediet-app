import { motion } from "framer-motion";
import { 
  Smartphone, TrendingDown, Video, Briefcase, Globe,
  FileText, MessageSquare, ClipboardList, Bell, Utensils,
  ShoppingBag, LineChart
} from "lucide-react";

const proItems = [
  { icon: Smartphone, text: "Aplicativo exclusivo para o profissional" },
  { icon: TrendingDown, text: "Redução de faltas com lembretes automáticos" },
  { icon: Video, text: "Videoconferência e chat com pacientes" },
  { icon: Briefcase, text: "Trabalhe onde e como quiser" },
  { icon: Globe, text: "Aumente sua visibilidade e atraia pacientes" },
  { icon: FileText, text: "Prontuários, planos alimentares e agenda integrados" },
];

const patientItems = [
  { icon: Utensils, text: "Plano alimentar na palma da mão" },
  { icon: MessageSquare, text: "Chat e videoconferência com o nutri" },
  { icon: ClipboardList, text: "Registro de refeições no diário alimentar" },
  { icon: Bell, text: "Alertas de hidratação e de refeições" },
  { icon: ShoppingBag, text: "Lista de compras e receitas personalizadas" },
  { icon: LineChart, text: "Acompanhamento visual da evolução" },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-surface-elevated">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Pro */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
              Benefícios para o{" "}
              <span className="text-gradient">nutricionista</span>
            </h2>
            <div className="space-y-4">
              {proItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Patient */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl md:text-3xl font-extrabold mb-8">
              Benefícios para os{" "}
              <span className="text-gradient">pacientes</span>
            </h2>
            <div className="space-y-4">
              {patientItems.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
