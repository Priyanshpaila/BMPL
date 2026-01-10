import type { MetadataRoute } from "next"
import { PRODUCTS } from "@/content/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://bmpl-raipur.com"
  const now = new Date()

  const staticRoutes = ["/", "/products", "/infrastructure", "/about", "/contact", "/quote"].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
  }))

  const productRoutes = PRODUCTS.map((p) => ({
    url: `${baseUrl}/products/${p.slug}`,
    lastModified: now,
  }))

  return [...staticRoutes, ...productRoutes]
}
