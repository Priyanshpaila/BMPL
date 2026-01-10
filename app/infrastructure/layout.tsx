import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Infrastructure - BMPL | Manufacturing Capabilities",
  description:
    "Explore BMPL's state-of-the-art manufacturing facilities, equipment, and production capabilities in Raipur.",
}

export default function InfrastructureLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
