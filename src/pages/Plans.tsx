import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { BASE_FEATURES, PREMIUM_FEATURES, getPlanDisplayInfo, sortPlans } from "@/lib/planCatalog";
import { createCheckout, getPlans } from "@/lib/subscriptionApi";

const DEFAULT_USER_ID = 1;

const PlansPage = () => {
  const [loadingPlanId, setLoadingPlanId] = useState<number | null>(null);
  const { toast } = useToast();

  const plansQuery = useQuery({
    queryKey: ["plans"],
    queryFn: getPlans,
  });

  const handleSubscribe = async (planId: number) => {
    try {
      setLoadingPlanId(planId);
      const data = await createCheckout(DEFAULT_USER_ID, planId);
      window.location.href = data.checkout_url;
    } catch (error) {
      let message = "Tente novamente em instantes.";
      if (error instanceof Error) {
        try {
          const parsed = JSON.parse(error.message) as { detail?: string };
          message = parsed.detail ?? error.message;
        } catch {
          message = error.message;
        }
      }
      toast({
        title: "Erro ao iniciar assinatura",
        description: message,
        variant: "destructive",
      });
    } finally {
      setLoadingPlanId(null);
    }
  };

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-2">Planos NuDiet</h1>
        <p className="text-muted-foreground mb-8">Assine um plano mensal e libere todos os recursos.</p>

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
              const planInfo = getPlanDisplayInfo(plan);
              const featureItems = planInfo.code === "premium" ? PREMIUM_FEATURES : BASE_FEATURES;

              return (
                <Card key={plan.id}>
                  <CardHeader>
                    <CardTitle>{planInfo.displayName}</CardTitle>
                    <CardDescription>
                      <span className="text-2xl font-bold">{planInfo.priceLabel}</span>
                      <span className="ml-1">{planInfo.periodLabel}</span>
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
                      onClick={() => void handleSubscribe(plan.id)}
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
