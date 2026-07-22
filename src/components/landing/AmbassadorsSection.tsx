import { ArrowRight, BadgePercent, CheckCircle2, Share2, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ambassadorHighlights = [
  {
    icon: Users,
    title: "Indique colegas",
    description: "Compartilhe seu convite com nutricionistas que também podem se beneficiar do NuDiet.",
  },
  {
    icon: CheckCircle2,
    title: "Indicações ativas contam",
    description: "O benefício considera profissionais indicados que estejam ativos e adimplentes.",
  },
  {
    icon: BadgePercent,
    title: "Ganhe desconto",
    description: "Com 5 indicações válidas, sua próxima mensalidade pode receber 100% de desconto.",
  },
];

const discountTiers = [
  { referrals: 1, discount: "10%" },
  { referrals: 2, discount: "20%" },
  { referrals: 3, discount: "30%" },
  { referrals: 4, discount: "40%" },
  { referrals: 5, discount: "100%" },
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
              indicações também estiverem ativas, você acumula benefícios para a próxima cobrança.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="h-12 rounded-full px-6 font-semibold">
                <Link to="/cadastro?plan=premium&period=monthly">
                  Assinar e indicar <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>

              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" className="h-12 rounded-full px-6 font-semibold">
                    Ver regras principais
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-[560px] rounded-2xl">
                  <DialogHeader>
                    <DialogTitle>Regras do Programa Embaixadores</DialogTitle>
                    <DialogDescription>
                      O desconto é aplicado na próxima mensalidade elegível, conforme o número de
                      indicações válidas.
                    </DialogDescription>
                  </DialogHeader>

                  <div className="grid gap-3 sm:grid-cols-5">
                    {discountTiers.map((tier) => (
                      <div
                        key={tier.referrals}
                        className="rounded-2xl border border-primary/15 bg-primary/5 p-4 text-center"
                      >
                        <p className="text-xs font-medium text-muted-foreground">
                          {tier.referrals} indicação{tier.referrals > 1 ? "ões" : ""}
                        </p>
                        <p className="mt-2 text-2xl font-extrabold text-primary">{tier.discount}</p>
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 rounded-2xl border bg-muted/30 p-4 text-sm leading-relaxed text-muted-foreground">
                    <p>As indicações precisam estar com plano pago ativo e adimplente.</p>
                    <p>Não há comissão em dinheiro; o benefício é desconto na assinatura.</p>
                    <p>Cancelamentos, inadimplência ou contas duplicadas podem invalidar o benefício.</p>
                  </div>

                  <Button asChild className="h-11 rounded-full font-semibold">
                    <Link to="/cadastro?plan=premium&period=monthly">
                      Assinar plano mensal <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </DialogContent>
              </Dialog>
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
          Benefício disponível para assinantes ativos dos planos pagos. Não há comissão em dinheiro:
          o programa gera desconto na assinatura conforme as regras vigentes.
        </p>
      </div>
    </section>
  );
}
