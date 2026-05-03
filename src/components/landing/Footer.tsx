import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 text-xl font-extrabold text-gradient">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="h-4 w-4" />
          </span>
          WeDiet
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} WeDiet. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacidade</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos</a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


