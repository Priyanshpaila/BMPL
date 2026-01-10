import { CheckCircle2 } from "lucide-react"
import Container from "@/components/layout/Container"

export default function TrustBar() {
  const trustItems = [
    "Quick Response Time",
    "Bulk Supply Capability",
    "Custom Sizes Available",
    "ISO Certified",
    "24/7 Support",
    "Competitive Pricing",
  ]

  return (
    <section className="py-8 border-y border-white/10 bg-gradient-to-r from-blue-600/5 to-cyan-600/5">
      <Container>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {trustItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm text-slate-300">
              <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span className="text-balance">{item}</span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
