"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  Users,
  Target,
  Award,
  Leaf,
  ShieldCheck,
  MapPin,
  Factory,
  ArrowRight,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description:
        "Uncompromising commitment to manufacturing excellence and product standards.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description:
        "Your success is our priority. We deliver solutions tailored to your needs.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Consistent supply, on-time delivery, and dependable partnerships.",
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Sustainable practices and ethical manufacturing standards.",
    },
  ];

const milestones = [
  { year: "2008", tag: "Foundation", event: "BMPL founded in Raipur", icon: Factory },
  { year: "2012", tag: "Scale", event: "Expanded manufacturing capacity", icon: Target },
  { year: "2016", tag: "Trust", event: "ISO certification achieved", icon: ShieldCheck },
  { year: "2020", tag: "Modernize", event: "Upgraded equipment & processes", icon: Award },
];

  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* background language (same as other pages) */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-widest text-slate-200">
                <ShieldCheck className="h-4 w-4 text-blue-300" />
                SINCE 2008
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-widest text-slate-200">
                <MapPin className="h-4 w-4 text-blue-300" />
                RAIPUR, INDIA
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-xs font-semibold tracking-widest text-slate-200">
                <Factory className="h-4 w-4 text-blue-300" />
                STEEL MANUFACTURING
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-5">
              About <span className="gradient-text">BMPL</span>
            </h1>

            <p className="text-xl text-slate-300 text-balance">
              A legacy of excellence in steel manufacturing—serving industries across
              India with consistent quality and dependable supply.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
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

      {/* Mission & Vision */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="h-full"
            >
              <Card
                variant="glass"
                className="group relative h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-300">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  To be the most trusted supplier of premium quality steel products in India—manufacturing
                  MS Billets, Angles, and Channels with unwavering commitment to quality, reliability, and
                  customer satisfaction.
                </p>

                <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                  We serve as a strategic partner for manufacturing, construction, and infrastructure
                  sectors—delivering consistent supply at competitive pricing.
                </p>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="mt-3 text-xs text-slate-500">
                    Consistency, accountability, and long-term partnerships.
                  </div>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05 }}
              className="h-full"
            >
              <Card
                variant="glass"
                className="group relative h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
              >
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-300">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  To establish BMPL as a beacon of excellence in the steel manufacturing industry—known
                  for quality, innovation, and sustainability.
                </p>

                <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                  We aim to be the preferred choice for customers seeking reliable, high-quality products
                  backed by exceptional service and technical expertise.
                </p>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <div className="mt-3 text-xs text-slate-500">
                    Built to scale with customers across India.
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-400">
              Principles that guide every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={fadeUp} className="h-full">
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
          {value.title}
        </h3>
      </div>
    </div>

    {/* Optional tag (commented like you want) */}
    {/*
    <span className="shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-300">
      BMPL
    </span>
    */}
  </div>

  {/* Body (fills remaining height) */}
  <div className="mt-3 flex-1">
    <p className="text-sm text-slate-400 leading-relaxed line-clamp-5">
      {value.description}
    </p>
  </div>

  {/* Footer (always at bottom) */}
  <div className="mt-auto pt-6">
    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    <div className="mt-3 flex justify-center text-xs text-slate-500">
      Practical, customer-first execution.
    </div>
  </div>
</Card>


                </motion.div>
              );
            })}
          </motion.div>
        </Container>
      </section>

{/* Timeline */}
<section className="relative py-20 md:py-32 overflow-hidden">
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
  <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />
  <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

  <Container className="relative">
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="mb-14 text-center"
    >
      <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
      <p className="text-lg text-slate-400">
        A few defining moments that shaped how we work today.
      </p>
    </motion.div>

    <div className="mx-auto max-w-5xl">
      <Card
        variant="glass"
        className="relative border-white/10 bg-white/[0.03] overflow-hidden"
      >
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

        <div className="relative px-5 py-8 sm:px-8 sm:py-10">
          {/* Center spine */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent md:left-1/2" />
          <div className="pointer-events-none absolute left-6 top-6 bottom-6 w-px blur-[1px] bg-gradient-to-b from-transparent via-blue-400/20 to-transparent md:left-1/2" />

          <div className="space-y-8 md:space-y-10">
            {milestones.map((m, idx) => {
              const Icon = m.icon;
              const right = idx % 2 === 1;

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="relative"
                >
                  {/* Dot on spine */}
                  {/* <div className="absolute left-[18px] top-6 h-4 w-4 rounded-full bg-blue-500/40 ring-2 ring-blue-400/30 md:left-1/2 md:-translate-x-1/2" /> */}

                  {/* Row */}
                  <div className="md:grid md:grid-cols-2 md:gap-10">
                    {/* LEFT column (empty when item is on right) */}
                    <div className={right ? "hidden md:block" : ""} />

                    {/* Content card */}
                    <div className={right ? "" : "md:col-start-1"}>
                      <div
                        className={[
                          "relative ml-10 md:ml-0",
                          right ? "md:col-start-2" : "md:col-start-1",
                        ].join(" ")}
                      >
                        {/* Connector line to spine */}
                        <div
                          className={[
                            "pointer-events-none absolute top-7 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent",
                            "left-0 -translate-x-10 w-10 md:w-12",
                            right ? "md:left-0 md:-translate-x-12" : "md:right-0 md:left-auto md:translate-x-12",
                          ].join(" ")}
                        />

                        <Card
                          variant="glass"
                          className="group border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div className="min-w-0">
                              <div className="flex flex-wrap items-center gap-2">
                                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-sm font-semibold text-blue-300">
                                  {m.year}
                                </span>

                                {m.tag && (
                                  <span className="inline-flex rounded-full border border-white/10 bg-white/[0.02] px-3 py-1 text-[11px] font-semibold tracking-widest text-slate-300">
                                    {m.tag}
                                  </span>
                                )}
                              </div>

                              <div className="mt-3 text-slate-200 text-base leading-relaxed">
                                {m.event}
                              </div>
                            </div>

                            {Icon ? (
                              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                                <Icon className="h-5 w-5 text-blue-300" />
                              </div>
                            ) : null}
                          </div>

                          <div className="mt-6">
                            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                            <div className="mt-3 text-xs text-center text-slate-500">
                              A milestone that strengthened our standards.
                            </div>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Card>
    </div>
  </Container>
</section>


      {/* CTA */}
      <section className="relative py-20 md:py-32 overflow-hidden border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              Connect with our team to discuss partnerships, supply requirements, and business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Details</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-slate-500">
              Response within 24 hours. No commitment required.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
