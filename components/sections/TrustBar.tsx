"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ShieldCheck, Truck, Factory } from "lucide-react";
import Container from "@/components/layout/Container";

type Chip = {
  text: string;
};

type ProofChip = {
  icon: any;
  label: string;
  value: string;
};

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
      {/* Edge fades to blend into same page background */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 to-transparent" />

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

  const proof: ProofChip[] = [
    { icon: Factory, label: "Capacity", value: "10,000+ MT/Year" },
    { icon: Truck, label: "Dispatch", value: "Pan-India" },
    { icon: ShieldCheck, label: "Quality", value: "Batch Tested" },
  ];

  const trustNodes = trustItems.map((item) => (
    <div
      key={item.text}
      className="group flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-200 hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors whitespace-nowrap"
    >
      <CheckCircle2 className="h-4 w-4 text-blue-300 flex-shrink-0" />
      <span className="leading-snug">{item.text}</span>
    </div>
  ));

  // const proofNodes = proof.map((p) => {
  //   const Icon = p.icon;
  //   return (
  //     <div
  //       key={p.label}
  //       className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-2 hover:bg-white/[0.05] hover:border-blue-400/30 transition-colors whitespace-nowrap"
  //     >
  //       <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-blue-500/10 ring-1 ring-white/10">
  //         <Icon className="h-4 w-4 text-blue-300" />
  //       </div>
  //       <div className="leading-tight">
  //         <div className="text-[10px] uppercase tracking-wide text-slate-400">
  //           {p.label}
  //         </div>
  //         <div className="text-sm font-semibold text-white">{p.value}</div>
  //       </div>
  //     </div>
  //   );
  // });

  return (
    // IMPORTANT: no background, no border band, minimal padding
    <section className="relative py-6">
      <Container>
        <div className="space-y-3">
          {/* Row 1: trust items (infinite marquee) */}
          <MarqueeRow
            items={trustNodes}
            speed={22}
            className="rounded-2xl"
          />

          {/* Row 2: proof items (infinite marquee)
          <MarqueeRow
            items={proofNodes}
            speed={28}
            className="rounded-2xl"
          /> */}
        </div>
      </Container>
    </section>
  );
}
