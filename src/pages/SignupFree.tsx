import { FormEvent, useMemo, useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { signupTrialFree } from "@/lib/trialApi";

const APP_URL = "https://app.nudiet.com.br";

const SignupFree = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

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
        specialty: specialty.trim() || undefined,
      });

      const redirectUrl = new URL(`${APP_URL}/login`);
      redirectUrl.searchParams.set("email", created.user.email);
      redirectUrl.searchParams.set("trial", "1");
      redirectUrl.searchParams.set("token", created.token);
      window.location.assign(redirectUrl.toString());
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
            placeholder="Especialidade (opcional)"
            value={specialty}
            onChange={(e) => setSpecialty(e.target.value)}
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
      </div>
    </main>
  );
};

export default SignupFree;
