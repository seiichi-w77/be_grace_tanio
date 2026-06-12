import { notFound } from "next/navigation";
import { VideoPlayer } from "@/components/app/VideoPlayer";
import { VIDEOS } from "@/lib/mock/videos";

export function generateStaticParams() {
  return VIDEOS.map((v) => ({ id: v.id }));
}

export default async function VideoDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const video = VIDEOS.find((v) => v.id === id);
  if (!video) notFound();
  return <VideoPlayer video={video} />;
}
