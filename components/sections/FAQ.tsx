"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/content/faqs";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.06, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* background wash (soft, no harsh break) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />

      {/* dots: dark in light mode, white in dark mode */}
      <div className="pointer-events-none absolute h-full inset-0 hidden dark:block bg-primary/6" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-lg text-muted-foreground text-balance"
          >
            Quick answers to common questions about our products and services.
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto max-w-3xl space-y-4"
        >
          {FAQS.map((faq) => {
            const isOpen = openId === faq.id;
            const contentId = `faq-${faq.id}`;

            return (
              <motion.div key={faq.id} variants={itemVariants}>
                <Card
                  variant="glass"
                  className={cn(
                    // light mode: readable card, dark mode: your existing glass
                    "group relative p-0 border border-border bg-card/70 hover:bg-card/90 hover:border-blue-500/20",
                    "dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30",
                    "smooth-transition",
                  )}
                >
                  {/* left accent */}
                  <div
                    className="
                      pointer-events-none absolute left-0 top-0 h-full w-px
                      bg-gradient-to-b from-transparent via-blue-500/40 to-transparent
                      opacity-0 transition-opacity duration-300 group-hover:opacity-100
                      dark:via-blue-400/40
                    "
                  />

                  {/* subtle glow on hover */}
                  <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-cyan-500/5 to-blue-500/6" />

                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={contentId}
                    onClick={() => setOpenId(isOpen ? null : faq.id)}
                    className="relative w-full text-left"
                  >
                    <div className="flex items-start justify-between gap-5 px-6 py-6">
                      <div className="min-w-0">
                        <h3 className="text-base md:text-lg font-semibold leading-snug text-foreground dark:text-white">
                          {faq.question}
                        </h3>

                        {/* <p className="mt-1 text-xs text-muted-foreground">
                          Click to {isOpen ? "collapse" : "expand"}
                        </p> */}
                      </div>

                      <span
                        className={cn(
                          "mt-1 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl backdrop-blur",
                          // light mode button surface
                          "border border-slate-900/10 bg-white/70",
                          // dark mode original
                          "dark:border-white/10 dark:bg-white/[0.03]",
                        )}
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 text-blue-700 dark:text-blue-300 transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={contentId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: "easeOut" }}
                          className="overflow-hidden"
                        >
                          <div className="px-6 pb-6 pt-0">
                            <div className="mb-4 h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10" />
                            <p className="text-sm leading-relaxed text-muted-foreground dark:text-slate-300">
                              {faq.answer}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
