import { ArrowRight, BadgePercent, CheckCircle2, Share2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const ambassadorHighlights = [
  {
    icon: Users,
    title: "Indique colegas",
    description: "Compartilhe seu convite com nutricionistas que tambem podem se beneficiar do NuDiet.",
  },
  {
    icon: CheckCircle2,
    title: "Indicacoes ativas contam",
    description: "O beneficio considera profissionais indicados que estejam ativos e adimplentes.",
  },
  {
    icon: BadgePercent,
    title: "Ganhe desconto",
    description: "Com 5 indicacoes validas, sua proxima mensalidade pode receber 100% de desconto.",
  },
];

export default function AmbassadorsSection() {
  return (
    <section id="ambassadors" className="relative overflow-hidden bg-white py-20 md:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary">
              <Share2 className="h-4 w-4" />
              Programa Embaixadores
            </div>
            <h2 className="max-w-xl text-3xl font-extrabold leading-tight md:text-4xl">
              Indique colegas e ganhe desconto na sua mensalidade
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Profissionais ativos podem indicar outros nutricionistas para o NuDiet. Quando suas
              indicacoes tambem estiverem ativas, voce acumula beneficios para a proxima cobranca.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-6 font-semibold">
                <Link to="/cadastro?plan=premium&period=annual">
                  Assinar e indicar <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="h-12 rounded-full px-6 font-semibold">
                <a href="#faq">Ver regras principais</a>
              </Button>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
            {ambassadorHighlights.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-border/70 bg-card p-5 shadow-sm"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <item.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </article>
            ))}
          </div>
        </div>

        <p className="mx-auto mt-8 max-w-6xl rounded-2xl border border-primary/15 bg-primary/5 px-5 py-4 text-sm leading-relaxed text-primary/90">
          Beneficio disponivel para assinantes ativos dos planos pagos. Nao ha comissao em dinheiro:
          o programa gera desconto na assinatura conforme as regras vigentes.
        </p>
      </div>
    </section>
  );
}
