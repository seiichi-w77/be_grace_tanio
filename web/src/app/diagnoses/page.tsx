import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";
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

export const metadata = { title: "からだ診断 コレクション" };

export default function DiagnosesIndexPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>Body Diagnosis Collection</EyebrowText>
          <h1
            className="headline-jp mt-6 text-ink-800 max-w-[18ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            理想の未来を、
            <span className="text-rose-700">受け取る診断。</span>
          </h1>
          <p className="lede-jp mt-8 max-w-[40ch] text-ink-600">
            ひとつの「型」に、テーマ・問い・タイプを差し替えて。あなたが「こうなりたい」と思える未来から始まる、優しい3分の見立てです。
          </p>
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          {DIAGNOSES.map((d) => (
            <Link
              key={d.id}
              href={`/diagnoses/${d.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] border border-ink-800/[0.06] bg-white shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] transition-all hover:-translate-y-1 hover:shadow-[0_24px_50px_-20px_rgba(181,103,127,0.3)]"
            >
              <div className={`relative h-60 overflow-hidden bg-gradient-to-br ${accentMap[d.accent]}`}>
                <div className="absolute inset-0 flex items-end justify-between gap-3 p-7">
                  <div className="min-w-0">
                    <span className="font-display text-[0.62rem] tracking-[0.32em] uppercase text-ink-800/60">
                      {d.badge}
                    </span>
                    <h2
                      className={`headline-jp mt-3 ${accentText[d.accent]}`}
                      style={{ fontSize: "var(--type-h2)" }}
                    >
                      {d.title}
                    </h2>
                  </div>
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/80 text-ink-800 transition-transform group-hover:rotate-45">
                    <ArrowUpRight className="h-5 w-5" />
                  </span>
                </div>
                <div className="absolute -left-10 top-1/4 h-40 w-40 rounded-full bg-white/30 blur-3xl" />
              </div>
              <div className="flex flex-1 flex-col gap-4 p-7">
                <p className="font-jp-serif text-[1.05rem] leading-[1.8] text-ink-800">{d.catchphrase}</p>
                <p className="lede-jp text-[0.9rem] text-ink-400">{d.description}</p>
                <div className="mt-auto flex items-center gap-2 pt-4">
                  <Badge tone="outline">{d.duration}</Badge>
                  <Badge tone="outline">{d.questionsCount > 0 ? `${d.questionsCount} 問` : "3 枚の写真"}</Badge>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>
    </PageShell>
  );
}
