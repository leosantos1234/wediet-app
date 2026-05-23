import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const WHATSAPP_SALES_URL =
  "https://wa.me/5511999999999?text=Olá%2C%20quero%20falar%20sobre%20o%20plano%20Premium%20da%20NuDiet";

const plans = [
  {
    name: "Starter",
    price: "Grátis",
    period: "para sempre",
    description: "Ideal para começar e testar a plataforma",
    features: [
      "Até 10 pacientes",
      "Planos alimentares básicos",
      "App do paciente",
      "Agenda básica",
    ],
    cta: "Começar grátis",
    featured: false,
    actionUrl: "/signup-free",
  },
  {
    name: "Profissional",
    price: "R$ 89",
    period: "/mês",
    description: "Tudo que você precisa para crescer",
    features: [
      "Pacientes ilimitados",
      "Análise corporal 360° com fotos",
      "IA para transcrição de consultas",
      "Follow-up automático",
      "Integração WhatsApp",
      "Relatórios avançados",
    ],
    cta: "Experimente grátis",
    featured: true,
    badge: "Mais popular",
    actionUrl: "/signup-free",
  },
  {
    name: "Premium",
    price: "R$ 149",
    period: "/mês",
    description: "Para clínicas e profissionais de alto volume",
    features: [
      "Tudo do Profissional",
      "Multi-profissional",
      "Desafios e gamificação",
      "API e integrações avançadas",
      "Suporte prioritário",
      "Branding personalizado",
    ],
    cta: "Fale com vendas",
    featured: false,
    actionUrl: WHATSAPP_SALES_URL,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Planos e <span className="text-gradient">Preços</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Descubra o plano perfeito para seu nível de atuação
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className={`relative p-8 rounded-2xl border transition-all ${
                plan.featured
                  ? "bg-card border-primary shadow-lg shadow-primary/10 scale-[1.02]"
                  : "bg-card border-border/50"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-hero-gradient text-primary-foreground text-xs font-semibold">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-lg font-bold mb-1">{plan.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>

              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-3xl font-extrabold">{plan.price}</span>
                <span className="text-sm text-muted-foreground">{plan.period}</span>
              </div>

              <Button
                asChild
                className={`w-full rounded-full mb-6 ${plan.featured ? "" : ""}`}
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

              <ul className="space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-primary flex-shrink-0" />
                    {f}
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
