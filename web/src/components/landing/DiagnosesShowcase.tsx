"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Section, SectionTitle } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { DIAGNOSES } from "@/lib/mock/diagnoses";

const accentMap: Record<string, string> = {
  rose: "from-rose-100 via-rose-200/60 to-rose-300/40",
  gold: "from-gold-300/60 via-cream-200 to-gold-300/30",
  sage: "from-sage-200/60 via-cream-100 to-sage-200/30",
  sky: "from-sky-200/60 via-cream-100 to-sky-200/30",
};
const accentText: Record<string, string> = {
  rose: "text-rose-700",
  gold: "text-gold-500",
  sage: "text-sage-400",
  sky: "text-sky-400",
};

export function DiagnosesShowcase() {
  return (
    <Section>
      <SectionTitle
        eyebrow="DIAGNOSIS COLLECTION"
        title={
          <>
            なりたい未来から、<br className="hidden md:block" />
            <span className="font-display italic text-rose-700">3 つの</span>からだ診断。
          </>
        }
        description="一つの「型」に、テーマ・問い・タイプを差し替えて。骨格、セルフケア、AI 姿勢――あなたを見立てる入口を選んでください。"
      />

      <div className="grid gap-6 md:grid-cols-3">
        {DIAGNOSES.map((d, idx) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/diagnoses/${d.slug}`}
              className="group relative flex h-full flex-col overflow-hidden rounded-[2rem] border border-ink-800/[0.06] bg-white shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(181,103,127,0.3)]"
            >
              <div
                className={`relative h-56 overflow-hidden bg-gradient-to-br ${accentMap[d.accent]}`}
              >
                <div className="absolute inset-0 flex items-end justify-between p-6">
                  <div>
                    <span className="text-[0.62rem] tracking-[0.32em] uppercase text-ink-800/60">
                      {d.badge}
                    </span>
                    <h3 className={`mt-2 font-display text-3xl ${accentText[d.accent]}`}>
                      {d.title}
                    </h3>
                  </div>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/80 text-ink-800 transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <FloatingShape />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <p className="font-serif text-lg leading-relaxed text-ink-800">
                  {d.catchphrase}
                </p>
                <p className="text-sm leading-relaxed text-ink-400">{d.description}</p>
                <div className="mt-auto flex items-center gap-2 pt-3 text-xs text-ink-400">
                  <Badge tone="outline">{d.duration}</Badge>
                  <Badge tone="outline">{d.questionsCount} 問</Badge>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

function FloatingShape() {
  return (
    <>
      <div className="absolute -left-8 top-1/4 h-24 w-24 rounded-full bg-white/40 blur-2xl" />
      <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-white/30 blur-xl" />
    </>
  );
}
