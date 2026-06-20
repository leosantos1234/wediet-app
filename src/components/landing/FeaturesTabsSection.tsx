import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  Stethoscope,
  Heart,
  BarChart3,
  MessageSquare,
  Bot,
  ClipboardList,
  Smartphone,
  Video,
  CalendarCheck,
  Palette,
  Users,
  Globe,
  TrendingUp,
  FileText,
  Trophy,
  Apple,
  Bell,
  Droplets,
  LineChart,
  ShoppingBag,
  ShieldCheck,
} from "lucide-react";

const tabs = [
  {
    id: "diferenciais",
    label: "Diferenciais",
    icon: Sparkles,
    title: "Veja por que o NuDiet se destaca:",
    items: [
      { icon: MessageSquare, text: "Integracao com WhatsApp" },
      { icon: Bot, text: "NuPilot, seu copiloto de consultas" },
      { icon: ClipboardList, text: "Grupo de Acompanhamento para engajar pacientes" },
      { icon: Palette, text: "Templates prontos para editar" },
      { icon: Globe, text: "Apareca na busca por nutricionistas" },
      { icon: CalendarCheck, text: "Conexao com o Google Agenda" },
    ],
  },
  {
    id: "atendimento",
    label: "Atendimento",
    icon: Stethoscope,
    title: "Ferramentas precisas para o atendimento nutricional",
    items: [
      { icon: FileText, text: "Planos alimentares calculados ou livres" },
      { icon: Bot, text: "Transcricao de consultas com IA" },
      { icon: ShieldCheck, text: "Interpretacao de exames e apoio clinico" },
      { icon: ClipboardList, text: "Questionario pre-consulta e anamnese" },
      { icon: Sparkles, text: "Prescricoes de suplementos inteligentes" },
      { icon: Video, text: "Videoconferencia integrada" },
    ],
  },
  {
    id: "fidelizacao",
    label: "Fidelizacao",
    icon: Heart,
    title: "Aplicativo do paciente para motivar e fidelizar",
    items: [
      { icon: Apple, text: "Plano alimentar e lista de compras" },
      { icon: Trophy, text: "Desafios e metas gamificadas" },
      { icon: Smartphone, text: "Agendamento de consultas pelo app" },
      { icon: Droplets, text: "Lembrete de hidratacao personalizado" },
      { icon: LineChart, text: "Graficos de acompanhamento da evolucao" },
      { icon: Bell, text: "Follow-up automatico de pacientes" },
    ],
  },
  {
    id: "gestao",
    label: "Gestao",
    icon: BarChart3,
    title: "Gestao completa para o sucesso do seu consultorio",
    items: [
      { icon: Users, text: "Captacao automatica de leads" },
      { icon: CalendarCheck, text: "Agenda com marcacao online" },
      { icon: TrendingUp, text: "Area de controle financeiro" },
      { icon: Globe, text: "Site profissional para captacao" },
      { icon: FileText, text: "Relatorios de acompanhamento" },
      { icon: ShoppingBag, text: "Ferramentas de marketing integradas" },
    ],
  },
];

const FeaturesTabsSection = () => {
  const [activeTab, setActiveTab] = useState("diferenciais");
  const active = tabs.find((t) => t.id === activeTab)!;

  return (
    <section id="features" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Conheca nossas <span className="text-gradient">principais ferramentas</span>
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <tab.icon className="h-4 w-4" />
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.3 }}
            className="max-w-3xl mx-auto"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">{active.title}</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {active.items.map((item, i) => (
                <motion.div
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/30 hover:shadow-sm transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="text-sm font-medium">{item.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeaturesTabsSection;
