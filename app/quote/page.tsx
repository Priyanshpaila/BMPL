"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function QuotePage() {
  const benefits = [
    {
      icon: Zap,
      title: "Quick Response",
      description: "Get a quotation within 24 hours",
    },
    {
      icon: CheckCircle2,
      title: "Customized Quotes",
      description: "Tailored to your specific requirements",
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Payment and delivery options available",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to receive a quote?",
      a: "We typically respond within 24 hours. Urgent inquiries may receive a response within a few hours.",
    },
    {
      q: "Can I request a custom quote?",
      a: "We offer customized sizes and specifications. Just mention your requirements in the form.",
    },
    {
      q: "What information do I need to provide?",
      a: "Product name, quantity, delivery location, and any special requirements. A phone number helps us contact you faster.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Our quotes are transparent and include all applicable charges. We'll explain everything clearly.",
    },
  ];

  const containerStagger = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.04 },
    },
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const handleWhatsApp = () => {
    openWhatsAppChat(
      "Hello BMPL, I need a quotation. Please share pricing and dispatch timelines for the required sizes and quantity."
    );
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto mb-12 max-w-3xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold md:text-6xl">
              Request a <span className="gradient-text">Quote</span>
            </h1>
            <p className="text-xl text-slate-300 text-balance">
              Get a customized quotation for MS Billets, Angles, and Channels.
              Quick response guaranteed.
            </p>
          </motion.div>

          {/* Benefits */}
          <motion.div
            variants={containerStagger}
            initial="hidden"
            animate="show"
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3 items-stretch"
          >
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <motion.div key={benefit.title} variants={fadeUp} className="h-full">
                  <Card
                    variant="glass"
                    className="group h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    {/* header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-semibold text-white leading-snug">
                            {benefit.title}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* footer pinned */}
                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="mt-3 text-xs text-slate-500 text-center">
                        Designed for fast procurement cycles
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* quick actions under hero */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.45 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button
              size="lg"
              className="rounded-2xl"
              asChild
            >
              <Link href="#quote-form" className="inline-flex items-center gap-2">
                Fill Quote Form <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={handleWhatsApp}
            >
              Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
            </Button>
          </motion.div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="relative py-20 md:py-32" id="quote-form">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            {/* Wrap form in a glass card for consistency */}
            <Card variant="glass" className="border-white/10 bg-white/[0.03]">
              <div className="mb-6">
                <h2 className="text-3xl text-center font-bold text-white">
                  Share your <span className="gradient-text">Requirement</span>
                </h2>
                <p className="mt-2 text-center text-slate-400">
                  Mention product, sizes, quantity, delivery location, and any special notes.
                </p>
              </div>

              <QuoteForm />

              <div className="mt-8">
                <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                <p className="mt-3 text-xs text-slate-500">
                  By submitting, you agree that BMPL may contact you via phone/email/WhatsApp to share the quotation.
                </p>
              </div>
            </Card>
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-32 border-t border-white/10 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">
              Quote Process <span className="gradient-text">FAQs</span>
            </h2>
            <p className="text-lg text-slate-400">
              Common questions about our quotation process.
            </p>
          </motion.div>

          <motion.div
            variants={containerStagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2 items-stretch"
          >
            {faqs.map((faq) => (
              <motion.div key={faq.q} variants={fadeUp} className="h-full">
                <Card
                  variant="glass"
                  className="h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                >
                  {/* header */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                      <CheckCircle2 className="h-5 w-5 text-blue-300" />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-blue-300 leading-snug">
                        {faq.q}
                      </h3>
                      <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </div>

                  {/* footer pinned */}
                  <div className="mt-auto pt-6">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <div className="mt-3 text-xs text-slate-500 text-center">
                      Clear, upfront communication
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* footer CTA */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-3"
          >
            <Button size="lg" className="rounded-2xl" asChild>
              <Link href="/products" className="inline-flex items-center gap-2">
                Browse Products <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
              onClick={handleWhatsApp}
            >
              Chat on WhatsApp <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
            </Button>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
