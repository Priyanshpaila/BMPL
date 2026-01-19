"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Container from "@/components/layout/Container";
import { openWhatsAppChat } from "@/lib/whatsapp";
import { CheckCircle2, Clock, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";

export default function CTA() {
  const handleWhatsApp = () => {
    openWhatsAppChat(
      "Hello BMPL, I would like to know more about your services."
    );
  };

  const trust = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle2, text: "Transparent quotation" },
    { icon: MapPin, text: "Raipur • Pan-India dispatch" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background (theme-aware) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/8 to-transparent dark:via-blue-600/8" />

      {/* Dots: dark dots on light, white dots on dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
        [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)]
        dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)]
        [background-size:28px_28px]"
      />

      {/* Glows (subtle for light, same for dark) */}
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 dark:bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 dark:bg-cyan-500/10 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <Card
            variant="glass"
            className="
              relative overflow-hidden px-6 py-10 md:px-10 md:py-14
              border border-border bg-card/70
              dark:border-white/10 dark:bg-white/[0.03]
            "
          >
            {/* subtle top accent */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px
              bg-gradient-to-r from-transparent via-blue-500/20 to-transparent
              dark:via-blue-400/30"
            />

            {/* inner glow */}
            <div
              className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-50 dark:opacity-60 blur-2xl
              bg-gradient-to-r from-blue-500/8 via-cyan-500/8 to-blue-500/8
              dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-blue-500/10"
            />

            <div className="relative mx-auto max-w-3xl text-center">
              {/* small badge */}
              <div
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest
                  border border-slate-900/10 bg-slate-900/5 text-slate-700
                  dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200
                "
              >
                QUICK QUOTE • RELIABLE DISPATCH
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
                Ready to Work <span className="gradient-text">With Us?</span>
              </h2>

              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Get a quick quotation or chat with our team to discuss sizes,
                quantities, and dispatch timelines.
              </p>

              {/* Trust row */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 text-sm">
                {trust.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} className="flex items-center gap-2">
                      <span
                        className="
                          flex h-8 w-8 items-center justify-center rounded-xl
                          bg-blue-500/10 ring-1 ring-blue-500/10
                          dark:bg-blue-500/10 dark:ring-white/10
                        "
                      >
                        <Icon className="h-4 w-4 text-blue-600 dark:text-blue-300" />
                      </span>
                      <span className="text-foreground/80 dark:text-slate-300">
                        {t.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-2xl" asChild>
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center"
                  >
                    Request Quote
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="
                    rounded-2xl
                    border border-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10
                    dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10
                  "
                  onClick={handleWhatsApp}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="mt-6 text-sm text-slate-600 dark:text-slate-500">
                No commitment required. Share your specs and we’ll respond with
                pricing and timelines.
              </p>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
