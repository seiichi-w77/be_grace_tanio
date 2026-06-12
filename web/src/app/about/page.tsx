import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";

export const metadata = { title: "Be Grace について" };

export default function AboutPage() {
  return (
    <PageShell>
      <Section className="hero-gradient">
        <div className="max-w-3xl">
          <EyebrowText>OUR STORY</EyebrowText>
          <h1 className="mt-6 font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink-800">
            女性のからだは、<br />
            <span className="font-display italic text-rose-700">受け取る</span>もの。
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-loose text-ink-600">
            産後・育児中の女性が、自分のからだに優しく戻ってこられる、運動セルフケアのスタジオ。それが Be Grace です。
          </p>
        </div>
      </Section>

      <Section>
        <div className="prose prose-lg max-w-3xl">
          <p className="font-serif text-lg leading-loose text-ink-800">
            あなたは、ひとりで頑張りすぎていませんか。
            <br />
            朝起きてから夜眠るまで、何かの役割を担い、自分のことは後回し。
            <br />
            鏡の前で、ふと気づく違和感を、見ないふりして。
          </p>
          <p className="mt-8 font-serif text-lg leading-loose text-ink-800">
            Be Grace は、頑張る毎日の中で、あなたが
            <span className="font-display italic text-rose-700">「ふっ」</span>
            と緩める瞬間を作るためのスタジオです。
          </p>
          <p className="mt-8 text-base leading-loose text-ink-600">
            「治す」のではなく「ひらく」。「我慢」ではなく「受け取る」。「ひとりで」ではなく「一緒に」。
          </p>
          <p className="mt-8 text-base leading-loose text-ink-600">
            整骨院での施術経験 15 年、産後ケア指導 1,200 名以上のキャリアを持つ私（谷尾 尚子）と、AIアシスタントが、あなたのからだに伴走します。
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
