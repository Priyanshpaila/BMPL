"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  MapPin,
  ShieldCheck,
  Layers,
  Truck,
  Building2,
  Ruler,
  BadgeCheck,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { COMPANY_INFO } from "@/content/company";

const BROCHURE_HREF = "/brochure.pdf";
const HERO_BG = "/steel-manufacturing-facility.jpg";

export default function Hero() {
  const wrap = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };
  const item = {
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // ✅ Slightly more solid in LIGHT mode for readability on photo background
  const tileBase =
    "relative overflow-hidden rounded-[28px] md:rounded-[32px] border border-border " +
    "bg-background/80 dark:bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/65 dark:supports-[backdrop-filter]:bg-card/40";

  const miniLabel =
    "text-[11px] font-semibold tracking-[0.14em] uppercase text-muted-foreground";

  const topLine =
    "pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent dark:hidden";
  const topLineDark =
    "pointer-events-none absolute inset-x-0 top-0 hidden h-px bg-white/10 dark:block";

  return (
    <section className="dark relative overflow-hidden pt-28 pb-20 md:pt-32 md:pb-28">
      {/* Background image */}
      <div
        className="pointer-events-none absolute inset-0 -z-40 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
        aria-hidden="true"
      />

      {/* ✅ Overlay (FIX): Base wash + left-focused readability gradient */}
      {/* Base wash: light mode = softer (not white-out), dark mode = stronger */}
      <div
        className="pointer-events-none absolute inset-0 -z-30
                   bg-gradient-to-b
                   from-background/55 via-background/35 to-background/65
                   dark:from-black/80 dark:via-black/70 dark:to-black/95"
        aria-hidden="true"
      />
      {/* Left emphasis: improves contrast behind headline + copy */}
      <div
        className="pointer-events-none absolute inset-0 -z-30
                   bg-gradient-to-r
                   from-background/85 via-background/45 to-transparent
                   dark:from-black/85 dark:via-black/55 dark:to-transparent"
        aria-hidden="true"
      />

      <div className="pointer-events-none absolute inset-0 -z-20 dot-grid opacity-[0.06] dark:opacity-[0.10]" />

      {/* Light-only ambience */}
      <div className="pointer-events-none absolute inset-0 -z-20 bg-primary/5 dark:hidden" />
      <div className="pointer-events-none absolute -top-28 left-[-140px] -z-20 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl dark:hidden" />
      <div className="pointer-events-none absolute -bottom-32 right-[-160px] -z-20 h-[560px] w-[560px] rounded-full bg-accent/10 blur-3xl dark:hidden" />

      {/* Dark-only wash */}
      {/* <div className="pointer-events-none absolute inset-0 -z-20 hidden dark:block bg-primary/6" /> */}

      <Container className="relative">
        <motion.div
          variants={wrap}
          initial="hidden"
          animate="show"
          className="grid grid-cols-12 gap-8 lg:gap-10"
        >
          {/* LEFT */}
          <motion.div variants={item} className="col-span-12 lg:col-span-8">
            {/* Chips */}
            <div className="mb-8 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur dark:bg-background/40">
                <span className="h-2 w-2 rounded-full bg-primary" />
                {COMPANY_INFO.tagline || "Precision in every Angle"}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur dark:bg-background/40">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Established 1987
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-background/75 px-4 py-2 text-xs font-semibold text-foreground backdrop-blur dark:bg-background/40">
                <Layers className="h-4 w-4 text-primary" />
                Light Structural MS
              </span>
            </div>

            {/* Headline */}
            <h1 className="max-w-[18ch] text-5xl font-extrabold leading-[1.02] tracking-[-0.03em] text-foreground md:text-6xl lg:text-7xl">
              BUILDING SUPERIOR{" "}
              <span className="block mt-2">
                STEEL{" "}
                {/* ✅ Gradient readability fix in LIGHT mode */}
                <span className="dark:hidden gradient-text drop-shadow-[0_2px_12px_rgba(0,0,0,0.18)]">
                  SOLUTIONS
                </span>
                <span className="hidden dark:inline text-primary">SOLUTIONS</span>{" "}
                FOR
              </span>
              <span className="block mt-2">MODERN FABRICATION</span>
            </h1>

            {/* Subtext: slightly stronger in light mode */}
            <p className="mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 dark:text-muted-foreground md:text-lg">
              High-performance mild steel products engineered for fabrication and structural reliability —
              consistent output, dependable supply, and fast dispatch.
            </p>

            {/* CTA */}
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Button size="lg" className="h-12 rounded-2xl px-7" asChild>
                <Link href="/quote" className="inline-flex items-center gap-2">
                  Request Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <div className="flex items-center gap-4 text-sm text-foreground/70 dark:text-muted-foreground">
                <a
                  href={BROCHURE_HREF}
                  download
                  className="inline-flex items-center gap-2 hover:text-foreground smooth-transition"
                >
                  <Download className="h-4 w-4 text-primary" />
                  Download brochure
                </a>

                <span className="hidden sm:block h-4 w-px bg-border" />

                <span className="text-[12px]">
                  Typical response within <span className="text-foreground font-semibold">24 hours</span>
                </span>
              </div>
            </div>

            {/* Mini bento row */}
            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
              {[
                {
                  icon: MapPin,
                  k: "LOCATION",
                  v: `${COMPANY_INFO.address.city}, ${COMPANY_INFO.address.state}`,
                },
                { icon: ShieldCheck, k: "QUALITY", v: "Process-controlled output" },
                { icon: Truck, k: "DISPATCH", v: "Bulk supply ready" },
              ].map((s) => {
                const Icon = s.icon;
                return (
                  <div key={s.k} className={`${tileBase} p-6 md:p-7`}>
                    <div className={topLine} />
                    <div className={topLineDark} />

                    <div className="flex items-start gap-4">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-primary/12 ring-1 ring-border/70">
                        <Icon className="h-5 w-5 text-primary" />
                      </div>
                      <div className="min-w-0">
                        <div className={miniLabel}>{s.k}</div>
                        <div className="mt-2 text-sm font-semibold text-foreground leading-snug">
                          {s.v}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div variants={item} className="col-span-12 lg:col-span-4">
            <div className="grid gap-6">
              {/* ✅ More padding + header icon + feature icons */}
              <div className={`${tileBase} p-8 md:p-10`}>
                <div className={topLine} />
                <div className={topLineDark} />

                {/* soft inner sheen */}
                <div
                  className="pointer-events-none absolute inset-0
                             bg-gradient-to-b from-primary/2 via-transparent to-transparent
                             dark:from-primary/5"
                  aria-hidden="true"
                />

                <div className="relative">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className={miniLabel}>BMPL MANUFACTURING</div>
                      <div className="mt-2 text-lg font-semibold text-foreground">
                        Product range & supply
                      </div>
                    </div>

                    <div className="grid h-12 w-12 place-items-center rounded-2xl bg-primary/5 ring-1 ring-border/70">
                      <Building2 className="h-5 w-5 text-primary" />
                    </div>
                  </div>

                  <p className="mt-4 text-[15px] leading-relaxed text-foreground/70 dark:text-muted-foreground">
                    Angles, flats, rounds, squares, billets, channels & gate channels —
                    built for fabricators who need consistent sizes and reliable supply.
                  </p>

                  {/* Tags */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {["Angles", "Flats", "Rounds", "Squares", "Channels", "Gate Channels"].map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-full border border-border bg-background/70 px-3 py-1 text-xs font-semibold text-foreground backdrop-blur dark:bg-background/30"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* ✅ Icon feature rows */}
                  <div className="mt-7 grid gap-3">
                    {[
                      { icon: Ruler, text: "Consistent sizes & tolerances" },
                      { icon: BadgeCheck, text: "Process-driven quality checks" },
                      { icon: Truck, text: "Dispatch-ready stock availability" },
                    ].map((f) => {
                      const Icon = f.icon;
                      return (
                        <div
                          key={f.text}
                          className="flex items-start gap-3 rounded-2xl border border-border/70 bg-background/55 px-4 py-3 backdrop-blur dark:bg-background/20"
                        >
                          <div className="grid h-9 w-9 place-items-center rounded-xl bg-primary/12 ring-1 ring-border/70">
                            <Icon className="h-4.5 w-4.5 text-primary" />
                          </div>
                          <div className="pt-1 text-sm font-semibold text-foreground/80 dark:text-muted-foreground">
                            {f.text}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 pt-7 flex justify-center items-center border-t border-border/70">
                    <Link
                      href="/products"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary smooth-transition"
                    >
                      Explore product range <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
