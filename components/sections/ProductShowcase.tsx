"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { PRODUCTS } from "@/content/products"
import Container from "@/components/layout/Container"
import {Card} from "@/components/ui/card"
import {Button} from  "@/components/ui/button"

export default function ProductShowcase() {
  const featuredProducts = PRODUCTS.slice(0, 3)

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <section className="py-20 md:py-32">
      <Container>
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="gradient-text">Product Range</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-400 max-w-2xl mx-auto text-balance"
          >
            Premium quality steel products manufactured with precision for your industrial needs
          </motion.p>
        </div>

        {/* Product Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {featuredProducts.map((product) => (
            <motion.div key={product.id} variants={itemVariants}>
              <Card
                variant="default"
                className="h-full flex flex-col overflow-hidden group hover:border-blue-500/50 smooth-transition"
              >
                {/* Product Image */}
                <div className="relative h-48 overflow-hidden rounded-lg mb-6 bg-slate-800">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover group-hover:scale-110 smooth-transition"
                  />
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-2">{product.name}</h3>
                <p className="text-slate-400 text-sm mb-4 flex-grow">{product.description}</p>

                {/* Details */}
                <div className="space-y-2 mb-6 text-sm text-slate-300">
                  <div className="flex justify-between">
                    <span className="text-slate-500">Min Order:</span>
                    <span className="font-medium">{product.minQty}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-500">Status:</span>
                    <span className="text-green-400 font-medium">{product.availability}</span>
                  </div>
                </div>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full flex items-center justify-center gap-2 group/btn bg-transparent"
                  asChild
                >
                  <Link href={`/products/${product.slug}`}>
                    View Details
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 smooth-transition" />
                  </Link>
                </Button>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Button variant="ghost" asChild>
            <Link href="/products" className="inline-flex items-center gap-2">
              View All Products
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </Container>
    </section>
  )
}
