"use client";

import { Shield, Upload, Users, Video, MessageCircle, BarChart3, Crown, ArrowRight } from "lucide-react";
import { useAppStore } from "@/lib/store";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VIDEOS } from "@/lib/mock/videos";
import { formatNumber } from "@/lib/utils";

const mockMembers = [
  { name: "美月", email: "mizuki@be-grace.studio", role: "VIP", points: 2480, streak: 14, joined: "2026-03-12" },
  { name: "陽菜", email: "haruna@example.com", role: "VIP", points: 4120, streak: 32, joined: "2025-12-04" },
  { name: "真央", email: "mao@example.com", role: "一般", points: 980, streak: 5, joined: "2026-05-20" },
  { name: "結衣", email: "yui@example.com", role: "一般", points: 320, streak: 2, joined: "2026-06-01" },
  { name: "彩夏", email: "ayaka@example.com", role: "VIP", points: 3800, streak: 18, joined: "2026-01-22" },
];

export function AdminPanel() {
  const role = useAppStore((s) => s.user.role);

  if (role !== "admin") {
    return (
      <div className="rounded-3xl bg-white p-12 text-center ring-1 ring-ink-800/[0.05]">
        <Shield className="mx-auto h-10 w-10 text-rose-500" strokeWidth={1.2} />
        <h2 className="mt-6 font-serif text-3xl text-ink-800">管理者ページ</h2>
        <p className="mt-3 text-sm text-ink-400">
          サイドバーの「Demo: 権限切替」で「管理」に切り替えてください。
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <header>
        <span className="font-display text-xs tracking-[0.32em] uppercase text-rose-600/70">
          ADMIN CONSOLE
        </span>
        <h2 className="mt-2 font-serif text-3xl md:text-4xl font-light text-ink-800">
          スタジオの運営室
        </h2>
        <p className="mt-2 text-sm text-ink-400">
          会員・動画・診断テンプレートを、Lark / DBから差し替え可能に設計（モック）。
        </p>
      </header>

      <div className="grid gap-5 md:grid-cols-4">
        <Stat label="アクティブ会員" value="1,248" delta="+8%" icon={Users} />
        <Stat label="VIP" value="312" delta="+12%" icon={Crown} />
        <Stat label="今月の動画再生" value="48,200" delta="+24%" icon={Video} />
        <Stat label="今月の相談" value="184" delta="+5%" icon={MessageCircle} />
      </div>

      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardContent className="p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-ink-800">動画コンテンツ管理</h3>
              <Button size="sm">
                <Upload className="h-4 w-4" /> 新規アップロード
              </Button>
            </div>
            <p className="mt-2 text-xs text-ink-400">
              管理者だけがアップロード可能。会員側からのアップロードは混在しない設計。
            </p>
            <ul className="mt-6 space-y-3">
              {VIDEOS.slice(0, 5).map((v) => (
                <li
                  key={v.id}
                  className="flex items-center justify-between rounded-2xl bg-cream-50/50 p-4"
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="h-12 w-16 rounded-lg"
                      style={{ background: v.thumbnail }}
                    />
                    <div>
                      <div className="text-sm font-medium text-ink-800">{v.title}</div>
                      <div className="text-xs text-ink-400">
                        {v.duration} · {v.category} · {formatNumber(v.views)} 回視聴
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {v.isVip && <Badge tone="gold">VIP</Badge>}
                    <Button size="sm" variant="ghost">
                      編集
                    </Button>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-7">
            <div className="flex items-center justify-between">
              <h3 className="font-serif text-2xl text-ink-800">最近の会員</h3>
              <Link href="#" className="text-xs text-rose-700 hover:underline">すべて</Link>
            </div>
            <ul className="mt-6 space-y-3">
              {mockMembers.map((m) => (
                <li
                  key={m.email}
                  className="flex items-center justify-between rounded-2xl bg-cream-50/50 p-3 text-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-gradient-to-br from-rose-200 to-rose-400 ring-2 ring-white" />
                    <div>
                      <div className="font-medium text-ink-800">{m.name}</div>
                      <div className="text-xs text-ink-400">{m.role}・{m.points}pt</div>
                    </div>
                  </div>
                  <div className="text-xs text-ink-400">連 {m.streak}日</div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-7">
          <h3 className="font-serif text-2xl text-ink-800">診断テンプレート</h3>
          <p className="mt-2 text-xs text-ink-400">
            ひとつの「型」に、テーマ・問い・タイプを差し替えて、複数の診断アプリを展開する仕組み。中身の編集はLarkから可能。
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {["骨格5タイプ", "セルフケア5タイプ", "AI 姿勢診断"].map((name, idx) => (
              <div
                key={name}
                className="rounded-2xl border border-ink-800/[0.06] bg-cream-50/50 p-5"
              >
                <Badge tone="rose">TEMPLATE 0{idx + 1}</Badge>
                <h4 className="mt-3 font-serif text-lg text-ink-800">{name}</h4>
                <div className="mt-3 flex items-center justify-between text-xs text-ink-400">
                  <span>最終更新 2026-06-08</span>
                  <Link href="#" className="text-rose-700 inline-flex items-center gap-1">
                    編集 <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
      <div className="h-20" />
    </div>
  );
}

function Stat({
  label,
  value,
  delta,
  icon: Icon,
}: {
  label: string;
  value: string;
  delta: string;
  icon: typeof Users;
}) {
  return (
    <div className="rounded-3xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
      <div className="flex items-center justify-between">
        <span className="text-[0.62rem] tracking-[0.32em] uppercase text-ink-400">{label}</span>
        <Icon className="h-4 w-4 text-rose-500" strokeWidth={1.4} />
      </div>
      <div className="mt-3 font-display text-3xl text-ink-800">{value}</div>
      <div className="mt-1 inline-flex items-center gap-1 text-xs text-emerald-600">
        <BarChart3 className="h-3 w-3" />
        {delta}
      </div>
    </div>
  );
}
