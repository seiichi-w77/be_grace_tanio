import { ChatThread } from "@/components/app/ChatThread";

export default async function ChatThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatThread threadId={id} />;
}
