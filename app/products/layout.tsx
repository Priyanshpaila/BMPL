import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Products - BMPL | MS Billets, Angles & Channels",
  description: "Browse our complete range of MS Billets, Angles, and Channels with detailed specifications.",
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
