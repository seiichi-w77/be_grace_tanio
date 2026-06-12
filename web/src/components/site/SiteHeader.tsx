"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/diagnoses", label: "診断" },
  { href: "/courses", label: "講座" },
  { href: "/consultation", label: "個別相談" },
  { href: "/about", label: "Be Grace について" },
  { href: "/app", label: "会員ログイン" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto mt-4 w-[calc(100%-2rem)] max-w-6xl rounded-full glass px-4 py-2.5 md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Logo />
          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-4 py-2 text-[0.85rem] text-ink-600 transition-colors hover:bg-cream-100 hover:text-ink-800"
              >
                {item.label}
              </Link>
            ))}
            <Button asChild size="sm" className="ml-2">
              <Link href="/signup">無料ではじめる</Link>
            </Button>
          </nav>
          <button
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink-600 transition-colors hover:bg-cream-100 md:hidden"
            aria-label="メニュー"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mx-auto mt-2 w-[calc(100%-2rem)] max-w-6xl overflow-hidden rounded-3xl glass p-3 md:hidden"
          >
            <div className="flex flex-col">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl px-5 py-3 text-sm text-ink-600 transition-colors hover:bg-cream-100"
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="md" className="mt-2">
                <Link href="/signup" onClick={() => setOpen(false)}>
                  無料ではじめる
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
