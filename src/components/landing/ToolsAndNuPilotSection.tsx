import {
  Activity,
  BrainCircuit,
  ChartNoAxesCombined,
  ChevronRight,
  Salad,
  Smartphone,
  Sparkles,
  Users,
} from "lucide-react";

type ToolItem = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const tools: ToolItem[] = [
  {
    title: "Produtividade clínica",
    description:
      "Automatize tarefas, organize a rotina e tenha mais tempo para o que realmente importa: seus pacientes.",
    icon: Activity,
  },
  {
    title: "Acompanhamento do paciente",
    description:
      "Monitore evolução, adesão e resultados em tempo real com dados precisos e atualizados.",
    icon: Users,
  },
  {
    title: "Planos alimentares",
    description:
      "Crie, personalize e ajuste planos com inteligência e rapidez, incluindo cálculo automático de nutrientes.",
    icon: Salad,
  },
  {
    title: "Evolução clínica",
    description:
      "Gráficos inteligentes, comparativos e indicadores que mostram o progresso com clareza.",
    icon: ChartNoAxesCombined,
  },
  {
    title: "Aplicativo do paciente",
    description:
      "Seu paciente conectado ao plano, às orientações e aos resultados na palma da mão.",
    icon: Smartphone,
  },
  {
    title: "NuPilot com IA",
    description:
      "Inteligência artificial que apoia decisões, analisa dados e sugere caminhos personalizados.",
    icon: BrainCircuit,
  },
];

const insightItems = [
  "Análise preditiva e alertas personalizados",
  "Sugestões de ajustes baseadas em evidências",
  "Relatórios automáticos e interpretativos",
  "Aprendizado contínuo com os seus dados",
];

const ToolCard = ({ item }: { item: ToolItem }) => {
  const Icon = item.icon;

  return (
    <article className="group rounded-2xl border border-white/10 bg-white p-5 text-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-emerald-200">
      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 transition group-hover:bg-emerald-100">
        <Icon className="h-5 w-5" strokeWidth={1.8} />
      </div>
      <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p>
    </article>
  );
};

const MetricCard = ({
  label,
  value,
  caption,
  children,
}: {
  label: string;
  value: string;
  caption: string;
  children?: React.ReactNode;
}) => (
  <div className="rounded-2xl border border-white/10 bg-white/[0.055] p-4 backdrop-blur">
    <p className="text-xs font-medium text-slate-400">{label}</p>
    <div className="mt-3 flex items-end justify-between gap-3">
      <div>
        <p className="text-2xl font-semibold text-white">{value}</p>
        <p className="mt-1 text-[11px] text-slate-500">{caption}</p>
      </div>
      {children}
    </div>
  </div>
);

const Gauge = () => (
  <div className="relative h-16 w-28 overflow-hidden">
    <div className="absolute inset-x-0 top-2 h-24 rounded-full border-[10px] border-slate-700" />
    <div className="absolute inset-x-0 top-2 h-24 -rotate-[32deg] rounded-full border-[10px] border-transparent border-l-lime-300 border-t-lime-300" />
    <div className="absolute inset-x-0 bottom-0 text-center">
      <span className="text-[10px] text-slate-500">Baixo</span>
    </div>
  </div>
);

const SparkLine = () => (
  <svg viewBox="0 0 120 52" className="h-12 w-28" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="toolsLineGradient" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stopColor="#2dd4bf" />
        <stop offset="100%" stopColor="#a3e635" />
      </linearGradient>
    </defs>
    <path
      d="M4 43 C16 41, 18 37, 28 36 C38 35, 42 41, 53 35 C66 28, 68 18, 80 20 C91 23, 96 7, 116 6"
      stroke="url(#toolsLineGradient)"
      strokeLinecap="round"
      strokeWidth="3"
    />
    <path
      d="M4 43 C16 41, 18 37, 28 36 C38 35, 42 41, 53 35 C66 28, 68 18, 80 20 C91 23, 96 7, 116 6 L116 52 L4 52 Z"
      fill="url(#toolsLineGradient)"
      opacity="0.08"
    />
  </svg>
);

const Donut = () => (
  <div className="relative h-16 w-16 rounded-full bg-[conic-gradient(#a3e635_0_82%,rgba(255,255,255,0.10)_82%_100%)]">
    <div className="absolute inset-[7px] flex flex-col items-center justify-center rounded-full bg-[#0b2834]">
      <span className="text-sm font-semibold text-white">82%</span>
      <span className="text-[8px] text-slate-500">adesão</span>
    </div>
  </div>
);

