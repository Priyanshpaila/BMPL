"use client"

import { motion } from "framer-motion"
import { PRODUCTS } from "@/content/products"
import Container from "@/components/layout/Container"
import ProductCard from "@/components/products/ProductCard"
import {Button} from  "@/components/ui/button"
import Link from "next/link"
import { openWhatsAppChat } from "@/lib/whatsapp"

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
  }

  return (
      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Our <span className="gradient-text">Product Range</span>
              </h1>
              <p className="text-xl text-slate-300 text-balance">
                Premium quality MS Billets, Angles, and Channels manufactured to international standards
              </p>
            </motion.div>
          </Container>
        </section>

        {/* Products Grid */}
        <section className="py-20 md:py-32">
          <Container>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {PRODUCTS.map((product, idx) => (
                <ProductCard key={product.id} product={product} index={idx} />
              ))}
            </motion.div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 border-y border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Can't Find What You're Looking For?</h2>
              <p className="text-lg text-slate-300 mb-8 text-balance">
                We offer custom sizes and specifications. Contact us for your specific requirements.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <Button size="lg" asChild>
                  <Link href="/quote">Request Quote</Link>
                </Button>
                <Button
                  size="lg"
                  variant="secondary"
                  onClick={() =>
                    openWhatsAppChat(
                      "Hello BMPL, I need a quotation. Please share pricing and dispatch timelines for the required sizes and quantity."
                    )
                  }
                >
                  Chat on WhatsApp
                </Button>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>
  )
}
