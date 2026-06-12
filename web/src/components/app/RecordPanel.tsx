"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Plus, Check } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Input, Textarea } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { formatJpDate, shortJpDate } from "@/lib/utils";

const categories = ["ストレッチ", "骨盤調整", "コアトレ", "呼吸法", "リフレッシュ"] as const;
const moods = ["✨", "🌸", "🌿", "🌙", "🪷"] as const;

export function RecordPanel() {
  const records = useAppStore((s) => s.records);
  const addRecord = useAppStore((s) => s.addRecord);

  const [title, setTitle] = useState("朝の3分、骨盤を立てる呼吸");
  const [category, setCategory] = useState<(typeof categories)[number]>("呼吸法");
  const [minutes, setMinutes] = useState(7);
  const [intensity, setIntensity] = useState<1 | 2 | 3 | 4 | 5>(2);
  const [mood, setMood] = useState<(typeof moods)[number]>("✨");
  const [note, setNote] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function submit(e: React.FormEvent) {
    e.preventDefault();
    addRecord({
      date: new Date().toISOString(),
      category,
      title,
      minutes,
      intensity,
      mood,
      note: note || undefined,
    });
    setSubmitted(true);
    setNote("");
    setTimeout(() => setSubmitted(false), 2000);
  }

  return (
    <div className="space-y-6">
      <header>
        <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
          Daily record
        </span>
        <h2
          className="headline-jp mt-3 text-ink-800 max-w-[20ch]"
          style={{ fontSize: "var(--type-h2)" }}
        >
          今日のあなたを、3分で記す。
        </h2>
        <p className="lede-jp mt-4 max-w-[36ch] text-[0.95rem] text-ink-400">
          完璧でなくていい。たったの3分でも、続けている自分を、優しく記録してください。
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-[1.2fr_1fr]">
        <form onSubmit={submit}>
          <Card>
            <CardHeader>
              <CardTitle>新しい記録</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <label className="block">
                <span className="text-xs tracking-wider text-ink-400">タイトル</span>
                <Input
                  className="mt-2"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="今日やったこと"
                  required
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
                          : "bg-white text-ink-600 ring-1 ring-ink-800/[0.06] hover:bg-cream-100"
                      }`}
                    >
                      {c}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-5">
                <label>
                  <span className="text-xs tracking-wider text-ink-400">時間（分）</span>
                  <Input
                    type="number"
                    min={1}
                    max={120}
                    className="mt-2"
                    value={minutes}
                    onChange={(e) => setMinutes(Number(e.target.value))}
                  />
                </label>
                <div>
                  <span className="text-xs tracking-wider text-ink-400">強度</span>
                  <div className="mt-2 flex gap-1">
                    {[1, 2, 3, 4, 5].map((n) => (
                      <button
                        key={n}
                        type="button"
                        onClick={() => setIntensity(n as 1 | 2 | 3 | 4 | 5)}
                        className={`flex-1 rounded-2xl py-2 text-xs transition-all ${
                          intensity >= n
                            ? "bg-gradient-to-r from-rose-500 to-rose-600 text-white"
                            : "bg-cream-100 text-ink-400"
                        }`}
                      >
                        {n}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-xs tracking-wider text-ink-400">気分</span>
                <div className="mt-2 flex gap-2">
                  {moods.map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setMood(m)}
                      className={`flex h-12 w-12 items-center justify-center rounded-full text-2xl transition-all ${
                        mood === m ? "bg-rose-100 ring-2 ring-rose-400" : "bg-cream-100 hover:bg-cream-200"
                      }`}
                    >
                      {m}
                    </button>
                  ))}
                </div>
              </div>

              <label className="block">
                <span className="text-xs tracking-wider text-ink-400">メモ（任意）</span>
                <Textarea
                  className="mt-2"
                  value={note}
                  onChange={(e) => setNote(e.target.value)}
                  placeholder="今日の自分にメッセージを"
                />
              </label>

              <Button type="submit" size="lg" className="w-full">
                {submitted ? (
                  <>
                    <Check className="h-4 w-4" /> 受け取りました
                  </>
                ) : (
                  <>
                    記録する <Plus className="h-4 w-4" />
                  </>
                )}
              </Button>
            </CardContent>
          </Card>
        </form>

        <div className="space-y-4">
          {submitted && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 p-5 text-white"
            >
              <div className="flex items-center gap-2 font-display text-sm tracking-wide">
                <Sparkles className="h-4 w-4" />
                +{minutes * 10} pt 加算
              </div>
              <p className="mt-2 text-sm text-rose-100/90">
                記録ありがとう。3ヶ月後のあなたが、今日のあなたに微笑んでいます。
              </p>
            </motion.div>
          )}

          <Card>
            <CardHeader>
              <CardTitle>過去の記録</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {records.slice(0, 10).map((r) => (
                <div
                  key={r.id}
                  className="flex items-center justify-between rounded-2xl bg-cream-50/60 p-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{r.mood}</span>
                    <div className="min-w-0">
                      <div className="truncate text-sm font-medium text-ink-800">{r.title}</div>
                      <div className="text-xs text-ink-400">
                        {shortJpDate(r.date)} · {r.category} · {r.minutes}分
                      </div>
                    </div>
                  </div>
                  <Badge tone="rose">+{r.pointsEarned}</Badge>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="h-20" />
    </div>
  );
}
