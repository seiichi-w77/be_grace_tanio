"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Crown, PlayCircle, Search } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { VIDEOS, VIDEO_SERIES, youtubeThumb } from "@/lib/mock/videos";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { formatNumber } from "@/lib/utils";

export function VideosPanel() {
  const role = useAppStore((s) => s.user.role);
  const [query, setQuery] = useState("");
  const [series, setSeries] = useState<string | null>(null);

  const filtered = useMemo(() => {
    return VIDEOS.filter((v) => {
      if (series && v.series !== series) return false;
      if (query && !v.title.includes(query) && !v.category.includes(query)) return false;
      return true;
    });
  }, [query, series]);

  return (
    <div className="space-y-8">
      <header className="space-y-4">
        <span className="font-display text-[0.7rem] tracking-[0.36em] uppercase text-rose-600/70">
          Video Library
        </span>
        <h2
          className="headline-jp text-ink-800 max-w-[20ch]"
          style={{ fontSize: "var(--type-h2)" }}
        >
          受け取れる、動画レッスン。
        </h2>
        <div className="relative max-w-md">
          <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-400" />
          <Input
            className="pl-11"
            placeholder="気になる動きを探す"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          <SeriesChip active={series === null} onClick={() => setSeries(null)}>
            すべて
          </SeriesChip>
          {VIDEO_SERIES.map((s) => (
            <SeriesChip
              key={s.id}
              active={series === s.name}
              onClick={() => setSeries(series === s.name ? null : s.name)}
            >
              {s.name}
            </SeriesChip>
          ))}
        </div>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((v) => {
          const locked = v.isVip && role === "general";
          return (
            <Link
              key={v.id}
              href={locked ? "#" : `/app/videos/${v.id}`}
              className="group relative overflow-hidden rounded-3xl bg-white shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05] transition-all hover:-translate-y-1 hover:shadow-[0_20px_40px_-20px_rgba(181,103,127,0.25)]"
            >
              <div
                className="relative aspect-[16/10] overflow-hidden bg-ink-800"
                style={!v.youtubeId ? { background: v.thumbnail } : undefined}
              >
                {v.youtubeId && (
                  <img
                    src={youtubeThumb(v.youtubeId, "max")}
                    alt={v.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                    loading="lazy"
                    onError={(e) => {
                      const el = e.currentTarget;
                      const hq = youtubeThumb(v.youtubeId!, "hq");
                      if (el.src !== hq) el.src = hq;
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-ink-800/80 via-ink-800/10 to-ink-800/30" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge tone="outline" className="border-white/30 bg-white/15 text-white backdrop-blur">
                    {v.category}
                  </Badge>
                  {v.isVip && (
                    <Badge tone="gold">
                      <Crown className="h-3 w-3" /> VIP
                    </Badge>
                  )}
                </div>
                <div className="absolute right-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-[0.7rem] text-white tabular-nums backdrop-blur">
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-rose-700 shadow-2xl backdrop-blur transition-transform group-hover:scale-110">
                    <PlayCircle className="h-8 w-8" />
                  </span>
                </div>
                {locked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-800/75 text-white backdrop-blur">
                    <div className="text-center">
                      <Crown className="mx-auto h-7 w-7" />
                      <p className="mt-2 font-medium">VIPで解放</p>
                      <p className="mt-1 text-xs text-white/70">権限を切り替え可</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="font-display text-[0.62rem] tracking-[0.28em] uppercase text-rose-600/70">
                  {v.subtitle}
                </div>
                <h3
                  className="headline-jp mt-1.5 text-ink-800"
                  style={{ fontSize: "1.075rem", lineHeight: 1.45 }}
                >
                  {v.title}
                </h3>
                <p className="lede-jp mt-2 line-clamp-2 text-[0.78rem] text-ink-400">{v.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-ink-400">
                  <span>{v.level}</span>
                  <span className="tabular-nums">{formatNumber(v.views)} 回視聴</span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="h-20" />
    </div>
  );
}

function SeriesChip({
  active,
  onClick,
  children,
}: {
  active?: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`rounded-full px-4 py-2 text-xs transition-all ${
        active
          ? "bg-rose-600 text-white"
          : "bg-white text-ink-600 ring-1 ring-ink-800/[0.06] hover:bg-cream-100"
      }`}
    >
      {children}
    </button>
  );
}
