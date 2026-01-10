import Link from "next/link";
import Container from "@/components/layout/Container";
import { Button } from  "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="py-24 md:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm text-slate-400">404</p>
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">Page not found</h1>
          <p className="mb-8 text-balance text-lg text-slate-300">
            The page you are looking for doesn’t exist, or it may have been moved.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="/">Back to Home</Link>
            </Button>
            <Button size="lg" variant="secondary" asChild>
              <Link href="/products">Browse Products</Link>
            </Button>
          </div>
        </div>
      </Container>
    </main>
  );
}
