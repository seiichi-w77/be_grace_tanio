import { notFound } from "next/navigation";
import { DiagnosisRunner } from "@/components/diagnosis/DiagnosisRunner";
import { PageShell } from "@/components/site/PageShell";
import { getDiagnosisBySlug, DIAGNOSES } from "@/lib/mock/diagnoses";

export function generateStaticParams() {
  return DIAGNOSES.filter((d) => d.questions.length > 0).map((d) => ({ slug: d.slug }));
}

export default async function DiagnosisPlayPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = getDiagnosisBySlug(slug);
  if (!theme || theme.questions.length === 0) notFound();
  return (
    <PageShell hideFooter>
      <DiagnosisRunner theme={theme} />
    </PageShell>
  );
}
