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
          group relative h-full p-0 overflow-hidden smooth-transition
          border border-border bg-card/65 hover:bg-card/80 hover:border-primary/20
          dark:bg-card/45 dark:hover:bg-card/55 dark:hover:border-primary/25
        "
      >
        {/* Image */}
        <div
          className="
            relative h-56 overflow-hidden
            bg-muted/40 ring-1 ring-border/60
          "
        >
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-[1.06]"
          />

          {/* Overlay: token-driven so it matches both themes */}
          <div
            className="
              absolute inset-0
              bg-gradient-to-t
              from-background/35 via-background/10 to-transparent
              dark:from-background/70 dark:via-background/15
            "
          />

          {/* Top chips */}
          <div className="absolute left-4 top-4 flex items-center gap-2">
            <Badge
              variant="default"
              size="sm"
              className="capitalize border border-border/60 bg-background/55 text-foreground backdrop-blur"
            >
              {product.category}
            </Badge>
          </div>
        </div>

        {/* Body */}
        <div className="px-6 pt-5 pb-6 flex flex-col">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl font-semibold tracking-tight text-foreground">
              {product.name}
            </h3>

            <span className="mt-1 inline-flex items-center gap-1 text-xs text-muted-foreground">
              <Sparkles className="h-4 w-4 text-primary" />
              Premium
            </span>
          </div>

          <p className="mt-2 text-sm leading-relaxed line-clamp-3 text-muted-foreground">
            {product.description}
          </p>

          <div
            className="
              mt-5 rounded-2xl border p-4
              border-border/70 bg-background/50
              dark:bg-background/35
            "
          >
            <div className="flex items-center justify-between text-sm">
              <span className="text-muted-foreground">Min Order</span>
              <span className="font-medium text-foreground">
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
                border-border bg-card/60 text-foreground hover:bg-card/80
                dark:bg-card/45 dark:hover:bg-card/55
              "
              asChild
            >
              <Link
                href={`/products/${encodeURIComponent(product.slug)}`}
                className="flex items-center justify-center gap-2"
              >
                View Details
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5 text-primary" />
              </Link>
            </Button>
          </div>
        </div>

        {/* ✅ Subtle hover glow (reduced intensity + smaller blur) */}
        <div
          className="
            pointer-events-none absolute -inset-0.5 rounded-2xl opacity-0 blur-xl transition-opacity duration-300
            group-hover:opacity-60
            bg-gradient-to-r from-primary/6  to-primary/6
            dark:from-primary/10  dark:to-primary/10
          "
        />
      </Card>
    </motion.div>
  );
}