const NuPilotPanel = () => (
  <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-8 shadow-[0_0_60px_rgba(45,212,163,0.16)] backdrop-blur sm:px-8 lg:px-10 lg:py-10">
    <div className="pointer-events-none absolute -right-32 -top-36 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
    <div className="pointer-events-none absolute bottom-0 right-0 h-full w-1/2 opacity-20">
      <div className="absolute right-16 top-20 h-52 w-52 rounded-full border border-emerald-300/30" />
      <div className="absolute right-28 top-32 h-28 w-28 rounded-full border border-cyan-300/20" />
      <div className="absolute right-40 top-44 h-4 w-4 rounded-full bg-emerald-300 shadow-[0_0_40px_14px_rgba(45,212,163,0.35)]" />
    </div>

    <div className="relative grid gap-8 lg:grid-cols-[0.95fr_1.55fr] lg:items-stretch">
      <div className="flex flex-col justify-between">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-300">
            <Sparkles className="h-3.5 w-3.5" />
            NuPilot · inteligência que apoia decisões
          </div>

          <h3 className="mt-5 max-w-lg text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
            A inteligência organiza.
            <br />
            O nutricionista <span className="text-emerald-300">decide.</span>
          </h3>

          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">
            O NuPilot é o copiloto inteligente que transforma dados clínicos em insights práticos,
            economiza tempo e potencializa seus resultados.
          </p>

          <ul className="mt-6 space-y-3 text-sm text-slate-300">
            {insightItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-5 w-5 items-center justify-center rounded-full border border-emerald-400/40 bg-emerald-400/10">
                  <ChevronRight className="h-3 w-3 text-emerald-300" />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <a
          href="#product"
          className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/[0.055] px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10"
        >
          Conhecer o NuPilot
          <ChevronRight className="h-4 w-4" />
        </a>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard label="Risco de não adesão" value="18%" caption="Ver pacientes">
          <Gauge />
        </MetricCard>

        <MetricCard label="Evolução média" value="-2,4 kg" caption="Últimos 30 dias">
          <SparkLine />
        </MetricCard>

        <MetricCard label="Adesão média" value="82%" caption="Bom desempenho">
          <Donut />
        </MetricCard>

        <div className="grid gap-4 rounded-2xl border border-white/10 bg-white/[0.045] p-4 backdrop-blur sm:col-span-3 sm:grid-cols-[1fr_180px] sm:items-center">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium text-emerald-300">
              <BrainCircuit className="h-4 w-4" />
              Insights NuPilot
            </div>
            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-300">
              3 pacientes precisam de atenção com base na queda de adesão observada nas últimas duas semanas.
            </p>
            <button className="mt-4 rounded-lg border border-white/10 bg-white/[0.055] px-3 py-2 text-xs font-medium text-white transition hover:bg-white/10">
              Ver sugestões
            </button>
          </div>

          <div className="relative mx-auto flex h-36 w-36 items-center justify-center">
            <div className="absolute inset-0 rounded-full border border-emerald-300/20" />
            <div className="absolute inset-4 rounded-full border border-cyan-300/20" />
            <div className="absolute inset-9 rounded-full border border-emerald-300/30" />
            <BrainCircuit
              className="h-16 w-16 text-emerald-300 drop-shadow-[0_0_18px_rgba(45,212,163,0.35)]"
              strokeWidth={1.3}
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

const ToolsAndNuPilotSection = () => {
  return (
    <section
      id="features"
      className="bg-[radial-gradient(circle_at_20%_10%,rgba(45,212,163,0.16),transparent_26rem),radial-gradient(circle_at_82%_18%,rgba(14,165,233,0.12),transparent_28rem),linear-gradient(135deg,#061827_0%,#08283A_52%,#053342_100%)] py-16 text-white sm:py-20"
    >
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <header className="mx-auto max-w-5xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            <Sparkles className="h-4 w-4" />
            Plataforma clínica completa
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Soluções completas para uma prática clínica
            <span className="block">mais eficiente e centrada em resultados.</span>
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Gestão, atendimento, acompanhamento e inteligência clínica em uma experiência única.
          </p>
        </header>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
          {tools.map((item) => (
            <ToolCard key={item.title} item={item} />
          ))}
        </div>

        <div className="mt-6">
          <NuPilotPanel />
        </div>
      </div>
    </section>
  );
};

export default ToolsAndNuPilotSection;
