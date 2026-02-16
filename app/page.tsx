import Hero from "@/components/sections/Hero"
import TrustBar from "@/components/sections/TrustBar"
import ProductShowcase from "@/components/sections/ProductShowcase"
import CapabilityGrid from "@/components/sections/CapabilityGrid"
import StatsPanel from "@/components/sections/StatsPanel"
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ"
import CTA from "@/components/sections/CTA"

export const metadata = {
  title: "BMPL - Bhawani Moulders Pvt. Ltd. | Raipur",
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
      <FAQ />
      <Testimonials />
      <CTA />
    </main>
  )
}
