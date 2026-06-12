"use client";

import Link from "next/link";
import { ArrowLeft, Play, Heart, Share2, BookmarkPlus, Sparkles, ExternalLink } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { VideoLesson } from "@/lib/mock/types";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatNumber } from "@/lib/utils";
import { useAppStore } from "@/lib/store";
import { VIDEOS, youtubeEmbed, youtubeThumb } from "@/lib/mock/videos";

export function VideoPlayer({ video }: { video: VideoLesson }) {
  const [playing, setPlaying] = useState(false);
  const [completed, setCompleted] = useState(false);
  const addRecord = useAppStore((s) => s.addRecord);

  const related = VIDEOS.filter(
    (v) => v.id !== video.id && (v.series === video.series || v.category === video.category)
  ).slice(0, 3);

  function complete() {
    addRecord({
      date: new Date().toISOString(),
      category: video.category as "ストレッチ" | "骨盤調整" | "コアトレ" | "呼吸法" | "リフレッシュ",
      title: video.title,
      minutes: parseInt(video.duration.split(":")[0]) || 5,
      intensity: 2,
      mood: "✨",
    });
    setCompleted(true);
    setTimeout(() => setCompleted(false), 2500);
  }

  return (
    <div className="space-y-6">
      <Link
        href="/app/videos"
        className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-rose-700"
      >
        <ArrowLeft className="h-3 w-3" /> 動画ライブラリへ
      </Link>

      <div className="relative aspect-video overflow-hidden rounded-[2rem] bg-ink-800 shadow-[0_24px_60px_-20px_rgba(45,42,38,0.25)]">
        {video.youtubeId ? (
          <>
            <AnimatePresence>
              {!playing && (
                <motion.button
                  key="poster"
                  onClick={() => setPlaying(true)}
                  className="absolute inset-0 z-10 cursor-pointer overflow-hidden"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  aria-label="動画を再生"
                >
                  <img
                    src={youtubeThumb(video.youtubeId, "max")}
                    alt={video.title}
                    className="absolute inset-0 h-full w-full object-cover"
                    onError={(e) => {
                      const el = e.currentTarget;
                      el.src = youtubeThumb(video.youtubeId!, "hq");
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 via-ink-800/20 to-ink-800/40" />
                  <span className="absolute left-1/2 top-1/2 inline-flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-rose-700 shadow-2xl transition-transform group-hover:scale-110">
                    <Play className="h-8 w-8 fill-current" />
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-5 text-left text-white">
                    <div className="font-display italic !font-light text-xl text-rose-100">
                      {video.subtitle}
                    </div>
                    <h1
                      className="headline-jp !text-white max-w-[24ch]"
                      style={{ fontSize: "var(--type-h2)" }}
                    >
                      {video.title}
                    </h1>
                    <div className="mt-3 flex items-center gap-3 text-xs text-white/85">
                      <span className="rounded-full bg-black/40 px-2 py-1 tabular-nums backdrop-blur">
                        {video.duration}
                      </span>
                      <span>{video.level}</span>
                      <span>{formatNumber(video.views)} 回視聴</span>
                    </div>
                  </div>
                </motion.button>
              )}
            </AnimatePresence>
            {playing && (
              <iframe
                title={video.title}
                src={youtubeEmbed(video.youtubeId, { autoplay: true })}
                className="absolute inset-0 h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            )}
          </>
        ) : (
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{ background: video.thumbnail }}
          >
            <p className="font-jp-serif text-white">準備中</p>
          </div>
        )}
      </div>

      <div className="grid gap-6 md:grid-cols-[1.4fr_1fr]">
        <div className="space-y-5">
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="rose">{video.category}</Badge>
            <Badge tone="outline">{video.level}</Badge>
            {video.isVip && <Badge tone="gold">VIP</Badge>}
            <span className="text-xs text-ink-400 tabular-nums">
              {formatNumber(video.views)} 回視聴
            </span>
            {video.source && (
              <span className="ml-auto inline-flex items-center gap-1 text-xs text-ink-400">
                <span>Source —</span>
                <a
                  href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="inline-flex items-center gap-1 font-medium text-ink-600 hover:text-rose-700"
                >
                  {video.source}
                  <ExternalLink className="h-3 w-3" />
                </a>
              </span>
            )}
          </div>
          <p className="font-jp-serif text-[1.05rem] leading-[1.85] text-ink-800 max-w-[44ch]">
            {video.description}
          </p>

          <div className="flex flex-wrap gap-3">
            <Button onClick={complete}>
              <Sparkles className="h-4 w-4" />
              {completed ? "受け取りました" : `完了して +${(parseInt(video.duration.split(":")[0]) || 5) * 10}pt`}
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

          {completed && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-gradient-to-r from-rose-500 to-rose-600 p-5 text-white"
            >
              <div className="flex items-center gap-2 font-display !font-light tracking-wide">
                <Sparkles className="h-4 w-4" />
                完了を記録しました
              </div>
              <p className="lede-jp mt-2 !text-rose-100/95">
                3ヶ月後のあなたが、今日のあなたに微笑んでいます。
              </p>
            </motion.div>
          )}
        </div>

        <aside className="space-y-4">
          <div className="rounded-3xl bg-white p-6 ring-1 ring-ink-800/[0.05]">
            <h3
              className="headline-jp text-ink-800"
              style={{ fontSize: "var(--type-h3)" }}
            >
              あなたへのアドバイス
            </h3>
            <p className="lede-jp mt-3 text-[0.9rem] text-ink-400 max-w-[32ch]">
              呼吸を止めないこと。1セッション3回まで戻ってきても大丈夫。完璧でなくていい、続けることが正解です。
            </p>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-rose-100 to-rose-50 p-6">
            <h3
              className="headline-jp text-ink-800"
              style={{ fontSize: "var(--type-h3)" }}
            >
              次に進むなら
            </h3>
            <ul className="mt-3 space-y-2">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/app/videos/${r.id}`}
                    className="group flex items-center gap-3 rounded-xl p-2 transition-colors hover:bg-white/60"
                  >
                    {r.youtubeId && (
                      <img
                        src={youtubeThumb(r.youtubeId, "hq")}
                        alt=""
                        className="h-10 w-14 shrink-0 rounded object-cover"
                      />
                    )}
                    <span className="text-[0.85rem] text-ink-700 group-hover:text-rose-700">
                      {r.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <div className="h-20" />
    </div>
  );
}
