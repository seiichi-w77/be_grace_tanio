import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Clock, ListChecks, Sparkles } from "lucide-react";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getDiagnosisBySlug, DIAGNOSES } from "@/lib/mock/diagnoses";

const accentMap: Record<string, string> = {
  rose: "from-rose-100 via-rose-200/60 to-rose-300/40",
  gold: "from-gold-300/60 via-cream-200 to-gold-300/30",
  sage: "from-sage-200/60 via-cream-100 to-sage-200/30",
  sky: "from-sky-200/60 via-cream-100 to-sky-200/30",
};

export function generateStaticParams() {
  return DIAGNOSES.map((d) => ({ slug: d.slug }));
}

export default async function DiagnosisIntroPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = getDiagnosisBySlug(slug);
  if (!theme) notFound();

  const playHref =
    theme.id === "posture" ? `/diagnoses/${theme.slug}/upload` : `/diagnoses/${theme.slug}/play`;

  return (
    <PageShell>
      <Section className={`bg-gradient-to-br ${accentMap[theme.accent]}`}>
        <div className="max-w-3xl">
          <EyebrowText>{theme.badge}</EyebrowText>
          <h1
            className="headline-jp mt-6 text-ink-800 max-w-[14ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            {theme.title}
          </h1>
          <p className="font-jp-serif mt-8 text-[1.25rem] md:text-[1.4rem] leading-[1.85] text-ink-800/85 max-w-[28ch]">
            {theme.catchphrase}
          </p>
          <p className="lede-jp mt-6 max-w-[36ch] text-ink-700/70">{theme.hero}</p>

          <div className="mt-10 flex flex-wrap gap-2">
            <Badge tone="outline" className="border-white/40 bg-white/30 text-ink-800">
              <Clock className="h-3 w-3" />
              {theme.duration}
            </Badge>
            <Badge tone="outline" className="border-white/40 bg-white/30 text-ink-800">
              <ListChecks className="h-3 w-3" />
              {theme.questionsCount > 0 ? `${theme.questionsCount} 問` : "3 枚の写真"}
            </Badge>
            <Badge tone="outline" className="border-white/40 bg-white/30 text-ink-800">
              <Sparkles className="h-3 w-3" />
              Free
            </Badge>
          </div>

          <div className="mt-10">
            <Button asChild size="xl">
              <Link href={playHref}>
                診断をはじめる
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </Section>

      <Section className="bg-cream-50">
        <div className="grid gap-12 md:grid-cols-[1fr_1.4fr]">
          <div>
            <EyebrowText>What you&apos;ll receive</EyebrowText>
            <h2
              className="headline-jp mt-6 text-ink-800"
              style={{ fontSize: "var(--type-h2)" }}
            >
              受け取れるもの
            </h2>
          </div>
          <ul className="space-y-7 max-w-[44ch]">
            {[
              {
                title: "あなたのタイプ・物語",
                body: "5タイプから、あなたを最も美しく見立てる物語。診断結果がそのまま、なりたい未来の宣言になります。",
              },
              {
                title: "今日からできる3つのケア",
                body: "あなたのタイプに合わせた、3分から始められるセルフケアレシピ。動画ライブラリに直結。",
              },
              {
                title: "3ヶ月後の「未来の自分」",
                body: "鏡の前で何と言われるか、どんな朝が始まるか。あなたが手に入れる景色を、言葉で受け取ります。",
              },
              {
                title: "個別相談・本講座への扉",
                body: "もっと深く知りたくなった時に、開く扉が用意されています。15,000円の個別相談から。",
              },
            ].map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-2 inline-flex h-2 w-2 shrink-0 rounded-full bg-rose-500" />
                <div>
                  <h3
                    className="headline-jp text-ink-800"
                    style={{ fontSize: "var(--type-h3)" }}
                  >
                    {b.title}
                  </h3>
                  <p className="lede-jp mt-2 text-[0.95rem] text-ink-400">{b.body}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </PageShell>
  );
}
