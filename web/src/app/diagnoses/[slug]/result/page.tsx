import { notFound } from "next/navigation";
import { PageShell } from "@/components/site/PageShell";
import { DiagnosisResult } from "@/components/diagnosis/DiagnosisResult";
import { getDiagnosisBySlug, DIAGNOSES } from "@/lib/mock/diagnoses";

export function generateStaticParams() {
  return DIAGNOSES.filter((d) => d.results.length > 0).map((d) => ({ slug: d.slug }));
}

export default async function DiagnosisResultPage({
  params,
  searchParams,
}: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ type?: string }>;
}) {
  const { slug } = await params;
  const { type } = await searchParams;
  const theme = getDiagnosisBySlug(slug);
  if (!theme || theme.results.length === 0) notFound();
  const result = theme.results.find((r) => r.type === type) ?? theme.results[0];

  return (
    <PageShell>
      <DiagnosisResult theme={theme} result={result} />
    </PageShell>
  );
}
