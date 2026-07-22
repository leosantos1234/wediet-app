import { motion } from "framer-motion";
import { Activity, CalendarDays, FileText, Search, TrendingDown, Users } from "lucide-react";
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
  { consulta: "Consulta 01", peso: 92.4, cintura: 105 },
  { consulta: "Consulta 02", peso: 89.8, cintura: 101 },
  { consulta: "Consulta 03", peso: 86.7, cintura: 97 },
  { consulta: "Consulta 04", peso: 83.9, cintura: 94 },
  { consulta: "Consulta 05", peso: 81.6, cintura: 91 },
  { consulta: "Consulta 06", peso: 79.8, cintura: 89 },
];

const patients = [
  { name: "Enzo Azeredo", status: "Em dia", tone: "text-primary bg-primary/10" },
  { name: "Gisele Cruz", status: "Plano atualizado", tone: "text-amber-700 bg-amber-50" },
  { name: "Bruna Santos", status: "Evolução positiva", tone: "text-primary bg-primary/10" },
];

const ProductPreviewSection = () => {
  return (
    <section id="product" className="py-20 md:py-28">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center"
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
          className="overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-primary/10"
        >
          <div className="flex items-center justify-between border-b border-border bg-muted/35 px-5 py-4">
            <div className="flex items-center gap-2">
              <span className="h-3 w-3 rounded-full bg-red-300" />
              <span className="h-3 w-3 rounded-full bg-amber-300" />
              <span className="h-3 w-3 rounded-full bg-primary/70" />
            </div>
            <div className="hidden h-9 w-full max-w-sm items-center gap-2 rounded-full border border-border bg-background px-4 text-sm text-muted-foreground md:flex">
              <Search className="h-4 w-4" />
              Pesquisar pacientes, consultas, relatórios...
            </div>
            <div className="text-sm font-bold text-gradient">NuDiet</div>
          </div>

          <div className="grid lg:grid-cols-[230px_1fr]">
            <aside className="hidden border-r border-border bg-[#082536] p-5 text-white lg:block">
              <div className="mb-8 text-xl font-extrabold">
                Nu<span className="text-primary">Diet</span>
              </div>
              <nav className="space-y-2 text-sm">
                <div className="rounded-xl bg-white/10 px-3 py-2 font-semibold text-primary">Pacientes</div>
                <div className="px-3 py-2 text-white/70">Agenda</div>
                <div className="px-3 py-2 text-white/70">Controle financeiro</div>
                <div className="px-3 py-2 text-white/70">Embaixadores</div>
              </nav>
            </aside>

            <div className="space-y-5 p-4 md:p-6 lg:p-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
                    <Users className="h-4 w-4" />
                    Pacientes / Enzo Azeredo
                  </div>
                  <h3 className="text-2xl font-extrabold">Evolução do paciente</h3>
                  <p className="text-sm text-muted-foreground">
                    Curva demonstrativa com peso, cintura e aderência por consulta.
                  </p>
                </div>
                <button className="inline-flex h-10 items-center justify-center gap-2 rounded-full border border-primary/25 px-4 text-sm font-semibold text-primary">
                  <FileText className="h-4 w-4" />
                  Gerar relatório
                </button>
              </div>

              <div className="grid gap-3 md:grid-cols-4">
                <MetricCard label="Peso inicial" value="92,4 kg" detail="Consulta 01" />
                <MetricCard label="Peso atual" value="79,8 kg" detail="Consulta 06" />
                <MetricCard label="Variação total" value="-12,6 kg" detail="Evolução positiva" highlight />
                <MetricCard label="Adesão média" value="87%" detail="Alta" />
              </div>

              <div className="grid gap-5 xl:grid-cols-[1fr_290px]">
                <div className="rounded-2xl border border-border bg-background p-4">
                  <div className="mb-4 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
                    <div>
                      <h4 className="font-bold">Curva de acompanhamento</h4>
                      <p className="text-sm text-muted-foreground">
                        Peso em queda gradual, com evolução registrada a cada consulta.
                      </p>
                    </div>
                    <div className="flex gap-2 text-xs font-semibold">
                      <span className="rounded-full bg-primary px-3 py-1 text-primary-foreground">Peso</span>
                      <span className="rounded-full border border-border px-3 py-1 text-muted-foreground">Cintura</span>
                    </div>
                  </div>
                  <div className="h-72 w-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={evolutionData} margin={{ left: -18, right: 12, top: 8, bottom: 0 }}>
                        <defs>
                          <linearGradient id="pesoGradient" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.28} />
                            <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0.03} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                        <XAxis dataKey="consulta" tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
                        <YAxis domain={[76, 94]} tick={{ fontSize: 12 }} tickLine={false} axisLine={false} />
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
                          dot={{ r: 5, strokeWidth: 3, fill: "hsl(var(--background))" }}
                          activeDot={{ r: 7 }}
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-2xl border border-primary/15 bg-primary/5 p-5">
                    <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                      <TrendingDown className="h-5 w-5" />
                    </div>
                    <h4 className="font-bold">Resumo da evolução</h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      O paciente reduziu 12,6 kg e manteve boa aderência ao plano nos últimos
                      acompanhamentos.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border bg-background p-5">
                    <div className="mb-4 flex items-center gap-2 text-sm font-semibold">
                      <CalendarDays className="h-4 w-4 text-primary" />
                      Próximas ações
                    </div>
                    <div className="space-y-3">
                      {patients.map((patient) => (
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
    <div className={`mt-2 text-2xl font-extrabold ${highlight ? "text-primary" : "text-foreground"}`}>{value}</div>
    <div className="mt-1 text-xs text-muted-foreground">{detail}</div>
  </div>
);

export default ProductPreviewSection;
