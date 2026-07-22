import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Cloud,
  DatabaseBackup,
  Leaf,
  MessageCircleHeart,
  ShieldCheck,
  Sparkles,
  Star,
} from "lucide-react";

const benefits = [
  { icon: Sparkles, label: "Setup em poucos minutos" },
  { icon: ShieldCheck, label: "Dados protegidos" },
  { icon: MessageCircleHeart, label: "Suporte humano especializado" },
  { icon: Check, label: "30 dias sem cartão" },
];

const trustItems = [
  { icon: ShieldCheck, title: "LGPD", subtitle: "Privacidade como prioridade" },
  { icon: Cloud, title: "Hospedagem segura", subtitle: "Ambiente protegido" },
  { icon: DatabaseBackup, title: "Backups automáticos", subtitle: "Mais segurança operacional" },
  { icon: Star, title: "Feito para nutris", subtitle: "Rotina clínica e gestão" },
];

const laptopMenu = ["Início", "Pacientes", "Agenda", "Planos", "Evolução", "Mensagens", "Relatórios"];

const meals = [
  ["Café da manhã", "320 kcal"],
  ["Almoço", "530 kcal"],
  ["Jantar", "420 kcal"],
  ["Lanche", "200 kcal"],
];

const HeroPremiumSection = () => {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-[radial-gradient(circle_at_78%_20%,rgba(27,219,167,0.22),transparent_28%),radial-gradient(circle_at_8%_76%,rgba(17,120,135,0.22),transparent_30%),linear-gradient(135deg,#061827_0%,#08283A_54%,#053342_100%)] pt-24 text-white md:pt-28">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[7%] top-[22%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_20px_5px_rgba(46,230,166,.35)]" />
        <div className="absolute right-[12%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan-100/70 shadow-[0_0_20px_4px_rgba(125,211,252,.25)]" />
        <div className="absolute bottom-[18%] left-[46%] h-1 w-1 rounded-full bg-emerald-200/60" />
      </div>

      <div className="container relative pb-8">
        <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-[650px] py-8 md:py-12"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2ee6a6] shadow-[0_0_12px_#2ee6a6]" />
              Plataforma clínica inteligente
            </div>

            <h1 className="mt-7 max-w-[620px] text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[64px]">
              A plataforma completa para a nova{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                nutrição clínica.
              </span>
            </h1>

            <p className="mt-6 max-w-[560px] text-base leading-8 text-slate-300 sm:text-lg">
              Gestão de pacientes, planos alimentares inteligentes, evolução clínica com IA e
              acompanhamento em tempo real. Mais produtividade, melhores resultados e pacientes mais
              engajados.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 px-6 py-4 text-sm font-black text-emerald-950 shadow-[0_0_40px_rgba(35,220,153,0.18)] transition hover:-translate-y-0.5"
              >
                Experimentar grátis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-white/[0.035] px-6 py-4 text-sm font-bold text-white transition hover:border-emerald-300/60 hover:bg-white/[0.06]"
              >
                Conhecer a plataforma
                <ChevronRight className="h-4 w-4 text-emerald-300" />
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-x-4 gap-y-4 sm:grid-cols-4">
              {benefits.map(({ icon: Icon, label }) => (
                <div key={label} className="flex items-start gap-2.5">
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-lg border border-emerald-300/20 bg-emerald-300/5">
                    <Icon className="h-4 w-4 text-emerald-300" strokeWidth={1.8} />
                  </span>
                  <span className="text-[11px] leading-4 text-slate-300">{label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="relative z-10 pb-12 pt-3"
          >
            <LaptopMockup />
            <PhoneMockup />
          </motion.div>
        </div>

        <TrustStrip />
      </div>
    </section>
  );
};

const MetricCard = ({ label, value, trend }: { label: string; value: string; trend: string }) => (
  <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
    <p className="text-[9px] font-medium text-slate-400">{label}</p>
    <p className="mt-1 text-lg font-black tracking-tight text-white">{value}</p>
    <p className="mt-1 text-[8px] font-semibold text-emerald-300">{trend}</p>
  </div>
);

const MiniChart = () => (
  <div className="relative h-28 overflow-hidden rounded-xl border border-white/10 bg-[#0a2332] p-3">
    <div className="flex items-center justify-between">
      <span className="text-[9px] font-semibold text-slate-300">Evolução dos pacientes</span>
      <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-300">+8,4%</span>
    </div>
    <svg viewBox="0 0 320 85" className="mt-2 h-16 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ee6a6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2ee6a6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path
        d="M0 68 C35 58, 42 42, 72 48 S120 78, 150 58 S198 20, 230 30 S278 50, 320 15 L320 85 L0 85 Z"
        fill="url(#heroChartFill)"
      />
      <path
        d="M0 68 C35 58, 42 42, 72 48 S120 78, 150 58 S198 20, 230 30 S278 50, 320 15"
        fill="none"
        stroke="#2ee6a6"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <circle cx="320" cy="15" r="4" fill="#baf7cf" />
    </svg>
  </div>
);

const LaptopMockup = () => (
  <div className="relative mx-auto w-full max-w-[700px]">
    <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
    <div className="relative rounded-[24px] border border-white/15 bg-[#0a1119] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
      <div className="overflow-hidden rounded-[18px] border border-white/10 bg-[#071b28]">
        <div className="flex h-[330px] sm:h-[390px]">
          <aside className="hidden w-[112px] shrink-0 border-r border-white/5 bg-[#082334] p-3 sm:block">
            <div className="mb-5 flex items-center gap-2 text-[10px] font-black">
              <Leaf className="h-3.5 w-3.5 text-emerald-300" />
              <span>NuDiet</span>
            </div>
            {laptopMenu.map((item, index) => (
              <div
                key={item}
                className={`mb-1.5 rounded-lg px-2 py-2 text-[8px] ${
                  index === 1 ? "bg-emerald-400/10 text-emerald-300" : "text-slate-400"
                }`}
              >
                {item}
              </div>
            ))}
          </aside>

          <div className="min-w-0 flex-1 p-4 sm:p-5">
            <div className="mb-4 flex items-start justify-between">
              <div>
                <p className="text-[9px] text-slate-400">Olá, profissional</p>
                <h3 className="text-base font-bold text-white">Resumo da clínica</h3>
              </div>
              <div className="flex gap-2">
                <span className="h-7 w-7 rounded-full bg-white/5" />
                <span className="h-7 w-7 rounded-full bg-emerald-300/20" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <MetricCard label="Pacientes ativos" value="238" trend="+11% no mês" />
              <MetricCard label="Consultas hoje" value="18" trend="8% vs. ontem" />
              <MetricCard label="Planos ativos" value="312" trend="+14% no mês" />
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.35fr_.9fr]">
              <MiniChart />
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                <p className="mb-3 text-[9px] font-semibold text-slate-300">Atividades recentes</p>
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="mb-2 flex items-center gap-2 last:mb-0">
                    <span className="h-6 w-6 rounded-full bg-gradient-to-br from-emerald-300/40 to-cyan-300/10" />
                    <div className="min-w-0 flex-1">
                      <div className="h-1.5 rounded bg-white/15" />
                      <div className="mt-1 h-1 w-3/4 rounded bg-white/10" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto h-3 w-[94%] rounded-b-[999px] bg-gradient-to-b from-slate-400 to-slate-700" />
    <div className="mx-auto h-2 w-[32%] rounded-b-xl bg-slate-500/70" />
  </div>
);

const PhoneMockup = () => (
  <div className="absolute bottom-[-12px] right-[-4px] z-20 w-[150px] rounded-[28px] border-[5px] border-[#0b1117] bg-[#071d2a] p-2 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:right-2 sm:w-[180px] lg:right-[-6px]">
    <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-black/60" />
    <div className="rounded-[20px] bg-gradient-to-b from-[#082536] to-[#061a27] p-3">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-400">Olá, paciente</p>
          <p className="text-[10px] font-bold">Seu progresso</p>
        </div>
        <span className="h-7 w-7 rounded-full bg-emerald-300/20" />
      </div>

      <div className="mx-auto mt-4 grid h-20 w-20 place-items-center rounded-full border-[7px] border-emerald-300/20 ring-4 ring-emerald-300/10">
        <div className="text-center">
          <p className="text-xl font-black text-emerald-300">76%</p>
          <p className="text-[7px] text-slate-400">da meta</p>
        </div>
      </div>

      <p className="mt-4 text-[9px] font-semibold">Seu plano de hoje</p>
      <div className="mt-2 space-y-2">
        {meals.map(([meal, kcal]) => (
          <div key={meal} className="flex items-center justify-between text-[8px]">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span className="h-2 w-2 rounded-full bg-emerald-300" />
              {meal}
            </span>
            <span className="text-slate-500">{kcal}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const TrustStrip = () => (
  <div className="relative z-20 mt-8 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl md:mt-12">
    <div className="grid md:grid-cols-[1.1fr_4fr]">
      <div className="border-b border-white/10 px-6 py-5 md:border-b-0 md:border-r">
        <p className="max-w-[240px] text-sm font-extrabold leading-5 text-white">
          A escolha de nutricionistas que lideram a transformação da saúde.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ icon: Icon, title, subtitle }, index) => (
          <div
            key={title}
            className={`flex items-center gap-3 px-5 py-5 ${index > 0 ? "lg:border-l lg:border-white/10" : ""}`}
          >
            <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-white/10 bg-white/5">
              <Icon className="h-5 w-5 text-slate-200" strokeWidth={1.8} />
            </span>
            <div>
              <p className="text-sm font-extrabold text-white">{title}</p>
              <p className="mt-1 text-[10px] leading-4 text-slate-400">{subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default HeroPremiumSection;
