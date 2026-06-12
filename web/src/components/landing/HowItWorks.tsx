"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/ui/section";
import { Compass, Sprout, Sparkles, MessageCircleHeart } from "lucide-react";

const steps = [
  {
    icon: Compass,
    title: "問いに、優しく答える",
    body: "3分の問いから始まる、あなたの骨格・セルフケアタイプ。AIが整骨院最高峰の視点で見立てます。",
  },
  {
    icon: Sprout,
    title: "なりたい未来を、選ぶ",
    body: "「鏡を見るのが楽しみな朝」「夜ぐっすり眠れるからだ」——ゴールから設計するセルフケア。",
  },
  {
    icon: Sparkles,
    title: "3分から、続ける",
    body: "ドラクエみたいなポイント制で、続けるたびにレベルアップ。仲間とゆるくつながる励ましの仕組み。",
  },
  {
    icon: MessageCircleHeart,
    title: "迷ったら、相談する",
    body: "個別相談（15,000円）と本講座へ。AIと先生が、あなたのそばで一緒に考えます。",
  },
];

export function HowItWorks() {
  return (
    <Section className="bg-cream-50" id="how-it-works">
      <SectionTitle
        eyebrow="HOW IT WORKS"
        title={
          <>
            診断から、会員サイトまで。
            <span className="text-rose-700">一気通貫の優しい導線。</span>
          </>
        }
        description="集客は診断アプリ、本丸は会員サイト。診断 → 個別相談・講座 → 会員サイトでの継続伴走、全てがひとつの体験として繋がります。"
      />

      <div className="relative grid gap-8 md:grid-cols-4 md:gap-6">
        <div className="absolute left-0 right-0 top-12 hidden h-px bg-gradient-to-r from-transparent via-rose-200 to-transparent md:block" />
        {steps.map((s, idx) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="relative mx-auto inline-flex h-24 w-24 items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-rose-100 to-cream-200 blur-md" />
              <div className="relative flex h-20 w-20 items-center justify-center rounded-full bg-white shadow-[0_8px_24px_-8px_rgba(181,103,127,0.25)] ring-1 ring-rose-200/60">
                <s.icon className="h-6 w-6 text-rose-600" strokeWidth={1.2} />
              </div>
            </div>
            <div className="mt-6 text-center">
              <span className="font-display text-[0.68rem] tracking-[0.36em] uppercase text-rose-600/80">
                Step {String(idx + 1).padStart(2, "0")}
              </span>
              <h3
                className="headline-jp mt-2 text-ink-800 mx-auto max-w-[14ch]"
                style={{ fontSize: "var(--type-h3)" }}
              >
                {s.title}
              </h3>
              <p className="lede-jp mt-3 text-ink-400 mx-auto max-w-[28ch] text-[0.9rem]">{s.body}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
