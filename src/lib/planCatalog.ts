import type { Plan } from "@/lib/subscriptionApi";

export type PlanCode = "gratis" | "profissional" | "premium";
export type BillingPeriod = "monthly" | "semiannual" | "annual";

type PlanCopy = {
  description: string;
  badge: string;
  cta: string;
  featured: boolean;
  tone: string;
};

export const PLAN_ORDER: PlanCode[] = ["gratis", "profissional", "premium"];

export const BASE_FEATURES = [
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

export const PREMIUM_FEATURES = [
  "Tudo do Profissional",
  "Analise 360",
  "NuPilot, seu copiloto de consultas",
  "Multi-profissional",
  "Branding personalizado",
  "API e integracoes avancadas",
  "Desafios e gamificacao",
  "Suporte prioritario",
];

export const PLAN_COPY: Record<PlanCode, PlanCopy> = {
  gratis: {
    description: "Experimente a plataforma completa sem cartao de credito.",
    badge: "Sem cartao",
    cta: "Começar grátis",
    featured: false,
    tone: "from-emerald-500/10 via-card to-card",
  },
  profissional: {
    description: "Para organizar a rotina com previsibilidade e produtividade.",
    badge: "Mais popular",
    cta: "Assinar agora",
    featured: true,
    tone: "from-primary/10 via-card to-card",
  },
  premium: {
    description: "Tudo do Profissional com recursos avancados para crescer com estrutura.",
    badge: "Mais completo",
    cta: "Assinar agora",
    featured: false,
    tone: "from-sky-500/10 via-card to-card",
  },
};

export const FEATURE_FLAGS = {
  analise360_fotos: "Analise 360 - Fotos e marcacoes",
  analise360_foto: "Analise 360 - Analise por foto",
  nupilot: "NuPilot, seu copiloto de consultas",
  wellness_passos: "API e integracoes avancadas - Passos / Atividade",
  wellness_sono: "API e integracoes avancadas - Sono",
  comunidade: "Desafios e gamificacao - Comunidade",
} as const;

export function normalizePlanCode(value: string | null | undefined): PlanCode {
  const normalized = String(value || "gratis").trim().toLowerCase();
  return PLAN_ORDER.includes(normalized as PlanCode) ? (normalized as PlanCode) : "gratis";
}

export function sortPlans(plans: Plan[]): Plan[] {
  return [...plans].sort((a, b) => PLAN_ORDER.indexOf(normalizePlanCode(a.code)) - PLAN_ORDER.indexOf(normalizePlanCode(b.code)));
}

export function formatPrice(value: number): string {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

const PERIOD_LABELS: Record<BillingPeriod, string> = {
  monthly: "/mes",
  semiannual: "semestral",
  annual: "anual",
};

const PERIOD_SUFFIX: Record<BillingPeriod, string> = {
  monthly: "por mes",
  semiannual: "pagamento semestral",
  annual: "pagamento anual",
};

export function getPlanDisplayInfo(plan: Plan, billingPeriod: BillingPeriod = "monthly") {
  const code = normalizePlanCode(plan.code);
  const copy = PLAN_COPY[code];
  const trialDays = plan.trial_days ?? 30;
  const isFreePlan = code === "gratis";
  const displayName = code === "gratis" ? "Grátis" : plan.name;
  const periodPricing = plan.pricing_by_period?.[billingPeriod];
  const finalPrice = periodPricing?.final_price && periodPricing.final_price > 0 ? periodPricing.final_price : plan.price;
  const basePrice = periodPricing?.base_price && periodPricing.base_price > 0 ? periodPricing.base_price : plan.price;
  const note = periodPricing?.promotion_name
    ? `${periodPricing.promotion_name}${periodPricing.promotional_cycles > 1 ? ` (${periodPricing.promotional_cycles} cobranças promocionais)` : ""}.`
    : code === "profissional" && billingPeriod === "monthly"
      ? "Primeiros 3 meses por R$ 49,99. Depois R$ 89,00/mês."
      : plan.billing_note ?? "";

  return {
    ...copy,
    code,
    displayName,
    priceLabel: isFreePlan ? "Grátis" : formatPrice(finalPrice),
    periodLabel: isFreePlan ? `por ${trialDays} dias` : PERIOD_LABELS[billingPeriod],
    periodDescription: isFreePlan ? "30 dias grátis" : PERIOD_SUFFIX[billingPeriod],
    basePriceLabel: !isFreePlan && basePrice > finalPrice ? formatPrice(basePrice) : null,
    trialDays,
    note,
    actionUrl: `/cadastro?plan=${code}&period=${billingPeriod}`,
  };
}