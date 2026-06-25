import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="inline-flex items-center gap-2 text-2xl font-extrabold text-gradient">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-primary/10 text-primary">
            <Leaf className="h-4 w-4" />
          </span>
          NuDiet
        </div>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} NuDiet. Todos os direitos reservados.
        </p>
        <div className="flex gap-6">
          <a href="/politica-de-privacidade.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Política de Privacidade</a>
          <a href="/exclusao-de-conta.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Exclusão de Conta</a>
          <a href="/termos-de-uso.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Termos de Uso</a>
          <a href="mailto:leosantos.rib@gmail.com" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contato</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;



