import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  // ✅ better defaults: padding on all sides + tighter gap + rounded + overflow
  "relative overflow-hidden bg-card text-card-foreground flex flex-col gap-4 rounded-2xl border p-6 transition",
  {
    variants: {
      variant: {
        default: "shadow-sm",
        elevated: "shadow-lg shadow-black/20 hover:shadow-black/30",
        glass: "border-white/10 bg-white/[0.04] backdrop-blur shadow-sm",
        outline: "bg-transparent shadow-none",
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
