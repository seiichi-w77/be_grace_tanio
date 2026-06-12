"use client";

import Link from "next/link";
import { ArrowLeft, Play, Pause, Heart, Share2, BookmarkPlus, Sparkles } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import type { VideoLesson } from "@/lib/mock/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { formatNumber } from "@/lib/utils";
import { useAppStore } from "@/lib/store";

export function VideoPlayer({ video }: { video: VideoLesson }) {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(34);
  const addRecord = useAppStore((s) => s.addRecord);

  function complete() {
    addRecord({
      date: new Date().toISOString(),
      category: video.category as "ストレッチ" | "骨盤調整" | "コアトレ" | "呼吸法" | "リフレッシュ",
      title: video.title,
      minutes: parseInt(video.duration.split(":")[0]) || 5,
      intensity: 2,
      mood: "✨",
    });
    setPlaying(false);
    setProgress(100);
  }

  return (
    <div className="space-y-6">
      <Link
        href="/app/videos"
        className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-rose-700"
      >
        <ArrowLeft className="h-3 w-3" /> 動画ライブラリへ
      </Link>

      <div
        className="relative aspect-video overflow-hidden rounded-[2rem]"
        style={{ background: video.thumbnail }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setPlaying((v) => !v)}
            className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/80 text-rose-700 backdrop-blur transition-transform hover:scale-110"
          >
            {playing ? <Pause className="h-8 w-8" /> : <Play className="h-8 w-8" />}
          </motion.button>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-5 text-white">
          <div className="font-display text-xl">{video.subtitle}</div>
          <h1 className="font-serif text-3xl md:text-4xl leading-tight">{video.title}</h1>
          <div className="mt-4 flex items-center gap-3">
            <Progress value={progress} className="flex-1" />
            <span className="font-display text-sm">{video.duration}</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="rose">{video.category}</Badge>
            <Badge tone="outline">{video.level}</Badge>
            {video.isVip && <Badge tone="gold">VIP</Badge>}
            <span className="text-xs text-ink-400">
              {formatNumber(video.views)} 回視聴
            </span>
          </div>
          <p className="font-serif text-lg leading-relaxed text-ink-800">{video.description}</p>

          <div className="flex flex-wrap gap-3">
            <Button onClick={complete}>
              <Sparkles className="h-4 w-4" />
              完了して +{video.duration.split(":")[0] || 5}0pt
            </Button>
            <Button variant="secondary">
              <Heart className="h-4 w-4" /> お気に入り
            </Button>
            <Button variant="secondary">
              <BookmarkPlus className="h-4 w-4" /> あとで見る
            </Button>
            <Button variant="ghost">
              <Share2 className="h-4 w-4" /> シェア
            </Button>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink-800/[0.05]">
            <h3 className="font-serif text-xl text-ink-800">あなたへのアドバイス</h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-400">
              呼吸を止めないこと。1セッション3回まで戻ってきても大丈夫。完璧でなくていい、続けることが正解です。
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-rose-50 p-6">
            <h3 className="font-serif text-xl text-ink-800">次に進むなら</h3>
            <p className="mt-3 text-sm text-ink-700/80">
              この動画の後におすすめ：「夜のリラックスフロー」「VIP 整骨院世界最高峰メソッド」
            </p>
          </div>
        </aside>
      </div>
      <div className="h-20" />
    </div>
  );
}
