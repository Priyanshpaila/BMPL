"use client"

import { MessageCircle } from "lucide-react"
import { openWhatsAppChat } from "@/lib/whatsapp"

export default function FloatingWhatsApp() {
  const handleClick = () => {
    openWhatsAppChat("Hello BMPL, I would like to inquire about your products.")
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Open WhatsApp chat"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 rounded-full bg-green-500 hover:bg-green-600 text-white px-4 py-3 shadow-lg hover:shadow-xl smooth-transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 focus-visible:ring-green-500"
    >
      <MessageCircle className="w-6 h-6" />
      <span className="hidden sm:inline text-sm font-semibold">WhatsApp</span>
    </button>
  )
}
