"use client"

import { motion } from "framer-motion"
import { Users, Target, Award, Leaf } from "lucide-react"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"
import {Button} from  "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  const values = [
    {
      icon: Quality,
      title: "Quality First",
      description: "Uncompromising commitment to manufacturing excellence and product standards",
    },
    {
      icon: Target,
      title: "Customer Focus",
      description: "Your success is our priority. We deliver solutions tailored to your needs",
    },
    {
      icon: Users,
      title: "Reliability",
      description: "Consistent supply, on-time delivery, and dependable partnerships",
    },
    {
      icon: Leaf,
      title: "Responsibility",
      description: "Sustainable practices and ethical manufacturing standards",
    },
  ]

  const milestones = [
    { year: "2008", event: "BMPL Founded in Raipur" },
    { year: "2012", event: "Expanded manufacturing capacity" },
    { year: "2016", event: "ISO Certification achieved" },
    { year: "2020", event: "Modernized equipment & processes" },
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
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="gradient-text">BMPL</span>
              </h1>
              <p className="text-xl text-slate-300 text-balance">
                A legacy of excellence in steel manufacturing serving industries across India since 2008
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
                <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                  To be the most trusted supplier of premium quality steel products in India. We manufacture MS Billets,
                  Angles, and Channels with unwavering commitment to quality, reliability, and customer satisfaction.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  Our goal is to serve as a strategic partner for industries across manufacturing, construction, and
                  infrastructure sectors, providing consistent supply of superior quality products at competitive
                  prices.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-4xl font-bold mb-6">Our Vision</h2>
                <p className="text-lg text-slate-300 mb-4 leading-relaxed">
                  To establish BMPL as a beacon of excellence in the steel manufacturing industry, known for our
                  unwavering commitment to quality, innovation, and sustainability.
                </p>
                <p className="text-lg text-slate-400 leading-relaxed">
                  We envision a future where BMPL is the preferred choice for customers seeking reliable, high-quality
                  steel products backed by exceptional service and technical expertise.
                </p>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Core Values */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-slate-400">Principles that guide every decision we make</p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, idx) => {
                const Icon = value.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="h-full flex flex-col items-center text-center hover:border-blue-500/50 smooth-transition">
                      <div className="w-14 h-14 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4">
                        <Icon className="w-7 h-7 text-blue-400" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                      <p className="text-sm text-slate-400">{value.description}</p>
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Timeline */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16 text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-slate-400">Key milestones in BMPL's growth and development</p>
            </motion.div>

            <div className="max-w-2xl mx-auto">
              {milestones.map((milestone, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6 mb-8 last:mb-0"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-blue-500 flex items-center justify-center font-bold text-white flex-shrink-0">
                      {idx + 1}
                    </div>
                    {idx < milestones.length - 1 && (
                      <div className="w-1 h-16 bg-gradient-to-b from-blue-600 to-transparent mt-2" />
                    )}
                  </div>
                  <div className="pb-8">
                    <div className="text-2xl font-bold text-blue-400 mb-1">{milestone.year}</div>
                    <div className="text-lg text-slate-200">{milestone.event}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>

        {/* Contact CTA */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-t border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl font-bold mb-4">Want to Learn More?</h2>
              <p className="text-lg text-slate-300 mb-8 text-balance">
                Connect with our team to discuss partnerships and business opportunities
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/quote">Request a Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/contact">Contact Details</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
    </main>
  )
}

function Quality(props: any) {
  return <Award {...props} />
}
