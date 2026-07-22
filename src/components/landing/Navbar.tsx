import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Plataforma", href: "#product" },
  { label: "Funcionalidades", href: "#features" },
  { label: "Para nutricionistas", href: "#how-it-works" },
  { label: "NuPilot", href: "#features" },
  { label: "Recursos", href: "#features" },
  { label: "Planos", href: "#pricing" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#061827]/85 text-white backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-[1500px] items-center justify-between px-4 sm:px-6 lg:px-8 2xl:max-w-[1680px]">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-[26px] font-extrabold leading-none text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
            <Leaf className="h-4 w-4" />
          </span>
          <span>Nu<span className="text-emerald-300">Diet</span></span>
        </a>

        <div className="hidden md:flex items-center gap-7 lg:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-[15px] font-medium text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button asChild variant="outline" size="sm" className="h-10 rounded-full border-white/20 bg-white/5 px-5 font-bold text-white hover:bg-white/12 hover:text-white">
            <a href="https://app.nudiet.com.br/login">Entrar</a>
          </Button>
          <Button asChild size="sm" className="h-11 rounded-full bg-emerald-400 px-6 text-[15px] font-extrabold text-emerald-950 shadow-[0_0_28px_rgba(52,211,153,0.24)] hover:bg-emerald-300">
            <a href="/#pricing">Experimentar grátis</a>
          </Button>
        </div>

        <button className="md:hidden text-white" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden border-b border-white/10 bg-[#061827]"
          >
            <div className="mx-auto flex w-full max-w-[1500px] flex-col gap-3 px-4 py-4 sm:px-6 lg:px-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-base font-medium text-slate-300"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="outline" size="sm" className="w-full rounded-full border-white/20 bg-white/5 font-bold text-white hover:bg-white/12 hover:text-white">
                <a href="https://app.nudiet.com.br/login">Entrar</a>
              </Button>
              <Button asChild size="sm" className="mt-2 w-full rounded-full bg-emerald-400 font-extrabold text-emerald-950 hover:bg-emerald-300">
                <a href="/#pricing">Experimentar grátis</a>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



