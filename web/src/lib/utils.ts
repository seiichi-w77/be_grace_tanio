import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatNumber(n: number): string {
  return new Intl.NumberFormat("ja-JP").format(n);
}

export function formatJpDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(d);
}

export function shortJpDate(date: Date | string): string {
  const d = typeof date === "string" ? new Date(date) : date;
  return new Intl.DateTimeFormat("ja-JP", {
    month: "numeric",
    day: "numeric",
  }).format(d);
}

export function timeOfDay(): "morning" | "afternoon" | "evening" {
  const h = new Date().getHours();
  if (h < 11) return "morning";
  if (h < 17) return "afternoon";
  return "evening";
}

export function greet(name?: string): string {
  const t = timeOfDay();
  const base =
    t === "morning" ? "おはようございます" : t === "afternoon" ? "こんにちは" : "今夜もおつかれさまです";
  return name ? `${base}、${name}さん` : base;
}
