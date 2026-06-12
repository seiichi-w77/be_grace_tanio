"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/ui/section";

const stories = [
  {
    name: "Sayaka, 32",
    role: "産後 8ヶ月 / 会社員",
    quote:
      "「治したい」じゃなく「こうなりたい」から始まる診断が、新鮮で。3分で泣きそうになりました。",
    metric: "睡眠時間 +1h",
  },
  {
    name: "Erika, 39",
    role: "二児の母 / 美容業界",
    quote:
      "ドラクエ感覚で続けられて、気づけば3ヶ月。鏡の前で素直に「私、好き」って言えるように。",
    metric: "ポイント 4,200pt",
  },
  {
    name: "Yui, 28",
    role: "ヨガインストラクター",
    quote:
      "私の生徒さんに「これいいよ」と紹介できる、自分も使いたい、両方を満たすサービスです。",
    metric: "VIP 半年継続",
  },
];

export function Testimonials() {
  return (
    <Section>
      <SectionTitle
        eyebrow="STORIES"
        title={
          <>
            すでに <span className="font-display italic text-rose-700">受け取りはじめた</span>
            <br className="hidden md:block" />
            女性たちの声。
          </>
        }
      />
      <div className="grid gap-6 md:grid-cols-3">
        {stories.map((s, idx) => (
          <motion.figure
            key={s.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-cream-50 to-rose-50 p-8 ring-1 ring-ink-800/[0.05]"
          >
            <span className="font-display text-7xl italic text-rose-300/70">"</span>
            <blockquote className="-mt-6 font-serif text-lg leading-relaxed text-ink-800">
              {s.quote}
            </blockquote>
            <figcaption className="mt-6 flex items-center justify-between border-t border-ink-800/[0.06] pt-4">
              <div>
                <div className="text-sm font-medium text-ink-800">{s.name}</div>
                <div className="text-xs text-ink-400">{s.role}</div>
              </div>
              <span className="rounded-full bg-white/70 px-3 py-1 text-[0.7rem] tracking-wide text-rose-700">
                {s.metric}
              </span>
            </figcaption>
          </motion.figure>
        ))}
      </div>
    </Section>
  );
}
