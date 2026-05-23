type TrialSignupPayload = {
  full_name: string;
  email: string;
  password: string;
  mobile_phone?: string;
  specialty?: string;
};

type TrialSignupResponse = {
  token: string;
  user: {
    id: number;
    full_name: string;
    email: string;
    role: "professional" | "patient" | "admin";
  };
  account_mode: string;
};

const resolveApiBaseUrl = (): string => {
  const envBase = String(import.meta.env.VITE_API_URL || "").trim();
  if (envBase) return envBase.replace(/\/+$/, "");
  return "https://nutriflow-api.onrender.com";
};

const API_BASE_URL = resolveApiBaseUrl();
const TRIAL_SIGNUP_TIMEOUT_MS = 70_000;

export const signupTrialFree = async (
  payload: TrialSignupPayload
): Promise<TrialSignupResponse> => {
  const controller = new AbortController();
  const timeoutId = window.setTimeout(() => controller.abort(), TRIAL_SIGNUP_TIMEOUT_MS);

  try {
    const res = await fetch(`${API_BASE_URL}/auth/trial-signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      signal: controller.signal,
    });

    const body = await res.json().catch(() => ({}));
    if (!res.ok) {
      const detail =
        typeof body?.detail === "string"
          ? body.detail
          : "Nao foi possivel criar sua conta de teste.";
      throw new Error(detail);
    }

    return body as TrialSignupResponse;
  } catch (error) {
    if (error instanceof DOMException && error.name === "AbortError") {
      throw new Error(
        "A criacao da conta demorou demais para responder. Tente novamente em alguns segundos."
      );
    }
    throw error;
  } finally {
    window.clearTimeout(timeoutId);
  }
};
