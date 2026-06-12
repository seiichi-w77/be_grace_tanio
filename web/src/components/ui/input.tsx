"use client";
import * as React from "react";
import { cn } from "@/lib/utils";

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type = "text", ...props }, ref) => (
    <input
      ref={ref}
      type={type}
      className={cn(
        "flex h-12 w-full rounded-2xl bg-white border border-ink-800/10 px-5 text-sm text-ink-800 placeholder:text-ink-200 transition-colors focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-500/10 disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Input.displayName = "Input";

export const Textarea = React.forwardRef<HTMLTextAreaElement, React.TextareaHTMLAttributes<HTMLTextAreaElement>>(
  ({ className, ...props }, ref) => (
    <textarea
      ref={ref}
      className={cn(
        "flex min-h-[120px] w-full rounded-2xl bg-white border border-ink-800/10 px-5 py-4 text-sm text-ink-800 placeholder:text-ink-200 transition-colors focus:border-rose-400 focus:outline-none focus:ring-4 focus:ring-rose-500/10 resize-y disabled:opacity-50",
        className
      )}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";
