import { notFound } from "next/navigation";
import { Suspense } from "react";
import { PageShell } from "@/components/site/PageShell";
import { DiagnosisResultClient } from "@/components/diagnosis/DiagnosisResultClient";
import { getDiagnosisBySlug, DIAGNOSES } from "@/lib/mock/diagnoses";

export function generateStaticParams() {
  return DIAGNOSES.filter((d) => d.results.length > 0).map((d) => ({ slug: d.slug }));
}

export default async function DiagnosisResultPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = getDiagnosisBySlug(slug);
  if (!theme || theme.results.length === 0) notFound();

  return (
    <PageShell>
      <Suspense fallback={<div className="py-32 text-center text-ink-400">読み込み中…</div>}>
        <DiagnosisResultClient slug={slug} />
      </Suspense>
    </PageShell>
  );
}
