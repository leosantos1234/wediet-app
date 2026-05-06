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
    q: "O que acontece após o período grátis?",
    a: "Após 14 dias, você pode escolher o plano ideal para o tamanho do seu consultório. Sem cobranças surpresa. Você pode exportar seus dados a qualquer momento.",
  },
  {
    q: "Meus dados de pacientes estão seguros?",
    a: "Sim. Utilizamos criptografia de ponta a ponta e seguimos as regulamentações de dados de saúde. As informações dos seus pacientes nunca são compartilhadas.",
  },
];

const FaqSection = () => {
  return (
    <section id="faq" className="py-20 md:py-28 bg-surface-elevated">
      <div className="container max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Perguntas <span className="text-gradient">frequentes</span>
          </h2>
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
                className="bg-card border border-border/50 rounded-xl px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
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







