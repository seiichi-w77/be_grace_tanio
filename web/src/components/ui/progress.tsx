"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

interface ProgressProps extends React.HTMLAttributes<HTMLDivElement> {
  value: number;
  tone?: "rose" | "gold" | "sage";
}

export function Progress({ value, tone = "rose", className, ...props }: ProgressProps) {
  const colors: Record<string, string> = {
    rose: "from-rose-400 via-rose-500 to-rose-600",
    gold: "from-gold-300 via-gold-500 to-rose-500",
    sage: "from-sage-200 via-sage-400 to-rose-500",
  };
  return (
    <div
      className={cn("relative h-2 w-full overflow-hidden rounded-full bg-cream-200", className)}
      {...props}
    >
      <div
        className={cn(
          "h-full rounded-full bg-gradient-to-r transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]",
          colors[tone]
        )}
        style={{ width: `${Math.min(100, Math.max(0, value))}%` }}
      />
    </div>
  );
}
