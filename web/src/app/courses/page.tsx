import Link from "next/link";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, ArrowRight } from "lucide-react";

export const metadata = { title: "本講座" };

type Course = {
  id: string;
  title: string;
  jpTag?: string;
  subtitle: string;
  price: string;
  accent: string;
  summary: string;
  bullets: string[];
};

const courses: Course[] = [
  {
    id: "core",
    title: "Be Grace",
    jpTag: "本講座",
    subtitle: "12 weeks · 産後の骨格を整える集中プログラム",
    price: "¥248,000",
    accent: "from-rose-500 to-rose-700",
    summary:
      "12週間のプライベートプログラム。AI診断、毎週60分の個別セッション、専用動画ライブラリ、VIP会員サイトへの永久アクセス。",
    bullets: [
      "毎週60分の個別オンラインセッション × 12",
      "オリジナル AI 姿勢解析 × 4 回",
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
      "Be Grace 会員サイト 6ヶ月無料",
    ],
  },
  {
    id: "intro",
    title: "Welcome Bloom",
    subtitle: "Single · 体験セッション",
    price: "¥3,800",
    accent: "from-sky-400 to-sky-200",
    summary:
      "Be Grace の世界を90分で体験。骨格診断＋姿勢分析＋ミニケアレシピを、まずは一度。",
    bullets: ["90分の対面 / オンライン", "AI診断レポート", "今日から始める3つのアクション"],
  },
];

export default function CoursesPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>Course Collection</EyebrowText>
          <h1
            className="headline-jp mt-6 text-ink-800 max-w-[14ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            <span className="text-rose-700">3つのコース</span>から、
            あなたの今に。
          </h1>
          <p className="lede-jp mt-8 max-w-[36ch] text-ink-600">
            時間も予算も、今あなたが持てるリソースに合わせて。受け取れる Grace は、どのコースでも本物です。
          </p>
        </div>
      </Section>

      <Section>
        <div className="space-y-10">
          {courses.map((c, idx) => (
            <article
              key={c.id}
              className={`relative overflow-hidden rounded-[2.5rem] bg-white shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] ring-1 ring-ink-800/[0.05] md:grid ${idx % 2 ? "md:grid-cols-[1.2fr_1fr]" : "md:grid-cols-[1fr_1.2fr]"}`}
            >
              <div className={`relative min-h-[260px] bg-gradient-to-br ${c.accent} p-9 text-white md:p-10 ${idx % 2 ? "md:order-2" : ""}`}>
                <Badge tone="outline" className="border-white/30 bg-white/15 text-white">
                  <Sparkles className="h-3 w-3" />
                  Course {String(idx + 1).padStart(2, "0")}
                </Badge>
                {/* English title — Cormorant safe */}
                <h2 className="mt-6 font-display italic !font-light leading-[1.05] text-[clamp(2.25rem,4vw+1rem,3.75rem)]">
                  {c.title}
                </h2>
                {c.jpTag && (
                  <div className="mt-2 font-jp-serif text-lg text-white/90">{c.jpTag}</div>
                )}
                <p className="mt-3 text-[0.85rem] tracking-wide text-white/85">{c.subtitle}</p>
                <div className="mt-10 font-display !font-light tabular-nums text-[clamp(2rem,3vw+1rem,2.75rem)]">
                  {c.price}
                </div>
                <div className="mt-1 font-display text-[0.62rem] tracking-[0.32em] uppercase text-white/70">税込</div>
              </div>
              <div className="p-9 md:p-10">
                <p className="font-jp-serif text-[1.05rem] leading-[1.85] text-ink-800 max-w-[36ch]">{c.summary}</p>
                <ul className="mt-6 space-y-3 max-w-[36ch]">
                  {c.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-rose-500" />
                      <span className="lede-jp text-[0.95rem] text-ink-700">{b}</span>
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
