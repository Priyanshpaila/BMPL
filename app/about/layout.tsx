import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About BMPL - Bhawani Moulders Pvt. Ltd.",
  description:
    "Learn about Bhawani Moulders Pvt. Ltd., our mission, values, and commitment to excellence in steel manufacturing.",
}

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
