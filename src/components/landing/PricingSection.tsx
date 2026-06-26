import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getPlans } from "@/lib/subscriptionApi";
import { BASE_FEATURES, PREMIUM_FEATURES, getPlanDisplayInfo, sortPlans } from "@/lib/planCatalog";

const PricingSection = () => {
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

        {plansQuery.isLoading && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-border/60 bg-card/70 p-6 text-center text-sm text-muted-foreground shadow-sm">
            Carregando planos...
          </div>
        )}

        {plansQuery.isError && (
          <div className="mx-auto max-w-2xl rounded-3xl border border-destructive/20 bg-destructive/5 p-6 text-center text-sm text-destructive">
            Nao foi possivel carregar os planos neste momento.
          </div>
        )}

        <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto items-stretch">
          {sortPlans(plansQuery.data ?? []).map((plan, i) => {
            const planInfo = getPlanDisplayInfo(plan);
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
                  <span className="text-4xl font-extrabold tracking-tight">{planInfo.priceLabel}</span>
                  <span className="pb-1 text-sm font-medium text-muted-foreground">{planInfo.periodLabel}</span>
                </div>

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
      </div>
    </section>
  );
};

export default PricingSection;
