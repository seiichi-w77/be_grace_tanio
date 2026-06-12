"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Heart, MessageCircleHeart, Sparkles, Share2 } from "lucide-react";
import { Section, EyebrowText } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import type { DiagnosisTheme, DiagnosisResult as DR } from "@/lib/mock/types";

const accentBg: Record<string, string> = {
  rose: "from-rose-50 via-rose-100 to-rose-200/60",
  gold: "from-cream-50 via-gold-300/30 to-gold-300/60",
  sage: "from-cream-50 via-sage-200/40 to-sage-200/60",
  sky: "from-cream-50 via-sky-200/40 to-sky-200/60",
};
const accentText: Record<string, string> = {
  rose: "text-rose-700",
  gold: "text-gold-500",
  sage: "text-sage-400",
  sky: "text-sky-400",
};

// detect leading Latin chars to safely apply Cormorant
function isLatinTitle(s: string) {
  return /^[A-Za-z\s]+$/.test(s.split(" ").slice(0, 3).join(" "));
}

export function DiagnosisResult({ theme, result }: { theme: DiagnosisTheme; result: DR }) {
  const titleLooksEnglish = isLatinTitle(result.title);

  return (
    <>
      <Section className={`bg-gradient-to-br ${accentBg[result.accent]}`}>
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <EyebrowText>Your type</EyebrowText>
          <h1
            className={`${titleLooksEnglish ? "font-display italic !font-light" : "headline-jp"} mt-6 ${accentText[result.accent]} leading-[1.08] max-w-[18ch]`}
            style={{ fontSize: titleLooksEnglish ? "clamp(2.75rem, 5vw + 1rem, 5.25rem)" : "var(--type-display)" }}
          >
            {result.title}
          </h1>
          <p className="font-jp-serif mt-8 text-[1.25rem] md:text-[1.5rem] leading-[1.8] text-ink-800/90 max-w-[26ch]">
            「{result.poetry}」
          </p>
          <p className="lede-jp mt-6 max-w-[38ch] text-ink-700/80">
            {result.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Badge tone="outline" className="border-ink-800/15 bg-white/40 text-ink-800">
              {theme.title}
            </Badge>
            <Badge tone="rose">
              <Heart className="h-3 w-3" />
              診断結果
            </Badge>
          </div>
        </motion.div>
      </Section>

      <Section>
        <div className="grid gap-8 md:grid-cols-2">
          <Card title="あなたの輝き" tone="Strengths">
            <ul className="space-y-3">
              {result.strengths.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <Sparkles className="mt-1 h-4 w-4 shrink-0 text-rose-500" />
                  <span className="lede-jp text-[0.95rem] text-ink-700">{s}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card title="気をつけたい癖" tone="Cautions">
            <ul className="space-y-3">
              {result.cautions.map((s) => (
                <li key={s} className="flex items-start gap-3">
                  <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-gold-500" />
                  <span className="lede-jp text-[0.95rem] text-ink-700">{s}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-[1.2fr_1fr]">
          <Card title="3つの優しいセルフケア" tone="Recommendations">
            <ol className="space-y-4">
              {result.recommendations.map((r, idx) => (
                <li key={r} className="flex items-start gap-4">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-rose-500 to-rose-600 font-display !font-light tabular-nums text-sm text-white">
                    {idx + 1}
                  </span>
                  <span className="lede-jp pt-1 text-[0.95rem] text-ink-700 max-w-[40ch]">{r}</span>
                </li>
              ))}
            </ol>
          </Card>
          <Card title="3ヶ月後の、あなた" tone="Future self">
            <p className="font-jp-serif text-[1.05rem] leading-[1.85] text-ink-800 max-w-[28ch]">{result.futureSelf}</p>
          </Card>
        </div>
      </Section>

      <Section className="hero-gradient">
        <div className="mx-auto max-w-3xl text-center">
          <EyebrowText>Next step</EyebrowText>
          <h2
            className="headline-jp mt-6 text-ink-800 mx-auto max-w-[22ch]"
            style={{ fontSize: "var(--type-h2)" }}
          >
            ここから、どこへ向かいますか？
          </h2>
          <div className="mt-12 grid gap-5 text-left md:grid-cols-2">
            <Link
              href="/consultation"
              className="group relative overflow-hidden rounded-3xl bg-white p-7 shadow-[0_8px_24px_-8px_rgba(181,103,127,0.2)] ring-1 ring-rose-200/40 transition-all hover:-translate-y-1 hover:shadow-[0_24px_40px_-20px_rgba(181,103,127,0.3)]"
            >
              <Badge tone="rose">
                <MessageCircleHeart className="h-3 w-3" />
                個別相談
              </Badge>
              <h3
                className="headline-jp mt-4 text-ink-800"
                style={{ fontSize: "var(--type-h3)" }}
              >
                15,000円の、深い個別相談へ
              </h3>
              <p className="lede-jp mt-3 text-[0.9rem] text-ink-400">
                あなたの診断結果を丁寧に紐解き、今のあなただけのケア計画を一緒に作ります。
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-rose-700">
                予約する
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <Link
              href="/signup"
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-rose-600 to-rose-500 p-7 text-white shadow-[0_8px_24px_-8px_rgba(181,103,127,0.4)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_40px_-20px_rgba(181,103,127,0.5)]"
            >
              <Badge tone="outline" className="border-white/30 bg-white/15 text-white">
                <Sparkles className="h-3 w-3" />
                会員サイト
              </Badge>
              <h3
                className="headline-jp mt-4 text-white"
                style={{ fontSize: "var(--type-h3)" }}
              >
                無料会員になって、続ける
              </h3>
              <p className="lede-jp mt-3 text-[0.9rem] text-rose-100/85">
                毎日のセルフケアをポイント制で続けられる、Be Grace の会員サイトへ。
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium">
                登録する
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          </div>

          <button className="mt-10 inline-flex items-center gap-2 text-sm text-ink-400 transition-colors hover:text-rose-700">
            <Share2 className="h-4 w-4" />
            結果をシェアする
          </button>
        </div>
      </Section>
    </>
  );
}

function Card({
  title,
  tone,
  children,
}: {
  title: string;
  tone: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] ring-1 ring-ink-800/[0.05]">
      <EyebrowText>{tone}</EyebrowText>
      <h3
        className="headline-jp mt-3 text-ink-800"
        style={{ fontSize: "var(--type-h3)" }}
      >
        {title}
      </h3>
      <div className="mt-6">{children}</div>
    </div>
  );
}
