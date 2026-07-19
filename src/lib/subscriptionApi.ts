export type Plan = {
  id: number;
  code: "gratis" | "profissional" | "premium";
  name: string;
  price: number;
  billing_note: string | null;
  trial_days: number | null;
  features: Record<string, boolean>;
};

export type SubscriptionStatus = "trial" | "active" | "past_due" | "canceled";

export type SubscriptionInfo = {
  status: SubscriptionStatus;
  trial_ends_at: string | null;
  current_period_end: string | null;
  plan_name: string | null;
};

type CheckoutResponse = {
  checkout_url: string;
};

const resolveApiBaseUrl = (): string => {
  const envBase = String(import.meta.env.VITE_API_URL || "").trim();
  if (envBase) return envBase.replace(/\/+$/, "");
  return "https://nutriflow-api.onrender.com";
};

const API_BASE_URL = resolveApiBaseUrl();

async function apiRequest<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    headers: {
      "Content-Type": "application/json",
      ...(init?.headers ?? {}),
    },
    ...init,
  });

  if (!response.ok) {
    const text = await response.text();
    const error = new Error(text || `Erro na API (${response.status})`) as Error & { status?: number };
    error.status = response.status;
    throw error;
  }

  return response.json() as Promise<T>;
}

async function apiRequestWithFallback<T>(paths: string[], init?: RequestInit): Promise<T> {
  let lastError: Error | null = null;

  for (const path of paths) {
    try {
      return await apiRequest<T>(path, init);
    } catch (error) {
      const mapped = error instanceof Error ? error : new Error("Erro desconhecido");
      const status = (mapped as Error & { status?: number }).status;
      if (status !== 404) {
        throw mapped;
      }
      lastError = mapped;
    }
  }

  throw new Error(lastError?.message ?? "Nao foi possivel conectar a API.");
}

export async function getPlans(): Promise<Plan[]> {
  return apiRequestWithFallback<Plan[]>(["/plans", "/api/plans", "/api/v1/plans"]);
}

export async function createCheckout(userId: number, planId: number): Promise<CheckoutResponse> {
  return apiRequestWithFallback<CheckoutResponse>(
    ["/create-checkout", "/api/create-checkout", "/api/v1/create-checkout"],
    {
      method: "POST",
      body: JSON.stringify({
        user_id: userId,
        plan_id: planId,
      }),
    },
  );
}

export async function createMyCheckout(token: string, planId: number): Promise<CheckoutResponse> {
  return apiRequestWithFallback<CheckoutResponse>(
    ["/me/create-checkout", "/api/me/create-checkout", "/api/v1/me/create-checkout"],
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        plan_id: planId,
      }),
    },
  );
}

export const getGoogleSignupStartUrl = (selectedPlan: "gratis" | "profissional" | "premium") => {
  const siteBase = window.location.origin;
  const callbackUrl = `${siteBase}/cadastro/google/callback?plan=${encodeURIComponent(selectedPlan)}`;
  const errorUrl = `${siteBase}/cadastro?plan=${encodeURIComponent(selectedPlan)}`;
  const query = new URLSearchParams({
    success_redirect: callbackUrl,
    error_redirect: errorUrl,
  });
  return `${API_BASE_URL}/auth/google/start?${query.toString()}`;
};

export async function getSubscriptionInfo(): Promise<SubscriptionInfo> {
  return apiRequestWithFallback<SubscriptionInfo>([
    "/me/subscription",
    "/api/me/subscription",
    "/api/v1/me/subscription",
  ]);
}
