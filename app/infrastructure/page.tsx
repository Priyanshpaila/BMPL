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
      description:
        "State-of-the-art induction furnaces for precise temperature control and consistent quality",
    },
    {
      icon: Settings,
      title: "Rolling Mills",
      description:
        "Modern rolling equipment capable of producing billets, angles, and channels in various sizes",
    },
    {
      icon: Gauge,
      title: "Testing Lab",
      description:
        "Fully equipped quality testing facility with tensile, hardness, and chemical composition testing",
    },
    {
      icon: BarChart3,
      title: "Process Control",
      description:
        "Automated monitoring systems ensuring consistent product specifications",
    },
  ];

  const capacity = [
    {
      category: "Production Capacity",
      value: "10,000+ MT/Year",
      detail: "Annual output",
    },
    {
      category: "Storage Facility",
      value: "2,000 MT",
      detail: "Warehouse capacity",
    },
    {
      category: "Quality Tests",
      value: "100%",
      detail: "Batch testing coverage",
    },
    { category: "Dispatch Fleet", value: "24/7", detail: "Logistics ready" },
  ];

  const process = [
    {
      step: "1",
      title: "Raw Material Selection",
      desc: "Premium iron scrap & additives sourced from certified suppliers",
    },
    {
      step: "2",
      title: "Melting",
      desc: "Controlled melting in induction furnaces at precise temperatures",
    },
    {
      step: "3",
      title: "Casting",
      desc: "Pouring molten steel into molds for initial shape formation",
    },
    {
      step: "4",
      title: "Cooling",
      desc: "Controlled cooling to prevent defects and ensure structural integrity",
    },
    {
      step: "5",
      title: "Rolling",
      desc: "Hot rolling to achieve desired dimensions and properties",
    },
    {
      step: "6",
      title: "Quality Testing",
      desc: "Comprehensive testing before packaging and dispatch",
    },
  ];

  const sectionFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const gridWrap = "relative py-20 md:py-32 overflow-hidden";
  const bgShared = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -top-24 right-[-80px] h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-[-80px] h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
    </>
  );
  const splitValue = (value: string) => {
    const parts = value.trim().split(/\s+/);
    const main = parts[0] ?? value;
    const sub = parts.slice(1).join(" ");
    return { main, sub };
  };

  return (
    <main>
      {/* Hero */}
      <section className={gridWrap}>
        {bgShared}
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
              World-class manufacturing facilities with cutting-edge technology
              and rigorous quality control.
            </p>

            {/* subtle divider to avoid “floating” hero */}
            <div className="mx-auto mt-10 h-px max-w-xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
          </motion.div>
        </Container>
      </section>

      {/* Facilities */}
      <section className={gridWrap}>
        {bgShared}
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Manufacturing Facilities
            </h2>
            <p className="text-lg text-slate-400">
              State-of-the-art equipment built for precision, scale, and
              consistency.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
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
  className="group h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
>
  {/* Header */}
  <div className="flex items-start justify-between gap-3">
    <div className="flex items-start gap-4 min-w-0">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
        <Icon className="h-5 w-5 text-blue-300" />
      </div>

      <div className="min-w-0">
        <h3 className="text-lg font-semibold text-white leading-snug">
          {facility.title}
        </h3>
      </div>
    </div>

    {/* <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-300">
      BMPL
    </span> */}
  </div>

  {/* Body (fills remaining height) */}
  <div className="mt-3 flex-1">
    <p className="text-sm text-slate-400 leading-relaxed">
      {facility.description}
    </p>
  </div>

  {/* Footer (always at bottom) */}
  <div className="mt-auto pt-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="mt-3 flex justify-center text-xs text-slate-500">
      Operationally proven capability
    </div>
  </div>
</Card>

                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Capacity */}
      <section className={gridWrap}>
        {bgShared}
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Production Capacity</h2>
            <p className="text-lg text-slate-400">
              Robust infrastructure designed to support bulk orders and timely
              dispatch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {capacity.map((item, idx) => {
              const { main, sub } = splitValue(item.value);

              return (
                <motion.div
                  key={item.category}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="h-full"
                >
                  <Card
                    variant="glass"
                    className="group h-full min-h-[230px] gap-0 text-center border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    <div className="flex h-full flex-col items-center">
                      <div className="w-full">
                        <div className="text-sm text-slate-400">
                          {item.category}
                        </div>

                        {/* consistent 2-line value block (prevents uneven wrap) */}
                        <div className="mt-6">
                          <div className="text-4xl font-bold gradient-text tracking-tight leading-none">
                            {main}
                          </div>
                          <div className="mt-2 min-h-[18px] text-sm text-slate-400">
                            {sub || "\u00A0"}
                          </div>
                        </div>

                        <div className="mt-4 text-xs text-slate-500">
                          {item.detail}
                        </div>
                      </div>

                      {/* pinned footer line (always aligned) */}
                      <div className="mt-auto w-full pt-6">
                        <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                        <div className="mt-3 text-xs text-slate-500">
                          Scale-ready operations
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Manufacturing Process */}
      <section className={gridWrap}>
        {bgShared}
        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Manufacturing Process</h2>
            <p className="text-lg text-slate-400">
              A structured workflow that ensures repeatable quality at every
              stage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {process.map((item, idx) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
                className="h-full"
              >
                <Card
                  variant="glass"
                  className="group relative h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 smooth-transition"
                >
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10 text-blue-200 font-semibold">
                      {item.step}
                    </div>

                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>

                      <div className="mt-5 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="mt-3 text-xs text-slate-500">
                        Controlled execution
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quality Standards */}
      <section className={gridWrap}>
        {bgShared}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-6">
              Quality Standards & Certifications
            </h2>
            <p className="text-lg text-slate-300 mb-10 text-balance">
              BMPL maintains strict adherence to industry standards and
              batch-level testing to ensure consistent outcomes.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "ISO 9001:2015",
                "IS 1875:2005",
                "IS 2062:2011",
                "IS 1365:2018",
              ].map((cert) => (
                <Card
                  key={cert}
                  variant="glass"
                  className="border-white/10 bg-white/[0.03] text-center py-4 hover:border-blue-400/30 smooth-transition"
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
      <section className={gridWrap}>
        {bgShared}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Need a Quote for Your Requirement?
            </h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              Share your quantity, sizes, and delivery location. Our team will
              respond quickly with pricing and dispatch timelines.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button
                size="lg"
                className="h-12 rounded-2xl bg-white text-slate-900 hover:bg-white/90 border border-white/10 px-8"
                asChild
              >
                <Link href="/quote">Request Quote</Link>
              </Button>

              <Button
                size="lg"
                className="h-12 rounded-2xl border border-white/10 bg-white/5 text-white hover:bg-white/10 px-8"
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
