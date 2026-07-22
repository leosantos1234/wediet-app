import { motion } from "framer-motion";
import {
  ArrowRight,
  Activity,
  BarChart3,
  Bell,
  CalendarDays,
  Check,
  ChevronRight,
  Cloud,
  ClipboardList,
  DatabaseBackup,
  Home,
  Leaf,
  MessageCircleHeart,
  MessageSquare,
  Settings,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
  Utensils,
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

const laptopMenu = [
  { icon: Home, label: "Início" },
  { icon: UserRound, label: "Pacientes", active: true },
  { icon: CalendarDays, label: "Agenda" },
  { icon: ClipboardList, label: "Planos alimentares" },
  { icon: BarChart3, label: "Evolução" },
  { icon: MessageSquare, label: "Mensagens" },
  { icon: Activity, label: "Relatórios" },
  { icon: Settings, label: "Configurações" },
];

const meals = [
  ["Café da manhã", "330 kcal"],
  ["Almoço", "530 kcal"],
  ["Jantar", "420 kcal"],
  ["Lanche", "200 kcal"],
];

const recentActivities = [
  ["Paciente A.", "Plano atualizado"],
  ["Paciente B.", "Consulta marcada"],
  ["Paciente C.", "Mensagem enviada"],
  ["Paciente D.", "Meta avançou"],
];

const HeroPremiumSection = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_78%_20%,rgba(27,219,167,0.22),transparent_28%),radial-gradient(circle_at_8%_76%,rgba(17,120,135,0.22),transparent_30%),linear-gradient(135deg,#061827_0%,#08283A_54%,#053342_100%)] pt-20 text-white md:pt-24">
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-[7%] top-[22%] h-1 w-1 rounded-full bg-emerald-200 shadow-[0_0_20px_5px_rgba(46,230,166,.35)]" />
        <div className="absolute right-[12%] top-[14%] h-1.5 w-1.5 rounded-full bg-cyan-100/70 shadow-[0_0_20px_4px_rgba(125,211,252,.25)]" />
        <div className="absolute bottom-[18%] left-[46%] h-1 w-1 rounded-full bg-emerald-200/60" />
      </div>

      <div className="relative mx-auto flex min-h-[calc(100vh-96px)] w-full max-w-[1300px] flex-col justify-between px-4 pb-6 sm:px-6 lg:px-8 2xl:max-w-[1420px]">
        <div className="grid items-center gap-5 lg:grid-cols-[0.88fr_1.12fr] xl:gap-6 2xl:grid-cols-[0.82fr_1.18fr]">
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative z-10 max-w-[540px] py-1 md:py-2 xl:max-w-[570px]"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/30 bg-emerald-300/5 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] text-emerald-300">
              <span className="h-1.5 w-1.5 rounded-full bg-[#2ee6a6] shadow-[0_0_12px_#2ee6a6]" />
              Plataforma clínica inteligente
            </div>

            <h1 className="mt-4 max-w-[540px] text-4xl font-black leading-[1.03] tracking-tight text-white sm:text-[40px] lg:text-[44px] 2xl:text-[52px]">
              A plataforma completa para a nova{" "}
              <span className="bg-gradient-to-r from-emerald-300 to-green-400 bg-clip-text text-transparent">
                nutrição clínica.
              </span>
            </h1>

            <p className="mt-3 max-w-[500px] text-[14px] leading-6 text-slate-300">
              Gestão de pacientes, planos alimentares inteligentes, evolução clínica com IA e
              acompanhamento em tempo real. Mais produtividade, melhores resultados e pacientes mais
              engajados.
            </p>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <a
                href="/#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-400 to-green-400 px-5 py-3 text-sm font-black text-emerald-950 shadow-[0_0_40px_rgba(35,220,153,0.18)] transition hover:-translate-y-0.5"
              >
                Experimentar grátis
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#product"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-emerald-300/30 bg-white/[0.035] px-5 py-3 text-sm font-bold text-white transition hover:border-emerald-300/60 hover:bg-white/[0.06]"
              >
                Conhecer a plataforma
                <ChevronRight className="h-4 w-4 text-emerald-300" />
              </a>
            </div>

            <div className="mt-4 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-4">
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
            className="relative z-10 pb-12 pt-3 lg:-mr-3 2xl:-mr-8"
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
  <div className="rounded-xl border border-white/10 bg-white/[0.045] p-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
    <p className="text-[9px] font-medium text-slate-400">{label}</p>
    <p className="mt-1 text-lg font-black tracking-tight text-white">{value}</p>
    <p className="mt-1 text-[8px] font-semibold text-emerald-300">{trend}</p>
  </div>
);

