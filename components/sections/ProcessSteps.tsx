"use client";

import { motion } from "framer-motion";
import { ArrowRight, ClipboardList, MessageSquare, Wrench, Truck } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

export default function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardList,
      number: "01",
      title: "Requirement",
      description: "Share product specs, quantity, sizes, and delivery location.",
    },
    {
      icon: MessageSquare,
      number: "02",
      title: "Quote",
      description: "We respond with competitive pricing and dispatch timelines.",
    },
    {
      icon: Wrench,
      number: "03",
      title: "Production",
      description: "Manufacturing under strict QC with batch-level checks.",
    },
    {
      icon: Truck,
      number: "04",
      title: "Dispatch",
      description: "Fast, reliable delivery with clear coordination and support.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.06 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-20 md:py-32">
      {/* Background: theme-aware */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-transparent dark:from-blue-600/5" />

      {/* Dots: dark in light mode, white in dark mode */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
        [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)]
        dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.18)_1px,transparent_0)]
        [background-size:28px_28px]"
      />

      <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            How We <span className="gradient-text">Work</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-lg text-muted-foreground text-balance"
          >
            A simple, transparent process from inquiry to dispatch—designed for speed and reliability.
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {steps.map((step, idx) => {
                const Icon = step.icon;

                return (
                  <motion.div
                    key={step.number}
                    variants={itemVariants}
                    className="relative overflow-visible"
                  >
                    {/* Connector (desktop only) aligned to icon center */}
                    {idx < steps.length - 1 && (
                      <>
                        <div
                          className="pointer-events-none absolute hidden lg:block"
                          style={{ top: 34, right: -32 }}
                        >
                          <div className="h-px w-10 bg-gradient-to-r from-blue-500/25 to-transparent dark:from-blue-400/30" />
                        </div>

                        <div
                          className="pointer-events-none absolute hidden lg:flex z-20"
                          style={{ top: 24, right: -26 }}
                        >
                          <div
                            className="
                              flex h-9 w-9 items-center justify-center rounded-full
                              border border-slate-900/10 bg-white/80 backdrop-blur
                              dark:border-white/10 dark:bg-white/[0.04]
                            "
                          >
                            <ArrowRight className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                          </div>
                        </div>
                      </>
                    )}

                    <Card
                      variant="glass"
                      className="
                        group h-full smooth-transition
                        border border-border bg-card/70 hover:bg-card/90 hover:border-blue-500/20
                        dark:border-white/10 dark:bg-white/[0.03]
                        dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30
                      "
                    >
                      <div className="flex h-full flex-col">
                        {/* Top row */}
                        <div className="flex items-start justify-between">
                          <div
                            className="
                              flex h-12 w-12 items-center justify-center rounded-2xl
                              bg-blue-500/10 ring-1 ring-blue-500/10
                              dark:bg-blue-500/10 dark:ring-white/10
                            "
                          >
                            <Icon className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                          </div>

                          {/* step chip */}
                          <div
                            className="
                              rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest
                              border border-slate-900/10 bg-slate-900/5 text-slate-700
                              dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300
                            "
                          >
                            STEP{" "}
                            <span className="text-blue-700 dark:text-blue-300">{step.number}</span>
                          </div>
                        </div>

                        {/* Title + description */}
                        <div className="mt-5">
                          <h3 className="text-lg font-bold text-foreground dark:text-white">
                            {step.title}
                          </h3>
                          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            {step.description}
                          </p>
                        </div>

                        {/* Footer pinned to bottom */}
                        <div className="mt-auto pt-6">
                          <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10" />

                          <div className="mt-4 flex items-center justify-between text-xs text-slate-600 dark:text-slate-500">
                            <span className="inline-flex items-center gap-2">
                              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500/80" />
                              Trusted workflow
                            </span>

                            {idx < steps.length - 1 ? (
                              <span className="inline-flex items-center gap-1 text-blue-700/80 dark:text-blue-300/80">
                                Next
                                <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                              </span>
                            ) : (
                              <span className="text-blue-700/80 dark:text-blue-300/80">Done</span>
                            )}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
