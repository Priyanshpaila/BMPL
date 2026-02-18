"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Search,
  X,
  Shield,
  Factory,
  FlaskConical,
  Truck,
  Gauge,
  Leaf,
  Recycle,
  Zap,
  Star,
  Phone,
  Mail,
  MapPin,
  Download,
  CheckCircle2,
  ArrowUpRight,
  Quote,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

/* ═══════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════ */

const PRODUCTS = [
  {
    id: "1",
    name: "MS Billets",
    category: "Billets",
    desc: "High-quality billets for forging & rolling.",
    image: "/steel-billets.jpg",
    grade: "IS 1875",
    size: "50–100 mm",
  },
  {
    id: "2",
    name: "MS Angles",
    category: "Angles",
    desc: "Structural angles for construction frameworks.",
    image: "/steel-angles.jpg",
    grade: "IS 2062",
    size: "25–50 mm",
  },
  {
    id: "3",
    name: "MS Channels",
    category: "Channels",
    desc: "Load-bearing channels for structures.",
    image: "/steel-channels.jpg",
    grade: "IS 1365",
    size: "25–400 mm",
  },
  {
    id: "4",
    name: "MS Rounds",
    category: "Rounds",
    desc: "Hot-rolled rounds for fabrication.",
    image: "/steel-rounds.png",
    grade: "IS Spec",
    size: "Custom",
  },
  {
    id: "5",
    name: "MS Squares",
    category: "Squares",
    desc: "Consistent dimensional accuracy.",
    image: "/steel-squares.png",
    grade: "IS Spec",
    size: "Custom",
  },
  {
    id: "6",
    name: "MS Flats",
    category: "Flats",
    desc: "Flats for base plates & supports.",
    image: "/steel-flats.png",
    grade: "IS Spec",
    size: "25–35 mm",
  },
  {
    id: "7",
    name: "MS Gate Channel",
    category: "Gate Channels",
    desc: "Channels for gates & frames.",
    image: "/steel-gate-channels.png",
    grade: "IS Spec",
    size: "Custom",
  },
];

const CATEGORIES = [
  "All",
  "Angles",
  "Channels",
  "Flats",
  "Rounds",
  "Squares",
  "Billets",
  "Gate Channels",
];

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rajesh Gupta",
    role: "Procurement Head",
    company: "Gupta Steel Fabricators",
    rating: 5,
    quote:
      "Consistent quality and fast dispatch. Sizes match our fabrication requirements every time.",
  },
  {
    id: "t2",
    name: "Sanjay Sharma",
    role: "Project Coordinator",
    company: "Sharma Constructions",
    rating: 5,
    quote:
      "Great for angles and flats — standard and custom sizes handled smoothly.",
  },
  {
    id: "t3",
    name: "Vikram Patel",
    role: "Operations Manager",
    company: "Patel Industries",
    rating: 4,
    quote:
      "Reliable supply. Material finish is clean and delivery is always dependable.",
  },
  {
    id: "t4",
    name: "Amit Tiwari",
    role: "Purchase Executive",
    company: "Tiwari Infrastructure",
    rating: 5,
    quote:
      "Strong quality assurance and quick dispatch across multiple repeat orders.",
  },
  {
    id: "t5",
    name: "Priya Verma",
    role: "Fabrication Contractor",
    company: "Verma Engineering",
    rating: 5,
    quote:
      "Clear quotation, straightforward follow-up, good batch-to-batch consistency.",
  },
  {
    id: "t6",
    name: "Deepak Soni",
    role: "Supply Chain Manager",
    company: "Soni Steel Works",
    rating: 4,
    quote:
      "Multiple sizes handled on short notice. Dimensional accuracy on point.",
  },
];

const WHY_US = [
  { icon: Factory, title: "Since 1987", desc: "Decades of expertise from Raipur.", stat: "37+" },
  { icon: Shield, title: "ISI Quality", desc: "Strict checks at every stage.", stat: "100%" },
  { icon: Gauge, title: "Capacity", desc: "Automatic rolling mills output.", stat: "10K MT" },
  { icon: Truck, title: "On-Time", desc: "Dependable delivery timelines.", stat: "98%" },
];

