"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Zap, BarChart3, Settings, Gauge, CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  ];

  const capacity = [
    { category: "Production Capacity", value: "10,000+ MT/Year", detail: "Annual output" },
    { category: "Storage Facility", value: "2,000 MT", detail: "Warehouse capacity" },
    { category: "Quality Tests", value: "100%", detail: "Batch testing coverage" },
    { category: "Dispatch Fleet", value: "24/7", detail: "Logistics ready" },
  ];

  const process = [
    { step: "1", title: "Raw Material Selection", desc: "Premium iron scrap & additives sourced from certified suppliers" },
    { step: "2", title: "Melting", desc: "Controlled melting in induction furnaces at precise temperatures" },
    { step: "3", title: "Casting", desc: "Pouring molten steel into molds for initial shape formation" },
    { step: "4", title: "Cooling", desc: "Controlled cooling to prevent defects and ensure structural integrity" },
    { step: "5", title: "Rolling", desc: "Hot rolling to achieve desired dimensions and properties" },
    { step: "6", title: "Quality Testing", desc: "Comprehensive testing before packaging and dispatch" },
  ];

  const sectionFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="gradient-text">Infrastructure</span>
            </h1>
            <p className="text-xl text-slate-300 text-balance">
              World-class manufacturing facilities with cutting-edge technology and rigorous quality control.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Facilities */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Manufacturing Facilities</h2>
            <p className="text-lg text-slate-400">State-of-the-art equipment and infrastructure.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {facilities.map((facility, idx) => {
              const Icon = facility.icon;
              return (
                <motion.div
                  key={facility.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="h-full"
                >
                  <Card
                    variant="glass"
                    className="h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-300" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">{facility.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{facility.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capacity */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Production Capacity</h2>
            <p className="text-lg text-slate-400">Robust infrastructure for large-scale manufacturing.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {capacity.map((item, idx) => (
              <motion.div
                key={item.category}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <Card
                  variant="glass"
                  className="h-full text-center border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                >
                  <div className="text-sm text-slate-400">{item.category}</div>
                  <div className="text-3xl font-bold gradient-text tracking-tight">{item.value}</div>
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
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Manufacturing Process</h2>
            <p className="text-lg text-slate-400">Detailed overview of our production methodology.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <Card
                  variant="glass"
                  className="h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                >
                  <div className="flex items-start gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10 text-blue-200 font-semibold">
                      {item.step}
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className="relative py-20 md:py-32 border-y border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Quality Standards & Certifications</h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              BMPL maintains strict adherence to international quality standards and certifications.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {["ISO 9001:2015", "IS 1875:2005", "IS 2062:2011", "IS 1365:2018"].map((cert) => (
                <Card
                  key={cert}
                  variant="glass"
                  className="border-white/10 bg-white/[0.03] text-center py-4"
                >
                  <div className="inline-flex items-center justify-center gap-2 text-sm font-semibold text-blue-300">
                    <CheckCircle2 className="h-4 w-4" />
                    {cert}
                  </div>
                </Card>
              ))}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Need a Quote for Your Requirement?</h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              Share your quantity, sizes, and delivery location. Our team will respond quickly with pricing and dispatch timelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                asChild
              >
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
