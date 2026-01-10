"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, Target, Award, Leaf } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality First",
      description: "Uncompromising commitment to manufacturing excellence and product standards.",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Your success is our priority. We deliver solutions tailored to your needs.",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Consistent supply, on-time delivery, and dependable partnerships.",
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Sustainable practices and ethical manufacturing standards.",
    },
  ];

  const milestones = [
    { year: "2008", event: "BMPL Founded in Raipur" },
    { year: "2012", event: "Expanded manufacturing capacity" },
    { year: "2016", event: "ISO Certification achieved" },
    { year: "2020", event: "Modernized equipment & processes" },
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
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              About <span className="gradient-text">BMPL</span>
            </h1>
            <p className="text-xl text-slate-300 text-balance">
              A legacy of excellence in steel manufacturing serving industries across India since 2008.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <Card variant="glass" className="border-white/10 bg-white/[0.03]">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  To be the most trusted supplier of premium quality steel products in India. We manufacture
                  MS Billets, Angles, and Channels with unwavering commitment to quality, reliability, and customer satisfaction.
                </p>
                <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                  We serve as a strategic partner for manufacturing, construction, and infrastructure sectors—delivering consistent supply at competitive pricing.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <Card variant="glass" className="border-white/10 bg-white/[0.03]">
                <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
                <p className="mt-4 text-lg text-slate-300 leading-relaxed">
                  To establish BMPL as a beacon of excellence in the steel manufacturing industry—known for quality, innovation, and sustainability.
                </p>
                <p className="mt-4 text-lg text-slate-400 leading-relaxed">
                  We aim to be the preferred choice for customers seeking reliable, high-quality products backed by exceptional service and technical expertise.
                </p>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-slate-400">Principles that guide every decision we make.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="h-full"
                >
                  <Card
                    variant="glass"
                    className="h-full items-center text-center border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-blue-500/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-blue-300" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-white">{value.title}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{value.description}</p>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
            <p className="text-lg text-slate-400">Key milestones in BMPL’s growth and development.</p>
          </motion.div>

          <div className="mx-auto max-w-3xl">
            <Card variant="glass" className="border-white/10 bg-white/[0.03]">
              <div className="relative">
                {/* vertical line */}
                <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10" />

                <div className="space-y-8">
                  {milestones.map((m, idx) => (
                    <motion.div
                      key={m.year}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: idx * 0.06, duration: 0.45 }}
                      className="relative pl-14"
                    >
                      {/* dot */}
                      <div className="absolute left-[18px] top-1 h-4 w-4 rounded-full bg-blue-500/40 ring-2 ring-blue-400/30" />
                      <div className="text-blue-300 font-semibold text-lg">{m.year}</div>
                      <div className="text-slate-200">{m.event}</div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="relative py-20 md:py-32 border-t border-white/10">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10" />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Want to Learn More?</h2>
            <p className="text-lg text-slate-300 mb-8 text-balance">
              Connect with our team to discuss partnerships and business opportunities.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                asChild
              >
                <Link href="/contact">Contact Details</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
