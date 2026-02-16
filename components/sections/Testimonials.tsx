"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TESTIMONIALS } from "@/content/testimonials";

function Stars({ rating }: { rating: number }) {
  const r = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={[
            "h-4 w-4",
            i < r ? "text-primary fill-primary" : "text-muted-foreground/40",
          ].join(" ")}
        />
      ))}
    </div>
  );
}

function initials(name: string) {
  const parts = name.trim().split(/\s+/).slice(0, 2);
  return parts.map((p) => p[0]?.toUpperCase()).join("");
}

export default function Testimonials() {
  const scrollerRef = React.useRef<HTMLDivElement | null>(null);
  const [canPrev, setCanPrev] = React.useState(false);
  const [canNext, setCanNext] = React.useState(true);

  const updateNavState = React.useCallback(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const max = el.scrollWidth - el.clientWidth;
    const x = el.scrollLeft;

    setCanPrev(x > 4);
    setCanNext(x < max - 4);
  }, []);

  React.useEffect(() => {
    updateNavState();
    const el = scrollerRef.current;
    if (!el) return;

    const onScroll = () => updateNavState();
    el.addEventListener("scroll", onScroll, { passive: true });

    const ro = new ResizeObserver(() => updateNavState());
    ro.observe(el);

    return () => {
      el.removeEventListener("scroll", onScroll);
      ro.disconnect();
    };
  }, [updateNavState]);

  const stepByOneCard = (dir: "prev" | "next") => {
    const el = scrollerRef.current;
    if (!el) return;

    const firstCard = el.querySelector<HTMLElement>("[data-tcard='1']");
    const cardW = firstCard ? firstCard.getBoundingClientRect().width : 360;

    // gap-6 => ~24px
    const step = cardW + 24;
    el.scrollBy({ left: dir === "next" ? step : -step, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.06 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 14, scale: 0.995 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.45 } },
  };

  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* Background wash (match your other sections) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
      <div className="pointer-events-none absolute inset-0 hidden dark:block bg-primary/6" />

      {/* Dot grid (token driven) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.12]
          [background-size:28px_28px]
          [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_0)]
        "
      />

      <Container className="relative">
        {/* Centered header */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.45 }}
            className="text-4xl md:text-5xl font-bold text-foreground"
          >
            Our trusted <span className="gradient-text">Clients</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.55 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-3 text-lg text-muted-foreground text-balance"
          >
            Feedback from fabricators and teams who rely on BMPL for consistent
            quality and reliable dispatch.
          </motion.p>

          {/* Controls (centered, below heading) */}
          <div className="mt-6 flex items-center justify-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => stepByOneCard("prev")}
              disabled={!canPrev}
              className="h-10 w-10 rounded-2xl border border-border bg-card/50 hover:bg-card/70 disabled:opacity-50"
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <Button
              type="button"
              variant="secondary"
              size="icon"
              onClick={() => stepByOneCard("next")}
              disabled={!canNext}
              className="h-10 w-10 rounded-2xl border border-border bg-card/50 hover:bg-card/70 disabled:opacity-50"
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-12"
        >
          {/* Edge fades */}
          <div className="pointer-events-none absolute left-0 mt-[-6px] h-[calc(100%-140px)] w-10 bg-gradient-to-r from-background to-transparent dark:from-background/0" />
          <div className="pointer-events-none absolute right-0 mt-[-6px] h-[calc(100%-140px)] w-10 bg-gradient-to-l from-background to-transparent dark:from-background/0" />

          <div
            ref={scrollerRef}
            className="
              flex gap-6 overflow-x-auto scroll-smooth pb-3
              snap-x snap-mandatory
              [-ms-overflow-style:none] [scrollbar-width:none]
              [&::-webkit-scrollbar]:hidden
            "
          >
            {TESTIMONIALS.map((t, idx) => (
              <motion.div
                key={t.id}
                variants={itemVariants}
                className="
                  snap-start shrink-0
                  basis-[92%]
                  md:basis-[calc(50%-12px)]
                  lg:basis-[calc(33.333%-16px)]
                "
                data-tcard={idx === 0 ? "1" : undefined}
              >
                <Card
                  variant="glass"
                  className="
                    group relative h-full overflow-hidden rounded-[26px]
                    border border-border bg-card/55 backdrop-blur
                    hover:bg-card/75 hover:border-primary/25 smooth-transition
                    dark:bg-card/40 dark:hover:bg-card/55
                  "
                >
                  {/* top accent line */}
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/25 to-transparent" />

                  {/* hover glow */}
                  <div
                    className="
                      pointer-events-none absolute -inset-0.5 rounded-[26px] opacity-0 blur-2xl
                      transition-opacity duration-300 group-hover:opacity-100
                      bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10
                      dark:from-primary/14 dark:via-accent/12 dark:to-primary/14
                    "
                  />

                  {/* Layout: header / quote / footer */}
                  <div className="relative flex h-full flex-col p-6 md:p-7">
                    {/* Header */}
                    <div className="flex items-start justify-between gap-4">
                      <div className="min-w-0">
                        <div className="text-sm font-semibold text-foreground">
                          {t.company}
                        </div>
                        <div className="mt-1.5">
                          <Stars rating={t.rating} />
                        </div>
                      </div>

                      <div
                        className="
                          grid h-11 w-11 shrink-0 place-items-center rounded-2xl
                          bg-primary/10 ring-1 ring-border/70
                        "
                        aria-hidden="true"
                      >
                        <span className="text-sm font-bold text-primary">
                          {initials(t.name)}
                        </span>
                      </div>
                    </div>

                    {/* Quote (balanced spacing, not bulky) */}
                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      “{t.quote}”
                    </p>

                    {/* Footer pinned */}
                    <div className="mt-auto pt-6">
                      <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent dark:via-white/10" />

                      <div className="mt-4 flex items-center justify-center gap-3">
                        <div className="min-w-0 text-center">
                          <div className="text-sm font-semibold text-foreground">
                            {t.name}
                          </div>
                          <div className="mt-1 text-xs text-muted-foreground">
                            {t.role ? t.role : "Client"}
                            {t.handle ? ` • ${t.handle}` : ""}
                          </div>
                        </div>


                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}