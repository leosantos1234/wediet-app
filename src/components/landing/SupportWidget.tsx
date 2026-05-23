import { FormEvent, useMemo, useState } from "react";
import { HelpCircle, MessageCircle, MessageSquare, Search, Send, X } from "lucide-react";

const WHATSAPP_NUMBER = "5521984740072";

type ChatMessage = {
  role: "user" | "agent";
  text: string;
  time: string;
};

type Tab = "chat" | "help";

const helpArticles = [
  "Como funciona a captação de leads na NuDiet?",
  "Como a triagem com IA prioriza os pacientes?",
  "Como organizar agenda e retorno no sistema?",
  "Como acompanhar evolução e plano do paciente?",
];

const now = () =>
  new Date().toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" });

const SupportWidget = () => {
  const [open, setOpen] = useState(false);
  const [tab, setTab] = useState<Tab>("chat");
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "agent",
      text: "Olá! Seja bem-vindo(a) ao atendimento NuDiet. Como posso ajudar hoje?",
      time: now(),
    },
  ]);

  const whatsappHref = useMemo(() => {
    const msg = "Olá! Quero falar com a equipe NuDiet.";
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }, []);

  const filteredArticles = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return helpArticles;
    return helpArticles.filter((a) => a.toLowerCase().includes(q));
  }, [query]);

  const autoReply = (input: string) => {
    const t = input.toLowerCase();
    if (t.includes("preço") || t.includes("plano")) {
      return "Temos planos conforme o estágio da clínica. Posso te orientar no melhor cenário para sua operação.";
    }
    if (t.includes("lead") || t.includes("captação")) {
      return "A NuDiet centraliza captação, triagem e acompanhamento para aumentar conversão de pacientes.";
    }
    if (t.includes("demo") || t.includes("teste")) {
      return "Perfeito. Posso te guiar em uma demonstração prática do fluxo completo em poucos minutos.";
    }
    return "Recebi sua mensagem. Nosso time NuDiet responderá por aqui com prioridade.";
  };

  const sendMessage = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) return;

    setMessages((prev) => [...prev, { role: "user", text: trimmed, time: now() }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { role: "agent", text: autoReply(trimmed), time: now() }]);
    }, 500);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    sendMessage(message);
    setMessage("");
  };

  return (
    <div className="fixed right-5 bottom-5 z-[60] flex flex-col items-end gap-3">
      {open && (
        <div className="w-[360px] max-w-[92vw] rounded-2xl border border-border bg-white shadow-2xl overflow-hidden">
          <div className="bg-primary px-4 py-3 text-primary-foreground flex items-center justify-between">
            <div className="font-semibold">{tab === "chat" ? "Chat NuDiet" : "Ajuda NuDiet"}</div>
            <button
              aria-label="Fechar"
              onClick={() => setOpen(false)}
              className="opacity-90 hover:opacity-100"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {tab === "chat" ? (
            <div className="p-3">
              <div className="h-[300px] overflow-y-auto space-y-2 pr-1">
                {messages.map((m, idx) => (
                  <div key={`${m.role}-${idx}`} className={m.role === "user" ? "pl-8" : "pr-8"}>
                    <div
                      className={`rounded-xl px-3 py-2 text-sm ${
                        m.role === "user" ? "bg-primary/10 text-foreground" : "bg-muted text-foreground"
                      }`}
                    >
                      {m.text}
                    </div>
                    <div className="text-[11px] text-muted-foreground mt-1">{m.time}</div>
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="mt-3 flex items-center gap-2">
                <input
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Pergunte-me qualquer coisa..."
                  className="flex-1 rounded-full border border-border px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-primary/30"
                />
                <button
                  type="submit"
                  aria-label="Enviar mensagem"
                  className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center"
                >
                  <Send className="h-4 w-4" />
                </button>
              </form>
            </div>
          ) : (
            <div className="p-3 space-y-3">
              <div className="flex items-center gap-2 rounded-full border border-border px-3 py-2">
                <Search className="h-4 w-4 text-muted-foreground" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Pesquisar artigos"
                  className="w-full text-sm outline-none"
                />
              </div>
              <div className="max-h-[300px] overflow-y-auto rounded-xl border border-border">
                {filteredArticles.map((article) => (
                  <button
                    key={article}
                    onClick={() => {
                      setTab("chat");
                      sendMessage(article);
                    }}
                    className="w-full text-left px-3 py-3 text-sm border-b border-border last:border-b-0 hover:bg-muted/50"
                  >
                    {article}
                  </button>
                ))}
                {!filteredArticles.length && (
                  <div className="px-3 py-4 text-sm text-muted-foreground">Nenhum artigo encontrado.</div>
                )}
              </div>
            </div>
          )}

          <div className="px-3 pb-3">
            <div className="rounded-full bg-muted p-1 flex items-center gap-1">
              <button
                onClick={() => setTab("chat")}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-medium ${
                  tab === "chat" ? "bg-primary text-primary-foreground" : "text-foreground"
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  <MessageSquare className="h-4 w-4" />
                  Chat
                </span>
              </button>
              <button
                onClick={() => setTab("help")}
                className={`flex-1 rounded-full px-3 py-2 text-sm font-medium ${
                  tab === "help" ? "bg-primary text-primary-foreground" : "text-foreground"
                }`}
              >
                <span className="inline-flex items-center gap-1">
                  <HelpCircle className="h-4 w-4" />
                  Ajuda
                </span>
              </button>
            </div>
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
        aria-label="Abrir chat NuDiet"
        onClick={() => setOpen((v) => !v)}
        className="h-14 w-14 rounded-full bg-[#25D366] text-white shadow-xl flex items-center justify-center"
      >
        {open ? <X className="h-7 w-7" /> : <MessageSquare className="h-7 w-7" />}
      </button>
    </div>
  );
};

export default SupportWidget;
