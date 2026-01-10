"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/Container"
import QuoteForm from "@/components/forms/QuoteForm"
import {Card} from "@/components/ui/card"
import { CheckCircle2, Zap, Clock } from "lucide-react"

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
  ]

  return (
      <main>
        {/* Hero */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto mb-12"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Request a <span className="gradient-text">Quote</span>
              </h1>
              <p className="text-xl text-slate-300 text-balance">
                Get a customized quotation for MS Billets, Angles, and Channels. Quick response guaranteed.
              </p>
            </motion.div>

            {/* Benefits */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {benefits.map((benefit, idx) => {
                const Icon = benefit.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + idx * 0.1, duration: 0.6 }}
                  >
                    <Card className="text-center hover:border-blue-500/50 smooth-transition">
                      <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center mx-auto mb-3">
                        <Icon className="w-5 h-5 text-blue-400" />
                      </div>
                      <h3 className="font-semibold mb-1">{benefit.title}</h3>
                      <p className="text-sm text-slate-400">{benefit.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Form Section */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <QuoteForm />
            </motion.div>
          </Container>
        </section>

        {/* FAQ Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent border-t border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Quote Process FAQs</h2>
              <p className="text-lg text-slate-400">Common questions about our quotation process</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {[
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
              ].map((faq, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Card>
                    <h3 className="font-semibold mb-2 text-blue-300">{faq.q}</h3>
                    <p className="text-sm text-slate-400">{faq.a}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      </main>
  )
}
