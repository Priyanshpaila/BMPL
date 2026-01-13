"use client";

import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";

interface ProductCTAProps {
  productName: string;
  quantity?: string;
}

export default function ProductCTA({ productName, quantity }: ProductCTAProps) {
  const handleWhatsApp = () => {
    const msg = `Hello BMPL, I'm interested in ${productName}${
      quantity ? ` - ${quantity}` : ""
    }. Could you provide pricing and dispatch timelines?`;
    openWhatsAppChat(msg);
  };

  return (
    <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
      {/* Primary */}
      <Button
        size="lg"
        asChild
        className="h-12 flex-1 rounded-2xl bg-white text-slate-900 hover:bg-white/90 border border-white/10 shadow-sm"
      >
        <Link href="/quote" className="inline-flex items-center justify-center gap-2">
          Request Quote
          <ArrowRight className="h-4 w-4" />
        </Link>
      </Button>

      {/* Secondary (glass) */}
      <Button
        size="lg"
        type="button"
        onClick={handleWhatsApp}
        className="h-12 flex-1 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10"
      >
        <span className="inline-flex items-center justify-center gap-2">
          <MessageCircle className="h-4 w-4" />
          Chat on WhatsApp
        </span>
      </Button>
    </div>
  );
}
