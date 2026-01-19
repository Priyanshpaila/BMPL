"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import type { Product } from "@/content/products";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function ProductCard({
  product,
  index = 0,
}: {
  product: Product;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.06, duration: 0.45 }}
      className="h-full"
    >
      <Card
        variant="glass"
        className="
          group h-full p-0 overflow-hidden transition-colors
          border-slate-200/70 bg-white/70 hover:bg-white/90 hover:border-blue-500/25
          dark:border-white/10 dark:bg-white/[0.03] dark:hover:bg-white/[0.05] dark:hover:border-blue-400/30
        "
      >
        {/* Image */}
        <div
          className="
            relative h-56 overflow-hidden
            bg-slate-200/60 ring-1 ring-slate-900/10
            dark:bg-slate-900/60 dark:ring-white/10
          "
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
          />

          {/* Overlay: stronger on light so text stays readable */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t from-white/10 via-white/10 to-transparent
              dark:from-black/55 dark:via-black/15
            "
          />

          {/* Top chips */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <Badge variant="default" size="sm" className="capitalize">
              {product.category}
            </Badge>

            {/* {!!product.availability && (
              <span
                className="
                  inline-flex items-center gap-1 rounded-full border px-2 py-1 text-[11px]
                  border-slate-900/10 bg-white/70 text-slate-700
                  dark:border-white/10 dark:bg-black/25 dark:text-slate-200
                "
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400" />
                {product.availability}
              </span>
            )} */}
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-6 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-slate-900 dark:text-white">
              {product.name}
            </h3>

            <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-600 dark:text-slate-400">
              <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-300" />
              Premium
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-slate-600 dark:text-slate-400">
            {product.description}
          </p>

          <div
            className="
              mt-5 rounded-2xl border p-4
              border-slate-200/80 bg-slate-50/80
              dark:border-white/10 dark:bg-white/[0.02]
            "
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-slate-600 dark:text-slate-500">Min Order</span>
              <span className="font-medium text-slate-900 dark:text-slate-200">
                {product.minQty}
              </span>
            </div>
          </div>

          <div className="mt-5">
            <Button
              variant="secondary"
              size="sm"
              className="
                w-full rounded-2xl border
                bg-slate-900 text-white hover:bg-slate-800 border-slate-900/10
                dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:border-white/10
              "
              asChild
            >
              <Link
                href={`/products/${encodeURIComponent(product.slug)}`}
                className="flex items-center justify-center gap-2"
              >
                View Details
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
