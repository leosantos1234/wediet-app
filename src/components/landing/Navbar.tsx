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
      <div className="container flex items-center justify-between h-16">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-2xl font-extrabold text-white"
        >
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-300/10 text-emerald-300">
            <Leaf className="h-4 w-4" />
          </span>
          Nu<span className="text-emerald-300">Diet</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-slate-300 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button asChild variant="ghost" size="sm" className="text-slate-200 hover:bg-white/10 hover:text-white">
            <a href="https://app.nudiet.com.br/login">Entrar</a>
          </Button>
          <Button asChild size="sm" className="rounded-full bg-emerald-400 font-bold text-emerald-950 hover:bg-emerald-300">
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
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="py-2 text-sm text-slate-300"
                >
                  {link.label}
                </a>
              ))}
              <Button asChild variant="ghost" size="sm" className="w-full text-slate-200 hover:bg-white/10 hover:text-white">
                <a href="https://app.nudiet.com.br/login">Entrar</a>
              </Button>
              <Button asChild size="sm" className="w-full mt-2 rounded-full bg-emerald-400 font-bold text-emerald-950 hover:bg-emerald-300">
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