const INFRA = [
  { icon: Factory, title: "Manufacturing", desc: "Steel Melting Shop + 2× Automatic Rolling Mills" },
  { icon: FlaskConical, title: "Testing Lab", desc: "In-house quality testing for every batch" },
  { icon: Gauge, title: "Capacity", desc: "10,000+ MT finished product every month" },
  { icon: Truck, title: "Dispatch", desc: "Streamlined logistics for bulk & custom orders" },
];

const SUSTAIN = [
  { icon: Recycle, title: "Scrap Recycling", desc: "Minimizing waste by recycling steel scrap." },
  { icon: Leaf, title: "Energy Efficiency", desc: "Optimized furnace operations per ton." },
  { icon: Zap, title: "Emission Control", desc: "Pollution control aligned with standards." },
];

const Q_STEPS = [
  { n: "01", title: "Raw Material Check", desc: "Grade & composition inspection." },
  { n: "02", title: "Dimensional Check", desc: "Precision measurement after rolling." },
  { n: "03", title: "Final Testing", desc: "Mechanical & visual testing." },
];

/* ═══════════════════════════════════════════════════════════
   REVEAL HOOK
   ═══════════════════════════════════════════════════════════ */

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setV(true);
          obs.disconnect();
        }
      },
      { threshold }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, v };
}

function Reveal({
  children,
  className = "",
  id,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}) {
  const { ref, v } = useReveal();

  return (
    <section
      id={id}
      ref={ref}
      className={className}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "none" : "translateY(32px)",
        transition: `opacity 0.8s ease ${delay}s, transform 0.8s ease ${delay}s`,
      }}
    >
      {children}
    </section>
  );
}

/* ═══════════════════════════════════════════════════════════
   PAGE
   ═══════════════════════════════════════════════════════════ */

