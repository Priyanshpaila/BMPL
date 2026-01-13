"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Sparkles,
  Factory,
  Truck,
  Timer,
  ArrowRight,
  MessageCircle,
  Phone,
  MapPin,
} from "lucide-react";

import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { COMPANY_INFO } from "@/content/company";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function Hero() {
  const [product, setProduct] = useState("MS Billets");
  const [qty, setQty] = useState("");
  const [location, setLocation] = useState("");

  const headline = "MS Billets, Angles & Channels";

  const quickMessage = useMemo(() => {
    const parts = [
      "Hello BMPL, I would like a quotation.",
      `Product: ${product}`,
      qty?.trim() ? `Quantity: ${qty.trim()}` : null,
      location?.trim() ? `Delivery Location: ${location.trim()}` : null,
      "Please share price and dispatch timeline.",
    ].filter(Boolean);
    return parts.join("\n");
  }, [product, qty, location]);

  const handleWhatsApp = () => openWhatsAppChat(quickMessage);

  const metrics = [
    { icon: Factory, label: "Capacity", value: "10,000+ MT/Year" },
    { icon: ShieldCheck, label: "Quality", value: "Batch Tested" },
    { icon: Truck, label: "Dispatch", value: "Pan-India" },
  ];

  const chips = [
    { icon: Sparkles, text: "Premium-grade steel supply" },
    { icon: Timer, text: "Fast quotation turnaround" },
    { icon: ShieldCheck, text: "Quality-driven process control" },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.08 } },
  };

  const item = {
    hidden: { opacity: 0, y: 14 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="relative overflow-hidden pt-24 pb-14 md:pt-28 md:pb-20">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/12 via-transparent to-transparent" />
      <div className="pointer-events-none absolute -top-24 right-[-120px] h-[420px] w-[420px] rounded-full bg-blue-500/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-[-140px] h-[520px] w-[520px] rounded-full bg-cyan-500/8 blur-3xl" />
      <div className="pointer-events-none absolute inset-0 opacity-[0.15] [background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.2)_1px,transparent_0)] [background-size:28px_28px]" />

      <Container className="relative z-10">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-8 items-center"
        >
          {/* LEFT: Copy + CTAs */}
          <motion.div variants={item} className="lg:col-span-7">
            {/* Top badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-200">
              <span className="inline-flex h-2 w-2 rounded-full bg-blue-400" />
              Leading Steel Manufacturer in Raipur • Urla
            </div>

            <motion.h1
              variants={item}
              className="mt-6 text-5xl font-bold leading-[1.05] md:text-6xl lg:text-7xl"
            >
              <span className="gradient-text">{headline}</span>
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-5 max-w-2xl text-lg text-slate-300 md:text-xl text-balance"
            >
              {COMPANY_INFO.tagline}
            </motion.p>

            {/* Chips */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-wrap gap-2"
            >
              {chips.map((c) => {
                const Icon = c.icon;
                return (
                  <span
                    key={c.text}
                    className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-sm text-slate-200"
                  >
                    <Icon className="h-4 w-4 text-blue-300" />
                    {c.text}
                  </span>
                );
              })}
            </motion.div>

            {/* Trust bullets (keep your existing data) */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-col gap-3 text-sm text-slate-400 md:flex-row md:flex-wrap md:gap-x-6"
            >
              {COMPANY_INFO.trust.map((t, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-400" />
                  {t}
                </div>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button size="lg" className="rounded-2xl" asChild>
                <Link href="/quote" className="inline-flex items-center gap-2">
                  Request Quote
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>

              <Button
                size="lg"
                variant="secondary"
                className="rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10"
                onClick={() =>
                  openWhatsAppChat(
                    "Hello BMPL, I would like to request a quotation for your products."
                  )
                }
              >
                <MessageCircle className="h-4 w-4" />
                Chat on WhatsApp
              </Button>

              {/* Optional quick call button (good for conversions) */}
              <Button
                size="lg"
                variant="outline"
                className="rounded-2xl bg-transparent"
                asChild
              >
                <a href={`tel:${COMPANY_INFO.contact.phone}`}>
                  <Phone className="h-4 w-4" />
                  Call
                </a>
              </Button>
            </motion.div>

            {/* Micro info row */}
            <motion.div
              variants={item}
              className="mt-6 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-6"
            >
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-slate-500" />
                {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
              </span>
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-slate-500" />
                Industry-grade manufacturing & QC
              </span>
            </motion.div>
          </motion.div>

          {/* RIGHT: Proof + Quick Quote */}
          <motion.div variants={item} className="lg:col-span-5">
            <div className="space-y-6">
              {/* Metrics */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:grid-cols-1">
                {metrics.map((m) => {
                  const Icon = m.icon;
                  return (
                    <Card
                      key={m.label}
                      variant="glass"
                      className="border-white/10 bg-white/[0.03] hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
                          <Icon className="h-5 w-5 text-blue-300" />
                        </div>
                        <div>
                          <div className="text-xs uppercase tracking-wide text-slate-400">
                            {m.label}
                          </div>
                          <div className="text-lg font-semibold text-white">
                            {m.value}
                          </div>
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>

              {/* Quick Quote Card */}
              <Card
                variant="glass"
                className="border-white/10 bg-white/[0.03]"
              >
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <div className="text-sm font-semibold text-white">
                      Quick Quote (WhatsApp)
                    </div>
                    <div className="text-xs text-slate-400">
                      Send your requirement in 10 seconds
                    </div>
                  </div>
                  <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs text-blue-200">
                    Fast Response
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-1 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs text-slate-400">Product</label>
                    <select
                      value={product}
                      onChange={(e) => setProduct(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-blue-500/30"
                    >
                      <option>MS Billets</option>
                      <option>MS Angles</option>
                      <option>MS Channels</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Quantity</label>
                      <input
                        value={qty}
                        onChange={(e) => setQty(e.target.value)}
                        placeholder="e.g. 10 MT"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                    <div className="space-y-1">
                      <label className="text-xs text-slate-400">Location</label>
                      <input
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="City, State"
                        className="w-full rounded-xl border border-white/10 bg-slate-950/40 px-3 py-2 text-sm text-slate-100 outline-none focus:ring-2 focus:ring-blue-500/30"
                      />
                    </div>
                  </div>

                  <Button
                    size="lg"
                    className="rounded-2xl w-full"
                    onClick={handleWhatsApp}
                  >
                    <MessageCircle className="h-4 w-4" />
                    Send on WhatsApp
                  </Button>

                  <p className="text-[12px] text-slate-500">
                    By sending, you agree to be contacted for quote follow-up.
                  </p>
                </div>
              </Card>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="#products"
            className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 hover:bg-white/[0.06] transition-colors"
          >
            Explore Products
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors">
              <ArrowRight className="h-4 w-4 text-blue-300" />
            </span>
          </a>
        </motion.div>
      </Container>
    </section>
  );
}