const MiniChart = () => (
  <div className="relative h-20 overflow-hidden rounded-xl border border-white/10 bg-[#0a2332] p-3">
    <div className="flex items-center justify-between">
      <span className="text-[9px] font-semibold text-slate-300">Evolução dos pacientes</span>
      <span className="rounded-full bg-emerald-400/10 px-2 py-1 text-[8px] text-emerald-300">+8,4%</span>
    </div>
    <svg viewBox="0 0 320 96" className="mt-1 h-14 w-full" aria-hidden="true">
      <defs>
        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2ee6a6" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#2ee6a6" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 74 C30 65, 45 38, 78 49 S122 76, 154 59 S198 18, 232 31 S278 50, 320 18 L320 96 L0 96 Z" fill="url(#heroChartFill)" />
      <path d="M0 74 C30 65, 45 38, 78 49 S122 76, 154 59 S198 18, 232 31 S278 50, 320 18" fill="none" stroke="#2ee6a6" strokeLinecap="round" strokeWidth="3" />
      <path d="M0 82 H320 M0 55 H320 M0 28 H320" stroke="rgba(255,255,255,0.05)" />
      <circle cx="320" cy="18" r="4" fill="#baf7cf" />
    </svg>
  </div>
);

const LaptopMockup = () => (
  <div className="relative mx-auto w-full max-w-[540px] xl:max-w-[600px] 2xl:max-w-[660px]">
    <div className="absolute -inset-8 rounded-full bg-emerald-400/10 blur-3xl" />
    <div className="relative rounded-[26px] border border-white/15 bg-[#080d13] p-2.5 shadow-[0_30px_80px_rgba(0,0,0,0.34)]">
      <div className="overflow-hidden rounded-[20px] border border-white/10 bg-[#071b28]">
        <div className="flex h-[245px] sm:h-[285px] 2xl:h-[315px]">
          <aside className="hidden w-[98px] shrink-0 border-r border-white/5 bg-[#082334] p-2.5 sm:block 2xl:w-[112px] 2xl:p-3">
            <div className="mb-5 flex items-center gap-2 text-[10px] font-black text-white">
              <Leaf className="h-3.5 w-3.5 text-emerald-300" />
              <span>NuDiet</span>
            </div>
            {laptopMenu.map(({ icon: Icon, label, active }) => (
              <div
                key={label}
                className={`mb-1.5 flex items-center gap-2 rounded-lg px-2 py-2 text-[8px] ${
                  active ? "bg-emerald-400/10 text-emerald-300" : "text-slate-400"
                }`}
              >
                <Icon className="h-3 w-3" />
                {label}
              </div>
            ))}
          </aside>

          <div className="min-w-0 flex-1 p-3">
            <div className="mb-3 flex items-start justify-between">
              <div>
                <p className="text-[9px] text-slate-400">Olá, profissional</p>
                <h3 className="text-base font-bold text-white">Resumo da clínica</h3>
              </div>
              <div className="flex items-center gap-2">
                <Bell className="h-3.5 w-3.5 text-slate-400" />
                <span className="h-7 w-7 rounded-full bg-white/5" />
                <span className="h-7 w-7 rounded-full bg-emerald-300/20" />
              </div>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <MetricCard label="Pacientes ativos" value="238" trend="+11% no mês" />
              <MetricCard label="Consultas hoje" value="18" trend="8% vs. ontem" />
              <MetricCard label="Planos ativos" value="312" trend="+14% no mês" />
            </div>

            <div className="mt-3 grid gap-3 md:grid-cols-[1.25fr_.8fr]">
              <MiniChart />
              <div className="rounded-xl border border-white/10 bg-white/[0.035] p-3">
                <p className="mb-3 text-[9px] font-semibold text-slate-300">Atividades recentes</p>
                {recentActivities.map(([name, action], index) => (
                  <div key={name} className="mb-2 flex items-center gap-2 last:mb-0">
                    <span className="grid h-6 w-6 place-items-center rounded-full bg-gradient-to-br from-emerald-300/40 to-cyan-300/10 text-[8px] font-black text-emerald-200">
                      {index + 1}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[8px] font-bold text-slate-200">{name}</p>
                      <p className="truncate text-[7px] text-slate-500">{action}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto h-3 w-[94%] rounded-b-[999px] bg-gradient-to-b from-slate-300 to-slate-700" />
    <div className="mx-auto h-2 w-[32%] rounded-b-xl bg-slate-500/80" />
  </div>
);

const PhoneMockup = () => (
  <div className="absolute bottom-[-6px] right-0 z-20 w-[112px] rounded-[22px] border-[4px] border-[#0b1117] bg-[#071d2a] p-1.5 shadow-[0_30px_80px_rgba(0,0,0,0.34)] sm:right-2 sm:w-[134px] lg:right-[-4px]">
    <div className="mx-auto mb-2 h-1.5 w-16 rounded-full bg-black/60" />
    <div className="rounded-[20px] bg-gradient-to-b from-[#082536] to-[#061a27] p-2.5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-[8px] text-slate-400">Olá, paciente</p>
          <p className="text-[10px] font-bold">Seu progresso</p>
        </div>
        <span className="h-7 w-7 rounded-full bg-emerald-300/20" />
      </div>

      <div className="mx-auto mt-2 grid h-14 w-14 place-items-center rounded-full border-[5px] border-emerald-300/20 ring-4 ring-emerald-300/10 sm:h-16 sm:w-16">
        <div className="text-center">
          <p className="text-base font-black text-emerald-300 sm:text-lg">76%</p>
          <p className="text-[7px] text-slate-400">da meta</p>
        </div>
      </div>

      <p className="mt-2 text-[8px] font-semibold">Seu plano de hoje</p>
      <div className="mt-2 space-y-1.5">
        {meals.map(([meal, kcal], index) => (
          <div key={meal} className="flex items-center justify-between text-[8px]">
            <span className="flex items-center gap-1.5 text-slate-300">
              <span
                className={`h-2 w-2 rounded-full ${
                  index === 0 ? "bg-emerald-300" : index === 1 ? "bg-amber-300" : index === 2 ? "bg-cyan-300" : "bg-violet-300"
                }`}
              />
              {meal}
            </span>
            <span className="text-slate-500">{kcal}</span>
          </div>
        ))}
      </div>

      <div className="mt-2 grid grid-cols-4 gap-1 border-t border-white/10 pt-2 text-[7px] text-slate-500">
        {[
          [Home, "Início"],
          [Utensils, "Plano"],
          [BarChart3, "Progresso"],
          [MessageSquare, "Chat"],
        ].map(([Icon, label]) => {
          const NavIcon = Icon as typeof Home;
          return (
            <div key={label as string} className="flex flex-col items-center gap-1">
              <NavIcon className="h-3 w-3 text-emerald-300" />
              <span>{label as string}</span>
            </div>
          );
        })}
      </div>
    </div>
  </div>
);

const TrustStrip = () => (
  <div className="relative z-20 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] backdrop-blur-xl md:mt-4">
    <div className="grid md:grid-cols-[1.1fr_4fr]">
      <div className="border-b border-white/10 px-5 py-3 md:border-b-0 md:border-r">
        <p className="max-w-[240px] text-[13px] font-extrabold leading-5 text-white">
          A escolha de nutricionistas que lideram a transformação da saúde.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4">
        {trustItems.map(({ icon: Icon, title, subtitle }, index) => (
          <div
            key={title}
            className={`flex items-center gap-3 px-5 py-3 ${index > 0 ? "lg:border-l lg:border-white/10" : ""}`}
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
