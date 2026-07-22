import {
  ArrowRight,
  Bot,
  BrainCircuit,
  Leaf,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  UserRound,
  Users,
} from "lucide-react";
import heroNutritionist from "@/assets/hero-nutritionist.jpg";

type Step = {
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
};

const steps: Step[] = [
  {
    title: "Nutricionista",
    description: "Planeja, acompanha e toma decisões com apoio da tecnologia.",
    icon: Stethoscope,
  },
  {
    title: "NuDiet",
    description: "Centraliza dados, organiza informações e facilita a rotina clínica.",
    icon: Leaf,
  },
  {
    title: "Paciente",
    description: "Segue o plano, registra e acompanha sua evolução no app.",
    icon: UserRound,
  },
  {
    title: "IA",
    description: "Analisa dados, gera insights e apoia decisões mais inteligentes.",
    icon: BrainCircuit,
  },
];

const metrics = [
  { value: "Clareza", label: "dados clínicos em um só lugar" },
  { value: "Rotina", label: "fluxos pensados para nutricionistas" },
  { value: "Apoio", label: "IA como suporte para decisões" },
];

const StepCard = ({ step }: { step: Step }) => {
  const Icon = step.icon;

  return (
    <article className="min-w-0 flex-1 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-[0_12px_40px_rgba(10,36,48,0.05)]">
      <div className="flex items-start gap-3">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
          <Icon className="h-5 w-5" strokeWidth={1.8} />
        </div>
        <div>
          <h3 className="text-sm font-semibold text-slate-950">{step.title}</h3>
          <p className="mt-1 text-xs leading-5 text-slate-600">{step.description}</p>
        </div>
      </div>
    </article>
  );
};

const EcosystemFlow = () => (
  <section>
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-2xl font-extrabold leading-[1.08] tracking-tight text-slate-950 sm:text-3xl lg:text-[34px]">
        Nutricionista, paciente e IA trabalhando juntos
        <span className="block">por resultados reais e duradouros.</span>
      </h2>
    </div>

    <div className="mt-10 grid gap-4 lg:grid-cols-[1fr_auto_1fr_auto_1fr_auto_1fr] lg:items-center">
      {steps.map((step, index) => (
        <div key={step.title} className="contents">
          <StepCard step={step} />
          {index < steps.length - 1 && (
            <div className="hidden items-center justify-center lg:flex">
              <div className="h-px w-10 bg-gradient-to-r from-emerald-200 to-emerald-400" />
              <ArrowRight className="-ml-1 h-4 w-4 text-emerald-500" />
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

const AuthorityPanel = () => (
  <section className="mt-8 overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#061923] via-[#082834] to-[#0d3841] shadow-[0_0_60px_rgba(45,212,163,0.16)]">
    <div className="grid lg:grid-cols-[0.92fr_1.55fr]">
      <div className="relative min-h-[320px] overflow-hidden bg-[#15323b]">
        <img
          src={heroNutritionist}
          alt="Nutricionista usando o NuDiet em uma rotina clínica"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-[#061923]/35 to-[#061923]/85" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[#071923] via-transparent to-transparent" />
      </div>

      <div className="relative px-6 py-8 sm:px-8 lg:px-10 lg:py-10">
        <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-emerald-400/10 blur-3xl" />

        <div className="relative grid gap-8 xl:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
              <Sparkles className="h-3.5 w-3.5" />
              Feito por quem vive a nutrição
            </div>

            <h3 className="mt-4 text-3xl font-semibold leading-tight tracking-tight text-white sm:text-4xl">
              Feito por nutricionistas,
              <span className="block text-emerald-300">para nutricionistas.</span>
            </h3>

            <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300">
              O NuDiet nasce da rotina clínica real: atendimento, acompanhamento, plano alimentar,
              comunicação com pacientes e gestão em um fluxo mais claro, humano e produtivo.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-200">
                <ShieldCheck className="h-4 w-4 text-emerald-300" />
                Tecnologia com segurança
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-200">
                <Users className="h-4 w-4 text-emerald-300" />
                Construído com profissionais
              </div>
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 text-xs text-slate-200">
                <Bot className="h-4 w-4 text-emerald-300" />
                IA que apoia decisões
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6">
              <p className="font-semibold text-white">Equipe NuDiet</p>
              <p className="mt-1 text-xs text-slate-400">Produto pensado para a prática clínica nutricional</p>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-3 xl:grid-cols-1">
            {metrics.map((metric) => (
              <article
                key={metric.value}
                className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur"
              >
                <p className="text-2xl font-semibold text-emerald-300">{metric.value}</p>
                <p className="mt-2 text-xs leading-5 text-slate-400">{metric.label}</p>
              </article>
            ))}

            <article className="rounded-2xl border border-white/10 bg-white/[0.05] p-4 backdrop-blur sm:col-span-3 xl:col-span-1">
              <div className="flex items-center gap-1 text-amber-300">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star key={index} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="mt-3 text-lg font-semibold text-white">Experiência premium</p>
              <p className="mt-1 text-xs text-slate-400">Interface pensada para clareza, confiança e recorrência.</p>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const EcosystemProofSection = () => {
  return (
    <section className="bg-[#f6f8f6] py-16 sm:py-20">
      <div className="mx-auto w-full max-w-[1500px] px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <EcosystemFlow />
        <AuthorityPanel />
      </div>
    </section>
  );
};

export default EcosystemProofSection;
