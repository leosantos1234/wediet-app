import {
  ArrowRight,
  BarChart3,
  Camera,
  CheckCircle2,
  Clock3,
  FileText,
  History,
  LockKeyhole,
  Repeat2,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

const benefits = [
  {
    title: "Comparação visual",
    text: "Veja a evolução do paciente entre diferentes avaliações.",
    icon: Camera,
  },
  {
    title: "Histórico centralizado",
    text: "Todas as avaliações salvas no prontuário do paciente.",
    icon: History,
  },
  {
    title: "Indicadores completos",
    text: "Medidas e composição corporal organizadas e atualizadas.",
    icon: BarChart3,
  },
  {
    title: "Relatório profissional",
    text: "Relatórios prontos para apresentar ao paciente.",
    icon: FileText,
  },
];

const trust = [
  { title: "Apenas 2 fotos", text: "Frontal e lateral padronizadas.", icon: Camera },
  { title: "Privacidade garantida", text: "Seus dados seguros e em conformidade.", icon: ShieldCheck },
  { title: "Resultados rápidos", text: "Análise inteligente em poucos segundos.", icon: Clock3 },
  { title: "Integrado ao NuDiet", text: "Tudo conectado ao prontuário.", icon: Repeat2 },
];

const Stat = ({ label, value, trend }: { label: string; value: string; trend: string }) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.045] p-3">
    <p className="text-xs text-slate-400">{label}</p>
    <div className="mt-2 flex items-end justify-between gap-3">
      <p className="text-lg font-semibold text-white">{value}</p>
      <span className="text-xs font-semibold text-emerald-300">{trend}</span>
    </div>
  </div>
);

