import { FormEvent, useMemo, useState } from "react";
import { MessageCircle, MessageSquare, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "5521984740072";

type ChatMessage = {
  role: "user" | "agent";
  text: string;
};

const SupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "agent",
      text: "Olá! Eu sou a assistente da NuDiet. Me conte sua dúvida sobre como o sistema funciona.",
    },
  ]);

  const whatsappHref = useMemo(() => {
    const msg =
      "Olá! Quero falar com a NuDiet sobre o sistema de captação, triagem e acompanhamento.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  const buildAutoReply = (input: string) => {
    const t = input.toLowerCase();
    if (t.includes("preço") || t.includes("plano")) {
      return "Perfeito! A NuDiet tem planos por etapa de crescimento. Posso te explicar qual plano combina com sua clínica.";
    }
    if (t.includes("funciona") || t.includes("como")) {
      return "A NuDiet organiza a jornada completa: captação de leads, triagem com IA, rotina clínica e acompanhamento de pacientes.";
    }
    if (t.includes("teste") || t.includes("demo")) {
      return "Ótimo! Posso te orientar para começar um teste e mostrar o fluxo principal em poucos minutos.";
    }
    return "Recebi sua mensagem. Nosso time NuDiet vai te responder por aqui com prioridade. Se quiser atendimento imediato, use também o botão do WhatsApp.";
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const trimmed = message.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed }]);
    setMessage("");

    const reply = buildAutoReply(trimmed);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "agent", text: reply }]);
    }, 500);
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
          <div className="p-4 space-y-3">
            <div className="max-h-64 overflow-y-auto space-y-2">
              {messages.map((item, idx) => (
                <div
                  key={`${item.role}-${idx}`}
                  className={`rounded-xl px-3 py-2 text-sm ${
                    item.role === "user"
                      ? "bg-primary/10 text-foreground ml-8"
                      : "bg-muted text-foreground mr-8"
                  }`}
                >
                  {item.text}
                </div>
              ))}
            </div>
            <form onSubmit={handleSubmit} className="space-y-2">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escreva sua mensagem..."
                className="w-full min-h-20 rounded-xl border border-border px-3 py-2 outline-none focus:ring-2 focus:ring-primary/30"
              />
              <button
                type="submit"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-primary-foreground text-sm font-medium"
              >
                <Send className="h-4 w-4" />
                Enviar
              </button>
            </form>
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
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
      >
        {open ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </button>
    </div>
  );
};

export default SupportWidget;
