import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";

export const metadata = { title: "Be Grace について" };

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>OUR STORY</EyebrowText>
          <h1
            className="headline-jp mt-6 text-ink-800 max-w-[18ch]"
            style={{ fontSize: "var(--type-display)" }}
          >
            女性のからだは、
            <span className="text-rose-700">受け取るもの。</span>
          </h1>
          <p className="lede-jp mt-8 max-w-[36ch] text-ink-600">
            産後・育児中の女性が、自分のからだに優しく戻ってこられる、運動セルフケアのスタジオ。それが Be Grace です。
          </p>
        </div>
      </Section>

      <Section>
        <div className="max-w-[44ch] space-y-8">
          <p className="font-jp-serif text-[1.05rem] leading-[2] text-ink-800">
            あなたは、ひとりで頑張りすぎていませんか。朝起きてから夜眠るまで、何かの役割を担い、自分のことは後回し。鏡の前で、ふと気づく違和感を、見ないふりして。
          </p>
          <p className="font-jp-serif text-[1.05rem] leading-[2] text-ink-800">
            Be Grace は、頑張る毎日の中で、あなたが<span className="text-rose-700">「ふっ」</span>と緩める瞬間を作るためのスタジオです。
          </p>
          <p className="lede-jp text-ink-600">
            「治す」のではなく「ひらく」。「我慢」ではなく「受け取る」。「ひとりで」ではなく「一緒に」。
          </p>
          <p className="lede-jp text-ink-600">
            整骨院での施術経験 15 年、産後ケア指導 1,200 名以上のキャリアを持つ私（谷尾 尚子）と、AIアシスタントが、あなたのからだに伴走します。
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
