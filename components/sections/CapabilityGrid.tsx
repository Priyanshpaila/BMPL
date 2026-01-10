"use client"

import { motion } from "framer-motion"
import { Factory, Truck, Settings, CheckCircle2, Headphones, Zap } from "lucide-react"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"

export default function CapabilityGrid() {
  const capabilities = [
    {
      icon: Factory,
      title: "Advanced Manufacturing",
      description: "State-of-the-art equipment for precision production",
    },
    {
      icon: Truck,
      title: "Fast Dispatch",
      description: "Rapid logistics network across India",
    },
    {
      icon: Settings,
      title: "Customization",
      description: "Tailor-made sizes and specifications",
    },
    {
      icon: CheckCircle2,
      title: "Quality Assurance",
      description: "Rigorous testing at every stage",
    },
    {
      icon: Headphones,
      title: "Dedicated Support",
      description: "24/7 customer service & technical support",
    },
    {
      icon: Zap,
      title: "Reliability",
      description: "Consistent quality, on-time delivery",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32 bg-linear-to-b from-transparent to-blue-600/5">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="gradient-text">Capabilities</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto text-balance"
          >
            Comprehensive solutions for all your industrial steel needs
          </motion.p>
        </div>

        {/* Capabilities Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon
            return (
              <motion.div key={idx} variants={itemVariants}>
                <Card
                  variant="default"
                  className="h-full flex flex-col items-start hover:border-blue-500/50 group smooth-transition"
                >
                  <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 smooth-transition">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{cap.title}</h3>
                  <p className="text-slate-400 text-sm flex-grow">{cap.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </Container>
    </section>
  )
}
