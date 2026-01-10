"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import type { Product } from "@/content/products"
import {Card} from "@/components/ui/card"
import {Badge} from "@/components/ui/badge"
import {Button} from  "@/components/ui/button"

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Card
        variant="default"
        className="h-full flex flex-col overflow-hidden group hover:border-blue-500/50 smooth-transition"
      >
        {/* Product Image */}
        <div className="relative h-56 overflow-hidden rounded-lg mb-6 bg-slate-800">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover group-hover:scale-110 smooth-transition"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>

        {/* Category Badge */}
        <div className="mb-4">
          <Badge variant="info" size="sm" className="capitalize">
            {product.category}
          </Badge>
        </div>

        {/* Content */}
        <h3 className="text-xl font-bold mb-2">{product.name}</h3>
        <p className="text-slate-400 text-sm mb-6 flex-grow">{product.description}</p>

        {/* Quick Details */}
        <div className="space-y-2 mb-6 text-sm border-t border-white/10 pt-4">
          <div className="flex justify-between">
            <span className="text-slate-500">Min Order:</span>
            <span className="font-medium text-slate-200">{product.minQty}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Availability:</span>
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
  )
}
