"use client"

import { motion } from "framer-motion"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"

export default function StatsPanel() {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Across India",
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In steel manufacturing",
    },
    {
      number: "10,000+",
      label: "MT/Year",
      description: "Production capacity",
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "Available always",
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
    hidden: { opacity: 0, scale: 0.9 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32">
      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card variant="elevated" className="text-center">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + idx * 0.1, duration: 0.5 }}
                >
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.number}</div>
                  <h3 className="text-lg font-semibold mb-1">{stat.label}</h3>
                  <p className="text-sm text-slate-400">{stat.description}</p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  )
}
