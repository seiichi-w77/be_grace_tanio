"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden hero-gradient">
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2">
        <div className="h-[680px] w-[680px] rounded-full bg-gradient-to-br from-rose-200/35 via-cream-100/0 to-transparent blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-x-0 top-0 mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-rose-300/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 pt-24 pb-28 md:px-10 md:pt-32 md:pb-36">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <span className="tag-pill">
            <Sparkles className="h-3 w-3" />
            <span>Now serving — Spring 2026</span>
          </span>

          {/* English overline — Cormorant italic, safe to use display font */}
          <span className="mt-10 block eyebrow-en !tracking-[0.4em] !text-[0.78rem] !normal-case font-display italic !font-light !text-rose-600/85">
            Receive your future,
          </span>

          {/* JP headline — Noto Serif JP, no Cormorant, text-wrap balance */}
          <h1
            className="headline-jp mt-4 text-ink-800 max-w-[22ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            <span className="block">理想の未来を、</span>
            <span className="mt-1 block bg-gradient-to-r from-rose-700 via-rose-500 to-gold-500 bg-clip-text text-transparent">
              受け取る、からだ診断。
            </span>
          </h1>

          <p className="lede-jp mt-8 max-w-[34ch] text-ink-600">
            産後・育児中の女性のための、運動セルフケア・スタジオ。
            「不調を治す」ではなく「なりたい未来から始める」、優しい3分の問いから。
          </p>

          <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row">
            <Button asChild size="xl" className="text-base">
              <Link href="/diagnoses">
                からだ診断をはじめる
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="ghost" size="xl">
              <Link href="#how-it-works">仕組みを見る</Link>
            </Button>
          </div>

          <div className="mt-14 grid w-full max-w-3xl grid-cols-3 divide-x divide-ink-800/[0.06] rounded-3xl border border-ink-800/[0.06] bg-white/60 px-2 py-5 text-center backdrop-blur">
            {[
              { label: "現在の会員数", value: "1,248", sub: "名 / 月成長率 +8%" },
              { label: "診断完了率", value: "74", sub: "% (業界平均 32%)" },
              { label: "継続率", value: "82", sub: "% / 3ヶ月後" },
            ].map((m) => (
              <div key={m.label} className="px-3 py-2 md:px-4">
                <div className="text-[0.6rem] md:text-[0.65rem] tracking-[0.24em] uppercase text-ink-400">
                  {m.label}
                </div>
                {/* Number only — Cormorant safe */}
                <div className="mt-2 font-display text-[clamp(1.5rem,3vw,2.25rem)] !font-light text-ink-800 tabular-nums">
                  {m.value}
                </div>
                <div className="mt-1 text-[0.68rem] md:text-[0.7rem] text-ink-400">{m.sub}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <FloatingOrbs />
    </section>
  );
}

function FloatingOrbs() {
  return (
    <>
      <div className="pointer-events-none absolute left-[8%] top-[28%] hidden h-32 w-32 rounded-full bg-gradient-to-br from-rose-200 to-rose-300/40 opacity-50 blur-2xl animate-float-slow md:block" />
      <div className="pointer-events-none absolute right-[10%] top-[18%] hidden h-40 w-40 rounded-full bg-gradient-to-br from-gold-300/60 to-cream-200 opacity-60 blur-3xl animate-float-slow md:block" style={{ animationDelay: "2s" }} />
      <div className="pointer-events-none absolute left-[18%] bottom-[12%] hidden h-28 w-28 rounded-full bg-gradient-to-br from-sky-200 to-sage-200 opacity-50 blur-2xl animate-float-slow md:block" style={{ animationDelay: "4s" }} />
    </>
  );
}
