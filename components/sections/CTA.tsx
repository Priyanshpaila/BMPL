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
    openWhatsAppChat("Hello BMPL, I would like to know more about your services.");
  };

  const trust = [
    { icon: Clock, text: "Response within 24 hours" },
    { icon: CheckCircle2, text: "Transparent quotation" },
    { icon: MapPin, text: "Raipur • Pan-India dispatch" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Background (soft, consistent with other sections) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/8 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />
      <div className="pointer-events-none absolute -top-24 right-0 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.45 }}
        >
          <Card
            variant="glass"
            className="relative overflow-hidden border-white/10 bg-white/[0.03] px-6 py-10 md:px-10 md:py-14"
          >
            {/* subtle top accent */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

            {/* inner glow */}
            <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-60 blur-2xl bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />

            <div className="relative mx-auto max-w-3xl text-center">
              {/* small badge */}
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold tracking-widest text-slate-200">
                QUICK QUOTE • RELIABLE DISPATCH
              </div>

              <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                Ready to Work <span className="gradient-text">With Us?</span>
              </h2>

              <p className="mt-4 text-lg text-slate-300 text-balance">
                Get a quick quotation or chat with our team to discuss sizes, quantities,
                and dispatch timelines.
              </p>

              {/* Trust row */}
              <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-6 text-sm text-slate-300">
                {trust.map((t) => {
                  const Icon = t.icon;
                  return (
                    <div key={t.text} className="flex items-center gap-2">
                      <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-500/10 ring-1 ring-white/10">
                        <Icon className="h-4 w-4 text-blue-300" />
                      </span>
                      <span className="text-slate-300">{t.text}</span>
                    </div>
                  );
                })}
              </div>

              {/* CTAs */}
              <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" className="rounded-2xl" asChild>
                  <Link href="/quote" className="inline-flex items-center justify-center">
                    Request Quote
                  </Link>
                </Button>

                <Button
                  size="lg"
                  variant="secondary"
                  className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                  onClick={handleWhatsApp}
                >
                  Chat on WhatsApp
                </Button>
              </div>

              <p className="mt-6 text-sm text-slate-500">
                No commitment required. Share your specs and we’ll respond with pricing and timelines.
              </p>
            </div>
          </Card>
        </motion.div>
      </Container>
    </section>
  );
}
