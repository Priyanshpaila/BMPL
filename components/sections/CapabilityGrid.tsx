"use client";

import { motion } from "framer-motion";
import {
  Factory,
  Truck,
  Settings,
  CheckCircle2,
  Headphones,
  Zap,
} from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";

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
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.08 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 16, scale: 0.99 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* background: soft, no harsh break */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)] [background-size:28px_28px]" />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-bold"
          >
            Our <span className="gradient-text">Capabilities</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-lg text-slate-400 text-balance"
          >
            Comprehensive solutions for industrial steel requirements—built for
            speed, quality, and reliability.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {capabilities.map((cap, idx) => {
            const Icon = cap.icon;

            return (
              <motion.div
                key={cap.title}
                variants={itemVariants}
                className="h-full"
              >
                <Card
                  variant="glass"
                  className="group relative h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 smooth-transition"
                >
                  {/* top accent */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/30 to-transparent" />

                  {/* hover glow */}
                  <div className="pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-r from-blue-500/10 via-cyan-500/10 to-blue-500/10" />

                  {/* ✅ Make card content a consistent vertical skeleton */}
                  <div className="relative flex h-full flex-col">
                    {/* top row */}
                    <div className="flex items-start gap-4">
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                        <Icon className="h-5 w-5 text-blue-300" />
                      </div>

                      {/* ✅ flex-1 keeps text area consistent */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-3">
                          {/* ✅ clamp title to 2 lines to avoid layout jumps */}
                          <h3 className="text-lg font-semibold tracking-tight text-white line-clamp-2">
                            {cap.title}
                          </h3>

                          <span className="hidden sm:inline-flex shrink-0 rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[10px] font-semibold tracking-widest text-slate-300">
                            BMPL
                          </span>
                        </div>

                        {/* ✅ clamp description to 2 lines so all cards match */}
                        <p className="mt-2 text-sm leading-relaxed text-slate-400 line-clamp-2">
                          {cap.description}
                        </p>
                      </div>
                    </div>

                    {/* ✅ push bottom content to same baseline */}
                    <div className="mt-auto pt-5">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                      <div className="mt-4 text-xs flex justify-center text-slate-500">
                        Operationally proven capability
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
