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
      "Hello BMPL, I would like to know more about your services.",
    );
  };

  const trust = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle2, text: "Transparent quotation" },
    { icon: MapPin, text: "Raipur • Pan-India dispatch" },
  ];

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* Background wash (token driven) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      <div className="pointer-events-none absolute h-full inset-0 hidden dark:block bg-primary/6" />
      {/* Dot grid (token driven foreground mix) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.10]
          [background-size:28px_28px]
          [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_0)]
        "
      />

      {/* Glows (token driven, complements your palette) */}
      {/* <div className="pointer-events-none absolute -top-24 right-[-80px] h-[360px] w-[360px] rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-[-90px] h-[420px] w-[420px] rounded-full bg-accent/7 blur-3xl" /> */}

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
              dark:bg-card/40
            "
          >
            {/* top hairline accent (token driven) */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

            {/* inner glow (token driven, no green/purple) */}
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-45 dark:opacity-60 blur-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10" />

            <div className="relative mx-auto max-w-3xl text-center">
              {/* badge (token driven) */}
              <div
                className="
                  mb-5 inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold tracking-widest
                  border border-border bg-card/60 text-foreground
                  dark:bg-card/40
                "
              >
                QUICK QUOTE • RELIABLE DISPATCH
              </div>

              <h2 className="text-4xl font-bold leading-tight text-foreground md:text-5xl">
                Ready to Work <span className="gradient-text">With Us?</span>
              </h2>

              <p className="mt-4 text-lg text-muted-foreground text-balance">
                Get a quick quotation or chat with our team to discuss sizes,
                quantities, and dispatch timelines.
              </p>

              {/* Trust row */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 text-sm sm:flex-row sm:gap-6">
                {trust.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} className="flex items-center gap-2">
                      <span
                        className="
                          flex h-8 w-8 items-center justify-center rounded-xl
                          bg-primary/10 ring-1 ring-border/70
                        "
                      >
                        <Icon className="h-4 w-4 text-primary" />
                      </span>
                      <span className="text-foreground/80">{t.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
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
                    rounded-2xl border
                    border-border bg-card/60 hover:bg-card/80 text-foreground
                    dark:bg-card/40 dark:hover:bg-card/55
                  "
                  onClick={handleWhatsApp}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="mt-6 text-sm text-muted-foreground">
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
