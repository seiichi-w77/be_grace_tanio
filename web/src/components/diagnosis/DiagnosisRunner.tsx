"use client";

import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import type { DiagnosisTheme } from "@/lib/mock/types";
import { tallyResult } from "@/lib/mock/diagnoses";

const accentMap: Record<string, string> = {
  rose: "from-rose-50 via-cream-50 to-rose-100",
  gold: "from-cream-50 via-gold-300/15 to-cream-100",
  sage: "from-cream-50 via-sage-200/15 to-cream-100",
  sky: "from-cream-50 via-sky-200/15 to-cream-100",
};

export function DiagnosisRunner({ theme }: { theme: DiagnosisTheme }) {
  const router = useRouter();
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const total = theme.questions.length;
  const q = theme.questions[step];
  const progress = ((step + (answers[q?.id ?? ""] ? 1 : 0)) / total) * 100;

  const result = useMemo(() => tallyResult(theme, answers), [theme, answers]);

  function selectOption(type: string) {
    setAnswers((prev) => ({ ...prev, [q.id]: type }));
    setTimeout(() => {
      if (step + 1 < total) {
        setStep((s) => s + 1);
      } else {
        if (typeof window !== "undefined") {
          sessionStorage.setItem(`begrace:result:${theme.slug}`, result?.type ?? "");
          sessionStorage.setItem(`begrace:answers:${theme.slug}`, JSON.stringify(answers));
        }
        router.push(`/diagnoses/${theme.slug}/result?type=${result?.type ?? ""}`);
      }
    }, 380);
  }

  return (
    <section className={`min-h-[calc(100dvh-7rem)] bg-gradient-to-br ${accentMap[theme.accent]}`}>
      <div className="mx-auto max-w-3xl px-6 py-12 md:py-20">
        <div className="mb-10 flex items-center justify-between">
          <span className="text-[0.62rem] tracking-[0.32em] uppercase text-ink-400">
            {theme.badge}
          </span>
          <span className="font-display text-sm text-ink-400">
            {String(step + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
        </div>
        <Progress value={progress} tone={theme.accent === "gold" ? "gold" : "rose"} className="mb-12" />

        <AnimatePresence mode="wait">
          <motion.div
            key={q.id}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -18 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            <div>
              <span className="font-display text-[0.7rem] tracking-[0.32em] uppercase text-rose-600/70">
                Q{String(step + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-serif text-3xl md:text-4xl font-light leading-snug text-ink-800">
                {q.text}
              </h2>
              {q.caption && (
                <p className="mt-3 text-sm leading-relaxed text-ink-400">{q.caption}</p>
              )}
            </div>

            <div className="grid gap-3">
              {q.options.map((opt, idx) => {
                const selected = answers[q.id] === opt.type;
                return (
                  <motion.button
                    key={opt.label}
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => selectOption(opt.type)}
                    className={`group relative flex items-center justify-between rounded-2xl border bg-white/80 px-6 py-5 text-left backdrop-blur transition-all
                      ${selected ? "border-rose-500 bg-rose-50/80 ring-4 ring-rose-500/10" : "border-ink-800/[0.06] hover:border-rose-300"}`}
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`inline-flex h-9 w-9 items-center justify-center rounded-full font-display text-sm
                          ${selected ? "bg-gradient-to-br from-rose-500 to-rose-600 text-white" : "bg-cream-100 text-ink-600"}`}
                      >
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <div>
                        <div className="text-base font-medium text-ink-800">{opt.label}</div>
                        {opt.description && (
                          <div className="mt-1 text-xs text-ink-400">{opt.description}</div>
                        )}
                      </div>
                    </div>
                    <ArrowRight
                      className={`h-4 w-4 transition-all ${selected ? "translate-x-1 text-rose-600" : "text-ink-200 group-hover:translate-x-1 group-hover:text-rose-500"}`}
                    />
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <Button
            variant="ghost"
            disabled={step === 0}
            onClick={() => setStep((s) => Math.max(0, s - 1))}
          >
            <ArrowLeft className="h-4 w-4" />
            ひとつ前
          </Button>
          <div className="flex items-center gap-2 text-xs text-ink-400">
            <Sparkles className="h-3 w-3 text-rose-500" />
            {theme.title}
          </div>
        </div>
      </div>
    </section>
  );
}
