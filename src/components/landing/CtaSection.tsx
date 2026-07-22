import { motion } from "framer-motion";
import { ArrowRight, CalendarDays, Sparkles } from "lucide-react";

const CtaSection = () => {
  return (
    <section className="bg-[linear-gradient(135deg,#061827_0%,#08283A_54%,#053342_100%)] px-4 py-16 text-white sm:px-6 md:py-20 lg:px-8">
      <div className="mx-auto w-full max-w-[1500px] 2xl:max-w-[1680px]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] px-6 py-12 text-center shadow-[0_0_70px_rgba(45,212,163,0.16)] backdrop-blur md:px-12 md:py-16"
        >
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(45,212,163,0.16),transparent_22rem),radial-gradient(circle_at_82%_8%,rgba(14,165,233,0.12),transparent_24rem)]" />

          <div className="relative mx-auto max-w-4xl">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-300">
              <Sparkles className="h-4 w-4" />
              Próximo passo
            </div>
            <h2 className="text-3xl font-extrabold leading-tight tracking-tight text-white md:text-5xl">
              Pronto para transformar sua rotina clínica?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
              Comece grátis, organize seus pacientes e veja como o NuDiet pode deixar sua operação mais
              clara, produtiva e previsível.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="/#pricing"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-green-400 px-8 text-sm font-black text-emerald-950 shadow-[0_0_36px_rgba(52,211,153,0.24)] transition hover:-translate-y-0.5"
              >
                Começar grátis 30 dias
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="mailto:contato@nudiet.com.br?subject=Agendar%20demo%20NuDiet"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-8 text-sm font-bold text-white transition hover:border-emerald-300/50 hover:bg-white/[0.08]"
              >
                <CalendarDays className="h-4 w-4 text-emerald-300" />
                Agendar demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;








