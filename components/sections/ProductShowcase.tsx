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
    <section className="relative py-20 md:py-32">
      {/* subtle background wash (theme-aware) */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-blue-600/0 via-blue-600/5 to-transparent dark:via-blue-600/5" />

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
              rounded-2xl
              border border-slate-900/10 bg-slate-900/5 hover:bg-slate-900/10
              dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10
            "
            asChild
          >
            <Link href="/products" className="inline-flex items-center gap-2">
              View All Products
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
