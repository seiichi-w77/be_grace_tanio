"use client";

import { Sparkles, Trophy, Heart, Gift, Crown, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useAppStore, levelLabel, pointsToNextLevel } from "@/lib/store";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { formatNumber, shortJpDate } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const rewards = [
  { id: "r1", name: "VIP動画 1本解放", cost: 300, icon: Crown },
  { id: "r2", name: "個別相談 15分追加", cost: 800, icon: Heart },
  { id: "r3", name: "オリジナルアロマ", cost: 1500, icon: Gift },
  { id: "r4", name: "本講座 1万円OFF", cost: 5000, icon: Trophy },
];

export function PointsPanel() {
  const user = useAppStore((s) => s.user);
  const records = useAppStore((s) => s.records);
  const lvl = pointsToNextLevel(user.points, user.level);

  return (
    <div className="space-y-6">
      <motion.section
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-br from-gold-500 via-gold-300 to-rose-300 p-8 text-white md:p-12"
      >
        <div className="absolute inset-0 opacity-30">
          <div className="absolute -top-10 right-1/4 h-72 w-72 rounded-full bg-rose-500 blur-3xl" />
        </div>
        <div className="relative">
          <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-white/85">
            Your Grace Points
          </span>
          <div className="mt-4 font-display !font-light italic tabular-nums leading-none text-[clamp(3.5rem,7vw+1rem,6.5rem)]">
            {formatNumber(user.points)}
          </div>
          <p className="lede-jp mt-4 !text-white/85 text-[0.95rem]">
            {levelLabel(user.level)} · Lv.<span className="tabular-nums">{user.level}</span> · 連続 <span className="tabular-nums">{user.streak}</span>日
          </p>
          <div className="mt-8 max-w-md">
            <div className="flex items-center justify-between text-xs text-white/85 tabular-nums">
              <span>次のレベルまで</span>
              <span>{formatNumber(lvl.inLevel)} / {formatNumber(lvl.next)}</span>
            </div>
            <Progress value={lvl.progress} className="mt-2" />
          </div>
        </div>
      </motion.section>

      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <Card>
          <CardContent className="p-7">
            <div className="flex items-center justify-between">
              <h3
                className="headline-jp text-ink-800"
                style={{ fontSize: "var(--type-h3)" }}
              >
                ご褒美と交換
              </h3>
              <Badge tone="gold"><Sparkles className="h-3 w-3" />ストア</Badge>
            </div>
            <ul className="mt-6 space-y-3">
              {rewards.map((r) => {
                const ok = user.points >= r.cost;
                return (
                  <li key={r.id} className="flex items-center justify-between rounded-2xl bg-cream-50/50 p-4">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-700">
                        <r.icon className="h-5 w-5" strokeWidth={1.4} />
                      </span>
                      <div>
                        <div className="text-sm font-medium text-ink-800">{r.name}</div>
                        <div className="text-xs text-ink-400">{r.cost} pt</div>
                      </div>
                    </div>
                    <Button size="sm" variant={ok ? "primary" : "outline"} disabled={!ok}>
                      {ok ? "交換する" : "あと " + (r.cost - user.points) + " pt"}
                    </Button>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-7">
            <h3
              className="headline-jp text-ink-800"
              style={{ fontSize: "var(--type-h3)" }}
            >
              最近の獲得
            </h3>
            <ul className="mt-6 space-y-3">
              {records.slice(0, 8).map((r) => (
                <li key={r.id} className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-ink-700">
                    <Flame className="h-3.5 w-3.5 text-rose-500" />
                    {r.title}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-ink-400">{shortJpDate(r.date)}</span>
                    <Badge tone="rose">+{r.pointsEarned}</Badge>
                  </div>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>
      <div className="h-20" />
    </div>
  );
}
