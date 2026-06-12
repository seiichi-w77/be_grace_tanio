"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-medium tracking-wide transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-600/30 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400 text-white shadow-[0_8px_24px_-8px_rgba(181,103,127,0.45)] hover:shadow-[0_14px_32px_-8px_rgba(181,103,127,0.55)] hover:-translate-y-[1px]",
        secondary:
          "bg-white text-ink-800 border border-rose-200/70 hover:border-rose-300 hover:bg-rose-50 shadow-sm",
        ghost:
          "bg-transparent text-ink-600 hover:bg-cream-100 hover:text-ink-800",
        outline:
          "border border-ink-800/15 bg-transparent text-ink-800 hover:border-ink-800/30 hover:bg-cream-50",
        glass:
          "glass text-ink-800 hover:bg-white/80",
        gold:
          "bg-gradient-to-br from-gold-500 to-gold-300 text-white shadow-[0_8px_24px_-8px_rgba(199,154,90,0.55)] hover:-translate-y-[1px]",
      },
      size: {
        sm: "h-9 px-4 text-xs",
        md: "h-11 px-6 text-sm",
        lg: "h-14 px-8 text-base",
        xl: "h-16 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: { variant: "primary", size: "md" },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        ref={ref}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { buttonVariants };
