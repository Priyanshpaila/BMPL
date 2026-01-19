"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Users, CalendarDays, Factory, Headset } from "lucide-react";

export default function StatsPanel() {
  const stats = [
    { number: "500+", label: "Happy Clients", description: "Across India", icon: Users },
    { number: "15+", label: "Years Experience", description: "In steel manufacturing", icon: CalendarDays },
    { number: "10,000+", label: "MT/Year", description: "Production capacity", icon: Factory },
    { number: "24/7", label: "Customer Support", description: "Always available", icon: Headset },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.05 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-16 md:py-24">
      {/* background: theme-aware */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent dark:via-blue-600/5" />

      {/* Dots: dark dots on light, white dots on dark */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
        [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)]
        dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)]
        [background-size:28px_28px]"
      />

      <Container className="relative">
        <div className="mx-auto mb-10 max-w-3xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            Trusted performance metrics that reflect our scale and reliability
          </motion.p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat, idx) => {
            const Icon = stat.icon;

            return (
              <motion.div key={idx} variants={itemVariants} className="h-full">
                <Card
                  variant="glass"
                  className="
                    group relative h-full smooth-transition
                    border border-border bg-card/70
                    hover:bg-card/90 hover:border-blue-500/20
                    dark:border-white/10 dark:bg-white/[0.03]
                    dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30
                  "
                >
                  {/* subtle top accent */}
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-px
                    bg-gradient-to-r from-transparent via-blue-500/20 to-transparent
                    dark:via-blue-400/30"
                  />

                  {/* hover glow ring (softer in light) */}
                  <div
                    className="
                      pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100
                      bg-gradient-to-r from-blue-500/6 via-cyan-500/6 to-blue-500/6
                      dark:from-blue-500/10 dark:via-cyan-500/10 dark:to-blue-500/10
                    "
                  />

                  <div className="relative flex h-full flex-col gap-4">
                    {/* top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center rounded-2xl
                          bg-blue-500/10 ring-1 ring-blue-500/10
                          dark:bg-blue-500/10 dark:ring-white/10
                        "
                      >
                        <Icon className="h-5 w-5 text-blue-600 dark:text-blue-300" />
                      </div>

                      <span
                        className="
                          rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest
                          border border-slate-900/10 bg-slate-900/5 text-slate-700
                          dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-300
                        "
                      >
                        BMPL
                      </span>
                    </div>

                    {/* number */}
                    <div className="pt-1">
                      <div className="text-4xl md:text-5xl font-bold gradient-text tracking-tight leading-none">
                        {stat.number}
                      </div>
                      <div className="mt-2 text-sm text-muted-foreground">
                        {stat.description}
                      </div>
                    </div>

                    {/* divider */}
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-slate-900/10 to-transparent dark:via-white/10" />

                    {/* label pinned bottom */}
                    <div className="mt-auto">
                      <h3 className="text-base font-semibold text-foreground tracking-tight dark:text-white">
                        {stat.label}
                      </h3>
                      <p className="mt-1 text-xs text-slate-600 dark:text-slate-500">
                        Verified scale & operational capability
                      </p>
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