const BodyMock = () => (
  <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-b from-[#0c2d3a] to-[#08202c] p-3.5 shadow-[0_28px_80px_rgba(0,0,0,0.28)]">
    <div className="grid gap-3 sm:grid-cols-2">
      <div className="rounded-xl bg-white/[0.045] px-4 py-3 text-center">
        <p className="text-sm font-medium text-white">Avaliação inicial</p>
        <p className="mt-1 text-xs text-slate-500">10/01/2025</p>
      </div>
      <div className="rounded-xl bg-emerald-400/15 px-4 py-3 text-center">
        <p className="text-sm font-medium text-white">Avaliação atual</p>
        <p className="mt-1 text-xs text-emerald-300">20/05/2025</p>
      </div>
    </div>

    <div className="mt-3 grid gap-3 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="relative flex min-h-[250px] items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.055] to-transparent">
        <div className="relative h-[230px] w-[96px]">
          <div className="absolute left-1/2 top-2 h-12 w-12 -translate-x-1/2 rounded-full border border-emerald-300/50 bg-orange-200/40" />
          <div className="absolute left-1/2 top-14 h-28 w-16 -translate-x-1/2 rounded-[40%_40%_28%_28%] border border-emerald-300/40 bg-orange-300/20" />
          <div className="absolute left-[22px] top-[70px] h-28 w-6 rotate-6 rounded-full bg-orange-200/30" />
          <div className="absolute right-[22px] top-[70px] h-28 w-6 -rotate-6 rounded-full bg-orange-200/30" />
          <div className="absolute left-[30px] top-[152px] h-20 w-6 rounded-full bg-orange-200/30" />
          <div className="absolute right-[30px] top-[152px] h-20 w-6 rounded-full bg-orange-200/30" />
          <div className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-emerald-300/60" />
          {[42, 94, 158, 214].map((top) => (
            <div
              key={top}
              className="absolute left-0 right-0 border-t border-dashed border-slate-500/50"
              style={{ top }}
            >
              <span className="absolute left-1/2 top-[-5px] h-2.5 w-2.5 -translate-x-1/2 rounded-full border-2 border-emerald-200 bg-emerald-500" />
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-2.5">
        <Stat label="Composição corporal" value="24,7%" trend="↓ 3,2%" />
        <Stat label="Massa magra" value="48,6 kg" trend="↑ 2,1 kg" />
        <Stat label="Massa gorda" value="16,1 kg" trend="↓ 2,4 kg" />
        <Stat label="IMC" value="23,4 kg/m²" trend="Adequado" />
        <Stat label="Circunferência da cintura" value="72 cm" trend="↓ 4 cm" />
      </div>
    </div>

    <p className="mt-4 text-center text-[11px] text-slate-500">
      *Resultados demonstrativos da Análise 360.
    </p>
  </div>
);

const Chart = () => (
  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3.5">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-white">Evolução de % de gordura</p>
      <span className="rounded-full bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
        -3,2%
      </span>
    </div>
    <svg viewBox="0 0 360 160" className="mt-3 h-24 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="analise360Chart" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#2dd4bf" />
          <stop offset="100%" stopColor="#a3e635" />
        </linearGradient>
      </defs>
      {[30, 70, 110, 150].map((y) => (
        <line
          key={y}
          x1="20"
          x2="340"
          y1={y}
          y2={y}
          stroke="rgba(255,255,255,.08)"
          strokeDasharray="4 5"
        />
      ))}
      <path
        d="M20 45 C55 55,74 48,100 68 S155 82,185 91 S245 106,280 110 S316 110,338 126"
        fill="none"
        stroke="url(#analise360Chart)"
        strokeLinecap="round"
        strokeWidth="4"
      />
      <circle cx="338" cy="126" r="7" fill="#082331" stroke="#a3e635" strokeWidth="4" />
    </svg>
  </div>
);

const Compare = () => (
  <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3.5">
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-white">Comparação visual</p>
      <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-slate-300">
        Sobrepor
      </span>
    </div>
    <div className="mt-4 grid grid-cols-2 gap-3">
      {["Inicial", "Atual"].map((label, index) => (
        <div
          key={label}
          className={`overflow-hidden rounded-2xl border ${
            index === 1 ? "border-emerald-400" : "border-white/10"
          } bg-black/20`}
        >
          <div className="flex h-20 items-end justify-center bg-gradient-to-b from-white/[0.06] to-transparent">
            <div className="h-16 w-12 rounded-t-[45%] bg-orange-200/20" />
          </div>
          <div className="border-t border-white/10 px-3 py-2 text-center">
            <p className={`text-xs font-semibold ${index === 1 ? "text-emerald-300" : "text-white"}`}>
              {label}
            </p>
            <p className="mt-1 text-[10px] text-slate-500">{index === 0 ? "10/01/2025" : "20/05/2025"}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const Report = () => (
  <div className="grid gap-3 rounded-[1.5rem] border border-white/10 bg-white/[0.045] p-3.5 sm:grid-cols-[1fr_130px] sm:items-center">
    <div>
      <p className="text-sm font-semibold text-white">Relatório profissional</p>
      <p className="mt-2 text-xs leading-5 text-slate-400">
        Gere um relatório completo com análises, indicadores e gráficos de evolução.
      </p>
      <span className="mt-3 inline-flex items-center gap-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-3 py-2 text-xs font-semibold text-white">
        Gerar relatório
        <FileText className="h-4 w-4 text-emerald-300" />
      </span>
    </div>
    <div className="mx-auto h-20 w-32 rotate-3 rounded-lg bg-white p-3 shadow-2xl">
      <div className="h-2 w-20 rounded bg-slate-200" />
      <div className="mt-3 grid grid-cols-[42px_1fr] gap-3">
        <div className="h-16 rounded bg-emerald-100" />
        <div className="space-y-2">
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-2 rounded bg-slate-200" />
          <div className="h-8 rounded bg-emerald-50" />
        </div>
      </div>
    </div>
  </div>
);

const Analise360Section = () => {
  return (
    <section
      id="analise-360"
      className="relative overflow-hidden bg-[radial-gradient(circle_at_18%_12%,rgba(45,212,163,0.16),transparent_26rem),radial-gradient(circle_at_86%_18%,rgba(14,165,233,0.12),transparent_28rem),linear-gradient(135deg,#061827_0%,#08283A_52%,#053342_100%)] py-7 text-white md:py-8"
    >
      <div className="pointer-events-none absolute -right-48 top-12 h-[520px] w-[520px] rounded-full bg-emerald-400/10 blur-3xl" />

      <div className="relative mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <div className="grid gap-6 lg:grid-cols-[0.78fr_1.22fr] lg:items-center">
          <div>
            <div className="inline-flex rounded-full border border-emerald-400/40 bg-emerald-400/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-emerald-300">
              Avaliação corporal inteligente
            </div>
            <h2 className="mt-4 text-4xl font-extrabold leading-[1.02] tracking-tight sm:text-[44px] md:text-[50px]">
              Conheça a
              <span className="block bg-gradient-to-r from-emerald-300 to-lime-300 bg-clip-text text-transparent">
                Análise 360.
              </span>
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              Uma visão mais clara e completa da evolução corporal.
            </p>
            <p className="mt-3 max-w-xl text-xs leading-5 text-slate-400">
              A partir de fotos padronizadas, a Análise 360 registra, compara e acompanha mudanças
              corporais ao longo do acompanhamento. Tudo integrado ao prontuário, à evolução clínica
              e ao plano alimentar.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {benefits.map(({ icon: Icon, title, text }) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                    <Icon className="h-5 w-5 text-emerald-300" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{title}</h3>
                    <p className="mt-1 text-xs leading-5 text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-5 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5"
              >
                Explorar a Análise 360
                <ArrowRight className="h-5 w-5" />
              </a>
              <a
                href="#faq"
                className="inline-flex items-center justify-center rounded-xl border border-emerald-400/30 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.055]"
              >
                Ver exemplo de análise
              </a>
            </div>
            <div className="mt-5 flex items-center gap-2 text-sm text-slate-400">
              <CheckCircle2 className="h-4 w-4 text-emerald-300" />
              Seguro, rápido e 100% integrado ao NuDiet
            </div>
          </div>

          <div className="grid gap-5 xl:grid-cols-[1.1fr_0.9fr]">
            <BodyMock />
            <div className="space-y-5">
              <Chart />
              <Compare />
              <Report />
            </div>
          </div>
        </div>

        <div className="mt-5 rounded-[1.5rem] border border-white/10 bg-white/[0.035] p-3.5 sm:p-4">
          <div className="grid gap-4 lg:grid-cols-[1.2fr_repeat(4,1fr)] lg:items-center">
            <div className="flex items-center gap-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-emerald-400/20 bg-emerald-400/10">
                <Sparkles className="h-5 w-5 text-emerald-300" />
              </div>
              <p className="text-base font-semibold leading-6">
                A evolução que antes era apenas medida,
                <span className="block">
                  agora também pode ser <span className="text-emerald-300">visualizada.</span>
                </span>
              </p>
            </div>
            {trust.map(({ icon: Icon, title, text }) => (
              <div key={title} className="flex gap-3 lg:border-l lg:border-white/10 lg:pl-6">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10">
                  <Icon className="h-4 w-4 text-emerald-300" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">{title}</h3>
                  <p className="mt-1 text-xs leading-5 text-slate-500">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Analise360Section;
