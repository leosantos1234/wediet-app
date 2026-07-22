import { motion } from "framer-motion";
import {
  Activity,
  CalendarDays,
  ChevronDown,
  FileText,
  Home,
  Leaf,
  LineChart,
  Search,
  Trophy,
  TrendingDown,
  UserPlus,
  Users,
  Utensils,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const evolutionData = [
  { consulta: "Consulta 01", peso: 92.4 },
  { consulta: "Consulta 02", peso: 89.8 },
  { consulta: "Consulta 03", peso: 86.7 },
  { consulta: "Consulta 04", peso: 83.9 },
  { consulta: "Consulta 05", peso: 81.6 },
  { consulta: "Consulta 06", peso: 79.8 },
];

const followUps = [
  { name: "Paciente A.", status: "Em dia", tone: "text-primary bg-primary/10" },
  { name: "Paciente B.", status: "Plano atualizado", tone: "text-amber-700 bg-amber-50" },
  { name: "Paciente C.", status: "Evolução positiva", tone: "text-primary bg-primary/10" },
];

const menuItems = [
  { icon: Home, label: "Início" },
  { icon: Users, label: "Pacientes", active: true },
  { section: "GESTÃO" },
  { icon: CalendarDays, label: "Agenda" },
  { icon: LineChart, label: "Controle financeiro" },
  { icon: Trophy, label: "Comunidade" },
  { icon: Utensils, label: "Cadastros", suffix: ChevronDown },
  { icon: UserPlus, label: "Embaixadores", badge: "Novo" },
];

const ProductPreviewSection = () => {
  return (
    <section id="product" className="py-16 md:py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
            <Activity className="h-4 w-4" />
            Acompanhamento em tempo real
          </div>
          <h2 className="mb-4 text-3xl font-extrabold md:text-4xl">
            Veja a evolução do paciente <span className="text-gradient">com clareza</span>
          </h2>
          <p className="mx-auto max-w-xl text-muted-foreground">
            O NuDiet organiza dados clínicos, histórico de consultas e curvas de acompanhamento para
            mostrar progresso de forma simples durante o atendimento.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-6xl overflow-hidden rounded-2xl border border-border bg-card shadow-2xl shadow-primary/10"
        >
          <div className="flex items-center justify-between border-b border-border bg-muted/35 px-4 py-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
              <span className="h-2.5 w-2.5 rounded-full bg-primary/70" />
            </div>
            <div className="hidden h-8 w-full max-w-xs items-center gap-2 rounded-full border border-border bg-background px-3 text-xs text-muted-foreground md:flex">
              <Search className="h-3.5 w-3.5" />
              Pesquisar pacientes, consultas, relatórios...
            </div>
            <div className="text-sm font-bold text-gradient">NuDiet</div>
          </div>

          <div className="grid lg:grid-cols-[205px_1fr]">
            <aside className="hidden bg-[#082536] text-white lg:block">
              <div className="flex items-center gap-2 border-b border-white/10 px-5 py-5 text-lg font-extrabold">
                <Leaf className="h-5 w-5 text-primary" />
                Nu<span className="-ml-1 text-primary">Diet</span>
              </div>
              <nav className="space-y-1 px-3 py-4 text-sm">
                {menuItems.map((item, index) => {
                  if ("section" in item) {
                    return (
                      <div key={item.section} className="px-3 pb-1 pt-3 text-xs font-bold text-white/45">
                        {item.section}
                      </div>
                    );
                  }

                  const Suffix = item.suffix;
                  return (
                    <div
                      key={`${item.label}-${index}`}
                      className={`flex items-center gap-3 rounded-xl px-3 py-2.5 ${
                        item.active ? "bg-white/12 font-semibold text-primary" : "text-white/72"
                      }`}
                    >
                      <item.icon className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">{item.label}</span>
                      {item.badge && (
                        <span className="rounded-full bg-primary px-2 py-0.5 text-[10px] font-bold text-primary-foreground">
                          {item.badge}
                        </span>
                      )}
                      {Suffix && <Suffix className="h-3.5 w-3.5 text-white/55" />}
                    </div>
                  );
                })}
              </nav>
            </aside>

            <div className="space-y-4 p-4 md:p-5 lg:p-6">
              <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-1 flex items-center gap-2 text-xs text-muted-foreground">
                    <Users className="h-3.5 w-3.5" />
                    Pacientes / Paciente demonstrativo
                  </div>
                  <h3 className="text-xl font-extrabold md:text-2xl">Evolução do paciente</h3>
                  <p className="text-xs text-muted-foreground md:text-sm">
                    Curva demonstrativa com peso, cintura e aderência por consulta.
                  </p>
                </div>
                <button className="inline-flex h-9 items-center justify-center gap-2 rounded-full border border-primary/25 px-4 text-xs font-semibold text-primary">
                  <FileText className="h-3.5 w-3.5" />
                  Gerar relatório
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                <MetricCard label="Peso inicial" value="92,4 kg" detail="Consulta 01" />
                <MetricCard label="Peso atual" value="79,8 kg" detail="Consulta 06" />
                <MetricCard label="Variação total" value="-12,6 kg" detail="Evolução positiva" highlight />
                <MetricCard label="Adesão média" value="87%" detail="Alta" />
              </div>

              <div className="grid gap-4 xl:grid-cols-[1fr_260px]">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="font-bold">Curva de acompanhamento</h4>
                      <p className="text-xs text-muted-foreground md:text-sm">
                        Peso em queda gradual, com evolução registrada a cada consulta.
                      </p>
                    </div>
                    <div className="flex gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">Peso</span>
                      <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">Cintura</span>
                    </div>
                  </div>
                  <div className="h-56 w-full md:h-60">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={evolutionData} margin={{ left: -18, right: 8, top: 6, bottom: 0 }}>
                        <defs>
                          <linearGradient id="pesoGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.28} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.03} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="consulta" tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                        <YAxis domain={[76, 94]} tick={{ fontSize: 11 }} tickLine={false} axisLine={false} />
                        <Tooltip
                          formatter={(value: number) => [`${value.toFixed(1).replace(".", ",")} kg`, "Peso"]}
                          labelStyle={{ color: "hsl(var(--foreground))" }}
                          contentStyle={{
                            borderRadius: 14,
                            border: "1px solid hsl(var(--border))",
                            boxShadow: "0 16px 40px hsl(var(--primary) / 0.12)",
                          }}
                        />
                        <Area
                          type="monotone"
                          dataKey="peso"
                          stroke="hsl(var(--primary))"
                          strokeWidth={4}
                          fill="url(#pesoGradient)"
                          dot={{ r: 4, strokeWidth: 3, fill: "hsl(var(--background))" }}
                          activeDot={{ r: 6 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-4">
                    <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <TrendingDown className="h-4 w-4" />
                    </div>
                    <h4 className="font-bold">Resumo da evolução</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      O paciente reduziu 12,6 kg e manteve boa aderência ao plano nos últimos
                      acompanhamentos.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-4">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      Próximas ações
                    </div>
                    <div className="space-y-3">
                      {followUps.map((patient) => (
                        <div key={patient.name} className="flex items-center justify-between gap-3">
                          <span className="text-sm font-medium">{patient.name}</span>
                          <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${patient.tone}`}>
                            {patient.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const MetricCard = ({
  label,
  value,
  detail,
  highlight = false,
}: {
  label: string;
  value: string;
  detail: string;
  highlight?: boolean;
}) => (
  <div className={`rounded-2xl border p-4 ${highlight ? "border-primary/25 bg-primary/5" : "border-border bg-background"}`}>
    <div className="text-xs font-medium text-muted-foreground">{label}</div>
    <div className={`mt-1.5 text-2xl font-extrabold ${highlight ? "text-primary" : "text-foreground"}`}>{value}</div>
    <div className="mt-1 text-xs text-muted-foreground">{detail}</div>
  </div>
);

export default ProductPreviewSection;
