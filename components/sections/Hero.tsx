"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download, MapPin, ShieldCheck } from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/content/company";

const HERO_IMAGE = "/steel-manufacturing-facility.jpg";
// Put your brochure PDF in /public and update name here.
const BROCHURE_HREF = "/brochure.pdf";

export default function Hero() {
  const headline = "Built for Fabrication. Trusted for Strength.";

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

      {/* Readability overlays (slightly stronger on LIGHT theme only) */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-black/65 dark:bg-black/55" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-b from-black/80 via-black/40 to-black/85 dark:from-black/75 dark:via-black/35 dark:to-black/80" />

      {/* Subtle texture */}
      <div className="pointer-events-none absolute inset-0 -z-20 dot-grid opacity-[0.04] dark:opacity-[0.06]" />

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
                border-white/18 bg-black/25 backdrop-blur text-white
                dark:border-white/15 dark:bg-white/5
              "
            >
              <span className="inline-flex h-2 w-2 rounded-full bg-[#38BDF8] dark:bg-primary" />
              {COMPANY_INFO.tagline || "Precision in every Angle"}
            </div>
          </motion.div>

          {/* Headline (LIGHT: hard-coded gradient, DARK: your existing gradient-text) */}
          <motion.h1
            variants={item}
            className="mt-6 text-5xl font-bold leading-[1.05] text-white md:text-6xl lg:text-7xl"
          >
            <span className="dark:hidden bg-gradient-to-r from-[#38BDF8] via-[#60A5FA] to-[#2563EB] bg-clip-text text-transparent drop-shadow-[0_10px_32px_rgba(0,0,0,0.55)]">
              {headline}
            </span>
            <span className="hidden dark:inline gradient-text">{headline}</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={item}
            className="mx-auto mt-5 max-w-2xl text-lg text-white/80 md:text-xl text-balance dark:text-white/75"
          >
            High-performance steel products for fabrication and structural
            applications. Get a fast quotation with reliable dispatch.
          </motion.p>

          {/* Proof row */}
          <motion.div
            variants={item}
            className="mx-auto mt-6 flex flex-col items-center justify-center gap-2 text-sm text-white/75 sm:flex-row sm:gap-6 dark:text-white/70"
          >
            <span className="inline-flex items-center gap-2">
              <MapPin className="h-4 w-4 text-white/60" />
              {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
            </span>

            <span className="hidden h-4 w-px bg-white/15 sm:block" />

            <span className="inline-flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-white/60" />
              Established 1987 • Urla Industrial Complex
            </span>
          </motion.div>

          {/* Clean CTA cluster */}
          <motion.div variants={item} className="mx-auto mt-10 max-w-3xl">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
              <Button
                size="lg"
                className="
                  rounded-2xl sm:min-w-[190px]
                  bg-[#2563EB] text-white hover:bg-[#1D4ED8]
                  shadow-[0_18px_45px_rgba(37,99,235,0.35)]
                  dark:bg-primary dark:hover:bg-primary/90 dark:shadow-none
                "
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

              <a
                href={BROCHURE_HREF}
                download
                className="
                  inline-flex w-full items-center justify-center gap-2 rounded-2xl border px-4 py-3
                  text-sm font-semibold text-white transition sm:w-auto
                  border-white/18 bg-black/25 hover:bg-black/35
                  dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10
                "
                aria-label="Download brochure"
              >
                <Download className="h-4 w-4 text-[#38BDF8] dark:text-primary" />
                Download Brochure
              </a>
            </div>

            <p className="mt-4 text-center text-[12px] text-white/60">
              Typical response within 24 hours
            </p>
          </motion.div>

          {/* Scroll cue */}
          <motion.div variants={item} className="mt-10 flex justify-center">
            <a
              href="products"
              className="
                group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition-colors
                border-white/18 bg-black/25 backdrop-blur text-white hover:bg-black/35
                dark:border-white/15 dark:bg-white/5 dark:hover:bg-white/10
              "
            >
              Explore Products
              <span
                className="
                  inline-flex h-6 w-6 items-center justify-center rounded-full transition-colors
                  bg-[#38BDF8]/20 group-hover:bg-[#38BDF8]/28
                  dark:bg-primary/15 dark:group-hover:bg-primary/20
                "
              >
                <ArrowRight className="h-4 w-4 text-[#38BDF8] dark:text-primary" />
              </span>
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
