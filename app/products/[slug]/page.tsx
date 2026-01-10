import { PRODUCTS } from "@/content/products"
import ProductDetailPageClient from "./ProductDetailPageClient"

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }))
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return <ProductDetailPageClient params={params} />
}
