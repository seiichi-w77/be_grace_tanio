"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Target, Sparkles, Trophy } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { formatJpDate } from "@/lib/utils";

const categories = ["姿勢", "睡眠", "体力", "美しさ", "メンタル"] as const;

export function GoalsPanel() {
  const goals = useAppStore((s) => s.goals);
  const addGoal = useAppStore((s) => s.addGoal);
  const updateGoalProgress = useAppStore((s) => s.updateGoalProgress);

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState<(typeof categories)[number]>("姿勢");
  const [target, setTarget] = useState(21);
  const [unit, setUnit] = useState("日");
  const [reward, setReward] = useState("");
  const [deadline, setDeadline] = useState("");

  function submit(e: React.FormEvent) {
    e.preventDefault();
    addGoal({
      title,
      description,
      category,
      target,
      unit,
      deadline: deadline || new Date(Date.now() + 90 * 86400000).toISOString().slice(0, 10),
      reward,
    });
    setOpen(false);
    setTitle("");
    setDescription("");
    setReward("");
    setDeadline("");
  }

  return (
    <div className="space-y-6">
      <header className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
            Your goals
          </span>
          <h2
            className="headline-jp mt-3 text-ink-800 max-w-[22ch]"
            style={{ fontSize: "var(--type-h2)" }}
          >
            なりたい未来から、今日を選ぶ。
          </h2>
        </div>
        <Button onClick={() => setOpen((v) => !v)}>
          <Plus className="h-4 w-4" />
          新しいゴール
        </Button>
      </header>

      {open && (
        <motion.form
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          onSubmit={submit}
          className="rounded-3xl bg-white p-7 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]"
        >
          <h3
            className="headline-jp text-ink-800"
            style={{ fontSize: "var(--type-h3)" }}
          >
            あなたの理想の未来
          </h3>
          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <label className="block md:col-span-2">
              <span className="text-xs tracking-wider text-ink-400">タイトル</span>
              <Input
                className="mt-2"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="例：鏡を見るのが楽しみな朝に"
                required
              />
            </label>
            <label className="block md:col-span-2">
              <span className="text-xs tracking-wider text-ink-400">詳細</span>
              <Textarea
                className="mt-2"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="3ヶ月後の景色を、言葉にしてみる。"
              />
            </label>
            <div>
              <span className="text-xs tracking-wider text-ink-400">カテゴリ</span>
              <div className="mt-2 flex flex-wrap gap-2">
                {categories.map((c) => (
                  <button
                    key={c}
                    type="button"
                    onClick={() => setCategory(c)}
                    className={`rounded-full px-4 py-2 text-xs transition-all ${
                      category === c
                        ? "bg-rose-600 text-white"
                        : "bg-white text-ink-600 ring-1 ring-ink-800/[0.06]"
                    }`}
                  >
                    {c}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-[1fr_1fr] gap-3">
              <label>
                <span className="text-xs tracking-wider text-ink-400">目標</span>
                <Input
                  type="number"
                  className="mt-2"
                  value={target}
                  onChange={(e) => setTarget(Number(e.target.value))}
                />
              </label>
              <label>
                <span className="text-xs tracking-wider text-ink-400">単位</span>
                <Input
                  className="mt-2"
                  value={unit}
                  onChange={(e) => setUnit(e.target.value)}
                  placeholder="日/分/セッション"
                />
              </label>
            </div>
            <label>
              <span className="text-xs tracking-wider text-ink-400">締切（任意）</span>
              <Input
                type="date"
                className="mt-2"
                value={deadline}
                onChange={(e) => setDeadline(e.target.value)}
              />
            </label>
            <label>
              <span className="text-xs tracking-wider text-ink-400">達成のごほうび</span>
              <Input
                className="mt-2"
                value={reward}
                onChange={(e) => setReward(e.target.value)}
                placeholder="ご褒美に予定したい"
              />
            </label>
          </div>
          <div className="mt-6 flex gap-3 justify-end">
            <Button type="button" variant="ghost" onClick={() => setOpen(false)}>
              キャンセル
            </Button>
            <Button type="submit">追加する</Button>
          </div>
        </motion.form>
      )}

      <div className="grid gap-5">
        {goals.map((g) => {
          const pct = Math.min(100, (g.current / g.target) * 100);
          return (
            <Card key={g.id} className="overflow-hidden">
              <CardContent className="p-7">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <Badge tone="rose">{g.category}</Badge>
                      {g.done && (
                        <Badge tone="gold">
                          <Trophy className="h-3 w-3" /> 達成
                        </Badge>
                      )}
                    </div>
                    <h3
                      className="headline-jp mt-3 text-ink-800 max-w-[22ch]"
                      style={{ fontSize: "var(--type-h3)" }}
                    >
                      {g.title}
                    </h3>
                    <p className="lede-jp mt-2 max-w-[36ch] text-[0.9rem] text-ink-400">
                      {g.description}
                    </p>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="font-display !font-light tabular-nums text-3xl text-rose-700">
                      {g.current}<span className="text-base text-ink-400">/{g.target}</span>
                    </div>
                    <div className="text-xs text-ink-400">{g.unit}</div>
                  </div>
                </div>
                <Progress value={pct} className="mt-6" />
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <Target className="h-3 w-3" />
                    締切 {formatJpDate(g.deadline)}
                  </div>
                  <div className="flex items-center gap-2 text-xs text-ink-400">
                    <Sparkles className="h-3 w-3 text-rose-500" />
                    ごほうび: {g.reward}
                  </div>
                  <Button
                    size="sm"
                    variant="secondary"
                    onClick={() => updateGoalProgress(g.id, Math.min(g.target, g.current + 1))}
                  >
                    +1 進める
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
      <div className="h-20" />
    </div>
  );
}
