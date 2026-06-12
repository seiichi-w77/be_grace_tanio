"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Camera, CheckCircle2, Sparkles, ArrowRight, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Section, EyebrowText } from "@/components/ui/section";
import Link from "next/link";

type Side = "front" | "side" | "back";

interface Photo {
  side: Side;
  preview: string;
}

const sides: { side: Side; label: string; hint: string }[] = [
  { side: "front", label: "正面", hint: "リラックスして立つ。両手は自然に下ろして。" },
  { side: "side", label: "横向き", hint: "横から見える姿勢が分かるように。" },
  { side: "back", label: "後ろ", hint: "後ろからの全身を写してください。" },
];

const mockReport = {
  score: 78,
  pelvis: { value: 13, label: "前傾 13°" },
  shoulder: { value: 4, label: "右肩 4mm 高め" },
  spine: { label: "腰椎やや反り強め" },
  chest: { label: "胸郭の硬さあり" },
  summary:
    "あなたの姿勢には「努力家のクセ」が現れています。胸を緩めて呼吸を深めることで、腰の負担も同時に軽くなる構造です。",
  insights: [
    "肩の左右差は、日常の抱っこ姿勢から。利き手側の使い癖を整える呼吸ストレッチで解放できます。",
    "腰椎の反りは、骨盤底筋への信頼を取り戻すと自然に整います。今夜、3分の呼吸法から。",
    "胸郭の硬さは、デスクワーク・スマホ姿勢の積み重ね。肩甲骨の蝶ストレッチが効きます。",
  ],
  actions: [
    { title: "今夜3分: 骨盤を立てる呼吸", href: "/app/videos/v01" },
    { title: "明朝5分: 蝶のように肩甲骨を開く", href: "/app/videos/v02" },
    { title: "週末30分: 整骨院世界最高峰メソッド", href: "/app/videos/v06" },
  ],
};

