"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Send, Bot, User as UserIcon, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { useAppStore } from "@/lib/store";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function ChatThread({ threadId }: { threadId: string }) {
  const thread = useAppStore((s) => s.chats.find((c) => c.id === threadId));
  const sendMessage = useAppStore((s) => s.sendMessage);
  const [draft, setDraft] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [thread?.messages.length]);

  if (!thread) {
    return (
      <div>
        <Link href="/app/chat" className="text-xs text-rose-700">
          相談一覧へ戻る
        </Link>
        <p className="mt-6 text-ink-400">スレッドが見つかりません。</p>
      </div>
    );
  }

  function send() {
    if (!draft.trim()) return;
    sendMessage(threadId, draft.trim());
    setDraft("");
  }

  return (
    <div className="flex h-[calc(100dvh-12rem)] flex-col">
      <div className="flex items-center gap-3 pb-4">
        <Link
          href="/app/chat"
          className="inline-flex items-center gap-2 text-xs text-ink-400 hover:text-rose-700"
        >
          <ArrowLeft className="h-3 w-3" /> 相談一覧
        </Link>
      </div>
      <header className="rounded-3xl bg-white p-5 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
        <h3 className="font-serif text-2xl font-light text-ink-800">{thread.topic}</h3>
        <p className="mt-1 text-xs text-ink-400">あなた・先生・AIアシスタントの3者でやりとりします。</p>
      </header>

      <div ref={scrollRef} className="mt-4 flex-1 space-y-4 overflow-y-auto pr-2">
        {thread.messages.map((m) => (
          <motion.div
            key={m.id}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className={cn("flex gap-3", m.from === "user" && "flex-row-reverse")}
          >
            <span
              className={cn(
                "inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full",
                m.from === "user" && "bg-gradient-to-br from-rose-500 to-rose-600 text-white",
                m.from === "instructor" && "bg-gradient-to-br from-gold-300 to-gold-500 text-white",
                m.from === "ai" && "bg-sky-200 text-sky-400"
              )}
            >
              {m.from === "user" && <UserIcon className="h-4 w-4" />}
              {m.from === "instructor" && <Heart className="h-4 w-4" strokeWidth={1.6} />}
              {m.from === "ai" && <Bot className="h-4 w-4" />}
            </span>
            <div className={cn("max-w-[80%]", m.from === "user" && "text-right")}>
              <div className="text-[0.62rem] tracking-[0.24em] uppercase text-ink-400">
                {m.from === "user" ? "あなた" : m.from === "instructor" ? "谷尾先生" : "AI アシスタント"}
              </div>
              <div
                className={cn(
                  "mt-1 inline-block rounded-2xl px-4 py-3 text-sm leading-relaxed shadow-sm",
                  m.from === "user"
                    ? "bg-gradient-to-br from-rose-500 to-rose-600 text-white"
                    : m.from === "instructor"
                    ? "bg-white text-ink-800 ring-1 ring-ink-800/[0.05]"
                    : "bg-sky-200/40 text-ink-800"
                )}
              >
                {m.text}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          send();
        }}
        className="mt-4 rounded-3xl bg-white p-3 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]"
      >
        <Textarea
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="先生やAIに、なんでも書いてください"
          className="border-0 min-h-[80px] resize-none focus:ring-0 focus:border-0"
        />
        <div className="mt-2 flex items-center justify-between">
          <p className="text-xs text-ink-400">AIが瞬時に、先生は1日以内にお返事します</p>
          <Button type="submit" disabled={!draft.trim()}>
            送信 <Send className="h-4 w-4" />
          </Button>
        </div>
      </form>
    </div>
  );
}
