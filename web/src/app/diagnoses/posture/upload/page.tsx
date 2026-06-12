import { PageShell } from "@/components/site/PageShell";
import { PostureUploader } from "@/components/diagnosis/PostureUploader";

export default function PostureUploadPage() {
  return (
    <PageShell hideFooter>
      <PostureUploader />
    </PageShell>
  );
}
