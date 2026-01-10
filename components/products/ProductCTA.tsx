"use client"

import Link from "next/link"
import { ArrowRight, MessageCircle } from "lucide-react"
import {Button} from  "@/components/ui/button"
import { openWhatsAppChat } from "@/lib/whatsapp"

interface ProductCTAProps {
  productName: string
  quantity?: string
}

export default function ProductCTA({ productName, quantity }: ProductCTAProps) {
  const handleWhatsApp = () => {
    const msg = `Hello BMPL, I'm interested in ${productName}${quantity ? ` - ${quantity}` : ""}. Could you provide more details?`
    openWhatsAppChat(msg)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <Button size="lg" asChild className="flex-1 flex items-center justify-center gap-2">
        <Link href="/quote">
          Request Quote
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Button>
      <Button
        size="lg"
        variant="secondary"
        className="flex-1 flex items-center justify-center gap-2"
        onClick={handleWhatsApp}
      >
        <MessageCircle className="w-4 h-4" />
        Chat on WhatsApp
      </Button>
    </div>
  )
}
