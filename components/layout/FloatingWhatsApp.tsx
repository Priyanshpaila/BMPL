"use client";

import { MessageCircle } from "lucide-react";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function FloatingWhatsApp() {
  const handleClick = () => {
    openWhatsAppChat(
      "Hello BMPL, I would like to inquire about your products."
    );
  };

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp chat"
      className={[
        "fixed bottom-6 right-6 z-40 group",
        "inline-flex items-center gap-2",
        "rounded-full px-4 py-3",
        "text-white",
        "bg-emerald-500/90 hover:bg-emerald-500",
        "shadow-lg shadow-emerald-500/20 hover:shadow-xl hover:shadow-emerald-500/25",
        "ring-1 ring-white/10 hover:ring-white/15",
        "backdrop-blur",
        "transition-all duration-200",
        "active:scale-[0.98]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950",
      ].join(" ")}
    >
      {/* subtle glow */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 rounded-full blur-xl bg-emerald-500/25 opacity-0 group-hover:opacity-100 transition-opacity"
      />

      {/* tiny status dot */}
      <span
        aria-hidden="true"
        className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-emerald-300 ring-2 ring-slate-950"
      />

      <span className="grid place-items-center h-10 w-10 rounded-full bg-white/10 ring-1 ring-white/10">
        <MessageCircle className="h-5 w-5" />
      </span>

      <span className="hidden sm:inline text-sm font-semibold tracking-wide">
        WhatsApp
      </span>
    </button>
  );
}
