import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact BMPL - Get in Touch",
  description: "Contact Bhawani Moulders Pvt. Ltd. in Raipur. Phone, email, WhatsApp, and office location information.",
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
