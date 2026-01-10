"use client"

import { motion } from "framer-motion"
import { Zap, BarChart3, Settings, Gauge } from "lucide-react"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"
import {Button} from  "@/components/ui/button"
import Link from "next/link"

export default function InfrastructurePage() {
  const facilities = [
    {
      icon: Zap,
      title: "Advanced Furnaces",
      description: "State-of-the-art induction furnaces for precise temperature control and consistent quality",
    },
    {
      icon: Settings,
      title: "Rolling Mills",
      description: "Modern rolling equipment capable of producing billets, angles, and channels in various sizes",
    },
    {
      icon: Gauge,
      title: "Testing Lab",
      description: "Fully equipped quality testing facility with tensile, hardness, and chemical composition testing",
    },
    {
      icon: BarChart3,
      title: "Process Control",
      description: "Automated monitoring systems ensuring consistent product specifications",
    },
  ]

  const capacity = [
    { category: "Production Capacity", value: "10,000+ MT/Year", detail: "Annual output" },
    { category: "Storage Facility", value: "2,000 MT", detail: "Warehouse capacity" },
    { category: "Quality Tests", value: "100%", detail: "Batch testing coverage" },
    { category: "Dispatch Fleet", value: "24/7", detail: "Logistics ready" },
  ]

  const process = [
    {
      step: "1",
      title: "Raw Material Selection",
      desc: "Premium iron scrap & additives sourced from certified suppliers",
    },
    { step: "2", title: "Melting", desc: "Controlled melting in induction furnaces at precise temperatures" },
    { step: "3", title: "Casting", desc: "Pouring molten steel into molds for initial shape formation" },
    { step: "4", title: "Cooling", desc: "Controlled cooling to prevent defects and ensure structural integrity" },
    { step: "5", title: "Rolling", desc: "Hot rolling to achieve desired dimensions and properties" },
    { step: "6", title: "Quality Testing", desc: "Comprehensive testing before packaging and dispatch" },
  ]

  return (
    <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Infrastructure</span>
              </h1>
              <p className="text-xl text-slate-300 text-balance">
                World-class manufacturing facilities with cutting-edge technology and rigorous quality control
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Facilities */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Manufacturing Facilities</h2>
              <p className="text-lg text-slate-400">State-of-the-art equipment and infrastructure</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {facilities.map((facility, idx) => {
                const Icon = facility.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="h-full hover:border-blue-500/50 smooth-transition">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{facility.title}</h3>
                      <p className="text-sm text-slate-400">{facility.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Capacity */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Production Capacity</h2>
              <p className="text-lg text-slate-400">Robust infrastructure for large-scale manufacturing</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {capacity.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card variant="elevated" className="text-center h-full">
                    <div className="text-sm text-slate-400 mb-2">{item.category}</div>
                    <div className="text-3xl font-bold gradient-text mb-1">{item.value}</div>
                    <div className="text-xs text-slate-500">{item.detail}</div>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Manufacturing Process */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Manufacturing Process</h2>
              <p className="text-lg text-slate-400">Detailed overview of our production methodology</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {process.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card className="h-full relative pl-16 hover:border-blue-500/50 smooth-transition">
                    <div className="absolute -left-3 top-6 w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                    <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-400">{item.desc}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Quality Standards */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-y border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-4xl font-bold mb-6">Quality Standards & Certifications</h2>
              <p className="text-lg text-slate-300 mb-8 text-balance">
                BMPL maintains strict adherence to international quality standards and certifications
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {["ISO 9001:2015", "IS 1875:2005", "IS 2062:2011", "IS 1365:2018"].map((cert, idx) => (
                  <Card key={idx} className="py-4">
                    <div className="text-sm font-semibold text-blue-400">{cert}</div>
                  </Card>
                ))}
              </div>
            </motion.div>
          </Container>
        </section>
      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-t border-white/10">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold mb-4">Need a Quote for Your Requirement?</h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              Share your quantity, sizes, and delivery location. Our team will respond quickly with pricing and dispatch timelines.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  )
}
