"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
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

type ContactMethod =
  | {
      icon: LucideIcon;
      label: string;
      value: string;
      action: string;
      href: string;
      external?: boolean;
      onClick?: never;
    }
  | {
      icon: LucideIcon;
      label: string;
      value: string;
      action: string;
      onClick: () => void;
      href?: never;
      external?: never;
    };

function normalizeE164Like(input: string) {
  const raw = (input || "").trim();
  if (!raw) return "";
  const digits = raw.replace(/[^\d]/g, "");
  return digits ? `+${digits}` : "";
}

/**
 * ✅ SAME AS YOUR PRODUCTS/ABOUT FIX:
 * - No “global” page backdrop (removes seams / unexpected stacking)
 * - Each section gets:
 *   LIGHT: subtle gradient wash
 *   DARK : flat wash (no gradient)
 *   Optional dots (token driven)
 */
function LightWash() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent"
    />
  );
}

function DarkWash() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-primary/6"
    />
  );
}

function Dots() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 opacity-[0.055] dark:opacity-[0.10] dot-grid"
    />
  );
}

export default function ContactPage() {
  const whatsappNumberRaw =
    process.env.NEXT_PUBLIC_WHATSAPP_BUSINESS_NUMBER ||
    (COMPANY_INFO.contact as any)?.whatsapp ||
    "";

  const whatsappDisplay = useMemo(
    () => normalizeE164Like(whatsappNumberRaw) || "Chat with us",
    [whatsappNumberRaw],
  );

  const handleWhatsApp = () => {
    openWhatsAppChat(
      "Hello BMPL, I would like to inquire about your products and services.",
    );
  };

  const mapQuery = encodeURIComponent(
    `${COMPANY_INFO.address.street}, ${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`,
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
      value: whatsappDisplay,
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

  const glassCard =
    "border border-border bg-card/70 hover:bg-card/90 hover:border-primary/20 transition-colors " +
    "dark:bg-card/40 dark:hover:bg-card/55 dark:hover:border-primary/25";

  return (
    <main className="relative overflow-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <LightWash />
        <DarkWash />
        <Dots />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <h1 className="mb-6 text-5xl font-bold text-foreground md:text-6xl">
              Get in <span className="gradient-text">Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground text-balance">
              Have questions? We’re here to help. Contact BMPL for quotations,
              inquiries, or partnerships.
            </p>
          </motion.div>
        </Container>
      </section>

      {/* CONTACT METHODS */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <LightWash />
        <DarkWash />
        <Dots />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            className="mb-14 text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Contact <span className="gradient-text">Options</span>
            </h2>
            <p className="text-lg text-muted-foreground text-balance">
              Choose the fastest channel for your requirement—we respond
              quickly.
            </p>
          </motion.div>

          {/* Command Bar */}
          <div className="mx-auto max-w-6xl">
            <div
              className="
                relative overflow-hidden rounded-3xl
                border border-border/70 bg-card/60 backdrop-blur-xl
                dark:bg-card/35
              "
            >
              {/* top hairline */}
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

              <div className="relative flex flex-col lg:flex-row">
                {contactMethods.map((method, idx) => {
                  const Icon = method.icon;
                  const isLink = "href" in method;

                  const meta =
                    method.label === "Phone"
                      ? { badge: "DIRECT", hint: "Fastest for urgent requirements" }
                      : method.label === "Email"
                        ? { badge: "OFFICIAL", hint: "Best for quotations & documents" }
                        : method.label === "WhatsApp"
                          ? { badge: "FAST", hint: "Quick chat for sizes & availability" }
                          : { badge: "MAP", hint: "Open directions in Google Maps" };

                  const segmentBorder =
                    idx === 0
                      ? ""
                      : "border-t border-border/60 dark:border-white/10 lg:border-t-0 lg:border-l";

                  const baseInteractive =
                    "group/seg w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

                  const segmentSurface =
                    "h-full px-7 py-7 transition-colors " +
                    "hover:bg-background/35 dark:hover:bg-white/[0.03]";

                  const actionPill =
                    "mt-7 inline-flex w-full items-center justify-between " +
                    "rounded-full border border-border/70 bg-background/30 px-4 py-2.5 " +
                    "text-sm font-semibold text-foreground/90 transition " +
                    "group-hover/seg:border-primary/25 group-hover/seg:bg-background/45 " +
                    "dark:border-white/10 dark:bg-white/[0.02] dark:group-hover/seg:bg-white/[0.04]";

                  const SegmentInner = (
                    <div className="flex h-full flex-col">
                      {/* ROW 1 */}
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-4 min-w-0">
                          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-border/70 dark:ring-white/10">
                            <Icon className="h-5 w-5 text-primary" />
                          </div>

                          <div className="min-w-0">
                            <div className="text-base font-semibold text-foreground truncate">
                              {method.label}
                            </div>
                          </div>
                        </div>

                        <span className="inline-flex shrink-0 items-center rounded-full border border-border/70 bg-background/30 px-2.5 py-1 text-[10px] font-semibold tracking-widest text-muted-foreground dark:border-white/10 dark:bg-white/[0.02]">
                          {meta.badge}
                        </span>
                      </div>

                      {/* ROW 2 */}
                      <div className="mt-5 min-w-0">
                        <div className="text-[15px] font-semibold text-foreground/90 leading-snug break-words">
                          {method.value}
                        </div>

                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                          {meta.hint}
                        </p>
                      </div>

                      <div className="flex-1" />

                      {/* ROW 3 */}
                      <div className={actionPill}>
                        <span>{method.action}</span>
                        <ArrowRight className="h-4 w-4 opacity-80 transition-transform duration-200 group-hover/seg:translate-x-0.5" />
                      </div>
                    </div>
                  );

                  return (
                    <div key={method.label} className={`flex-1 ${segmentBorder}`}>
                      {isLink ? (
                        <a
                          href={method.href}
                          target={method.external ? "_blank" : undefined}
                          rel={method.external ? "noreferrer" : undefined}
                          aria-label={method.action}
                          className={`${baseInteractive} block ${segmentSurface}`}
                        >
                          {SegmentInner}
                        </a>
                      ) : (
                        <button
                          type="button"
                          onClick={method.onClick}
                          aria-label={method.action}
                          className={`${baseInteractive} ${segmentSurface}`}
                        >
                          {SegmentInner}
                        </button>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* HOURS & LOCATION */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <LightWash />
        <DarkWash />
        <Dots />

        <Container className="relative">
          <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
            {/* Hours */}
            <motion.div
              initial={{ opacity: 0, x: -14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.45 }}
              className="h-full"
            >
              <Card variant="glass" className={`h-full ${glassCard}`}>
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-border/70 dark:ring-white/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-foreground">
                      Business Hours
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      Typical response within 24 hours
                    </p>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <div className="rounded-2xl border border-border/70 bg-background/40 p-4 dark:bg-card/30">
                    <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                      MONDAY – FRIDAY
                    </div>
                    <div className="mt-1 text-foreground/90">
                      {COMPANY_INFO.hours.weekday}
                    </div>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-background/40 p-4 dark:bg-card/30">
                    <div className="text-xs font-semibold tracking-widest text-muted-foreground">
                      SATURDAY – SUNDAY
                    </div>
                    <div className="mt-1 text-foreground/90">
                      {COMPANY_INFO.hours.weekend}
                    </div>
                  </div>

                  <div className="mt-auto pt-2">
                    <div className="h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent dark:via-white/10" />
                    <p className="mt-3 text-center text-xs text-muted-foreground">
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
              <Card variant="glass" className={`h-full ${glassCard}`}>
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary/10 ring-1 ring-border/70 dark:ring-white/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-foreground">
                        Our Location
                      </h2>
                      <p className="text-sm text-muted-foreground">
                        Raipur, Chhattisgarh
                      </p>
                    </div>
                  </div>

                  <Button
                    variant="secondary"
                    size="sm"
                    className="rounded-2xl border border-border bg-card/60 hover:bg-card/80 dark:bg-card/45 dark:hover:bg-card/60"
                    asChild
                  >
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
                  <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-border/70 bg-background/40 dark:bg-card/30">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9283.056427176549!2d81.61204305467284!3d21.30728021873843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28e72ff10775d1%3A0xc5dd741b3131239e!2sBhawani%20Moulders%20(P)%20LImited!5e1!3m2!1sen!2sin!4v1769145558707!5m2!1sen!2sin"
                      className="absolute inset-0 h-full w-full"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>

                <div className="mt-auto pt-6">
                  <div className="h-px w-full bg-gradient-to-r from-transparent via-border/70 to-transparent dark:via-white/10" />
                  <p className="mt-3 text-center text-xs text-muted-foreground">
                    Share your delivery location and quantity for the fastest quotation.
                  </p>
                </div>
              </Card>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* QUICK LINKS */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <LightWash />
        <DarkWash />
        <Dots />

        <Container className="relative">
          <motion.div
            variants={sectionFade}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.35 }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="mb-4 text-4xl font-bold text-foreground">
              Quick <span className="gradient-text">Actions</span>
            </h2>
            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Ready to get started? Request a quotation or browse our product range.
            </p>

            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote">Request Quote</Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-border bg-card/60 hover:bg-card/80 dark:bg-card/45 dark:hover:bg-card/60"
                asChild
              >
                <Link href="/products">View Products</Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-border bg-card/60 hover:bg-card/80 dark:bg-card/45 dark:hover:bg-card/60"
                onClick={handleWhatsApp}
              >
                Chat on WhatsApp
                <ArrowRight className="ml-2 h-4 w-4 opacity-80" />
              </Button>
            </div>

            <p className="mt-6 text-sm text-muted-foreground">
              Response within 24 hours. No commitment required.
            </p>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
