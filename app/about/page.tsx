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
      description:
        "Consistent supply, on-time delivery, and dependable partnerships.",
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
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const gridWrap = "relative py-20 md:py-32 overflow-hidden";

  // Theme-aware background language (same style across pages)
  const bgShared = (
    <>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.12]
        [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)]
        dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)]
        [background-size:28px_28px]"
      />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />
    </>
  );

  // Reusable “glass but theme-aware” classes (keeps your dark exactly)
  const glassCard =
    "border-border bg-card/70 hover:bg-card hover:border-blue-500/25 transition-colors " +
    "dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30";

  const pill =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-widest " +
    "border border-border bg-background/40 text-foreground " +
    "dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200";

  const pillIcon = "h-4 w-4 text-blue-600 dark:text-blue-300";

  const divider =
    "h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10";

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
            <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
              <span className={pill}>
                <ShieldCheck className={pillIcon} />
                SINCE 2008
              </span>
              <span className={pill}>
                <MapPin className={pillIcon} />
                RAIPUR, INDIA
              </span>
              <span className={pill}>
                <Factory className={pillIcon} />
                STEEL MANUFACTURING
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-5 text-foreground">
              About <span className="gradient-text">BMPL</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              A legacy of excellence in steel manufacturing—serving industries across India with
              consistent quality and dependable supply.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
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
              <Card variant="glass" className={`group relative h-full ${glassCard}`}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Mission</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-border bg-background/30 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg text-foreground/90 dark:text-slate-300 leading-relaxed">
                  To be the most trusted supplier of premium quality steel products in India—manufacturing
                  MS Billets, Angles, and Channels with unwavering commitment to quality, reliability, and
                  customer satisfaction.
                </p>

                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We serve as a strategic partner for manufacturing, construction, and infrastructure sectors—delivering
                  consistent supply at competitive pricing.
                </p>

                <div className="mt-auto pt-6">
                  <div className={divider} />
                  <div className="mt-3 text-xs text-muted-foreground">
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
              <Card variant="glass" className={`group relative h-full ${glassCard}`}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Vision</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-border bg-background/30 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg text-foreground/90 dark:text-slate-300 leading-relaxed">
                  To establish BMPL as a beacon of excellence in the steel manufacturing industry—known
                  for quality, innovation, and sustainability.
                </p>

                <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
                  We aim to be the preferred choice for customers seeking reliable, high-quality products backed
                  by exceptional service and technical expertise.
                </p>

                <div className="mt-auto pt-6">
                  <div className={divider} />
                  <div className="mt-3 text-xs text-muted-foreground">
                    Built to scale with customers across India.
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className={gridWrap}>
        {/* keep same language, but theme-aware dots */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
          [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)]
          dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)]
          [background-size:28px_28px]"
        />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">Principles that guide every decision we make.</p>
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
                  <Card variant="glass" className={`group h-full ${glassCard}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border dark:ring-white/10">
                          <Icon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-lg font-semibold text-foreground leading-snug">
                            {value.title}
                          </h3>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex-1">
                      <p className="text-sm text-muted-foreground leading-relaxed line-clamp-5">
                        {value.description}
                      </p>
                    </div>

                    <div className="mt-auto pt-6">
                      <div className={divider} />
                      <div className="mt-3 flex justify-center text-xs text-muted-foreground">
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
<section className={gridWrap}>
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
  <div
    className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
    [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)]
    dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)]
    [background-size:28px_28px]"
  />
  <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />

  <Container className="relative">
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.45 }}
      className="mb-14 text-center"
    >
      <h2 className="text-4xl font-bold mb-4 text-foreground">Our Journey</h2>
      <p className="text-lg text-muted-foreground">
        A few defining moments that shaped how we work today.
      </p>
    </motion.div>

    <div className="mx-auto max-w-5xl">
      <Card variant="glass" className={`relative overflow-hidden ${glassCard}`}>
        {/* subtle top accent */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

        <div className="relative px-5 py-10 sm:px-10">
          {/* LEFT TRACK (the “story rail”) */}
          <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-slate-900/15 to-transparent dark:via-white/10 sm:left-8" />
          <div className="pointer-events-none absolute left-6 top-10 bottom-10 w-px blur-[2px] bg-gradient-to-b from-transparent via-blue-500/20 to-transparent sm:left-8" />

          <div className="space-y-8">
            {milestones.map((m, idx) => {
              const Icon = m.icon;

              return (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="relative"
                >
                  {/* NODE on the track */}
                  <div className="absolute left-6 top-6 -translate-x-1/2 sm:left-8">
                    {/* outer ring */}
                    <div className="relative grid place-items-center">
                      <div className="h-10 w-10 rounded-full bg-background/70 border border-border shadow-sm dark:bg-slate-950/40 dark:border-white/10" />

                      {/* glow */}
                      <div className="pointer-events-none absolute -inset-2 rounded-full opacity-60 blur-xl bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20" />

                      {/* inner dot */}
                      <div className="absolute grid h-10 w-10 place-items-center">
                        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-500/10 ring-1 ring-border dark:ring-white/10">
                          <Icon className="h-4 w-4 text-blue-700 dark:text-blue-300" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* CONTENT (card “attached” to track) */}
                  <div className="pl-14 sm:pl-16">
                    {/* connector from node to card */}
                    <div className="pointer-events-none absolute left-6 top-11 h-px w-7 bg-gradient-to-r from-transparent via-slate-900/15 to-transparent dark:via-white/10 sm:left-8" />

                    <Card
                      variant="glass"
                      className={[
                        "group relative",
                        glassCard,
                        "p-6 sm:p-7",
                        "hover:shadow-lg hover:shadow-blue-500/5",
                      ].join(" ")}
                    >
                      {/* top micro accent */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

                      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                        <div className="min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-sm font-semibold text-blue-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-blue-300">
                              {m.year}
                            </span>

                            {m.tag && (
                              <span className="inline-flex rounded-full border border-border bg-background/30 px-3 py-1 text-[11px] font-semibold tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/[0.02]">
                                {m.tag}
                              </span>
                            )}
                          </div>

                          <div className="mt-3 text-base sm:text-lg font-semibold text-foreground">
                            {m.event}
                          </div>

                          {/* optional “story line” */}
                          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                            A key step in our growth—strengthening capacity, quality systems, and customer trust.
                          </p>
                        </div>

                        {/* right mini badge */}
                        <div className="shrink-0">
                          <span className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/[0.03]">
                            MILESTONE
                          </span>
                        </div>
                      </div>

                      <div className="mt-6">
                        <div className={divider} />
                        <div className="mt-3 text-xs text-center text-muted-foreground">
                          Progress built through consistent execution.
                        </div>
                      </div>
                    </Card>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* END CAP (finishing dot) */}
          <div className="pointer-events-none absolute left-6 bottom-10 -translate-x-1/2 sm:left-8">
            <div className="h-3 w-3 rounded-full bg-blue-500/30 ring-4 ring-blue-500/10" />
          </div>
        </div>
      </Card>
    </div>
  </Container>
</section>


      {/* CTA */}
      <section className={`${gridWrap}`}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
          [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)]
          dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)]
          [background-size:28px_28px]"
        />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

        {/* remove hard border; use theme divider */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">Want to Learn More?</h2>

            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Connect with our team to discuss partnerships, supply requirements, and business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>

              <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
                <Link href="/contact">Contact Details</Link>
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Response within 24 hours. No commitment required.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
