import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  // Base: uses your CSS variables (bg-card/text-card-foreground/border-border)
  "relative overflow-hidden bg-card text-card-foreground flex flex-col gap-4 rounded-2xl border border-border p-6 transition-colors",
  {
    variants: {
      variant: {
        // Neutral card, works automatically via tokens
        default:
          "shadow-sm shadow-black/5 " +
          "dark:shadow-black/20",

        // Elevated: softer in light, deeper in dark
        elevated:
          "shadow-lg shadow-black/10 hover:shadow-black/15 " +
          "dark:shadow-black/30 dark:hover:shadow-black/40",

        // Glass: light needs darker border + subtle white wash,
        // dark needs your current white wash + border
        glass:
          "backdrop-blur " +
          "border-slate-200/70 bg-white/70 shadow-sm " +
          "dark:border-white/10 dark:bg-white/[0.04] dark:shadow-black/20",

        // Outline: transparent background, but keep border correct in both
        outline:
          "bg-transparent shadow-none " +
          "border-slate-200/70 dark:border-white/10",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

type CardProps = React.ComponentProps<"div"> & VariantProps<typeof cardVariants>;

function Card({ className, variant, ...props }: CardProps) {
  return (
    <div
      data-slot="card"
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Card };
