"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/content/company";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function ContactPage() {
  const whatsappNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER ||
    (COMPANY_INFO.contact as any)?.whatsapp ||
    "";

  const handleWhatsApp = () => {
    openWhatsAppChat("Hello BMPL, I would like to inquire about your products and services.");
  };

  const mapQuery = encodeURIComponent(
    `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`
  );
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${mapQuery}`;

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
      value: whatsappNumber ? `+${whatsappNumber}` : "Chat with us",
      action: "Chat Now",
      onClick: handleWhatsApp,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}`,
      href: googleMapsUrl,
      action: "Open in Maps",
    },
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
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-slate-300 text-balance">
              Have questions? We’re here to help. Contact BMPL for quotations, inquiries, or partnerships.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="py-20 md:py-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="h-full"
                >
                  <Card
                    variant="glass"
                    className="h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    <div className="w-11 h-11 rounded-xl bg-blue-500/10 ring-1 ring-white/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-blue-300" />
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-semibold text-white">{method.label}</h3>
                      <p className="text-sm text-slate-400 leading-relaxed">{method.value}</p>
                    </div>

                    {/* CTA */}
                    {method.href ? (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                        asChild
                      >
                        <a href={method.href} target="_blank" rel="noreferrer">
                          {method.action}
                        </a>
                      </Button>
                    ) : (
                      <Button
                        variant="secondary"
                        size="sm"
                        className="mt-2 w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                        onClick={method.onClick}
                      >
                        {method.action}
                      </Button>
                    )}
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hours & Location */}
      <section className="relative py-20 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
            >
              <Card variant="glass" className="h-full border-white/10 bg-white/[0.03]">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-300" />
                  <h2 className="text-2xl font-bold text-white">Business Hours</h2>
                </div>

                <div className="mt-4 space-y-4">
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

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45, delay: 0.05 }}
            >
              <Card variant="glass" className="h-full border-white/10 bg-white/[0.03]">
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-blue-300" />
                    <h2 className="text-2xl font-bold text-white">Our Location</h2>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                    asChild
                  >
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                      Open Map <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-4 space-y-2 text-slate-400">
                  <p>{COMPANY_INFO.address.street}</p>
                  <p>
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </p>
                  <p>
                    {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postal}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="w-full h-64 rounded-2xl bg-white/[0.02] border border-white/10 flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-slate-500 mx-auto mb-2" />
                      <p className="text-sm text-slate-500">Embed map can be added later</p>
                      <p className="text-xs text-slate-600 mt-1">For now, use “Open Map” above.</p>
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
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Quick Actions</h2>
            <p className="text-lg text-slate-400 mb-8 text-balance">
              Ready to get started? Request a quotation or browse our product range.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>
              <Button size="lg" variant="secondary" className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10" asChild>
                <Link href="/products">View Products</Link>
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
