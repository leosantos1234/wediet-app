import { FormEvent, useState } from "react";
import { MessageSquare, Send, X } from "lucide-react";

const SUPPORT_EMAIL = "suporte@nudiet.com.br";

const SupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    const subject = "Mensagem recebida pelo canal NuDiet";
    const body =
      "Olá, equipe NuDiet!\n\n" +
      "Estou entrando em contato pelo canal de mensagem do site.\n\n" +
      `Mensagem:\n${trimmed}\n`;

    window.location.href = `mailto:${SUPPORT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setMessage("");
  };

  return (
    <div className="fixed right-5 bottom-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[340px] rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
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
            <p className="font-medium">Canal exclusivo NuDiet:</p>
            <ul className="list-disc ml-5 space-y-1 text-muted-foreground">
              <li>Captação inteligente de leads.</li>
              <li>Triagem e qualificação com IA.</li>
              <li>Organização da rotina clínica.</li>
              <li>Acompanhamento do paciente e evolução.</li>
            </ul>
            <form onSubmit={handleSubmit} className="space-y-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem para o time NuDiet..."
                className="w-full min-h-24 rounded-xl border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground font-medium"
              >
                <Send className="h-4 w-4" />
                Enviar mensagem
              </button>
            </form>
          </div>
        </div>
      )}

      <button
        aria-label="Abrir mensagem NuDiet"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
      >
        {open ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </button>
    </div>
  );
};

export default SupportWidget;
