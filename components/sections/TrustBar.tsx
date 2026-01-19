"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";

type Chip = { text: string };

function MarqueeRow({
  items,
  speed = 18,
  className = "",
  itemClassName = "",
}: {
  items: React.ReactNode[];
  speed?: number; // seconds
  className?: string;
  itemClassName?: string;
}) {
  // Duplicate list for seamless looping
  const loopItems = [...items, ...items];

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Edge fades: match page background in light + dark */}
      <div
        className="
          pointer-events-none absolute inset-y-0 left-0 w-20
          bg-gradient-to-r from-background via-background/70 to-transparent
        "
      />
      <div
        className="
          pointer-events-none absolute inset-y-0 right-0 w-20
          bg-gradient-to-l from-background via-background/70 to-transparent
        "
      />

      <motion.div
        className="flex w-max items-center gap-3 py-2"
        initial={{ x: 0 }}
        animate={{ x: "-50%" }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loopItems.map((node, idx) => (
          <div key={idx} className={itemClassName}>
            {node}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export default function TrustBar() {
  const trustItems: Chip[] = [
    { text: "Quick Response Time" },
    { text: "Bulk Supply Capability" },
    { text: "Custom Sizes Available" },
    { text: "ISO Certified" },
    { text: "24/7 Support" },
    { text: "Competitive Pricing" },
  ];

  const trustNodes = trustItems.map((item) => (
    <div
      key={item.text}
      className="
        group flex items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2 text-sm transition-colors
        border-slate-200/70 bg-white/70 text-slate-700 hover:bg-white/90 hover:border-blue-500/25
        dark:border-white/10 dark:bg-white/[0.03] dark:text-slate-200 dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30
      "
    >
      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-blue-600 dark:text-blue-300" />
      <span className="leading-snug">{item.text}</span>
    </div>
  ));

  return (
    // IMPORTANT: no background, no border band, minimal padding
    <section className="relative py-6">
      <Container>
        <div className="space-y-3">
          <MarqueeRow items={trustNodes} speed={22} className="rounded-2xl" />
        </div>
      </Container>
    </section>
  );
}
