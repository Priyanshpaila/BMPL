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
        "Committed to consistent standards and dependable output across every batch and size.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description:
        "Built around fabricators’ needs—right sections, right sizes, and clear communication.",
    },
    {
      icon: Users,
      title: "Reliability",
      description:
        "Trusted partnerships backed by consistent supply and process-controlled manufacturing.",
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description:
        "Ethical manufacturing practices with a focus on long-term safety and performance.",
    },
  ];

  const milestones = [
    {
      year: "1987",
      tag: "Established",
      event: "Bhawani Moulders Pvt. Ltd. established in Raipur",
      icon: Factory,
    },
    {
      year: "1995",
      tag: "Capability",
      event: "Expanded product capability for light structural sections",
      icon: Target,
    },
    {
      year: "2008",
      tag: "Range",
      event: "Strengthened supply of long MS products for fabricators",
      icon: ShieldCheck,
    },
    {
      year: "2020",
      tag: "Process",
      event: "Upgraded process control to enhance consistency & reliability",
      icon: Award,
    },
  ];

  const containerStagger = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const sectionWrap = "relative overflow-hidden py-20 md:py-32";

  /**
   * About page was getting “too dark” because multiple sections were stacking
   * heavy blue/cyan washes + blobs. This version:
   * - Uses your theme tokens (primary/accent/foreground) everywhere
   * - Adds a subtle “ambient lift” in dark mode (white tint) so the page feels less black
   * - Removes cyan/green/purple dependencies entirely
   */

  const dots = `
    pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.10]
    [background-size:28px_28px]
    [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_0)]
  `;

  const wash = `
    pointer-events-none absolute inset-0
    bg-gradient-to-b from-transparent via-primary/7 to-transparent
    dark:via-primary/6
  `;

  // Slight “lift” only in dark so the page doesn’t feel crushed/over-black.
  const darkLift = `
    pointer-events-none absolute inset-0
    dark:bg-[radial-gradient(70%_60%_at_50%_0%,rgba(255,255,255,0.06),transparent_60%)]
  `;

  const glowPrimary =
    "pointer-events-none absolute -top-28 right-[-90px] h-[420px] w-[420px] rounded-full bg-primary/10 blur-3xl";
  const glowAccent =
    "pointer-events-none absolute -bottom-32 left-[-110px] h-[520px] w-[520px] rounded-full bg-accent/10 blur-3xl";

  const glassCard =
    "border border-border bg-card/70 hover:bg-card/90 hover:border-primary/20 transition-colors " +
    "dark:bg-card/40 dark:hover:bg-card/55 dark:hover:border-primary/25";

  const pill =
    "inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold tracking-widest " +
    "border border-border bg-background/40 text-foreground " +
    "dark:bg-card/35";

  const pillIcon = "h-4 w-4 text-primary";

  const divider =
    "h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent dark:via-white/10";

  return (
    <main>
      {/* HERO */}
      <section className={sectionWrap}>
        <div className={wash} />
        <div className={dots} />
        <div className={darkLift} />
        <div className={glowPrimary} />
        <div className={glowAccent} />

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
                SINCE 1987
              </span>
              <span className={pill}>
                <MapPin className={pillIcon} />
                RAIPUR, INDIA
              </span>
              <span className={pill}>
                <Factory className={pillIcon} />
                LIGHT STRUCTURAL STEEL
              </span>
            </div>

            <h1 className="mb-5 text-5xl font-bold text-foreground md:text-6xl">
              About <span className="gradient-text">Bhawani Moulders</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              Established in 1987, Bhawani Moulders manufactures and supplies light structural mild steel
              products that reinforce fabricated structures—built for stability, safety, and long-term performance.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
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

      {/* MISSION & VISION */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className={darkLift} />

        <Container className="relative">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="h-full"
            >
              <Card variant="glass" className={`group relative h-full ${glassCard}`}>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Mission</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-border bg-background/30 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:bg-card/35">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  To provide top-quality light structural mild steel products—Angles, Flats, Round, Square,
                  and Gate Channel—so fabricators can build safe, reliable, and durable structures.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We focus on consistency, process control, and dependable supply—supporting fabrication
                  and construction requirements across varying sizes and applications.
                </p>

                <div className="mt-auto pt-6">
                  <div className={divider} />
                  <div className="mt-3 text-xs text-muted-foreground">
                    Quality, precision, and reliability—every dispatch.
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
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/22 to-transparent" />

                <div className="flex items-center justify-between">
                  <h2 className="text-3xl font-bold text-foreground md:text-4xl">Our Vision</h2>
                  <span className="hidden sm:inline-flex rounded-full border border-border bg-background/30 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:bg-card/35">
                    BMPL
                  </span>
                </div>

                <p className="mt-4 text-lg leading-relaxed text-foreground/90">
                  To strengthen the nation’s fabrication ecosystem by being a trusted manufacturer of
                  light structural steel sections—known for long-term performance and dependable standards.
                </p>

                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  We aim to be the preferred partner for customers who value consistent quality, clear specifications,
                  and materials that enhance stability and safety in fabricated structures.
                </p>

                <div className="mt-auto pt-6">
                  <div className={divider} />
                  <div className="mt-3 text-xs text-muted-foreground">
                    Built to support infrastructure and fabrication needs.
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* CORE VALUES */}
      <section className={sectionWrap}>
        <div className={wash} />
        <div className={dots} />
        <div className={darkLift} />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Core Values</h2>
            <p className="text-lg text-muted-foreground">
              Principles that guide every decision we make.
            </p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch"
          >
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <motion.div key={value.title} variants={fadeUp} className="h-full">
                  <Card variant="glass" className={`group h-full ${glassCard}`}>
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-border/70">
                          <Icon className="h-5 w-5 text-primary" />
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

      {/* TIMELINE */}
      <section className={sectionWrap}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
        <div className={dots} />
        <div className={darkLift} />
        <div className="pointer-events-none absolute -top-28 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">Our Journey</h2>
            <p className="text-lg text-muted-foreground">
              A few defining moments that shaped how we work today.
            </p>
          </motion.div>

          <div className="mx-auto max-w-5xl">
            <Card variant="glass" className={`relative overflow-hidden ${glassCard}`}>
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

              <div className="relative px-5 py-10 sm:px-10">
                {/* Track */}
                <div className="absolute left-6 top-10 bottom-10 w-px bg-gradient-to-b from-transparent via-border/70 to-transparent dark:via-white/10 sm:left-8" />
                <div className="pointer-events-none absolute left-6 top-10 bottom-10 w-px blur-[2px] bg-gradient-to-b from-transparent via-primary/20 to-transparent sm:left-8" />

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
                        {/* Node */}
                        <div className="absolute left-6 top-6 -translate-x-1/2 sm:left-8">
                          <div className="relative grid place-items-center">
                            <div className="h-10 w-10 rounded-full bg-background/70 border border-border shadow-sm dark:bg-card/40 dark:border-white/10" />
                            <div className="pointer-events-none absolute -inset-2 rounded-full opacity-60 blur-xl bg-gradient-to-r from-primary/18 via-accent/18 to-primary/18" />
                            <div className="absolute grid h-10 w-10 place-items-center">
                              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 ring-1 ring-border/70 dark:ring-white/10">
                                <Icon className="h-4 w-4 text-primary" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Content */}
                        <div className="pl-14 sm:pl-16">
                          <div className="pointer-events-none absolute left-6 top-11 h-px w-7 bg-gradient-to-r from-transparent via-border/70 to-transparent dark:via-white/10 sm:left-8" />

                          <Card
                            variant="glass"
                            className={[
                              "group relative p-6 sm:p-7",
                              glassCard,
                              "hover:shadow-lg hover:shadow-primary/5",
                            ].join(" ")}
                          >
                            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/18 to-transparent" />

                            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                              <div className="min-w-0">
                                <div className="flex flex-wrap items-center gap-2">
                                  <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-3 py-1 text-sm font-semibold text-primary dark:bg-card/35">
                                    {m.year}
                                  </span>

                                  {m.tag && (
                                    <span className="inline-flex rounded-full border border-border bg-background/30 px-3 py-1 text-[11px] font-semibold tracking-widest text-muted-foreground dark:bg-card/30">
                                      {m.tag}
                                    </span>
                                  )}
                                </div>

                                <div className="mt-3 text-base font-semibold text-foreground sm:text-lg">
                                  {m.event}
                                </div>

                                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                                  Focused on strengthening fabrication outcomes through reliable sections, consistent quality,
                                  and disciplined manufacturing practices.
                                </p>
                              </div>

                              <div className="shrink-0">
                                <span className="inline-flex items-center justify-center rounded-full border border-border bg-background/40 px-3 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:bg-card/35">
                                  MILESTONE
                                </span>
                              </div>
                            </div>

                            <div className="mt-6">
                              <div className={divider} />
                              <div className="mt-3 text-center text-xs text-muted-foreground">
                                Progress built through consistent execution.
                              </div>
                            </div>
                          </Card>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="pointer-events-none absolute left-6 bottom-10 -translate-x-1/2 sm:left-8">
                  <div className="h-3 w-3 rounded-full bg-primary/30 ring-4 ring-primary/10" />
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className={sectionWrap}>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-primary/6 to-transparent" />
        <div className={dots} />
        <div className={darkLift} />
        <div className="pointer-events-none absolute -top-24 right-[-60px] h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-border/70 to-transparent dark:via-white/10" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">Want to Learn More?</h2>

            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Connect with our team to discuss fabrication requirements and supply needs for light structural MS products
              including Angles, Flats, Round, Square, and Gate Channel.
            </p>

            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
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
