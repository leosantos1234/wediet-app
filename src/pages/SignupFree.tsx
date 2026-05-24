import { FormEvent, useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { signupTrialFree } from "@/lib/trialApi";

type TrialSuccessState = {
  email: string;
  message: string;
  activationEmailSent: boolean;
};

const SignupFree = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [cpf, setCpf] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [specializationsInput, setSpecializationsInput] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState<TrialSuccessState | null>(null);
  const selectedPlan =
    (searchParams.get("plan") || "gratis").toLowerCase() === "premium"
      ? "premium"
      : (searchParams.get("plan") || "gratis").toLowerCase() === "profissional"
        ? "profissional"
        : "gratis";

  const canSubmit = useMemo(
    () =>
      !submitting &&
      fullName.trim().length >= 3 &&
      email.trim().length >= 3 &&
      password.length >= 6 &&
      password === confirmPassword,
    [submitting, fullName, email, password, confirmPassword]
  );

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais.");
      return;
    }

    try {
      setSubmitting(true);
      const created = await signupTrialFree({
        full_name: fullName.trim(),
        email: email.trim().toLowerCase(),
        password,
        mobile_phone: phone.trim() || undefined,
        cpf: cpf.trim() || undefined,
        specialty: specialty.trim() || undefined,
        specializations: specializationsInput
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean),
        selected_plan: selectedPlan,
      });

      setSuccess({
        email: created.email,
        message: created.message,
        activationEmailSent: created.activation_email_sent,
      });
    } catch (err) {
      setError((err as Error).message || "Erro ao criar conta.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-muted/30 py-14 px-4">
      <div className="mx-auto max-w-2xl rounded-2xl border bg-card p-6 md:p-10 shadow-sm">
        <button
          type="button"
          onClick={() => navigate("/#pricing")}
          className="text-sm text-muted-foreground hover:text-foreground"
        >
          Voltar aos planos
        </button>
        <h1 className="mt-4 text-3xl font-extrabold">Teste gratis por 30 dias</h1>
        <p className="mt-2 text-muted-foreground">
          Preencha os dados para criar sua conta de teste por 30 dias, sem custo, e comecar agora.
        </p>

        {success ? (
          <section className="mt-8 space-y-4 rounded-xl border border-emerald-200 bg-emerald-50 p-5">
            <h2 className="text-lg font-semibold text-emerald-800">Conta de teste criada</h2>
            <p className="text-sm text-emerald-800">
              Cadastro concluido com sucesso. Para continuar, confirme sua conta pelo e-mail
              enviado.
            </p>
            <p className="text-sm text-emerald-700">
              E-mail de ativacao: <strong>{success.email}</strong>
            </p>
            <p className="text-sm text-emerald-700">
              Enviamos as instrucoes para seu e-mail. Verifique a caixa de entrada e o spam para
              ativar a conta antes do primeiro login.
            </p>
            <div>
              <a
                href={`https://app.nudiet.com.br/login?email=${encodeURIComponent(success.email)}`}
                className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
              >
                Ir para login do sistema
              </a>
            </div>
          </section>
        ) : (
          <form className="mt-8 space-y-4" onSubmit={onSubmit}>
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Nome completo"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border px-4 py-3"
              type="email"
              placeholder="E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="WhatsApp (opcional)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="CPF"
              value={cpf}
              onChange={(e) => setCpf(e.target.value)}
            />
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Especialidade (opcional)"
              value={specialty}
              onChange={(e) => setSpecialty(e.target.value)}
            />
            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Especialidades (separadas por virgula)"
              value={specializationsInput}
              onChange={(e) => setSpecializationsInput(e.target.value)}
            />

            <div className="relative">
              <input
                className="w-full rounded-xl border px-4 py-3 pr-12"
                type={showPassword ? "text" : "password"}
                placeholder="Senha (min. 6 caracteres)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={6}
              />
              <button
                type="button"
                onClick={() => setShowPassword((v) => !v)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground"
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </button>
            </div>
            <input
              className="w-full rounded-xl border px-4 py-3"
              type={showPassword ? "text" : "password"}
              placeholder="Confirmar senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              minLength={6}
            />

            {error ? <p className="text-sm text-red-600">{error}</p> : null}

            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full rounded-xl bg-primary px-4 py-3 font-semibold text-primary-foreground disabled:opacity-50"
            >
              {submitting ? "Criando sua conta..." : "Comecar teste gratis de 30 dias"}
            </button>
            {submitting ? (
              <p className="text-xs text-muted-foreground">
                Primeiro acesso pode levar ate 60 segundos enquanto o servidor inicializa.
              </p>
            ) : null}
          </form>
        )}
      </div>
    </main>
  );
};

export default SignupFree;
