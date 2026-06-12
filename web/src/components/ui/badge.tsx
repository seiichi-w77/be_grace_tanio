import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[0.7rem] font-medium tracking-wider uppercase",
  {
    variants: {
      tone: {
        rose: "bg-rose-100/70 text-rose-700 border border-rose-200/60",
        gold: "bg-gold-300/30 text-gold-500 border border-gold-300/50",
        sage: "bg-sage-200/50 text-sage-400 border border-sage-200",
        sky: "bg-sky-200/40 text-sky-400 border border-sky-200",
        cream: "bg-cream-100 text-ink-600 border border-cream-300/60",
        outline: "bg-transparent text-ink-600 border border-ink-800/15",
      },
    },
    defaultVariants: { tone: "rose" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

export function Badge({ className, tone, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ tone }), className)} {...props} />;
}
