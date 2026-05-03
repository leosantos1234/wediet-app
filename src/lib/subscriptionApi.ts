export type Plan = {
  id: number;
  name: string;
  price: number;
  max_patients: number;
  features: Record<string, unknown>;
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

const API_BASE_URL = (import.meta.env.VITE_API_BASE_URL ?? "http://localhost:8000").replace(/\/$/, "");

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

export async function getSubscriptionInfo(): Promise<SubscriptionInfo> {
  return apiRequestWithFallback<SubscriptionInfo>([
    "/me/subscription",
    "/api/me/subscription",
    "/api/v1/me/subscription",
  ]);
}
