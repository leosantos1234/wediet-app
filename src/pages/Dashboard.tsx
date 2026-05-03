import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { getSubscriptionInfo } from "@/lib/subscriptionApi";

function getRemainingDays(dateString: string | null) {
  if (!dateString) {
    return null;
  }

  const target = new Date(dateString).getTime();
  const now = Date.now();
  const remaining = Math.ceil((target - now) / (1000 * 60 * 60 * 24));
  return Math.max(remaining, 0);
}

const DashboardPage = () => {
  const subscriptionQuery = useQuery({
    queryKey: ["subscription-info"],
    queryFn: getSubscriptionInfo,
    refetchInterval: 30000,
  });

  const trialDaysLeft = useMemo(() => {
    if (!subscriptionQuery.data) {
      return null;
    }
    return getRemainingDays(subscriptionQuery.data.trial_ends_at);
  }, [subscriptionQuery.data]);

  return (
    <main className="min-h-screen py-12 px-4">
      <div className="max-w-3xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        <Card>
          <CardHeader>
            <CardTitle>Status da assinatura</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {subscriptionQuery.isLoading && <p>Carregando assinatura...</p>}
            {subscriptionQuery.isError && <p>Erro ao carregar assinatura.</p>}

            {subscriptionQuery.data && (
              <>
                <p>
                  <strong>Status:</strong> {subscriptionQuery.data.status}
                </p>
                <p>
                  <strong>Plano:</strong> {subscriptionQuery.data.plan_name ?? "Sem plano"}
                </p>
                <p>
                  <strong>Trial restante:</strong>{" "}
                  {trialDaysLeft !== null ? `${trialDaysLeft} dia(s)` : "Nao aplicavel"}
                </p>
              </>
            )}

            <Button asChild>
              <Link to="/plans">Assinar agora</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </main>
  );
};

export default DashboardPage;
