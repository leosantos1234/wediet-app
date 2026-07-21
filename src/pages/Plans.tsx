import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BASE_FEATURES, PREMIUM_FEATURES, getPlanDisplayInfo, sortPlans, type BillingPeriod } from "@/lib/planCatalog";
import { getPlans } from "@/lib/subscriptionApi";

const billingPeriods: Array<{ value: BillingPeriod; label: string }> = [
  { value: "monthly", label: "Mensal" },
  { value: "semiannual", label: "Semestral" },
  { value: "annual", label: "Anual" },
];

const PlansPage = () => {
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null);
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");
  const navigate = useNavigate();

  const plansQuery = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });

  const handleSubscribe = (planId: number, planCode: string) => {
    setLoadingPlanId(planId);
    navigate(`/cadastro?plan=${encodeURIComponent(planCode)}&period=${billingPeriod}`);
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Planos NuDiet</h1>
        <p className="text-muted-foreground mb-8">Assine um plano mensal e libere todos os recursos.</p>
        <div className="mb-8 inline-flex rounded-full bg-slate-100 p-2">
          {billingPeriods.map((period) => (
            <button
              key={period.value}
              type="button"
              onClick={() => setBillingPeriod(period.value)}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition ${
                billingPeriod === period.value ? "bg-white shadow-sm" : "text-muted-foreground"
              }`}
            >
              {period.label}
            </button>
          ))}
        </div>

        {plansQuery.isLoading && <p>Carregando planos...</p>}
        {plansQuery.isError && (
          <p>
            Erro ao carregar planos:{" "}
            {plansQuery.error instanceof Error
              ? plansQuery.error.message
              : "verifique a API e tente novamente."}
          </p>
        )}

        {plansQuery.data && (
          <div className="grid md:grid-cols-3 gap-6">
            {sortPlans(plansQuery.data).map((plan) => {
              const planInfo = getPlanDisplayInfo(plan, billingPeriod);
              const featureItems = planInfo.code === "premium" ? PREMIUM_FEATURES : BASE_FEATURES;

              return (
                <Card key={plan.id}>
                  <CardHeader>
                    <CardTitle>{planInfo.displayName}</CardTitle>
                    <CardDescription>
                      {planInfo.basePriceLabel ? (
                        <span className="mr-2 text-sm font-semibold line-through">{planInfo.basePriceLabel}</span>
                      ) : null}
                      <span className="text-2xl font-bold">{planInfo.priceLabel}</span>
                      <span className="ml-1">{planInfo.periodLabel}</span>
                      <span className="mt-1 block text-xs">{planInfo.periodDescription}</span>
                    </CardDescription>
                    {planInfo.note ? <p className="text-sm text-muted-foreground">{planInfo.note}</p> : null}
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {featureItems.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm">
                          <Check className="h-4 w-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <Button
                      className="w-full"
                      onClick={() => handleSubscribe(plan.id, planInfo.code)}
                      disabled={loadingPlanId === plan.id}
                    >
                      {loadingPlanId === plan.id ? "Redirecionando..." : "Assinar"}
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </main>
  );
};

export default PlansPage;
