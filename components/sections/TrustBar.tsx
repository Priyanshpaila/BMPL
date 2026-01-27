"use client";

import * as React from "react";
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
    <div className={`relative  overflow-hidden ${className}`}>
      {/* Edge fades: theme-aware (uses tokens only) */}
      {/* <div
        className="
          pointer-events-none absolute inset-y-0 left-0 z-10 w-20
          bg-gradient-to-r from-background via-background/70 to-transparent
        "
      /> */}
      {/* <div
        className="
          pointer-events-none absolute inset-y-0 right-0 z-10 w-20
          bg-gradient-to-l from-background via-background/70 to-transparent
        "
      /> */}
      

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
        group flex items-center gap-2 whitespace-nowrap rounded-2xl border px-4 py-2 text-sm
        transition-colors
        border-border/70 bg-card/40 backdrop-blur
        text-foreground hover:bg-card/55 hover:border-primary/25
      "
    >
      <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
      <span className="leading-snug text-muted-foreground group-hover:text-foreground">
        {item.text}
      </span>
    </div>
    
  ));

  return (
    // IMPORTANT: no background, no band; minimal padding
    <section className="relative py-6">
      <Container>
        <div className="space-y-3">
          <div className="pointer-events-none absolute h-full inset-0 hidden dark:block bg-primary/6" />
          <MarqueeRow items={trustNodes} speed={22} className="rounded-2xl" />
        </div>
      </Container>
    </section>
  );
}
