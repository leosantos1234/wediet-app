import { useEffect, useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { createMyCheckout, getPlans } from "@/lib/subscriptionApi";

const PLAN_LABELS: Record<string, string> = {
  gratis: "Gratis 30 dias",
  profissional: "Profissional",
  premium: "Premium",
};

const readHashParams = () => {
  const raw = window.location.hash.startsWith("#") ? window.location.hash.slice(1) : window.location.hash;
  return new URLSearchParams(raw);
};

export default function GoogleSignupCallback() {
  const [searchParams] = useSearchParams();
  const [message, setMessage] = useState("Concluindo acesso com Google...");
  const [error, setError] = useState("");
  const selectedPlan = useMemo(() => {
    const raw = (searchParams.get("plan") || "gratis").toLowerCase();
    if (raw === "premium" || raw === "profissional") return raw;
    return "gratis";
  }, [searchParams]);

  useEffect(() => {
    let cancelled = false;

    async function finish() {
      try {
        const hash = readHashParams();
        const token = String(hash.get("token") || "").trim();
        if (!token) {
          throw new Error("Token Google nao recebido.");
        }

        if (selectedPlan === "gratis") {
          window.location.assign(`https://app.nudiet.com.br/auth/google/callback#token=${encodeURIComponent(token)}&mode=signup`);
          return;
        }

        setMessage(`Preparando checkout do plano ${PLAN_LABELS[selectedPlan]}...`);
        const plans = await getPlans();
        const plan = plans.find((item) => item.code === selectedPlan);
        if (!plan) {
          throw new Error("Nao foi possivel identificar o plano escolhido.");
        }

        const checkout = await createMyCheckout(token, plan.id);
        if (!cancelled) {
          window.location.assign(checkout.checkout_url);
        }
      } catch (err) {
        if (!cancelled) {
          setError((err as Error).message || "Nao foi possivel concluir o cadastro com Google.");
        }
      }
    }

    void finish();
    return () => {
      cancelled = true;
    };
  }, [selectedPlan]);

  return (
    <main className="flex min-h-screen items-center justify-center bg-muted/30 px-4">
      <section className="w-full max-w-md rounded-2xl border bg-card p-8 text-center shadow-sm">
        <h1 className="text-2xl font-extrabold">Cadastro com Google</h1>
        {error ? (
          <>
            <p className="mt-3 text-sm text-red-600">{error}</p>
            <Link
              to={`/cadastro?plan=${selectedPlan}`}
              className="mt-6 inline-flex rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Voltar ao cadastro
            </Link>
          </>
        ) : (
          <p className="mt-3 text-sm text-muted-foreground">{message}</p>
        )}
      </section>
    </main>
  );
}
