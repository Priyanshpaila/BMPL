"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

type BrandLogoProps = {
  className?: string;
  alt?: string;
  height?: number;
};

/**
 * Renders the correct logo for light/dark mode without hydration mismatches.
 *
 * - Before mount: renders text fallback to keep SSR stable.
 * - After mount: renders an image based on resolved theme.
 */
export default function BrandLogo({
  className,
  alt = "Bhawani Moulders Pvt. Ltd.",
  height = 28,
}: BrandLogoProps) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <span className={className ?? "text-xl font-bold tracking-tight text-foreground"}>
        Bhawani
      </span>
    );
  }

  const src =
    resolvedTheme === "dark" ? "/brand/logo-dark.png" : "/brand/logo-light.png";

  return (
    <img
      src={src}
      alt={alt}
      height={height}
      className={
        className ??
        "h-7 w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.25)]"
      }
      loading="eager"
      decoding="async"
    />
  );
}
