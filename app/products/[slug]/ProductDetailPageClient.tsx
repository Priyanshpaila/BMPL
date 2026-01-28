"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import Container from "@/components/layout/Container";
import { Card } from "@/components/ui/card";
import ProductSpecTable from "@/components/products/ProductSpecTable";
import GroupedSizeTable from "@/components/products/GroupedSizeTable";
import ProductCTA from "@/components/products/ProductCTA";
import ProductBadges from "@/components/products/ProductBadges";
import Link from "next/link";
import type { Product } from "@/content/products";
import { ANGLE_SIZE_TABLE, FLAT_SIZE_TABLE } from "@/content/productSizes";

export default function ProductDetailPageClient({
  product,
  relatedProducts,
}: {
  product: Product;
  relatedProducts: Product[];
}) {
  // ✅ SAME BACKGROUND PATTERN (LIGHT wash + DARK flat wash) + dot texture
  const lightWash =
    "pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-600/5 to-transparent";
  const darkWash =
    "pointer-events-none absolute inset-0 -z-10 hidden dark:block bg-primary/6";
  const dots =
    "pointer-events-none absolute inset-0 -z-10 opacity-[0.06] dark:opacity-[0.10] dot-grid";

  // ✅ Use theme tokens instead of slate/emerald hard-codes
  const crumbBar =
    "border-b border-border/70 bg-background/70 backdrop-blur dark:border-border/60 dark:bg-background/50";

  const crumbLink =
    "text-foreground/80 hover:text-foreground smooth-transition dark:text-muted-foreground dark:hover:text-foreground";

  const crumbSep = "text-muted-foreground/60";

  const heroImageWrap =
    "relative h-96 md:h-125 rounded-2xl overflow-hidden bg-card border border-border/70 dark:bg-card/40 dark:border-border/60";

  const statCard =
    "p-4 border-border/70 bg-background/60 dark:border-border/60 dark:bg-card/35";

  const statLabel = "text-sm text-muted-foreground mb-1";
  const statValue = "text-xl font-bold text-foreground";

  const bulletIcon = "w-5 h-5 text-primary shrink-0 mt-0.5";
  const bulletText = "text-foreground/80 dark:text-foreground/80";

  return (
    <main>
      {/* Breadcrumb */}
      <div className={crumbBar}>
        <Container className="py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/products" className={crumbLink}>
              Products
            </Link>
            <span className={crumbSep}>/</span>
            <span className="text-foreground">{product.name}</span>
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
              <div className={heroImageWrap}>
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
                <ProductBadges
                  badges={[product.category, product.availability]}
                />
              </div>

              <h1 className="text-5xl font-bold mb-4 text-foreground">
                {product.name}
              </h1>

              <p className="text-xl text-muted-foreground mb-8">
                {product.longDescription}
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                <Card variant="glass" className={statCard}>
                  <div className={statLabel}>Minimum Order</div>
                  <div className={statValue}>{product.minQty}</div>
                </Card>

                <Card variant="glass" className={statCard}>
                  <div className={statLabel}>Availability</div>
                  {/* ✅ keep readable, brand-forward */}
                  <div className="text-xl font-bold text-primary">
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
                    <CheckCircle2 className={bulletIcon} />
                    <span className={bulletText}>{t}</span>
                  </div>
                ))}
              </div>

              <ProductCTA
                productName={product.name}
                quantity={product.minQty}
              />
            </motion.div>
          </div>
        </Container>
      </section>

      {/* Specifications */}
      <section className="relative overflow-hidden py-20 md:py-32">
        <div className={lightWash} />
        <div className={darkWash} />
        <div className={dots} />

        <Container className="relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <h2 className="text-4xl font-bold mb-2 text-foreground">
              Technical Specifications
            </h2>
            <p className="text-lg text-muted-foreground">
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

            {/* Sizes table like your image */}
            {product.category === "angles" && (
              <div className="mt-10">
                <GroupedSizeTable
                  title="Angles"
                  leftHeader="Leg (mm)"
                  rightHeader="Section (mm)"
                  groups={ANGLE_SIZE_TABLE}
                />
              </div>
            )}

            {product.category === "flats" && (
              <div className="mt-10">
                <GroupedSizeTable
                  title="Flats"
                  leftHeader="Width (mm)"
                  rightHeader="Thickness (mm)"
                  groups={FLAT_SIZE_TABLE}
                />
              </div>
            )}
          </motion.div>
        </Container>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative overflow-hidden py-20 md:py-32 border-t border-border/70 dark:border-border/60">
          <div className={lightWash} />
          <div className={darkWash} />
          <div className={dots} />

          <Container className="relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-4xl font-bold mb-2 text-foreground">
                Related Products
              </h2>
              <p className="text-lg text-muted-foreground">
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
                  <Link
                    href={`/products/${encodeURIComponent(related.slug)}`}
                    className="group block"
                  >
                    <Card
                      className="
                        h-full overflow-hidden border border-border/70 bg-background/60 backdrop-blur
                        hover:border-primary/25 transition-colors
                        dark:border-border/60 dark:bg-card/35 dark:hover:border-primary/35
                      "
                    >
                      <div className="relative h-40 rounded-lg mb-4 bg-card overflow-hidden">
                        <Image
                          src={related.image || "/placeholder.svg"}
                          alt={related.name}
                          fill
                          className="object-cover group-hover:scale-110 smooth-transition"
                        />
                      </div>

                      <h4 className="font-bold mb-2 text-foreground">
                        {related.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
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
