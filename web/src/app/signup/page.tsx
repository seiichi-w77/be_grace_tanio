"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 900);
  }

  return (
    <PageShell hideFooter>
      <Section className="hero-gradient">
        <div className="mx-auto max-w-md">
          <EyebrowText>JOIN BE GRACE</EyebrowText>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight text-ink-800">
            ようこそ、<br />
            <span className="font-display italic text-rose-700">Be Grace</span> へ。
          </h1>
          <p className="mt-6 text-sm leading-relaxed text-ink-400">
            無料会員で、毎日のセルフケアと診断結果を保存できます。
          </p>
          <form onSubmit={submit} className="mt-10 space-y-4 rounded-3xl bg-white/80 p-7 backdrop-blur ring-1 ring-ink-800/[0.06]">
            <label className="block">
              <span className="text-xs tracking-wider text-ink-400">お名前</span>
              <Input className="mt-2" placeholder="例：美月" defaultValue="美月" required />
            </label>
            <label className="block">
              <span className="text-xs tracking-wider text-ink-400">メールアドレス</span>
              <Input className="mt-2" type="email" placeholder="you@example.com" required />
            </label>
            <label className="block">
              <span className="text-xs tracking-wider text-ink-400">パスワード</span>
              <Input className="mt-2" type="password" placeholder="•••••••••" required />
            </label>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "ようこそ準備中…" : "無料会員登録"}
              <Sparkles className="h-4 w-4" />
            </Button>
            <p className="text-center text-xs text-ink-400">
              すでに登録済みの方は <Link href="/login" className="text-rose-700 hover:underline">ログイン</Link>
            </p>
          </form>
          <p className="mt-6 text-center text-xs text-ink-400">
            ※ デモ環境。実際の登録は行われず、すぐ会員ダッシュボードへ進みます。
          </p>
        </div>
      </Section>
    </PageShell>
  );
}
