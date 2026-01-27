"use client";

import { motion } from "framer-motion";
import { PRODUCTS } from "@/content/products";
import Container from "@/components/layout/Container";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { openWhatsAppChat } from "@/lib/whatsapp";

export default function ProductsPageClient() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
        {/* LIGHT: subtle wash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        {/* DARK: flat wash (no gradient) */}
        <div className="pointer-events-none absolute inset-0 hidden dark:block bg-primary/6" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.45 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground">
              Our <span className="gradient-text">Product Range</span>
            </h1>

            <p className="text-xl text-muted-foreground text-balance">
              Premium quality MS Billets, Angles, and Channels manufactured to
              international standards
            </p>
          </motion.div>
        </Container>
      </section>

{/* Products Grid */}
<section className="relative overflow-hidden py-20 md:py-32">
  {/* LIGHT: subtle wash */}
  <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
  {/* DARK: flat wash (no gradient) */}
  <div className="pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-primary/6" />

  {/* Optional dot texture (theme aware) */}
  <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.10] dot-grid" />

  <Container className="relative">
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {PRODUCTS.map((product, idx) => (
        <ProductCard
          key={product.id ?? product.slug}
          product={product}
          index={idx}
        />
      ))}
    </motion.div>
  </Container>
</section>

      {/* CTA Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background wash */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />

        {/* Dots: dark in light mode, white in dark mode */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] dark:opacity-[0.10]
          [background-image:radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.18)_1px,transparent_0)]
          dark:[background-image:radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.16)_1px,transparent_0)]
          [background-size:28px_28px]"
        />

        {/* Subtle separators theme-aware */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent" />
        <div className="pointer-events-none absolute h-full inset-0 hidden dark:block bg-primary/6" />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
              Can't Find What You're Looking For?
            </h2>

            <p className="text-lg text-muted-foreground mb-8 text-balance">
              We offer custom sizes and specifications. Contact us for your
              specific requirements.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" asChild className="h-12 rounded-2xl px-8">
                <Link
                  href="/quote"
                  className="inline-flex items-center justify-center gap-2"
                >
                  Request Quote
                </Link>
              </Button>

              <Button
                size="lg"
                type="button"
                variant="secondary"
                onClick={() =>
                  openWhatsAppChat(
                    "Hello BMPL, I need a quotation. Please share pricing and dispatch timelines for the required sizes and quantity.",
                  )
                }
                className="h-12 rounded-2xl px-8"
              >
                Chat on WhatsApp
              </Button>
            </div>
          </motion.div>
        </Container>
      </section>
    </main>
  );
}
