import { notFound } from "next/navigation";
import { PRODUCTS } from "@/content/products";
import ProductDetailPageClient from "./ProductDetailPageClient";

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

// Optional (recommended if you are exporting static):
export const dynamicParams = false;

function safeDecode(raw: string) {
  try {
    return decodeURIComponent(raw);
  } catch {
    return raw;
  }
}

export default async function ProductPage({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  // ✅ Next 16 may provide params as a Promise
  const { slug: rawSlug } = await Promise.resolve(params);

  // decode is optional; safeDecode avoids crashes on malformed encodings
  const slug = safeDecode(String(rawSlug)).trim();

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) notFound();

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 3);

  return (
    <ProductDetailPageClient product={product} relatedProducts={relatedProducts} />
  );
}
