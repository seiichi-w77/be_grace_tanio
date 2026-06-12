import Link from "next/link";
import { Logo } from "./Logo";

export function SiteFooter() {
  return (
    <footer className="relative border-t border-ink-800/[0.06] silk-gradient">
      <div className="mx-auto max-w-6xl px-6 py-20 md:px-10">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="space-y-5">
            <Logo />
            <p className="max-w-sm text-sm leading-relaxed text-ink-400">
              産後・育児中の女性が、自分のからだに優しく戻ってこられる、運動セルフケアスタジオ。
              診断から会員サイトまで、ゆっくり丁寧に、あなたの理想の未来に伴走します。
            </p>
            <div className="flex items-center gap-3 text-[0.7rem] tracking-[0.2em] uppercase text-ink-400">
              <span>Tokyo</span>
              <span className="h-px w-4 bg-ink-200" />
              <span>Online · Japan</span>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide text-ink-800">からだ診断</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-400">
              <li><Link className="hover:text-rose-700" href="/diagnoses/skeleton">骨格5タイプ診断</Link></li>
              <li><Link className="hover:text-rose-700" href="/diagnoses/self-care">セルフケア5タイプ診断</Link></li>
              <li><Link className="hover:text-rose-700" href="/diagnoses/posture">AI 姿勢診断</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide text-ink-800">サービス</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-400">
              <li><Link className="hover:text-rose-700" href="/courses">本講座</Link></li>
              <li><Link className="hover:text-rose-700" href="/consultation">個別相談</Link></li>
              <li><Link className="hover:text-rose-700" href="/app">会員サイト</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium tracking-wide text-ink-800">そのほか</h4>
            <ul className="mt-4 space-y-2 text-sm text-ink-400">
              <li><Link className="hover:text-rose-700" href="/about">Be Grace について</Link></li>
              <li><Link className="hover:text-rose-700" href="/terms">利用規約</Link></li>
              <li><Link className="hover:text-rose-700" href="/privacy">プライバシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-ink-800/[0.06] pt-6 text-xs text-ink-400 md:flex-row md:items-center">
          <p>© 2026 Be Grace Studio. All graces reserved.</p>
          <p className="font-display italic">For every woman becoming herself.</p>
        </div>
      </div>
    </footer>
  );
}