export function PostureUploader() {
  const [photos, setPhotos] = useState<Record<Side, Photo | null>>({
    front: null,
    side: null,
    back: null,
  });
  const [stage, setStage] = useState<"upload" | "analyzing" | "result">("upload");
  const [progress, setProgress] = useState(0);
  const fileRef = useRef<HTMLInputElement>(null);
  const [activeSide, setActiveSide] = useState<Side>("front");

  const completed = Object.values(photos).filter(Boolean).length;
  const allDone = completed === 3;

  function uploadFor(side: Side) {
    setActiveSide(side);
    fileRef.current?.click();
  }

  function handleFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhotos((prev) => ({ ...prev, [activeSide]: { side: activeSide, preview: url } }));
    e.target.value = "";
  }

  function analyze() {
    setStage("analyzing");
    setProgress(0);
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => setStage("result"), 600);
          return 100;
        }
        return p + 4 + Math.random() * 5;
      });
    }, 120);
  }

  return (
    <>
      <input
        ref={fileRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />

      <AnimatePresence mode="wait">
        {stage === "upload" && (
          <motion.div
            key="upload"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Section className="hero-gradient">
              <div className="max-w-3xl">
                <EyebrowText>FRAMEWORK 03 · AI VISION</EyebrowText>
                <h1 className="mt-6 font-serif text-4xl md:text-6xl font-light leading-[1.1] text-ink-800">
                  写真を3枚、
                  <br />
                  <span className="font-display italic text-rose-700">AI</span>が優しく見立てます。
                </h1>
                <p className="mt-6 max-w-xl text-sm md:text-base leading-loose text-ink-600">
                  正面・横・後ろの全身写真をアップロード。あなたの代わりに、整骨院最高峰の視点で姿勢を読み解きます。写真はあなたの端末に留まり、Be Grace のサーバーには送信されません（モック）。
                </p>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-3">
                {sides.map(({ side, label, hint }) => {
                  const photo = photos[side];
                  return (
                    <button
                      key={side}
                      onClick={() => uploadFor(side)}
                      className="group relative aspect-[3/4] overflow-hidden rounded-3xl border-2 border-dashed border-rose-300/60 bg-white/60 backdrop-blur transition-all hover:border-rose-500 hover:bg-white"
                    >
                      {photo ? (
                        <>
                          <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${photo.preview})` }}
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-ink-800/60 via-ink-800/0 to-ink-800/0" />
                          <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                            <span className="self-end inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/90">
                              <CheckCircle2 className="h-4 w-4" />
                            </span>
                            <div>
                              <div className="font-display text-2xl">{label}</div>
                              <div className="mt-1 text-xs opacity-80">アップロード済み</div>
                            </div>
                          </div>
                        </>
                      ) : (
                        <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                          <span className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-700">
                            <Camera className="h-6 w-6" />
                          </span>
                          <div className="font-display text-2xl text-ink-800">{label}</div>
                          <p className="text-xs leading-relaxed text-ink-400">{hint}</p>
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="mt-10 flex flex-col items-center gap-3">
                <Button size="xl" disabled={!allDone} onClick={analyze}>
                  AI 診断をはじめる ({completed}/3)
                  <ArrowRight className="h-4 w-4" />
                </Button>
                <p className="text-xs text-ink-400">
                  ※ デモ環境ではローカル処理のみ。サーバーへの送信はありません。
                </p>
              </div>
            </Section>
          </motion.div>
        )}

        {stage === "analyzing" && (
          <motion.div
            key="analyzing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="silk-gradient"
          >
            <Section>
              <div className="mx-auto max-w-2xl text-center">
                <div className="relative inline-flex h-32 w-32 items-center justify-center">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-gradient-to-br from-rose-200 to-rose-300 blur-2xl" />
                  <Loader2 className="relative h-12 w-12 animate-spin text-rose-600" strokeWidth={1.2} />
                </div>
                <h2 className="mt-12 font-serif text-3xl md:text-4xl font-light text-ink-800">
                  AIが見立てています…
                </h2>
                <p className="mt-3 text-sm text-ink-400">{statusFor(progress)}</p>
                <div className="mx-auto mt-10 max-w-md">
                  <Progress value={progress} />
                  <div className="mt-3 text-xs text-ink-400">{Math.round(progress)}%</div>
                </div>
              </div>
            </Section>
          </motion.div>
        )}

        {stage === "result" && (
          <motion.div
            key="result"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Section className="hero-gradient">
              <div className="max-w-3xl">
                <EyebrowText>AI VISION REPORT</EyebrowText>
                <h1 className="mt-6 font-serif text-5xl md:text-7xl font-light leading-[1.05] text-ink-800">
                  あなたの姿勢
                  <br />
                  <span className="font-display italic text-rose-700">スコア {mockReport.score}</span>
                </h1>
                <p className="mt-8 max-w-2xl font-serif text-xl leading-relaxed text-ink-800/85">
                  {mockReport.summary}
                </p>
              </div>

              <div className="mt-14 grid gap-5 md:grid-cols-4">
                {[
                  { label: "骨盤", value: mockReport.pelvis.label },
                  { label: "肩", value: mockReport.shoulder.label },
                  { label: "背骨", value: mockReport.spine.label },
                  { label: "胸郭", value: mockReport.chest.label },
                ].map((m) => (
                  <div key={m.label} className="rounded-3xl bg-white/70 p-6 backdrop-blur ring-1 ring-ink-800/[0.05]">
                    <div className="text-[0.65rem] tracking-[0.32em] uppercase text-ink-400">
                      {m.label}
                    </div>
                    <div className="mt-3 font-serif text-lg text-ink-800">{m.value}</div>
                  </div>
                ))}
              </div>
            </Section>

            <Section>
              <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
                <div className="rounded-3xl bg-white p-8 shadow-[0_1px_2px_rgba(45,42,38,0.04),0_8px_24px_rgba(45,42,38,0.06)] ring-1 ring-ink-800/[0.05]">
                  <EyebrowText>INSIGHTS</EyebrowText>
                  <h2 className="mt-4 font-serif text-3xl font-light text-ink-800">
                    AIが見ているもの
                  </h2>
                  <ul className="mt-6 space-y-5">
                    {mockReport.insights.map((m, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-rose-100 font-display text-xs text-rose-700">
                          {idx + 1}
                        </span>
                        <p className="text-sm leading-relaxed text-ink-700">{m}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="rounded-3xl bg-gradient-to-br from-rose-600 to-rose-500 p-8 text-white">
                  <EyebrowText className="text-white/70">RECOMMENDED ACTIONS</EyebrowText>
                  <h2 className="mt-4 font-serif text-3xl font-light">今日からの3つ</h2>
                  <ul className="mt-6 space-y-4">
                    {mockReport.actions.map((a, idx) => (
                      <li key={idx}>
                        <Link
                          href={a.href}
                          className="group flex items-center justify-between rounded-2xl bg-white/10 p-4 backdrop-blur transition-all hover:bg-white/20"
                        >
                          <div className="flex items-center gap-3">
                            <Sparkles className="h-4 w-4" />
                            <span className="text-sm font-medium">{a.title}</span>
                          </div>
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-14 flex flex-col items-center gap-3">
                <Button asChild size="xl">
                  <Link href="/signup">
                    会員になって毎日続ける
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="ghost" size="md">
                  <Link href="/consultation">先生と個別相談する</Link>
                </Button>
              </div>
            </Section>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function statusFor(p: number) {
  if (p < 25) return "骨盤の傾きを計測中…";
  if (p < 50) return "肩・首のバランスを読み取り中…";
  if (p < 75) return "整骨院最高峰の視点と照合中…";
  if (p < 95) return "あなたへのアドバイスを編集中…";
  return "完成しました。あなたを受け取ってください。";
}
