"use client";

import { useSearchParams } from "next/navigation";
import { getDiagnosisBySlug } from "@/lib/mock/diagnoses";
import { DiagnosisResult } from "./DiagnosisResult";

export function DiagnosisResultClient({ slug }: { slug: string }) {
  const params = useSearchParams();
  const type = params.get("type") ?? undefined;
  const theme = getDiagnosisBySlug(slug);
  if (!theme || theme.results.length === 0) return null;
  const result = theme.results.find((r) => r.type === type) ?? theme.results[0];
  return <DiagnosisResult theme={theme} result={result} />;
}
