import * as React from "react";
import { cn } from "@/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLElement>) {
  return (
    <section className={cn("relative w-full py-24 md:py-32", className)} {...props}>
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
        "inline-flex items-center gap-2 text-[0.68rem] tracking-[0.32em] uppercase text-rose-600/80",
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
        "max-w-2xl mb-14",
        align === "center" && "mx-auto text-center"
      )}
    >
      {eyebrow && <EyebrowText>{eyebrow}</EyebrowText>}
      <h2 className="mt-5 font-light text-3xl md:text-5xl leading-[1.2] text-ink-800">
        {title}
      </h2>
      {description && (
        <p className="mt-6 text-ink-400 leading-relaxed text-base md:text-lg">{description}</p>
      )}
    </div>
  );
}
