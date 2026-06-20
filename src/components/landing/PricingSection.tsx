import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const professionalFeatures = [
  "Pacientes ilimitados",
  "App do paciente",
  "Agenda integrada ao Google Agenda",
  "Planos alimentares personalizados",
  "Acompanhamento automatico",
  "Follow-up automatico",
  "Integracao com WhatsApp",
  "Transcricao de consultas por IA",
  "Relatorios avancados",
  "Gestao de pacientes e evolucao",
  "Templates de atendimento",
  "Automacao da rotina",
  "Modulo Wellness",
  "Modulo Financeiro",
  "Modulo Daily",
  "Modulo de interpretacao de exames",
  "Grupo de Acompanhamento",
  "Suporte padrao",
];

const premiumFeatures = [
  "Tudo do Profissional",
  "Analise 360",
  "NuPilot, seu copiloto de consultas",
  "Multi-profissional",
  "Branding personalizado",
  "API e integracoes avancadas",
  "Desafios e gamificacao",
  "Suporte prioritario",
];

const plans = [
  {
    name: "Gratis 30 dias",
    price: "Gratis",
    period: "por 30 dias",
    description: "Experimente a plataforma completa sem cartao de credito.",
    note: "Mesma base do plano Profissional.",
    badge: "Sem cartao",
    cta: "Comecar gratis",
    featured: false,
    tone: "from-emerald-500/10 via-card to-card",
    actionUrl: "/cadastro?plan=gratis",
    features: professionalFeatures,
  },
  {
    name: "Profissional",
    price: "R$ 49,99",
    period: "/mes",
    description: "Para organizar a rotina com previsibilidade e produtividade.",
    note: "Primeiros 3 meses. Depois R$ 89,00/mes.",
    badge: "Mais popular",
    cta: "Assinar agora",
    featured: true,
    tone: "from-primary/10 via-card to-card",
    actionUrl: "/cadastro?plan=profissional",
    features: professionalFeatures,
  },
  {
    name: "Premium",
    price: "R$ 119,00",
    period: "/mes",
    description: "Tudo do Profissional com recursos avancados para crescer com estrutura.",
    note: "Para nutricionistas que desejam ir alem no atendimento.",
    badge: "Mais completo",
    cta: "Assinar agora",
    featured: false,
    tone: "from-sky-500/10 via-card to-card",
    actionUrl: "/cadastro?plan=premium",
    features: premiumFeatures,
  },
];

const PricingSection = () => {
  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_30%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-16 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            Escolha o plano certo para o seu momento
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Planos e <span className="text-gradient">Precos</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Compare os recursos e comece pelo plano que faz mais sentido para sua rotina.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 md:p-8 transition-all duration-300 ${
                plan.featured
                  ? "border-primary/40 shadow-[0_24px_60px_-24px_rgba(16,185,129,0.45)] md:-translate-y-2"
                  : "border-border/60 shadow-sm hover:-translate-y-1 hover:shadow-lg"
              }`}
            >
              <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${plan.tone}`} />
              <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${plan.tone} blur-3xl`} />

              {plan.badge && (
                <div className="relative mb-5 flex justify-center">
                  <div className="rounded-full bg-hero-gradient px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                    {plan.badge}
                  </div>
                </div>
              )}

              <div className="relative">
                <h3 className="text-2xl font-extrabold mb-2">{plan.name}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{plan.description}</p>
              </div>

              <div className="relative mt-6 flex items-end gap-2">
                <span className="text-4xl font-extrabold tracking-tight">{plan.price}</span>
                <span className="pb-1 text-sm font-medium text-muted-foreground">{plan.period}</span>
              </div>

              {plan.note && (
                <p className={`relative mt-2 text-sm ${plan.featured ? "text-foreground/80" : "text-muted-foreground"}`}>
                  {plan.note}
                </p>
              )}

              <Button
                asChild
                className={`relative mt-6 h-12 w-full rounded-full font-semibold ${
                  plan.featured ? "shadow-lg shadow-primary/20" : ""
                }`}
                variant={plan.featured ? "default" : "outline"}
              >
                {plan.actionUrl.startsWith("http") ? (
                  <a href={plan.actionUrl} target="_blank" rel="noreferrer">
                    {plan.cta} {plan.featured && <ArrowRight className="h-4 w-4 ml-1" />}
                  </a>
                ) : (
                  <Link to={plan.actionUrl}>
                    {plan.cta} {plan.featured && <ArrowRight className="h-4 w-4 ml-1" />}
                  </Link>
                )}
              </Button>

              <ul className="relative mt-7 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                    <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
