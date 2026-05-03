import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Ferramentas", href: "#features" },
  { label: "Como funciona", href: "#how-it-works" },
  { label: "Planos", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container flex items-center justify-between h-16">
        <a href="#" className="inline-flex items-center gap-2 text-2xl font-extrabold text-gradient">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="h-4 w-4" />
          </span>
          WeDiet
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <Button variant="ghost" size="sm">Login</Button>
          <Button size="sm" className="rounded-full">Experimentar grátis</Button>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden overflow-hidden bg-background border-b border-border"
          >
            <div className="container py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-sm text-muted-foreground py-2">
                  {link.label}
                </a>
              ))}
              <Button size="sm" className="w-full mt-2 rounded-full">Experimentar grátis</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;



