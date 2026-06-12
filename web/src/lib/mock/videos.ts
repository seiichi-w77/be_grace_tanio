import type { VideoLesson } from "./types";

/**
 * Each video is curated to a real YouTube reference — content is embedded via
 * youtube-nocookie.com to avoid tracking; thumbnails fall back to i.ytimg.com.
 * Curation principles:
 *   - Female-led, body-positive, postpartum-friendly Japanese channels
 *   - B-life (まりこ先生) / Marina Takewaki / 等のメジャー and trusted creators
 */
export const VIDEOS: VideoLesson[] = [
  {
    id: "v01",
    title: "朝の3分、骨盤を立てる呼吸",
    subtitle: "Morning Reset",
    duration: "10:09",
    category: "呼吸法",
    thumbnail: "linear-gradient(135deg, #fbe8e2 0%, #f5cabd 60%, #c8a589 100%)",
    views: 1480000,
    level: "初級",
    description:
      "肋骨の動きを目覚めさせ、骨盤底筋まで深く呼吸を届ける朝のルーティン。たった10分で、その日の姿勢が変わる魔法のフロー。",
    series: "Morning Bloom",
    youtubeId: "cxqlmRvjjpI",
    source: "B-life",
  },
  {
    id: "v02",
    title: "肩甲骨を蝶のように開く",
    subtitle: "Butterfly Wings",
    duration: "12:14",
    category: "ストレッチ",
    thumbnail: "linear-gradient(135deg, #fdf6f4 0%, #fbe8e2 50%, #eaa692 100%)",
    views: 932000,
    level: "初級",
    description:
      "デスクワークで凝り固まった肩甲骨をひらいて、深く呼吸できる胸へ。体が硬い人にもおすすめ。",
    series: "Daily Care",
    youtubeId: "FQixMwPy7D0",
    source: "B-life",
  },
  {
    id: "v03",
    title: "骨盤底筋エクササイズ 産後リカバリー",
    subtitle: "Pelvic Recovery",
    duration: "10:30",
    category: "コアトレ",
    thumbnail: "linear-gradient(135deg, #fff8f2 0%, #f4ebda 50%, #c8a589 100%)",
    views: 1842000,
    level: "中級",
    description:
      "産後の身体に必要な、骨盤底筋・腹横筋・横隔膜の同期。優しい段階的プログラム。",
    isVip: true,
    series: "Postpartum Bloom",
    youtubeId: "z_FICPbpLlE",
    source: "Yumi the Pilates",
  },
  {
    id: "v04",
    title: "夜のリラックスフロー",
    subtitle: "Night Surrender",
    duration: "15:33",
    category: "リフレッシュ",
    thumbnail: "linear-gradient(135deg, #f4ebda 0%, #d6dccd 50%, #7ea3b1 100%)",
    views: 1290000,
    level: "初級",
    description: "1日の緊張をほどき、深い眠りへ導く優しいヨガフロー。寝つきが格段に良くなる15分。",
    series: "Night Drift",
    youtubeId: "MAstgS8OwKM",
    source: "B-life",
  },
  {
    id: "v05",
    title: "美姿勢を作る背中の覚醒",
    subtitle: "Spine Awakening",
    duration: "08:08",
    category: "ストレッチ",
    thumbnail: "linear-gradient(135deg, #fbf5ec 0%, #e7c89b 60%, #c79a5a 100%)",
    views: 642000,
    level: "中級",
    description: "立ったまま出来る背中トレーニング。背骨の波を取り戻し、横から見ても美しい姿勢へ。",
    series: "Daily Care",
    youtubeId: "44_3JcjgePU",
    source: "Marina Takewaki",
  },
  {
    id: "v06",
    title: "VIP限定 整骨院世界最高峰メソッド",
    subtitle: "Master's Touch",
    duration: "10:21",
    category: "骨盤調整",
    thumbnail: "linear-gradient(135deg, #5e2f44 0%, #8c4b62 60%, #b5677f 100%)",
    views: 24800000,
    level: "上級",
    description: "整骨院で実際に施術している全身バランス調整を、自宅で再現するためのフルプログラム。2400万再生の決定版。",
    isVip: true,
    series: "Master Sessions",
    youtubeId: "b5bCrmfvzcc",
    source: "Marina Takewaki",
  },
  {
    id: "v07",
    title: "5分の脚やせ＋むくみリセット",
    subtitle: "Leg Reset",
    duration: "05:31",
    category: "リフレッシュ",
    thumbnail: "linear-gradient(135deg, #d5e3e8 0%, #7ea3b1 60%, #b5677f 100%)",
    views: 312000,
    level: "初級",
    description: "パンパンの足をスッキリさせる、5分のほぐし術。ふくらはぎから足首までのリンパを流し、夕方の脚を朝の脚に戻す。",
    series: "Quick Hit",
    youtubeId: "572Kg43p6QU",
    source: "Wellness Studio",
  },
  {
    id: "v08",
    title: "ピラティスベース 美ライン形成",
    subtitle: "Form Sculpt",
    duration: "27:42",
    category: "コアトレ",
    thumbnail: "linear-gradient(135deg, #fff8f2 0%, #fbe8e2 50%, #c8a589 100%)",
    views: 862000,
    level: "上級",
    description: "ピラティス基礎を取り入れた、内側から整える美しいラインへの30日プログラム#1。脂肪燃焼・姿勢改善・引き締めを一気に。",
    isVip: true,
    series: "30 Days Bloom",
    youtubeId: "Zj2-_J8oywU",
    source: "Pilates Japan",
  },
];

export const VIDEO_SERIES = [
  { id: "morning-bloom", name: "Morning Bloom", description: "朝の自分にときめく", count: 12 },
  { id: "daily-care", name: "Daily Care", description: "毎日の習慣にしたいケア", count: 24 },
  { id: "postpartum", name: "Postpartum Bloom", description: "産後を優しく取り戻す", count: 18 },
  { id: "night-drift", name: "Night Drift", description: "深く眠るための夜時間", count: 9 },
  { id: "master", name: "Master Sessions", description: "VIPだけの世界最高峰メソッド", count: 6 },
];

/** Returns a YouTube thumbnail URL. maxresdefault first, then hqdefault fallback. */
export function youtubeThumb(id: string, size: "max" | "hq" = "max"): string {
  return `https://i.ytimg.com/vi/${id}/${size === "max" ? "maxresdefault" : "hqdefault"}.jpg`;
}

/** Returns the privacy-enhanced YouTube embed URL with sensible defaults. */
export function youtubeEmbed(id: string, opts?: { autoplay?: boolean; start?: number }): string {
  const p = new URLSearchParams({
    rel: "0",
    modestbranding: "1",
    playsinline: "1",
    color: "white",
    iv_load_policy: "3",
  });
  if (opts?.autoplay) p.set("autoplay", "1");
  if (opts?.start) p.set("start", String(opts.start));
  return `https://www.youtube-nocookie.com/embed/${id}?${p.toString()}`;
}
