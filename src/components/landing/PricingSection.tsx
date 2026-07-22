import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, BadgePercent, Check, CheckCircle2, Share2, Sparkles, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPlans } from "@/lib/subscriptionApi";
import { BASE_FEATURES, PREMIUM_FEATURES, getPlanDisplayInfo, sortPlans, type BillingPeriod } from "@/lib/planCatalog";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const billingPeriods: Array<{ value: BillingPeriod; label: string; badge?: string }> = [
  { value: "monthly", label: "Mensal" },
  { value: "semiannual", label: "Semestral" },
  { value: "annual", label: "Anual", badge: "Popular" },
];

const ambassadorHighlights = [
  {
    icon: Users,
    title: "Indique colegas",
    description: "Compartilhe seu convite com nutricionistas que também podem se beneficiar do NuDiet.",
  },
  {
    icon: CheckCircle2,
    title: "Indicações ativas contam",
    description: "A indicação conta quando o colega também fecha o plano Premium e permanece adimplente.",
  },
  {
    icon: BadgePercent,
    title: "Ganhe desconto",
    description: "Com 5 indicações válidas, sua próxima mensalidade pode receber 100% de desconto.",
  },
];

const discountTiers = [
  { referrals: 1, discount: "10%" },
  { referrals: 2, discount: "20%" },
  { referrals: 3, discount: "30%" },
  { referrals: 4, discount: "40%" },
  { referrals: 5, discount: "100%" },
];

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const plansQuery = useQuery({
    queryKey: ["public-plans"],
    queryFn: getPlans,
  });

  return (
    <section
      id="pricing"
      className="relative overflow-hidden py-20 md:py-28 bg-[radial-gradient(circle_at_top,_rgba(16,185,129,0.08),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(14,165,233,0.08),_transparent_30%)]"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-0 top-24 h-44 w-44 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute right-0 bottom-16 h-56 w-56 rounded-full bg-sky-400/10 blur-3xl" />
      </div>

      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
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
            Planos e <span className="text-gradient">Preços</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Compare os recursos e comece pelo plano que faz mais sentido para sua rotina.
          </p>
          <div className="mx-auto mt-8 inline-flex rounded-full bg-slate-100 p-2 shadow-inner">
            {billingPeriods.map((period) => (
              <button
                key={period.value}
                type="button"
                onClick={() => setBillingPeriod(period.value)}
                className={`relative min-w-[96px] rounded-full px-5 py-2 text-sm font-semibold transition ${
                  billingPeriod === period.value
                    ? "bg-white text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {period.badge && (
                  <span className="absolute -top-6 left-1/2 -translate-x-1/2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground shadow-sm">
                    {period.badge}
                  </span>
                )}
                {period.label}
              </button>
            ))}
          </div>
        </motion.div>

        {plansQuery.isLoading && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card/70 p-6 text-center text-sm text-muted-foreground shadow-sm">
            Carregando planos...
          </div>
        )}

        {plansQuery.isError && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-center text-sm text-destructive">
            Não foi possível carregar os planos neste momento.
          </div>
        )}

        <div className="mx-auto grid max-w-6xl items-stretch gap-6 md:grid-cols-3">
          {sortPlans(plansQuery.data ?? []).map((plan, i) => {
            const planInfo = getPlanDisplayInfo(plan, billingPeriod);
            const featureItems = planInfo.code === "premium" ? PREMIUM_FEATURES : BASE_FEATURES;

            return (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] border p-7 md:p-8 transition-all duration-300 ${
                  planInfo.featured
                    ? "border-primary/40 shadow-[0_24px_60px_-24px_rgba(16,185,129,0.45)] md:-translate-y-2"
                    : "border-border/60 shadow-sm hover:-translate-y-1 hover:shadow-lg"
                }`}
              >
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${planInfo.tone}`} />
                <div className={`absolute -right-16 -top-16 h-40 w-40 rounded-full bg-gradient-to-br ${planInfo.tone} blur-3xl`} />

                {planInfo.badge && (
                  <div className="relative mb-5 flex justify-center">
                    <div className="rounded-full bg-hero-gradient px-4 py-1 text-xs font-semibold text-primary-foreground shadow-lg">
                      {planInfo.badge}
                    </div>
                  </div>
                )}

                <div className="relative">
                <h3 className="text-2xl font-extrabold mb-2">{planInfo.displayName}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{planInfo.description}</p>
                </div>

                <div className="relative mt-6 flex items-end gap-2">
                  {planInfo.basePriceLabel && (
                    <span className="pb-1 text-sm font-semibold text-muted-foreground line-through">
                      {planInfo.basePriceLabel}
                    </span>
                  )}
                  <span className="text-4xl font-extrabold tracking-tight">{planInfo.priceLabel}</span>
                  <span className="pb-1 text-sm font-medium text-muted-foreground">{planInfo.periodLabel}</span>
                </div>
                <p className="relative mt-1 text-xs font-medium text-muted-foreground">{planInfo.periodDescription}</p>

                {planInfo.note && (
                  <p
                    className={`relative mt-2 rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      planInfo.featured
                        ? "border border-primary/15 bg-primary/5 text-primary/90 font-medium"
                        : "bg-muted/50 text-muted-foreground"
                    }`}
                  >
                    {planInfo.note}
                  </p>
                )}

                <Button
                  asChild
                  className={`relative mt-6 h-12 w-full rounded-full font-semibold ${
                    planInfo.featured ? "shadow-lg shadow-primary/20" : ""
                  }`}
                  variant={planInfo.featured ? "default" : "outline"}
                >
                  <Link to={planInfo.actionUrl}>
                    {planInfo.cta} {planInfo.featured && <ArrowRight className="h-4 w-4 ml-1" />}
                  </Link>
                </Button>

                <ul className="relative mt-7 space-y-3">
                  {featureItems.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm leading-relaxed">
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        <AmbassadorPricingBlock />
      </div>
    </section>
  );
};

const AmbassadorPricingBlock = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mx-auto mt-10 max-w-6xl overflow-hidden rounded-[2rem] border border-emerald-100 bg-white/85 shadow-[0_24px_80px_rgba(6,24,34,0.08)] backdrop-blur"
  >
    <div className="grid gap-0 lg:grid-cols-[0.95fr_1.25fr]">
      <div className="relative overflow-hidden bg-gradient-to-br from-[#061923] via-[#082834] to-[#0d3841] p-7 text-white md:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-400/10 blur-3xl" />
        <div className="relative">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Share2 className="h-4 w-4" />
            Programa Embaixadores
          </div>
          <h3 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
            Indique colegas e reduza sua mensalidade
          </h3>
          <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-300">
            Assinantes Premium podem indicar outros nutricionistas. Quando a indicação também fecha o
            plano Premium e permanece ativa, o desconto entra na próxima mensalidade elegível.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="h-12 rounded-full bg-emerald-400 px-6 font-extrabold text-emerald-950 hover:bg-emerald-300">
              <Link to="/cadastro?plan=premium&period=monthly">
                Assinar e indicar <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>

            <AmbassadorRulesDialog />
          </div>
        </div>
      </div>

      <div className="grid gap-4 p-5 sm:grid-cols-3 lg:grid-cols-1 lg:p-6">
        {ambassadorHighlights.map((item) => (
          <article key={item.title} className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-sm">
            <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
              <item.icon className="h-5 w-5" />
            </div>
            <h4 className="text-base font-bold text-slate-950">{item.title}</h4>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.description}</p>
          </article>
        ))}
      </div>
    </div>

    <p className="border-t border-emerald-100 bg-emerald-50/70 px-5 py-4 text-sm leading-relaxed text-emerald-800 md:px-7">
      Benefício disponível para assinantes ativos do plano Premium. Não há comissão em dinheiro: o
      programa gera desconto na assinatura conforme as regras vigentes.
    </p>
  </motion.div>
);

const AmbassadorRulesDialog = () => (
  <Dialog>
    <DialogTrigger asChild>
      <Button variant="outline" className="h-12 rounded-full border-white/20 bg-white/5 px-6 font-semibold text-white hover:bg-white/10 hover:text-white">
        Ver regras principais
      </Button>
    </DialogTrigger>
    <DialogContent className="max-w-[560px] rounded-2xl">
      <DialogHeader>
        <DialogTitle>Regras do Programa Embaixadores</DialogTitle>
        <DialogDescription>
          O desconto é aplicado na próxima mensalidade, quando as indicações estiverem válidas.
        </DialogDescription>
      </DialogHeader>

      <div className="grid gap-3 sm:grid-cols-5">
        {discountTiers.map((tier) => (
          <div
            key={tier.referrals}
            className={`rounded-2xl border p-4 text-center ${
              tier.referrals === 5 ? "border-primary/40 bg-primary/10 shadow-sm" : "border-primary/15 bg-primary/5"
            }`}
          >
            <p className="text-xs font-medium text-muted-foreground">
              {tier.referrals} indicação{tier.referrals > 1 ? "ões" : ""}
            </p>
            <p className="mt-2 text-2xl font-extrabold text-primary">{tier.discount}</p>
          </div>
        ))}
      </div>

      <div className="space-y-2 rounded-2xl border bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
        <p>Para participar, o embaixador precisa estar com o plano Premium ativo e adimplente.</p>
        <p>Para gerar desconto, o profissional indicado também precisa fechar o plano Premium.</p>
        <p>Não há comissão em dinheiro; o benefício é desconto na assinatura.</p>
        <p>Cancelamentos, inadimplência ou contas duplicadas podem invalidar o benefício.</p>
      </div>

      <Button asChild className="h-11 rounded-full font-semibold">
        <Link to="/cadastro?plan=premium&period=monthly">
          Assinar plano mensal <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </Button>
    </DialogContent>
  </Dialog>
);

export default PricingSection;
