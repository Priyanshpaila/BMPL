import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import ProductShowcase from "@/components/sections/ProductShowcase"
import CapabilityGrid from "@/components/sections/CapabilityGrid"
import StatsPanel from "@/components/sections/StatsPanel"
import ProcessSteps from "@/components/sections/ProcessSteps"
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"

export const metadata = {
  title: "BMPL - MS Billets, Angles & Channels | Raipur",
  description:
    "Premium MS Billets, Angles & Channels manufactured in Urla, Raipur. Fast quotation, bulk supply, custom sizes.",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      <ProductShowcase />
      <CapabilityGrid />
      <StatsPanel />
      <ProcessSteps />
      <FAQ />
      <CTA />
    </main>
  )
}
