"use client"

import { motion } from "framer-motion"
import { ArrowRight, ClipboardList, MessageSquare, Wrench, Truck } from "lucide-react"
import Container from "@/components/layout/Container"

export default function ProcessSteps() {
  const steps = [
    {
      icon: ClipboardList,
      number: "1",
      title: "Requirement",
      description: "Share your specifications and requirements",
    },
    {
      icon: MessageSquare,
      number: "2",
      title: "Quote",
      description: "Receive quick & competitive quotation",
    },
    {
      icon: Wrench,
      number: "3",
      title: "Production",
      description: "Manufacturing with quality assurance",
    },
    {
      icon: Truck,
      number: "4",
      title: "Dispatch",
      description: "Fast & reliable delivery to your location",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            How We <span className="gradient-text">Work</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 text-balance"
          >
            Simple and transparent process from inquiry to delivery
          </motion.p>
        </div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {steps.map((step, idx) => {
              const Icon = step.icon
              return (
                <motion.div key={idx} variants={itemVariants} className="relative">
                  {/* Step Card */}
                  <div className="bg-slate-900/50 border border-slate-700 rounded-2xl p-6 h-full flex flex-col items-center text-center hover:border-blue-500/50 smooth-transition">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center mb-4 relative z-10 flex-shrink-0">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-sm font-bold text-blue-400 mb-2">Step {step.number}</div>
                    <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                    <p className="text-sm text-slate-400">{step.description}</p>
                  </div>

                  {/* Arrow */}
                  {idx < steps.length - 1 && (
                    <div className="hidden md:flex absolute -right-3 top-1/2 -translate-y-1/2 z-20">
                      <ArrowRight className="w-6 h-6 text-blue-400" />
                    </div>
                  )}
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  )
}
