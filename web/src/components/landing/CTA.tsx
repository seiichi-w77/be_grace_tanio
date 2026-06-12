"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-rose-700 via-rose-600 to-rose-500 text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-20 left-1/4 h-80 w-80 rounded-full bg-gold-300 blur-3xl" />
        <div className="absolute -bottom-20 right-1/4 h-80 w-80 rounded-full bg-rose-300 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-10 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="font-display text-[0.7rem] tracking-[0.4em] uppercase text-rose-100/85">
            Begin your grace
          </span>
          <h2
            className="headline-jp mt-5 text-white mx-auto max-w-[22ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            あなたの理想は、もう
            <span className="block text-gold-300">あなたの中にあります。</span>
          </h2>
          <p className="lede-jp mx-auto mt-8 max-w-[32ch] text-rose-100/85">
            3分の問いから、なりたい未来までの道筋を。最初の一歩は、無料診断から。
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="gold" size="xl" className="text-base">
              <Link href="/diagnoses">
                からだ診断をはじめる
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link href="/signup">無料会員になる</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
