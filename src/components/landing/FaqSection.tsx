import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "É difícil de usar?",
    a: "De forma alguma. O NuDiet foi feito para nutricionistas, não para engenheiros. A maioria dos usuários configura tudo em menos de 10 minutos com nosso onboarding guiado.",
  },
  {
    q: "Substitui o nutricionista?",
    a: "Absolutamente não. O NuDiet cuida das tarefas repetitivas — captação de leads, follow-ups, agendamento — para que você foque no que importa: seus pacientes.",
  },
  {
    q: "Como a IA funciona?",
    a: "Nossa IA é treinada especificamente para fluxos de nutrição. Ela qualifica leads, agenda consultas, transcreve atendimentos e sugere planos alimentares. Tudo é revisado e aprovado por você.",
  },
  {
    q: "O que acontece após os 30 dias grátis?",
    a: "Após os 30 dias, você pode escolher o plano ideal para o tamanho do seu consultório. Sem cobranças surpresa. Você pode exportar seus dados a qualquer momento.",
  },
  {
    q: "Meus dados de pacientes estão seguros?",
    a: "Sim. Utilizamos criptografia de ponta a ponta e seguimos as regulamentações de dados de saúde. As informações dos seus pacientes nunca são compartilhadas.",
  },
];

const FaqSection = () => {
  return (
    <section
      id="faq"
      className="bg-[linear-gradient(135deg,#061827_0%,#08283A_54%,#053342_100%)] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8"
    >
      <div className="mx-auto w-full max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-300">
            FAQ
          </div>
          <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
            Perguntas frequentes
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
            Tire as principais dúvidas antes de começar seu teste gratuito.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="rounded-2xl border border-white/10 bg-white/[0.055] px-6 shadow-[0_18px_60px_rgba(0,0,0,0.16)] backdrop-blur"
              >
                <AccordionTrigger className="text-left font-semibold text-white hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="leading-relaxed text-slate-300">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;







