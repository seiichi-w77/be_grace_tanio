"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Crown, PlayCircle, Search } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { VIDEOS, VIDEO_SERIES } from "@/lib/mock/videos";
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
        <span className="font-display text-xs tracking-[0.32em] uppercase text-rose-600/70">
          VIDEO LIBRARY
        </span>
        <h2 className="font-serif text-3xl md:text-4xl font-light text-ink-800">
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
                className="relative aspect-[16/10] overflow-hidden"
                style={{ background: v.thumbnail }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/0 to-black/0" />
                <div className="absolute left-4 top-4 flex gap-2">
                  <Badge tone="outline" className="border-white/40 bg-white/20 text-white">
                    {v.category}
                  </Badge>
                  {v.isVip && (
                    <Badge tone="gold">
                      <Crown className="h-3 w-3" /> VIP
                    </Badge>
                  )}
                </div>
                <div className="absolute right-4 bottom-4 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
                  {v.duration}
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white/80 text-rose-700 backdrop-blur transition-transform group-hover:scale-110">
                    <PlayCircle className="h-7 w-7" />
                  </span>
                </div>
                {locked && (
                  <div className="absolute inset-0 flex items-center justify-center bg-ink-800/70 text-white backdrop-blur">
                    <div className="text-center">
                      <Crown className="mx-auto h-7 w-7" />
                      <p className="mt-2 font-medium">VIPで解放</p>
                      <p className="mt-1 text-xs text-white/70">権限を切り替え可</p>
                    </div>
                  </div>
                )}
              </div>
              <div className="p-5">
                <div className="text-[0.62rem] tracking-[0.24em] uppercase text-rose-600/70">
                  {v.subtitle}
                </div>
                <h3 className="mt-1 font-serif text-lg leading-tight text-ink-800">{v.title}</h3>
                <p className="mt-2 line-clamp-2 text-xs text-ink-400">{v.description}</p>
                <div className="mt-3 flex items-center justify-between text-xs text-ink-400">
                  <span>{v.level}</span>
                  <span>{formatNumber(v.views)} 回視聴</span>
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
