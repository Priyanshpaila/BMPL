"use client";

import { motion } from "framer-motion";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Users, CalendarDays, Factory, Headset } from "lucide-react";

export default function StatsPanel() {
  const stats = [
    {
      number: "500+",
      label: "Happy Clients",
      description: "Across India",
      icon: Users,
    },
    {
      number: "15+",
      label: "Years Experience",
      description: "In steel manufacturing",
      icon: CalendarDays,
    },
    {
      number: "10,000+",
      label: "MT/Year",
      description: "Production capacity",
      icon: Factory,
    },
    {
      number: "24/7",
      label: "Customer Support",
      description: "Always available",
      icon: Headset,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.05 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.985 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* background wash (token-driven) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/7 to-transparent" />

      {/* optional soft blobs (token-driven, subtle) */}
      <div className="pointer-events-none absolute -top-28 right-[-160px] h-[520px] w-[520px] rounded-full bg-primary/4 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 left-[-180px] h-[560px] w-[560px] rounded-full bg-accent/4 blur-3xl" />

      {/* dot grid (token-driven) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.10]
          [background-size:28px_28px]
          [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_0)]
        "
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
                    group relative h-full smooth-transition overflow-hidden
                    border border-border bg-card/60
                    hover:bg-card/75 hover:border-primary/25
                    dark:bg-card/35 dark:hover:bg-card/45
                  "
                >
                  {/* subtle top accent line (token-driven) */}
                  <div
                    className="
                      pointer-events-none absolute inset-x-0 top-0 h-px
                      bg-gradient-to-r from-transparent via-primary/25 to-transparent
                    "
                  />

                  {/* hover glow (token-driven, premium) */}
                  <div
                    className="
                      pointer-events-none absolute -inset-1 rounded-2xl opacity-0 blur-2xl
                      transition-opacity duration-300 group-hover:opacity-100
                      bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10
                    "
                  />

                  <div className="relative flex h-full flex-col gap-4">
                    {/* top row */}
                    <div className="flex items-start justify-between">
                      <div
                        className="
                          flex h-11 w-11 items-center justify-center rounded-2xl ring-1
                          bg-primary/10 ring-border/70
                        "
                      >
                        <Icon className="h-5 w-5 text-primary" />
                      </div>

                      <span
                        className="
                          rounded-full px-3 py-1 text-[11px] font-semibold tracking-widest
                          border border-border bg-background/40 text-muted-foreground
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
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent" />

                    {/* label pinned bottom */}
                    <div className="mt-auto">
                      <h3 className="text-base font-semibold text-foreground tracking-tight">
                        {stat.label}
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground">
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
