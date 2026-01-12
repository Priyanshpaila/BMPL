"use client"

import { notFound } from "next/navigation"
import Image from "next/image"
import { motion } from "framer-motion"
import { CheckCircle2, AlertCircle } from "lucide-react"
import { PRODUCTS } from "@/content/products"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"
import ProductSpecTable from "@/components/products/ProductSpecTable"
import ProductCTA from "@/components/products/ProductCTA"
import ProductBadges from "@/components/products/ProductBadges"

interface ProductDetailPageProps {
  params: { slug: string }
}

export default function ProductDetailPageClient({ params }: ProductDetailPageProps) {
  const { slug } = params
  const product = PRODUCTS.find((p) => p.slug === slug)

  if (!product) {
    notFound()
  }

  const relatedProducts = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3)

  return (
    <main>
        {/* Breadcrumb */}
        <div className="border-b border-white/10 bg-slate-900/50">
          <Container className="py-4">
            <div className="flex items-center gap-2 text-sm text-slate-400">
              <a href="/products" className="hover:text-white smooth-transition">
                Products
              </a>
              <span>/</span>
              <span className="text-slate-200">{product.name}</span>
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
                <div className="relative h-96 md:h-125 rounded-2xl overflow-hidden bg-slate-800 border border-slate-700">
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
                  <ProductBadges badges={[product.category, product.availability, "In Stock"]} />
                </div>

                <h1 className="text-5xl font-bold mb-4">{product.name}</h1>
                <p className="text-xl text-slate-300 mb-8">{product.longDescription}</p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  <Card variant="default" className="p-4">
                    <div className="text-sm text-slate-400 mb-1">Minimum Order</div>
                    <div className="text-xl font-bold">{product.minQty}</div>
                  </Card>
                  <Card variant="default" className="p-4">
                    <div className="text-sm text-slate-400 mb-1">Availability</div>
                    <div className="text-xl font-bold text-green-400">{product.availability}</div>
                  </Card>
                </div>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">ISO certified manufacturing process</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Rigorous quality testing at every stage</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Fast dispatch & reliable delivery</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300">Custom sizes available on request</span>
                  </div>
                </div>

                {/* CTA */}
                <ProductCTA productName={product.name} quantity={product.minQty} />
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Specifications */}
        <section className="py-20 md:py-32 bg-linear-to-b from-blue-600/5 to-transparent">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-2">Technical Specifications</h2>
              <p className="text-lg text-slate-400">Detailed product specifications and features</p>
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

        {/* Additional Info */}
        <section className="py-20 md:py-32">
          <Container>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                <Card variant="default" className="h-full">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <CheckCircle2 className="w-6 h-6 text-blue-400" />
                    Quality Assurance
                  </h3>
                  <p className="text-slate-400 mb-4">
                    Every batch undergoes rigorous testing to ensure it meets international standards. We provide
                    certificates of analysis upon request.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Third-party inspections</li>
                    <li>• Batch-wise testing reports</li>
                    <li>• Full traceability documentation</li>
                    <li>• ISO compliance certification</li>
                  </ul>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card variant="default" className="h-full">
                  <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                    <AlertCircle className="w-6 h-6 text-blue-400" />
                    Delivery & Support
                  </h3>
                  <p className="text-slate-400 mb-4">
                    We ensure timely delivery and provide comprehensive support throughout the ordering and delivery
                    process.
                  </p>
                  <ul className="space-y-2 text-sm text-slate-300">
                    <li>• Fast dispatch (7-10 days standard)</li>
                    <li>• Pan-India delivery network</li>
                    <li>• 24/7 customer support</li>
                    <li>• Flexible payment terms available</li>
                  </ul>
                </Card>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-20 md:py-32 bg-linear-to-b from-transparent to-blue-600/5 border-t border-white/10">
            <Container>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-4xl font-bold mb-2">Related Products</h2>
                <p className="text-lg text-slate-400">Other products in the {product.category} category</p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedProducts.map((related, idx) => (
                  <motion.a
                    key={related.id}
                    href={`/products/${related.slug}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden hover:border-blue-500/50 smooth-transition">
                      <div className="relative h-40 rounded-lg mb-4 bg-slate-800 overflow-hidden">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 smooth-transition"
                        />
                      </div>
                      <h4 className="font-bold mb-2">{related.name}</h4>
                      <p className="text-sm text-slate-400">{related.description}</p>
                    </Card>
                  </motion.a>
                ))}
              </div>
            </Container>
          </section>
        )}

        {/* Final CTA */}
        <section className="py-20 md:py-32 bg-linear-to-r from-blue-600/10 to-cyan-600/10 border-y border-white/10">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-4xl font-bold mb-4">Interested in This Product?</h2>
              <p className="text-lg text-slate-300 mb-8 text-balance">
                Get a personalized quotation or chat with our team to discuss custom requirements
              </p>
              <ProductCTA productName={product.name} />
            </motion.div>
          </Container>
        </section>
      </main>
  )
}