export default function Home() {
  const [search, setSearch] = useState("");
  const [cat, setCat] = useState("All");
  const [ri, setRi] = useState(0);
  const prodRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const h = (e: Event) => {
      const d = (e as CustomEvent).detail;
      if (typeof d === "string") {
        setSearch(d);
        prodRef.current?.scrollIntoView({ behavior: "smooth" });
      }
    };
    window.addEventListener("landing-search", h);
    return () => window.removeEventListener("landing-search", h);
  }, []);

  useEffect(() => {
    const t = setInterval(() => setRi((i) => (i + 1) % TESTIMONIALS.length), 5000);
    return () => clearInterval(t);
  }, []);

  const fp = PRODUCTS.filter((p) => {
    const mc = cat === "All" || p.category === cat;
    const ms =
      !search ||
      [p.name, p.category, p.desc].some((s) =>
        s.toLowerCase().includes(search.toLowerCase())
      );
    return mc && ms;
  });

  const vr = [
    TESTIMONIALS[ri % TESTIMONIALS.length],
    TESTIMONIALS[(ri + 1) % TESTIMONIALS.length],
    TESTIMONIALS[(ri + 2) % TESTIMONIALS.length],
  ];

  return (
    <main>
      {/* ANIMATIONS + FIXED BG CSS */}
      <style
        dangerouslySetInnerHTML={{
          __html: `
        @keyframes marquee{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
        @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
        @keyframes pulse-dot{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.3)}}
        @keyframes shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}
        @keyframes hero-line{from{width:0}to{width:100%}}
        .anim-marquee{animation:marquee 28s linear infinite}
        .anim-float{animation:float 5s ease-in-out infinite}
        .anim-dot{animation:pulse-dot 2s ease-in-out infinite}
        .anim-shimmer{background-size:200% 100%;animation:shimmer 3s ease-in-out infinite}
        .anim-hero-line{animation:hero-line 1.2s ease-out .5s both}

        /* ✅ STUCK BACKGROUND (desktop) */
        .bg-fixed-stuck{ background-attachment: fixed; }

        /* ✅ Mobile + reduced motion fallback (iOS issues) */
        @media (max-width: 767px), (prefers-reduced-motion: reduce){
          .bg-fixed-stuck{ background-attachment: scroll; }
        }
      `,
        }}
      />

      {/* ══════════════════════════════════════════════════════
          HERO — ✅ background image + remove right image
          ══════════════════════════════════════════════════════ */}
      <section id="home" className="relative min-h-[92vh] flex items-center overflow-hidden">
        {/* Hero BG image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/steel-manufacturing-facility.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover brightness-95 contrast-105 saturate-110"
          />

          {/* ✅ LEFT → RIGHT overlay (text readable left, image visible right) */}
          <div className="absolute inset-0 bg-gradient-to-r
                  from-background/95 via-background/45 to-background/4
                  dark:from-background/85 dark:via-background/55 dark:to-background/10" />

          {/* Optional premium vignette (no grid / no squares) */}
          <div className="absolute inset-0 pointer-events-none [box-shadow:inset_0_0_160px_rgba(0,0,0,0.10)] dark:[box-shadow:inset_0_0_180px_rgba(0,0,0,0.35)]" />

          {/* Decorative blobs (keep if you like) */}
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#2e3690]/[0.05] blur-3xl" />
          <div className="absolute bottom-20 left-10 w-[300px] h-[300px] rounded-full bg-[#ec2227]/[0.04] blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl py-16 md:py-20">
          {/* ✅ single column now */}
          <div className="grid grid-cols-1 items-center">
            <div className="space-y-7 max-w-xl">
              <div className="inline-flex items-center gap-2.5 rounded-full border border-[#2e3690]/15 bg-white/55 dark:bg-[#0f1623]/45 backdrop-blur px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[#ec2227] anim-dot" />
                <span className="text-[11px] font-medium tracking-[0.15em] uppercase text-[#2e3690]/75 dark:text-[#ec2227]/85">
                  Steel Manufacturing • Raipur
                </span>
              </div>

              <div>
                <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground">
                  Precision Steel
                </h1>
                <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-[-0.02em] text-[#2e3690] dark:text-[#ec2227] mt-1">
                  for Modern
                </h1>
                <h1 className="text-[2.5rem] sm:text-5xl lg:text-[3.4rem] font-semibold leading-[1.1] tracking-[-0.02em] text-foreground mt-1">
                  Infrastructure
                </h1>
                <div className="mt-3 h-[3px] max-w-[180px] rounded-full hero-underline" />
              </div>

              <p className="text-base text-muted-foreground leading-relaxed">
                Angles, channels, flats & custom sections — strict quality, reliable dispatch.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <a
                  href="/quote"
                  className="group inline-flex items-center gap-2 rounded-xl
             bg-[#ec2227] dark:bg-[#2e3690]
             px-6 py-3 text-[13px] font-semibold text-white
             shadow-lg shadow-[#ec2227]/20 dark:shadow-[#2e3690]/20
             hover:shadow-[#ec2227]/35 dark:hover:shadow-[#2e3690]/35
             transition-all duration-300 hover:-translate-y-0.5"
                >
                  Request a Quote
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
                <a
                  href="/brochure.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-border bg-white/55 dark:bg-[#0f1623]/45 backdrop-blur px-6 py-3 text-[13px] font-semibold text-foreground hover:bg-muted/50 transition-all duration-300 hover:-translate-y-0.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  Brochure
                </a>
              </div>

              <div className="flex flex-wrap gap-4 pt-3 text-[11px] text-muted-foreground/75">
                {["ISI-aligned", "In-house testing", "On-time dispatch"].map((c) => (
                  <span key={c} className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-500/70" />
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          MARQUEE
          ══════════════════════════════════════════════════════ */}
      <div className="border-y border-border bg-[#2e3690] py-3 overflow-hidden select-none" aria-hidden="true">
        <div className="anim-marquee whitespace-nowrap flex" style={{ width: "max-content" }}>
          {[...Array(6)].map((_, i) => (
            <span key={i} className="text-[12px] font-semibold tracking-[0.2em] text-white/60 uppercase mx-10">
              Sustainability&nbsp; •&nbsp; Durability&nbsp; •&nbsp; Quality&nbsp; •&nbsp; Strength&nbsp; •&nbsp; Precision
            </span>
          ))}
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════
          ABOUT / WHY US — ✅ normal (removed stuck bg from here)
          ══════════════════════════════════════════════════════ */}
      <Reveal id="about" className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <SectionHead label="Why Choose Us" title="Built on Decades of Trust" />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {WHY_US.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-border bg-card p-6 hover:border-[#2e3690]/20 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-xl bg-[#2e3690]/[0.07] text-[#2e3690] flex items-center justify-center mb-4 group-hover:bg-[#2e3690] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <item.icon className="w-[18px] h-[18px]" />
                </div>
                <p className="text-2xl md:text-3xl font-bold text-[#2e3690] leading-none">{item.stat}</p>
                <p className="text-xs font-semibold text-foreground mt-1.5">{item.title}</p>
                <p className="text-[11px] text-muted-foreground mt-1 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          PRODUCTS
          ══════════════════════════════════════════════════════ */}
      <Reveal id="products" className="relative py-20 md:py-28 overflow-hidden">
        {/* ✅ Stuck / Parallax background */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-center bg-cover bg-fixed-stuck"
          style={{ backgroundImage: "url('/Background_for_products.png')" }} // you can change image
        />

        {/* ✅ Left → Right overlay (readable + image visible) */}
        <div
          aria-hidden
          className="absolute inset-0 z-10 bg-gradient-to-r
               from-background/95 via-background/85 to-background/35
               dark:from-background/85 dark:via-background/70 dark:to-background/55"
        />

        {/* ✅ Content */}
        <div ref={prodRef} className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5 mb-8">
            <SectionHead label="Our Products" title="Complete Product Range" noMb />
            <div className="flex items-center gap-3 shrink-0">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  aria-label="Search products"
                  className="pl-9 pr-8 py-2 text-sm rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-[#2e3690]/20 w-44 sm:w-52 transition-all"
                />
                {search && (
                  <button
                    onClick={() => setSearch("")}
                    aria-label="Clear search"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
              <a
                href="/brochure.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden md:inline-flex items-center gap-1.5 text-[13px] font-medium text-[#2e3690] hover:underline"
              >
                <Download className="w-3.5 h-3.5" /> Catalog
              </a>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-7" role="tablist" aria-label="Filter">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                role="tab"
                aria-selected={cat === c}
                onClick={() => setCat(c)}
                className={`px-3.5 py-1.5 rounded-full text-[12px] font-medium transition-all duration-300 ${cat === c
                  ? "bg-[#2e3690] text-white shadow-md shadow-[#2e3690]/15"
                  : "bg-card border border-border text-muted-foreground hover:text-foreground hover:border-[#2e3690]/15"
                  }`}
              >
                {c}
              </button>
            ))}
          </div>

          {fp.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {fp.map((p) => (
                <div
                  key={p.id}
                  className="group rounded-2xl border border-border bg-card overflow-hidden hover:shadow-xl hover:border-[#2e3690]/10 hover:-translate-y-0.5 transition-all duration-400"
                >
                  <div className="relative h-40 bg-muted/30 overflow-hidden">
                    <Image
                      src={p.image}
                      alt={p.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-600"
                      sizes="(max-width:640px)100vw,(max-width:1024px)50vw,25vw"
                    />
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-bold uppercase tracking-wider bg-[#2e3690]/85 text-white px-2.5 py-0.5 rounded-full backdrop-blur-sm">
                      {p.category}
                    </span>
                  </div>
                  <div className="p-4">
                    <h3 className="text-[13px] font-semibold text-foreground mb-0.5">{p.name}</h3>
                    <p className="text-[11px] text-muted-foreground mb-2.5 line-clamp-2">{p.desc}</p>
                    <div className="flex justify-between text-[10px] text-muted-foreground/60 pt-2.5 border-t border-border/40">
                      <span>{p.grade}</span>
                      <span>{p.size}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 rounded-2xl border border-dashed border-border">
              <p className="text-sm text-muted-foreground">No products found.</p>
              <button
                onClick={() => {
                  setSearch("");
                  setCat("All");
                }}
                className="mt-2 text-[13px] text-[#2e3690] font-medium hover:underline"
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          QUALITY & CERTIFICATIONS
          ══════════════════════════════════════════════════════ */}
      <Reveal id="quality" className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <SectionHead label="Quality Assurance" title="Quality & Certifications" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden mb-12">
            {Q_STEPS.map((s) => (
              <div key={s.n} className="bg-card p-6 flex flex-col items-center text-center">
                <span className="text-3xl font-bold text-[#2e3690]/15 mb-2">{s.n}</span>
                <h3 className="text-[13px] font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-[11px] text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <BadgeCard
              imgSrc="/make-in-india.svg"
              imgAlt="Make in India"
              title="Make in India"
              sub="Proudly manufactured in India"
              bgClass="bg-orange-50 dark:bg-orange-950/20"
            />
            <BadgeCard
              imgSrc="/isi.svg"
              imgAlt="ISI Certification"
              title="ISI Certified"
              sub="Bureau of Indian Standards"
              bgClass="bg-blue-50 dark:bg-blue-950/20"
            />
            <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:shadow-md transition-all duration-300">
              <div className="shrink-0 w-12 h-12 rounded-xl bg-[#2e3690]/[0.07] flex items-center justify-center">
                <Shield className="w-5 h-5 text-[#2e3690]" />
              </div>
              <div>
                <p className="text-[13px] font-semibold text-foreground">IS-15911-2010</p>
                <p className="text-[11px] text-muted-foreground font-mono">CM/L 5900058813</p>
              </div>
            </div>
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          INFRASTRUCTURE — ✅ STUCK BG HERE
          ══════════════════════════════════════════════════════ */}
      <Reveal id="infrastructure" className="relative py-20 md:py-28 bg-muted/20 overflow-hidden">
        {/* Stuck background */}
        <div
          aria-hidden
          className="absolute inset-0 z-0 bg-center bg-cover bg-fixed-stuck"
          style={{ backgroundImage: "url('/steel-manufacturing-facility.jpg')" }}
        />

        {/* overlays for readability */}
        <div
          aria-hidden
          className="absolute inset-0 z-10 bg-gradient-to-b
             from-background/85 via-background/60 to-background/90
             dark:from-background/75 dark:via-background/55 dark:to-background/80"
        />

        {/* content */}
        <div className="relative z-20 mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <SectionHead label="Our Facilities" title="Infrastructure" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {INFRA.map((c) => (
              <div
                key={c.title}
                className="group rounded-2xl border border-border bg-card p-6 text-center hover:border-[#2e3690]/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400"
              >
                <div className="w-12 h-12 mx-auto rounded-xl bg-[#2e3690]/[0.07] text-[#2e3690] flex items-center justify-center mb-4 group-hover:bg-[#2e3690] group-hover:text-white group-hover:scale-105 transition-all duration-300">
                  <c.icon className="w-5 h-5" />
                </div>
                <h3 className="text-[13px] font-semibold text-foreground mb-1">{c.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          SUSTAINABILITY
          ══════════════════════════════════════════════════════ */}
      <Reveal id="sustainability" className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <SectionHead label="Responsibility" title="Sustainability" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {SUSTAIN.map((s) => (
              <div
                key={s.title}
                className="rounded-2xl border border-border bg-card p-6 hover:border-emerald-500/15 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-400"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mb-4">
                  <s.icon className="w-[18px] h-[18px]" />
                </div>
                <h3 className="text-[13px] font-semibold text-foreground mb-1">{s.title}</h3>
                <p className="text-[11px] text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          REVIEWS
          ══════════════════════════════════════════════════════ */}
      <Reveal id="reviews" className="py-20 md:py-28 bg-muted/20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <SectionHead label="Testimonials" title="Client Reviews" noMb />
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setRi((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                aria-label="Previous"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#2e3690]/20 transition-all"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setRi((i) => (i + 1) % TESTIMONIALS.length)}
                aria-label="Next"
                className="w-9 h-9 rounded-full border border-border bg-card flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-[#2e3690]/20 transition-all"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {vr.map((t, i) => (
              <div
                key={`${t.id}-${ri}`}
                className={`rounded-2xl border bg-card p-6 transition-all duration-500 ${i === 0 ? "border-[#2e3690]/15 shadow-lg shadow-[#2e3690]/5" : "border-border"
                  }`}
              >
                <Quote className="w-6 h-6 text-[#2e3690]/10 mb-3" />
                <p className="text-[13px] text-muted-foreground leading-relaxed mb-5">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-0.5 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      className={`w-3 h-3 ${j < t.rating ? "text-amber-400 fill-amber-400" : "text-border"}`}
                    />
                  ))}
                </div>
                <div className="flex items-center gap-3 pt-3 border-t border-border/40">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2e3690] to-[#4a52c9] flex items-center justify-center text-[11px] font-bold text-white">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-[12px] font-semibold text-foreground leading-none">{t.name}</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">
                      {t.role} • {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center gap-1 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setRi(i)}
                aria-label={`Review ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${i === ri ? "w-5 h-1.5 bg-[#2e3690]" : "w-1.5 h-1.5 bg-border hover:bg-[#2e3690]/25"
                  }`}
              />
            ))}
          </div>
        </div>
      </Reveal>

      {/* ══════════════════════════════════════════════════════
          CONTACT
          ══════════════════════════════════════════════════════ */}
      <Reveal id="contact" className="py-20 md:py-28 bg-background">
        <div className="mx-auto px-4 sm:px-6 lg:px-8 w-full max-w-6xl">
          <SectionHead label="Get In Touch" title="Contact Us" />
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
            <div className="lg:col-span-2 space-y-4">
              {[
                { icon: MapPin, label: "Address", value: "299-301 Urla Industrial Complex,\nBirgoan, Raipur, CG 493221" },
                { icon: Phone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
                { icon: Mail, label: "Email", value: "bhawanimpl@gmail.com", href: "mailto:bhawanimpl@gmail.com" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4 hover:shadow-md transition-all duration-300">
                  <div className="shrink-0 w-9 h-9 rounded-lg bg-[#2e3690]/[0.07] flex items-center justify-center">
                    <c.icon className="w-4 h-4 text-[#2e3690]" />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-[13px] text-foreground hover:text-[#2e3690] transition-colors whitespace-pre-line">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-[13px] text-foreground whitespace-pre-line">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
              <div className="rounded-2xl overflow-hidden border border-border h-40">
                <iframe
                  title="BMPL Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3718.5!2d81.4!3d21.2!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjHCsDEyJzAwLjAiTiA4McKwMjQnMDAuMCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>

            <form
              action="mailto:bhawanimpl@gmail.com"
              method="POST"
              encType="text/plain"
              className="lg:col-span-3 rounded-2xl border border-border bg-card p-7 space-y-4"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <InputField id="name" label="Name" placeholder="Your name" type="text" />
                <InputField id="email" label="Email" placeholder="you@email.com" type="email" />
              </div>
              <InputField id="subject" label="Subject" placeholder="Inquiry about..." type="text" />
              <div>
                <label htmlFor="message" className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  placeholder="Your message..."
                  className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#2e3690]/20 resize-none transition-all"
                />
              </div>
              <button
                type="submit"
                className="w-full rounded-xl bg-[#2e3690] text-white font-semibold py-3 text-[13px] hover:bg-[#252d78] transition-all duration-300 shadow-lg shadow-[#2e3690]/15 hover:shadow-[#2e3690]/30 hover:-translate-y-0.5 active:translate-y-0"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Reveal>
    </main>
  );
}

/* ═══════════════════════════════════════════════════════════
   SUB-COMPONENTS
   ═══════════════════════════════════════════════════════════ */

function SectionHead({ label, title, noMb }: { label: string; title: string; noMb?: boolean }) {
  return (
    <div className={noMb ? "" : "mb-10"}>
      <span className="inline-block text-[10px] font-bold tracking-[0.2em] uppercase text-[#ec2227] bg-[#ec2227]/[0.06] rounded-full px-3 py-1 mb-3">
        {label}
      </span>
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">{title}</h2>
    </div>
  );
}

function BadgeCard({
  imgSrc,
  imgAlt,
  title,
  sub,
  bgClass,
}: {
  imgSrc: string;
  imgAlt: string;
  title: string;
  sub: string;
  bgClass: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 hover:shadow-md transition-all duration-300">
      <div className={`shrink-0 w-12 h-12 rounded-xl ${bgClass} flex items-center justify-center overflow-hidden`}>
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={34}
          height={34}
          className="object-contain"
          onError={(e) => {
            (e.target as HTMLImageElement).style.display = "none";
          }}
        />
      </div>
      <div>
        <p className="text-[13px] font-semibold text-foreground">{title}</p>
        <p className="text-[11px] text-muted-foreground">{sub}</p>
      </div>
    </div>
  );
}

function InputField({
  id,
  label,
  placeholder,
  type,
}: {
  id: string;
  label: string;
  placeholder: string;
  type: string;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[10px] font-semibold text-muted-foreground uppercase tracking-wider mb-1.5">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        placeholder={placeholder}
        className="w-full rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-[#2e3690]/20 transition-all"
      />
    </div>
  );
}