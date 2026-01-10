import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Request a Quote - BMPL",
  description: "Request a quotation for MS Billets, Angles, and Channels from BMPL. Quick response guaranteed.",
}

export default function QuoteLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
