import Link from "next/link";
import { Calendar, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";
import { Button } from "@/components/ui/button";

export const metadata = { title: "個別相談" };

const slots = [
  { date: "6/14 (土)", time: "10:00 - 11:00", left: 2 },
  { date: "6/14 (土)", time: "14:00 - 15:00", left: 0 },
  { date: "6/15 (日)", time: "10:00 - 11:00", left: 1 },
  { date: "6/16 (月)", time: "21:00 - 22:00", left: 3 },
  { date: "6/18 (水)", time: "21:00 - 22:00", left: 2 },
  { date: "6/20 (金)", time: "14:00 - 15:00", left: 4 },
];

export default function ConsultationPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>Private Session</EyebrowText>
          <h1
            className="headline-jp mt-6 text-ink-800 max-w-[12ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            あなただけの、
            <span className="text-rose-700">
              <span className="font-display !font-light italic">60</span>分。
            </span>
          </h1>
          <p className="lede-jp mt-8 max-w-[36ch] text-ink-600">
            診断結果を、あなたの今の日常と照らし合わせて。本講座を取る前でも取らなくてもいい、ただあなただけの60分。1回 15,000円（税込）。
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <span className="tag-pill"><Clock className="h-3 w-3" />60分</span>
            <span className="tag-pill"><Calendar className="h-3 w-3" />オンライン</span>
            <span className="tag-pill"><Sparkles className="h-3 w-3" />税込 ¥15,000</span>
          </div>
        </div>
      </Section>

      <Section>
        <div className="grid gap-12 md:grid-cols-[1.1fr_1fr]">
          <div>
            <EyebrowText>What we&apos;ll do</EyebrowText>
            <h2
              className="headline-jp mt-5 text-ink-800"
              style={{ fontSize: "var(--type-h2)" }}
            >
              60分でお返しするもの
            </h2>
            <ul className="mt-8 space-y-5 max-w-[42ch]">
              {[
                "AI診断結果を、整骨院最高峰の視点で再解釈",
                "今のあなたの「3ヶ月後の景色」を一緒に言語化",
                "あなただけの、3つのケアレシピを処方",
                "本講座 / 会員サイトを取るかは、その後で決めて OK",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-rose-500" strokeWidth={1.5} />
                  <span className="lede-jp text-ink-700 text-[0.98rem]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <EyebrowText>Next available</EyebrowText>
            <h2
              className="headline-jp mt-5 text-ink-800"
              style={{ fontSize: "var(--type-h2)" }}
            >
              空き状況
            </h2>
            <div className="mt-8 grid gap-3">
              {slots.map((s, idx) => (
                <button
                  key={idx}
                  disabled={s.left === 0}
                  className="group flex items-center justify-between rounded-2xl border border-ink-800/[0.06] bg-white px-5 py-4 text-left transition-all hover:-translate-y-[1px] hover:border-rose-300 hover:bg-rose-50/50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <div>
                    <div className="text-sm font-medium text-ink-800 tabular-nums">{s.date}</div>
                    <div className="text-xs text-ink-400 tabular-nums">{s.time}</div>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-[0.65rem] tracking-[0.32em] uppercase text-ink-400">
                      {s.left === 0 ? "満席" : `残 ${s.left} 枠`}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <Button asChild size="lg" className="w-full">
                <Link href="/signup">予約に進む</Link>
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </PageShell>
  );
}
