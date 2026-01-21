"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/content/products";
import Container from "@/components/layout/Container";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/products/ProductCard";

export default function ProductShowcase() {
  const featuredProducts = PRODUCTS.slice(0, 3);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08,
      },
    },
  };

  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      {/* subtle background wash (theme-aware via tokens) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-primary/0 via-primary/6 to-transparent" />

      {/* optional soft blob accents (theme-aware) */}
      <div className="pointer-events-none absolute -top-24 right-[-140px] h-[420px] w-[420px] rounded-full bg-primary/2 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-28 left-[-160px] h-[520px] w-[520px] rounded-full bg-accent/8 blur-3xl" />

      {/* dot grid (theme-aware) */}
      <div
        className="
          pointer-events-none absolute inset-0 opacity-[0.06] dark:opacity-[0.12]
          [background-size:28px_28px]
          [background-image:radial-gradient(circle_at_1px_1px,color-mix(in_oklch,var(--foreground)_16%,transparent)_1px,transparent_0)]
        "
      />

      <Container className="relative">
        {/* Header */}
        <div className="mx-auto mb-14 max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45 }}
            className="text-4xl font-bold md:text-5xl text-foreground"
          >
            Our <span className="gradient-text">Product Range</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: 0.05 }}
            className="mt-4 text-lg text-muted-foreground text-balance"
          >
            Premium quality steel products manufactured with precision for your
            industrial needs.
          </motion.p>
        </div>

        {/* Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {featuredProducts.map((product, idx) => (
            <motion.div
              key={product.id ?? product.slug}
              variants={{
                hidden: { opacity: 0, y: 16 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
            >
              <ProductCard product={product} index={idx} />
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.15, duration: 0.45 }}
          className="mt-12 flex justify-center"
        >
          <Button
            variant="secondary"
            size="lg"
            className="
              rounded-2xl border
              border-border bg-card/40 hover:bg-card/60
              text-foreground
            "
            asChild
          >
            <Link href="/products" className="inline-flex items-center gap-2">
              View All Products
              <ArrowRight className="h-4 w-4 text-primary" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
