"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

export default function StatsPanel() {
  const stats = [
    { number: "500+", label: "Happy Clients", description: "Across India" },
    { number: "15+", label: "Years Experience", description: "In steel manufacturing" },
    { number: "10,000+", label: "MT/Year", description: "Production capacity" },
    { number: "24/7", label: "Customer Support", description: "Available always" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-20 md:py-32">
      {/* subtle background wash */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent" />

      <Container className="relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card
                variant="glass"
                className="h-full text-center border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
              >
                <div className="mx-auto flex w-full flex-col items-center gap-2">
                  <div className="text-4xl md:text-5xl font-bold gradient-text tracking-tight">
                    {stat.number}
                  </div>

                  <h3 className="text-base md:text-lg font-semibold text-white tracking-tight">
                    {stat.label}
                  </h3>

                  <p className="text-sm text-slate-400 leading-relaxed">
                    {stat.description}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
