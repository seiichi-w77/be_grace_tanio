"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Sparkles,
  Flame,
  Trophy,
  ArrowRight,
  PlayCircle,
  Target,
  Heart,
  Clock,
} from "lucide-react";
import { useAppStore, levelLabel, pointsToNextLevel } from "@/lib/store";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { VIDEOS, youtubeThumb } from "@/lib/mock/videos";
import { formatNumber, shortJpDate, greet } from "@/lib/utils";

export function Dashboard() {
  const user = useAppStore((s) => s.user);
  const records = useAppStore((s) => s.records);
  const goals = useAppStore((s) => s.goals);
  const lvl = pointsToNextLevel(user.points, user.level);

  const todayRecords = records.filter(
    (r) => new Date(r.date).toDateString() === new Date().toDateString()
  );
  const weeklyMinutes = records
    .filter((r) => Date.now() - new Date(r.date).getTime() < 7 * 86400000)
    .reduce((sum, r) => sum + r.minutes, 0);

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-rose-600 via-rose-500 to-rose-400 p-8 text-white md:p-12"
      >
        <div className="absolute inset-0 opacity-25">
          <div className="absolute -top-20 right-1/4 h-72 w-72 rounded-full bg-gold-300 blur-3xl" />
          <div className="absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-rose-300 blur-3xl" />
        </div>
        <div className="relative">
          <span className="font-display text-[0.7rem] tracking-[0.32em] uppercase text-rose-100/85 tabular-nums">
            {new Date().toLocaleDateString("ja-JP", { year: "numeric", month: "long", day: "numeric", weekday: "long" })}
          </span>
          <h2
            className="headline-jp !text-white mt-4 max-w-[20ch]"
            style={{ fontSize: "var(--type-h1)" }}
          >
            {greet(user.name)}。
          </h2>
          <p className="lede-jp mt-4 max-w-[34ch] !text-rose-100/85">
            今日も、3分の呼吸から。あなたが続けているこの時間が、3ヶ月後の景色を作っています。
          </p>

          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            <Metric label="連続日数" value={`${user.streak}日`} icon={Flame} />
            <Metric label="今週の合計" value={`${weeklyMinutes}分`} icon={Clock} />
            <Metric label="達成ゴール" value={`${goals.filter((g) => g.done).length}/${goals.length}`} icon={Target} />
            <Metric label="ポイント" value={formatNumber(user.points)} icon={Sparkles} />
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="gold" size="lg">
              <Link href="/app/record">
                今日の記録をする <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="lg">
              <Link href="/app/videos">動画ライブラリを見る</Link>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Level + streak band */}
      <div className="grid gap-6 md:grid-cols-[1.3fr_1fr]">
        <div className="rounded-3xl bg-white p-7 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
          <div className="flex items-baseline justify-between">
            <div>
              <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70 tabular-nums">
                Level {String(user.level).padStart(2, "0")}
              </span>
              <h3
                className="headline-jp mt-2 text-ink-800"
                style={{ fontSize: "var(--type-h3)" }}
              >
                {levelLabel(user.level)}
              </h3>
            </div>
            <Trophy className="h-6 w-6 text-rose-500" strokeWidth={1.2} />
          </div>
          <p className="lede-jp mt-3 text-[0.9rem] text-ink-400 max-w-[36ch]">
            次のレベルまで <span className="text-rose-700 font-medium tabular-nums">{lvl.next - lvl.inLevel}pt</span>。あと2〜3セッションで、次の称号「{levelLabel(user.level + 1)}」へ。
          </p>
          <Progress value={lvl.progress} className="mt-5" />
        </div>

        <div className="rounded-3xl bg-gradient-to-br from-cream-50 to-rose-100/60 p-7 ring-1 ring-ink-800/[0.05]">
          <div className="flex items-center gap-2">
            <Heart className="h-4 w-4 text-rose-500" />
            <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
              Your badges
            </span>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            {user.badges.map((b) => (
              <Badge key={b} tone="rose">
                <Sparkles className="h-3 w-3" />
                {b}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Today's recommended + recent */}
      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="rounded-3xl bg-white p-7 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
                Today&apos;s recommended
              </span>
              <h3
                className="headline-jp mt-2 text-ink-800"
                style={{ fontSize: "var(--type-h3)" }}
              >
                今日のあなたへ
              </h3>
            </div>
            <Link href="/app/videos" className="text-xs text-rose-700 hover:underline">
              すべて見る
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {VIDEOS.slice(0, 4).map((v) => (
              <Link
                key={v.id}
                href={`/app/videos/${v.id}`}
                className="group flex items-center gap-4 rounded-2xl p-3 transition-colors hover:bg-cream-50"
              >
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-xl bg-ink-800"
                  style={!v.youtubeId ? { background: v.thumbnail } : undefined}
                >
                  {v.youtubeId && (
                    <img
                      src={youtubeThumb(v.youtubeId, "hq")}
                      alt=""
                      className="absolute inset-0 h-full w-full object-cover"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/85 text-rose-700 backdrop-blur transition-transform group-hover:scale-110">
                      <PlayCircle className="h-4 w-4" />
                    </span>
                  </div>
                  <span className="absolute right-1.5 bottom-1.5 rounded-full bg-black/60 px-1.5 py-0.5 text-[9px] text-white tabular-nums backdrop-blur">
                    {v.duration}
                  </span>
                </div>
                <div className="min-w-0">
                  <div className="text-[0.62rem] tracking-[0.24em] uppercase text-ink-400">
                    {v.category}
                  </div>
                  <div className="mt-1 truncate text-sm font-medium text-ink-800">{v.title}</div>
                  <div className="mt-1 text-xs text-ink-400">{v.level} · {formatNumber(v.views)} 回視聴</div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl bg-white p-7 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
          <div className="flex items-center justify-between">
            <div>
              <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
                Recent records
              </span>
              <h3
                className="headline-jp mt-2 text-ink-800"
                style={{ fontSize: "var(--type-h3)" }}
              >
                最近の記録
              </h3>
            </div>
            <Link href="/app/record" className="text-xs text-rose-700 hover:underline">
              すべて
            </Link>
          </div>
          <ul className="mt-6 space-y-3">
            {records.slice(0, 5).map((r) => (
              <li
                key={r.id}
                className="flex items-center justify-between rounded-2xl bg-cream-50/50 p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{r.mood}</span>
                  <div>
                    <div className="text-sm font-medium text-ink-800">{r.title}</div>
                    <div className="text-xs text-ink-400">
                      {shortJpDate(r.date)} · {r.category} · {r.minutes}分
                    </div>
                  </div>
                </div>
                <span className="font-display text-sm text-rose-700">+{r.pointsEarned}</span>
              </li>
            ))}
            {todayRecords.length === 0 && (
              <li className="text-center py-4 text-sm text-ink-400">
                まだ今日の記録はありません。3分の記録から始めましょう。
              </li>
            )}
          </ul>
        </div>
      </div>

      <div className="h-20" />
    </div>
  );
}

function Metric({ label, value, icon: Icon }: { label: string; value: string; icon: typeof Sparkles }) {
  return (
    <div className="rounded-2xl bg-white/15 p-4 backdrop-blur ring-1 ring-white/20">
      <div className="flex items-center gap-2 text-rose-100/80">
        <Icon className="h-3.5 w-3.5" strokeWidth={1.4} />
        <span className="text-[0.62rem] tracking-[0.24em]">{label}</span>
      </div>
      <div className="mt-2 font-display !font-light text-2xl tabular-nums text-white">{value}</div>
    </div>
  );
}
