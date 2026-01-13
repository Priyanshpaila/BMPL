"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
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
    openWhatsAppChat(
      "Hello BMPL, I would like to inquire about your products and services."
    );
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
      external: false,
    },
    {
      icon: Mail,
      label: "Email",
      value: COMPANY_INFO.contact.email,
      href: `mailto:${COMPANY_INFO.contact.email}`,
      action: "Email Us",
      external: false,
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: whatsappNumber ? `+${whatsappNumber}` : "Chat with us",
      action: "Chat Now",
      onClick: handleWhatsApp,
      external: false,
    },
    {
      icon: MapPin,
      label: "Location",
      value: `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}`,
      href: googleMapsUrl,
      action: "Open in Maps",
      external: true,
    },
  ] as const;

  const sectionFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

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
              Have questions? We’re here to help. Contact BMPL for quotations,
              inquiries, or partnerships.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Contact <span className="gradient-text">Options</span>
            </h2>
            <p className="text-lg text-slate-400 text-balance">
              Choose the fastest channel for your requirement—we respond quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const hasHref = "href" in method && !!method.href;
              const isExternal = "external" in method && !!method.external;

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
                    className="group h-full border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                  >
                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-semibold text-white leading-snug">
                            {method.label}
                          </h3>
                          <p className="mt-1 text-sm text-slate-400 leading-relaxed line-clamp-2">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Body (flex fill) */}
                    <div className="mt-3 flex-1" />

                    {/* Footer (pinned) */}
                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

                      {hasHref ? (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                          asChild
                        >
                          <a
                            href={(method as any).href}
                            target={isExternal ? "_blank" : undefined}
                            rel={isExternal ? "noreferrer" : undefined}
                          >
                            {method.action}
                            <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          size="sm"
                          className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                          onClick={(method as any).onClick}
                        >
                          {method.action}
                          <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                        </Button>
                      )}
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Hours & Location */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent" />
        <div className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="h-full"
            >
              <Card
                variant="glass"
                className="h-full border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                    <Clock className="h-5 w-5 text-blue-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      Business Hours
                    </h2>
                    <p className="text-sm text-slate-400">
                      Typical response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="text-xs font-semibold tracking-widest text-slate-400">
                      MONDAY – FRIDAY
                    </div>
                    <div className="mt-1 text-slate-200">
                      {COMPANY_INFO.hours.weekday}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
                    <div className="text-xs font-semibold tracking-widest text-slate-400">
                      SATURDAY – SUNDAY
                    </div>
                    <div className="mt-1 text-slate-200">
                      {COMPANY_INFO.hours.weekend}
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                    <p className="mt-3 text-xs text-slate-500">
                      Timezone: {COMPANY_INFO.hours.timezone}
                    </p>
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
              className="h-full"
            >
              <Card
                variant="glass"
                className="h-full border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                      <MapPin className="h-5 w-5 text-blue-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-white">
                        Our Location
                      </h2>
                      <p className="text-sm text-slate-400">
                        Raipur, Chhattisgarh
                      </p>
                    </div>
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

                <div className="mt-6 space-y-1 text-slate-300">
                  <p>{COMPANY_INFO.address.street}</p>
                  <p className="text-slate-400">
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </p>
                  <p className="text-slate-500">
                    {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postal}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02]">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/[0.04] to-transparent" />
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                          <MapPin className="h-6 w-6 text-blue-300" />
                        </div>
                        <p className="text-sm text-slate-300">
                          Map embed can be added later
                        </p>
                        <p className="mt-1 text-xs text-slate-500">
                          For now, use “Open Map” above for directions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                  <p className="mt-3 text-xs text-slate-500">
                    Share your delivery location and quantity for the fastest
                    quotation.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.10] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:28px_28px]" />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4">
              Quick <span className="gradient-text">Actions</span>
            </h2>
            <p className="text-lg text-slate-400 mb-8 text-balance">
              Ready to get started? Request a quotation or browse our product
              range.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                asChild
              >
                <Link href="/products">View Products</Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={handleWhatsApp}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
              </Button>
            </div>

            <p className="text-sm text-slate-500 mt-6">
              Response within 24 hours. No commitment required.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
