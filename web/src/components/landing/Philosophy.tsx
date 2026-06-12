"use client";

import { motion } from "framer-motion";
import { Section, SectionTitle } from "@/components/ui/section";

const tenets = [
  {
    eyebrow: "01",
    title: "「治す」ではなく「ひらく」",
    body: "不調の言葉から始めない。あなたが「こうなりたい」と思える未来から始める、優しい設計。",
  },
  {
    eyebrow: "02",
    title: "3分でも、続けば変わる",
    body: "完璧を待たない。3分の呼吸、3分のストレッチ。続いた人だけが知る、3ヶ月後の景色。",
  },
  {
    eyebrow: "03",
    title: "ひとりで頑張らない",
    body: "AI と先生と、仲間と。あなたの代わりに見てくれる目、励ましてくれる声、一緒に歩く伴走者。",
  },
];

export function Philosophy() {
  return (
    <Section className="silk-gradient">
      <SectionTitle
        eyebrow="OUR PHILOSOPHY"
        title={
          <>
            女性のからだは、<br className="hidden md:block" />
            <span className="font-display italic text-rose-700">受け取る</span>もの。
          </>
        }
        description="Be Grace は、産後・育児中の毎日を頑張る女性が、自分のからだに優しく戻ってくるためのスタジオです。"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {tenets.map((t, idx) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="group relative overflow-hidden rounded-3xl border border-ink-800/[0.06] bg-white/70 p-8 backdrop-blur transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(181,103,127,0.25)]"
          >
            <span className="font-display text-5xl italic text-rose-300/70">{t.eyebrow}</span>
            <h3 className="mt-4 text-2xl font-light tracking-wide text-ink-800">{t.title}</h3>
            <p className="mt-4 text-sm leading-relaxed text-ink-400">{t.body}</p>
            <div className="absolute -right-4 -bottom-4 h-32 w-32 rounded-full bg-gradient-to-br from-rose-100/0 to-rose-200/30 blur-2xl transition-opacity group-hover:opacity-100" />
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
