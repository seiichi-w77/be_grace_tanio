import { ChatThread } from "@/components/app/ChatThread";
import { SEED_CHATS } from "@/lib/mock/chat";

export function generateStaticParams() {
  return SEED_CHATS.map((c) => ({ id: c.id }));
}

export const dynamicParams = false;

export default async function ChatThreadPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return <ChatThread threadId={id} />;
}
