import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border font-medium w-fit whitespace-nowrap shrink-0 gap-1 [&>svg]:size-3 [&>svg]:pointer-events-none transition-colors overflow-hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50 aria-invalid:ring-2 aria-invalid:ring-destructive/20 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // Primary pill: readable in light, stays strong in dark
        default:
          "border-transparent bg-primary text-primary-foreground " +
          "[a&]:hover:bg-primary/90 " +
          "dark:[a&]:hover:bg-primary/85",

        // Secondary: keep subtle contrast in both themes
        secondary:
          "border-transparent bg-secondary text-secondary-foreground " +
          "[a&]:hover:bg-secondary/90 " +
          "dark:[a&]:hover:bg-secondary/85",

        // Destructive: ensure foreground is visible on both themes
        destructive:
          "border-transparent bg-destructive text-destructive-foreground " +
          "[a&]:hover:bg-destructive/90 " +
          "dark:[a&]:hover:bg-destructive/85",

        // Outline: needs a real hover surface in light, and a darker surface in dark
        outline:
          "bg-transparent text-foreground border-border " +
          "[a&]:hover:bg-muted [a&]:hover:text-foreground " +
          "dark:[a&]:hover:bg-white/10 dark:[a&]:hover:text-foreground",

        // Info: crisp in light (darker text), airy in dark (lighter text)
        info:
          "border-sky-600/25 bg-sky-600/10 text-sky-800 " +
          "[a&]:hover:bg-sky-600/15 " +
          "dark:border-sky-500/20 dark:bg-sky-500/15 dark:text-sky-200 " +
          "dark:[a&]:hover:bg-sky-500/20",
      },
      size: {
        default: "px-2 py-0.5 text-xs",
        sm: "px-2 py-0.5 text-[11px]",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

type BadgeProps = React.ComponentPropsWithoutRef<"span"> &
  VariantProps<typeof badgeVariants> & {
    asChild?: boolean;
  };

function Badge({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: BadgeProps) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      data-slot="badge"
      className={cn(badgeVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };
