import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  // Base: fully token-driven (theme aware)
  "relative overflow-hidden flex flex-col gap-4 rounded-2xl border border-border bg-card text-card-foreground p-6 transition-colors",
  {
    variants: {
      variant: {
        // Neutral card (token-aware shadows)
        default: "shadow-sm shadow-black/5 dark:shadow-black/25",

        // Elevated (deeper shadow, still neutral)
        elevated:
          "shadow-lg shadow-black/10 hover:shadow-black/15 " +
          "dark:shadow-black/35 dark:hover:shadow-black/45",

        // Glass: no hardcoded whites/slates; uses tokens + transparency
        glass:
          "backdrop-blur " +
          "border-border/60 bg-card/65 shadow-sm shadow-black/10 " +
          "supports-[backdrop-filter]:bg-card/55 " +
          "dark:border-border/50 dark:bg-card/40 dark:shadow-black/30",

        // Outline: transparent surface, token border
        outline: "bg-transparent border-border/70 shadow-none",
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
