"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MessageCircle,
  Phone,
  MapPin,
  ShieldCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/content/company";
import { openWhatsAppChat } from "@/lib/whatsapp";

const HERO_IMAGE = "/steel-manufacturing-facility.jpg";
// Put your brochure PDF in /public and update name here.
const BROCHURE_HREF = "/brochure.pdf";

export default function Hero() {
const headline = "Built for Fabrication. Trusted for Strength.";


  const handleWhatsApp = () =>
    openWhatsAppChat(
      "Hello BMPL, I would like a quotation for MS Billets / Angles / Channels. Please share price and dispatch timeline.",
    );

  const wrap = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Background image */}
      <div className="absolute inset-0 -z-30">
        <Image
          src={HERO_IMAGE}
          alt="BMPL steel manufacturing facility"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Readability overlays */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-black/55" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/75 via-black/35 to-black/80" />

      {/* Brand glow + subtle texture */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(60%_55%_at_18%_10%,color-mix(in_oklch,var(--primary)_26%,transparent),transparent_62%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 dot-grid opacity-[0.045] dark:opacity-[0.06]" />

      <Container className="relative">
        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={item} className="flex justify-center">
            <div
              className="
                inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm
                border-white/15 bg-white/5 backdrop-blur text-white
              "
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-primary" />
              {COMPANY_INFO.tagline || "Precision in every Angle"}
            </div>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            <span className="gradient-text">{headline}</span>
          </motion.h1>

          {/* Subtext (clean + short) */}
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-lg text-white/75 md:text-xl text-balance"
          >
            High-performance steel products for fabrication and structural
            applications. Get a fast quotation with reliable dispatch.
          </motion.p>

          {/* Proof row */}
          <motion.div
            variants={item}
            className="mx-auto mt-6 flex flex-col items-center justify-center gap-2 text-sm text-white/70 sm:flex-row sm:gap-6"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/55" />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
            </span>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-white/55" />
              Established 1987 • Urla Industrial Complex
            </span>
          </motion.div>

          {/* CTA cluster (NO enquiry block) */}
          <motion.div variants={item} className="mx-auto mt-10 max-w-3xl">
            {/* <div
              className="
                rounded-3xl border border-white/12 bg-white/[0.04] backdrop-blur-md
                px-5 py-5 sm:px-7 sm:py-6
              "
            > */}
              {/* Primary row */}
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
                <Button
                  size="lg"
                  className="rounded-2xl sm:min-w-[190px]"
                  asChild
                >
                  <Link
                    href="/quote"
                    className="inline-flex items-center justify-center gap-2"
                  >
                    Request Quote
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>

                {/* <Button
                  size="lg"
                  variant="secondary"
                  className="
                    rounded-2xl sm:min-w-[190px]
                    border border-white/15 bg-white/5 backdrop-blur
                    text-white hover:bg-white/10
                  "
                  onClick={handleWhatsApp}
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="
                    rounded-2xl sm:min-w-[160px]
                    border border-white/15 bg-transparent
                    text-white hover:bg-white/10
                  "
                  asChild
                >
                  <a
                    href={`tel:${COMPANY_INFO.contact.phone}`}
                    className="inline-flex items-center justify-center gap-2"
                  >
                    <Phone className="h-4 w-4" />
                    Call
                  </a>
                </Button> */}
                                <a
                  href={BROCHURE_HREF}
                  download
                  className="
                    inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3
                    text-sm font-semibold
                    border-white/15 bg-white/5 text-white
                    hover:bg-white/10 transition sm:w-auto
                  "
                >
                  <Download className="h-4 w-4 text-primary" />
                  Download Brochure
                </a>
              </div>

              {/* Secondary row */}
              {/* <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href={BROCHURE_HREF}
                  download
                  className="
                    inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3
                    text-sm font-semibold
                    border-white/15 bg-white/5 text-white
                    hover:bg-white/10 transition sm:w-auto
                  "
                >
                  <Download className="h-4 w-4 text-primary" />
                  Download Brochure
                </a>
              </div> */}
              <div className="mt-4 flex flex-col items-center justify-center gap-3 sm:flex-row">
                {" "}
                <p className="text-center text-[12px] text-white/55 sm:text-left">
                  Typical response within 24 hours 
                </p>
              </div>
            {/* </div> */}
          </motion.div>

          {/* Scroll cue */}
          <motion.div variants={item} className="mt-10 flex justify-center">
            <a
              href="products"
              className="
                group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors
                border-white/15 bg-white/5 backdrop-blur text-white hover:bg-white/10
              "
            >
              Explore Products
              <span
                className="
                  inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors
                  bg-primary/15 group-hover:bg-primary/20
                "
              >
                <ArrowRight className="h-4 w-4 text-primary" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
