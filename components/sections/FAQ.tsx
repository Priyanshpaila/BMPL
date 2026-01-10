"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"
import { FAQS } from "@/content/faqs"
import Container from "@/components/layout/Container"

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  }

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Frequently Asked <span className="gradient-text">Questions</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 text-balance"
          >
            Quick answers to common questions about our products and services
          </motion.p>
        </div>

        {/* FAQ List */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {FAQS.map((faq) => (
            <motion.div key={faq.id} variants={itemVariants}>
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full bg-slate-900/50 border border-slate-700 rounded-xl p-6 text-left hover:border-blue-500/50 smooth-transition"
              >
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-semibold text-lg leading-tight">{faq.question}</h3>
                  <ChevronDown
                    className={`w-5 h-5 text-blue-400 flex-shrink-0 smooth-transition ${
                      openId === faq.id ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* Answer */}
                <AnimatePresence>
                  {openId === faq.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-slate-400 pt-4 text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
