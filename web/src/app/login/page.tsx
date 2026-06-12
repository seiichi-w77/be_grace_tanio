"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PageShell } from "@/components/site/PageShell";
import { Section, EyebrowText } from "@/components/ui/section";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => router.push("/app"), 700);
  }

  return (
    <PageShell hideFooter>
      <Section className="hero-gradient">
        <div className="mx-auto max-w-md">
          <EyebrowText>WELCOME BACK</EyebrowText>
          <h1 className="mt-6 font-serif text-4xl md:text-5xl font-light leading-tight text-ink-800">
            おかえりなさい
          </h1>
          <form
            onSubmit={submit}
            className="mt-10 space-y-4 rounded-3xl bg-white/80 p-7 backdrop-blur ring-1 ring-ink-800/[0.06]"
          >
            <label className="block">
              <span className="text-xs tracking-wider text-ink-400">メールアドレス</span>
              <Input className="mt-2" type="email" defaultValue="mizuki@be-grace.studio" required />
            </label>
            <label className="block">
              <span className="text-xs tracking-wider text-ink-400">パスワード</span>
              <Input className="mt-2" type="password" defaultValue="••••••••" required />
            </label>
            <Button type="submit" size="lg" className="w-full" disabled={loading}>
              {loading ? "扉を開いています…" : "ログイン"}
            </Button>
            <p className="text-center text-xs text-ink-400">
              初めての方は <Link href="/signup" className="text-rose-700 hover:underline">無料会員登録</Link>
            </p>
          </form>
        </div>
      </Section>
    </PageShell>
  );
}
