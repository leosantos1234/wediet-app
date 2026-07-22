import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-[#061827] px-4 py-10 text-white sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-[1500px] flex-col items-center justify-between gap-5 md:flex-row 2xl:max-w-[1680px]">
        <div className="inline-flex items-center gap-2 text-2xl font-extrabold text-white">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
            <Leaf className="h-4 w-4" />
          </span>
          <span>
            Nu<span className="text-emerald-300">Diet</span>
          </span>
        </div>
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} NuDiet. Todos os direitos reservados.
        </p>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-3">
          <a href="/politica-de-privacidade.html" className="text-sm text-slate-400 transition-colors hover:text-emerald-300">Política de Privacidade</a>
          <a href="/exclusao-de-conta.html" className="text-sm text-slate-400 transition-colors hover:text-emerald-300">Exclusão de Conta</a>
          <a href="/termos-de-uso.html" className="text-sm text-slate-400 transition-colors hover:text-emerald-300">Termos de Uso</a>
          <a href="mailto:contato@nudiet.com.br" className="text-sm text-slate-400 transition-colors hover:text-emerald-300">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



