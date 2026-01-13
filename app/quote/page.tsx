"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import QuoteForm from "@/components/forms/QuoteForm";
import { Card } from "@/components/ui/card";
import { CheckCircle2, Zap, Clock } from "lucide-react";

export default function QuotePage() {
  const benefits = [
    { icon: Zap, title: "Quick Response", description: "Get a quotation within 24 hours" },
    { icon: CheckCircle2, title: "Customized Quotes", description: "Tailored to your specific requirements" },
    { icon: Clock, title: "Flexible Terms", description: "Payment and delivery options available" },
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
      a: "Product name, quantity, delivery location, and any special requirements. Phone number helps us contact you faster.",
    },
    {
      q: "Are there any hidden charges?",
      a: "No. Our quotes are transparent and include all applicable charges. We'll explain everything clearly.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
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
              Get a customized quotation for MS Billets, Angles, and Channels. Quick response guaranteed.
            </p>
          </motion.div>

          {/* Benefits */}
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {benefits.map((benefit, idx) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.08 + idx * 0.06, duration: 0.45 }}
                >
                  <Card
                    variant="glass"
                    className="h-full text-center border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                      <Icon className="h-5 w-5 text-blue-300" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="font-semibold text-white">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Form Section */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.45 }}
          >
            <QuoteForm />
          </motion.div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="relative py-20 md:py-32 border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-12 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold">Quote Process FAQs</h2>
            <p className="text-lg text-slate-400">Common questions about our quotation process.</p>
          </motion.div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
            {faqs.map((faq, idx) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: idx * 0.06, duration: 0.45 }}
              >
                <Card variant="glass" className="border-white/10 bg-white/[0.03]">
                  <h3 className="font-semibold text-blue-300">{faq.q}</h3>
                  <p className="mt-2 text-sm text-slate-400 leading-relaxed">{faq.a}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
