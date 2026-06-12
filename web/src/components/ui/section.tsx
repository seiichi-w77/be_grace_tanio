import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("relative w-full py-20 md:py-28", className)} {...props}>
      <div className="mx-auto w-full max-w-6xl px-6 md:px-10">{children}</div>
    </section>
  );
}

export function EyebrowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-display text-[0.68rem] tracking-[0.36em] uppercase text-rose-600/80",
        className
      )}
    >
      <span className="inline-block h-px w-6 bg-rose-300" />
      {children}
    </span>
  );
}

export function SectionTitle({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "max-w-[34ch] mb-12 md:mb-16",
        align === "center" && "mx-auto text-center max-w-[26ch]"
      )}
    >
      {eyebrow && <EyebrowText>{eyebrow}</EyebrowText>}
      <h2
        className="headline-jp mt-5 text-ink-800"
        style={{ fontSize: "var(--type-h2)" }}
      >
        {title}
      </h2>
      {description && (
        <p
          className="lede-jp mt-6 text-ink-400 max-w-[44ch]"
        >
          {description}
        </p>
      )}
    </div>
  );
}
