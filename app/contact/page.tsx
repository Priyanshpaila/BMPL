"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"
import {Button} from  "@/components/ui/button"
import { COMPANY_INFO } from "@/content/company"
import { openWhatsAppChat } from "@/lib/whatsapp"

export default function ContactPage() {
  const handleWhatsApp = () => {
    openWhatsAppChat("Hello BMPL, I would like to inquire about your products and services.")
  }

  const contactMethods = [
    {
      icon: Phone,
      label: "Phone",
      value: COMPANY_INFO.contact.phone,
      href: `tel:${COMPANY_INFO.contact.phone}`,
      action: "Call Us",
    },
    {
      icon: Mail,
      label: "Email",
      value: COMPANY_INFO.contact.email,
      href: `mailto:${COMPANY_INFO.contact.email}`,
      action: "Email Us",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "+91 98765 43210",
      action: "Chat Now",
      onClick: handleWhatsApp,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}`,
      action: "View Map",
    },
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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-slate-300 text-balance">
                Have questions? We're here to help. Contact BMPL for quotations, inquiries, or partnerships.
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Contact Methods */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, idx) => {
                const Icon = method.icon
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <Card className="h-full flex flex-col hover:border-blue-500/50 smooth-transition">
                      <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center mb-4 flex-shrink-0">
                        <Icon className="w-6 h-6 text-blue-400" />
                      </div>
                      <h3 className="font-semibold mb-2">{method.label}</h3>
                      <p className="text-sm text-slate-400 mb-4 flex-grow">{method.value}</p>
                      {method.href ? (
                        <Button variant="outline" size="sm" className="w-full bg-transparent" asChild>
                          <Link href={method.href}>{method.action}</Link>
                        </Button>
                      ) : (
                        <Button variant="outline" size="sm" className="w-full bg-transparent" onClick={method.onClick}>
                          {method.action}
                        </Button>
                      )}
                    </Card>
                  </motion.div>
                )
              })}
            </div>
          </Container>
        </section>

        {/* Hours & Location */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <Clock className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold">Business Hours</h2>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-1">Monday - Friday</h3>
                      <p className="text-slate-400">{COMPANY_INFO.hours.weekday}</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-slate-200 mb-1">Saturday - Sunday</h3>
                      <p className="text-slate-400">{COMPANY_INFO.hours.weekend}</p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <p className="text-sm text-slate-500">Timezone: {COMPANY_INFO.hours.timezone}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <MapPin className="w-6 h-6 text-blue-400" />
                    <h2 className="text-2xl font-bold">Our Location</h2>
                  </div>
                  <div className="space-y-2 text-slate-400">
                    <p>{COMPANY_INFO.address.street}</p>
                    <p>
                      {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                    </p>
                    <p>
                      {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postal}
                    </p>
                  </div>
                  <div className="mt-6">
                    <div className="w-full h-64 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                        <p className="text-sm text-slate-500">Interactive map coming soon</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Quick Links */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-4">Quick Actions</h2>
              <p className="text-lg text-slate-400 mb-8 text-balance">
                Ready to get started? Use these quick links to request a quotation or view our products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <Link href="/quote">Request Quote</Link>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <Link href="/products">View Products</Link>
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
  )
}
