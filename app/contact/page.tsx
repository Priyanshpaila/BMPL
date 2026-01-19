"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowRight } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/content/company";
import { openWhatsAppChat } from "@/lib/whatsapp";

type ContactMethod =
  | {
      icon: any;
      label: string;
      value: string;
      action: string;
      href: string;
      external?: boolean;
      onClick?: never;
    }
  | {
      icon: any;
      label: string;
      value: string;
      action: string;
      onClick: () => void;
      href?: never;
      external?: never;
    };

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

  const contactMethods: ContactMethod[] = [
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
      external: true,
    },
  ];

  const sectionFade = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
  };

  const bgDots =
    "pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]" +
    " [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.14)_1px,transparent_0)]" +
    " dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)]" +
    " [background-size:28px_28px]";

  const glass =
    "border-border/60 bg-background/50 backdrop-blur supports-[backdrop-filter]:bg-background/40 shadow-sm";

  const cardHover =
    "transition-colors hover:bg-background/60 hover:border-blue-500/30";

  const iconWrap =
    "flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10";

  const actionBtn =
    "w-full rounded-2xl border border-border/60 bg-secondary/60 hover:bg-secondary/80";

  return (
    <main>
      {/* Hero */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent dark:from-blue-600/12" />
        <div className={bgDots} />
        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Have questions? We’re here to help. Contact BMPL for quotations, inquiries, or partnerships.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Contact Methods */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        <div className={bgDots} />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Contact <span className="gradient-text">Options</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Choose the fastest channel for your requirement—we respond quickly.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 items-stretch">
            {contactMethods.map((method, idx) => {
              const Icon = method.icon;
              const isLink = "href" in method;

              return (
                <motion.div
                  key={method.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: idx * 0.06, duration: 0.45 }}
                  className="h-full"
                >
                  <Card variant="glass" className={`group h-full ${glass} ${cardHover}`}>
                    <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/25 to-transparent" />

                    {/* Header */}
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex items-start gap-4 min-w-0">
                        <div className={iconWrap}>
                          <Icon className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                        </div>

                        <div className="min-w-0">
                          <h3 className="font-semibold leading-snug text-foreground">
                            {method.label}
                          </h3>
                          <p className="mt-1 text-sm text-muted-foreground leading-relaxed line-clamp-2">
                            {method.value}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="mt-3 flex-1" />

                    {/* Footer */}
                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />

                      {isLink ? (
                        <Button variant="secondary" size="sm" className={`mt-3 ${actionBtn}`} asChild>
                          <a
                            href={method.href}
                            target={method.external ? "_blank" : undefined}
                            rel={method.external ? "noreferrer" : undefined}
                          >
                            {method.action}
                            <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
                          </a>
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          size="sm"
                          className={`mt-3 ${actionBtn}`}
                          onClick={method.onClick}
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
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/10 via-transparent to-transparent dark:from-blue-600/12" />
        <div className={bgDots} />
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
              <Card variant="glass" className={`h-full ${glass}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10">
                    <Clock className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">Business Hours</h2>
                    <p className="text-sm text-muted-foreground">Typical response within 24 hours</p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                    <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                      MONDAY – FRIDAY
                    </div>
                    <div className="mt-1 text-foreground/90">{COMPANY_INFO.hours.weekday}</div>
                  </div>

                  <div className="rounded-2xl border border-border/60 bg-background/40 p-4">
                    <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                      SATURDAY – SUNDAY
                    </div>
                    <div className="mt-1 text-foreground/90">{COMPANY_INFO.hours.weekend}</div>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                    <p className="mt-3 text-xs text-muted-foreground">
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
              <Card variant="glass" className={`h-full ${glass}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10">
                      <MapPin className="h-5 w-5 text-blue-700 dark:text-blue-300" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">Our Location</h2>
                      <p className="text-sm text-muted-foreground">Raipur, Chhattisgarh</p>
                    </div>
                  </div>

                  <Button variant="secondary" size="sm" className="rounded-2xl" asChild>
                    <a href={googleMapsUrl} target="_blank" rel="noreferrer">
                      Open Map <ArrowRight className="ml-1 h-4 w-4" />
                    </a>
                  </Button>
                </div>

                <div className="mt-6 space-y-1">
                  <p className="text-foreground/90">{COMPANY_INFO.address.street}</p>
                  <p className="text-muted-foreground">
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </p>
                  <p className="text-muted-foreground/80">
                    {COMPANY_INFO.address.country} - {COMPANY_INFO.address.postal}
                  </p>
                </div>

                <div className="mt-6">
                  <div className="relative w-full h-64 rounded-2xl overflow-hidden border border-border/60 bg-background/40">
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent" />
                    <div className="h-full w-full flex items-center justify-center">
                      <div className="text-center px-6">
                        <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-border/60 dark:ring-white/10">
                          <MapPin className="h-6 w-6 text-blue-700 dark:text-blue-300" />
                        </div>
                        <p className="text-sm text-foreground/90">Map embed can be added later</p>
                        <p className="mt-1 text-xs text-muted-foreground">
                          For now, use “Open Map” above for directions.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/60 to-transparent" />
                  <p className="mt-3 text-xs text-muted-foreground">
                    Share your delivery location and quantity for the fastest quotation.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Quick Links */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        <div className={bgDots} />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl font-bold mb-4 text-foreground">
              Quick <span className="gradient-text">Actions</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 text-balance">
              Ready to get started? Request a quotation or browse our product range.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>

              <Button size="lg" variant="secondary" className="rounded-2xl" asChild>
                <Link href="/products">View Products</Link>
              </Button>

              <Button size="lg" variant="secondary" className="rounded-2xl" onClick={handleWhatsApp}>
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground mt-6">
              Response within 24 hours. No commitment required.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
