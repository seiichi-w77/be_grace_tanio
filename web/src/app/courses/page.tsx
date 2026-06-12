import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = { title: "本講座" };

const courses = [
  {
    id: "core",
    title: "Be Grace 本講座",
    subtitle: "12 weeks · 産後の骨格を整える集中プログラム",
    price: "¥248,000",
    accent: "from-rose-500 to-rose-700",
    summary:
      "12週間のプライベートプログラム。AI診断、毎週60分の個別セッション、専用動画ライブラリ、VIP会員サイトへの永久アクセス。",
    bullets: [
      "毎週60分の個別オンラインセッション × 12",
      "オリジナルAI 姿勢解析 × 4 回",
      "VIP 会員サイトへの永久アクセス",
      "Be Grace コミュニティ（クローズド）",
    ],
  },
  {
    id: "season",
    title: "Bloom Season",
    subtitle: "4 weeks · 季節のセルフケア集中",
    price: "¥58,000",
    accent: "from-gold-500 to-gold-300",
    summary:
      "春夏秋冬それぞれにある女性のからだのリズムに合わせた4週間プログラム。動画＋週1のグループセッション。",
    bullets: [
      "週1の60分グループセッション × 4",
      "季節限定の動画ライブラリ",
      "Be Grace 会員サイト6ヶ月無料",
    ],
  },
  {
    id: "intro",
    title: "Welcome Bloom",
    subtitle: "Single · 体験セッション",
    price: "¥3,800",
    accent: "from-sky-400 to-sky-200",
    summary:
      "Be Graceの世界を90分で体験。骨格診断＋姿勢分析＋ミニケアレシピを、まずは一度。",
    bullets: ["90分の対面/オンライン", "AI診断レポート", "今日から始める3つのアクション"],
  },
];

export default function CoursesPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>COURSE COLLECTION</EyebrowText>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink-800">
            <span className="font-display italic text-rose-700">3 つ</span>のコースから、<br />
            あなたの今に。
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-loose text-ink-600">
            時間も予算も、今あなたが持てるリソースに合わせて。受け取れる Grace は、どのコースでも本物です。
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-12">
          {courses.map((c, idx) => (
            <article
              key={c.id}
              className={`relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] ring-1 ring-ink-800/[0.05] md:grid md:grid-cols-[1fr_1.2fr] ${idx % 2 ? "md:grid-cols-[1.2fr_1fr]" : ""}`}
            >
              <div className={`relative min-h-[280px] bg-gradient-to-br ${c.accent} p-10 text-white ${idx % 2 ? "md:order-2" : ""}`}>
                <Badge tone="outline" className="border-white/30 bg-white/15 text-white">
                  <Sparkles className="h-3 w-3" />
                  COURSE {String(idx + 1).padStart(2, "0")}
                </Badge>
                <h2 className="mt-6 font-display text-5xl md:text-6xl italic font-light leading-tight">
                  {c.title}
                </h2>
                <p className="mt-3 text-sm tracking-wide text-white/85">{c.subtitle}</p>
                <div className="mt-12 font-display text-4xl md:text-5xl">{c.price}</div>
                <div className="mt-1 text-xs tracking-[0.32em] uppercase text-white/70">税込</div>
              </div>
              <div className="p-10">
                <p className="font-serif text-lg leading-relaxed text-ink-800">{c.summary}</p>
                <ul className="mt-6 space-y-3">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3 text-sm text-ink-700">
                      <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                      {b}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <Link href="/consultation">
                      個別相談で詳しく聞く <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
