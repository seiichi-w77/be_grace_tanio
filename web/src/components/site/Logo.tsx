import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className, compact }: { className?: string; compact?: boolean }) {
  return (
    <Link href="/" className={cn("group inline-flex items-center gap-3", className)}>
      <span className="relative inline-flex h-9 w-9 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-rose-200 via-cream-100 to-gold-300 ring-1 ring-rose-200/60 transition-transform group-hover:scale-[1.04]">
        <svg viewBox="0 0 32 32" className="h-5 w-5 text-rose-700/80">
          <path
            d="M16 4c5 6 9 8 12 12-6 0-9 4-12 12-3-8-6-12-12-12 3-4 7-6 12-12z"
            fill="currentColor"
            opacity="0.85"
          />
        </svg>
      </span>
      <span className="flex flex-col leading-none">
        <span className="font-display text-2xl tracking-wide text-ink-800 transition-colors group-hover:text-rose-700">
          Be Grace
        </span>
        {!compact && (
          <span className="mt-1 text-[0.62rem] tracking-[0.32em] uppercase text-rose-600/80">
            Body × Soul Studio
          </span>
        )}
      </span>
    </Link>
  );
}
