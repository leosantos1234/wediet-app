import { useMemo, useState } from "react";
import { MessageCircle, X, PhoneCall } from "lucide-react";

const WHATSAPP_NUMBER = "5521984740072";

const SupportWidget = () => {
  const [open, setOpen] = useState(false);

  const whatsappHref = useMemo(() => {
    const msg =
      "Olá! Quero entender como a NuDiet funciona na prática (captação, triagem, consulta e acompanhamento).";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  return (
    <div className="fixed right-5 bottom-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[320px] rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
          <div className="bg-primary px-4 py-3 text-primary-foreground flex items-center justify-between">
            <div className="font-semibold">Mensagem NuDiet</div>
            <button
              aria-label="Fechar mensagem"
              className="opacity-90 hover:opacity-100"
              onClick={() => setOpen(false)}
            >
              <X className="h-4 w-4" />
            </button>
          </div>
          <div className="p-4 text-sm text-foreground space-y-3">
            <p className="font-medium">Olá! Como a NuDiet trabalha:</p>
            <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
              <li>Captação inteligente de leads.</li>
              <li>Triagem e qualificação com IA.</li>
              <li>Organização da rotina clínica.</li>
              <li>Acompanhamento do paciente e evolução.</li>
            </ul>
            <a
              href={whatsappHref}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground font-medium"
            >
              <PhoneCall className="h-4 w-4" />
              Falar no WhatsApp
            </a>
          </div>
        </div>
      )}

      <a
        href={whatsappHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp NuDiet"
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
      >
        <MessageCircle className="h-7 w-7" />
      </a>

      <button
        aria-label="Abrir mensagem NuDiet"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full bg-primary text-primary-foreground shadow-xl flex items-center justify-center"
      >
        {open ? <X className="h-7 w-7" /> : <MessageCircle className="h-7 w-7" />}
      </button>
    </div>
  );
};

export default SupportWidget;
