"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import ProductSpecTable from "@/components/products/ProductSpecTable";
import ProductCTA from "@/components/products/ProductCTA";
import ProductBadges from "@/components/products/ProductBadges";
import Link from "next/link";
import type { Product } from "@/content/products";

export default function ProductDetailPageClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  return (
    <main>
      {/* Breadcrumb */}
      <div className="border-b border-slate-200/70 bg-white/70 backdrop-blur dark:border-white/10 dark:bg-slate-900/50">
        <Container className="py-4">
          <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
            <Link
              href="/products"
              className="text-slate-700 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white smooth-transition"
            >
              Products
            </Link>
            <span className="text-slate-400 dark:text-slate-500">/</span>
            <span className="text-slate-900 dark:text-slate-200">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Product Hero */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden bg-slate-100 border border-slate-200 dark:bg-slate-800 dark:border-slate-700">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col justify-center"
            >
              <div className="mb-6">
                <ProductBadges badges={[product.category, product.availability]} />
              </div>

              <h1 className="text-5xl font-bold mb-4 text-slate-900 dark:text-white">
                {product.name}
              </h1>
              <p className="text-xl text-slate-700 dark:text-slate-300 mb-8">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card
                  variant="glass"
                  className="p-4 border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Minimum Order
                  </div>
                  <div className="text-xl font-bold text-slate-900 dark:text-white">
                    {product.minQty}
                  </div>
                </Card>

                <Card
                  variant="glass"
                  className="p-4 border-slate-200/70 bg-white/70 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="text-sm text-slate-600 dark:text-slate-400 mb-1">
                    Availability
                  </div>
                  <div className="text-xl font-bold text-emerald-600 dark:text-green-400">
                    {product.availability}
                  </div>
                </Card>
              </div>

              <div className="space-y-3 mb-8">
                {[
                  "ISO certified manufacturing process",
                  "Rigorous quality testing at every stage",
                  "Fast dispatch & reliable delivery",
                  "Custom sizes available on request",
                ].map((t) => (
                  <div key={t} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-700 dark:text-slate-300">{t}</span>
                  </div>
                ))}
              </div>

              <ProductCTA productName={product.name} quantity={product.minQty} />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-blue-600/5 to-transparent">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
              Technical Specifications
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400">
              Detailed product specifications and features
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <ProductSpecTable specs={product.specs} />
          </motion.div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-20 md:py-32 bg-gradient-to-b from-transparent to-blue-600/5 border-t border-slate-200/70 dark:border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-2 text-slate-900 dark:text-white">
                Related Products
              </h2>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                Other products in the {product.category} category
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((related, idx) => (
                <motion.div
                  key={related.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <Link href={`/products/${encodeURIComponent(related.slug)}`} className="group block">
                    <Card
                      className="h-full overflow-hidden border border-slate-200/70 bg-white/70 backdrop-blur hover:border-blue-600/25 transition-colors dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/50"
                    >
                      <div className="relative h-40 rounded-lg mb-4 bg-slate-100 overflow-hidden dark:bg-slate-800">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 smooth-transition"
                        />
                      </div>
                      <h4 className="font-bold mb-2 text-slate-900 dark:text-white">
                        {related.name}
                      </h4>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {related.description}
                      </p>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </main>
  );
}
