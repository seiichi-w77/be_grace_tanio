"use client";

import Link from "next/link";
import { MessageCircleHeart, Plus } from "lucide-react";
import { useAppStore } from "@/lib/store";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { formatJpDate } from "@/lib/utils";

export function ChatList() {
  const chats = useAppStore((s) => s.chats);

  return (
    <div className="space-y-6">
      <header className="flex items-end justify-between">
        <div>
          <span className="font-display text-xs tracking-[0.32em] uppercase text-rose-600/70">
            CONSULTATIONS
          </span>
          <h2 className="mt-2 font-serif text-3xl md:text-4xl font-light text-ink-800">
            相談したいときに、相談できる場所。
          </h2>
        </div>
        <Button>
          <Plus className="h-4 w-4" />
          新しい相談
        </Button>
      </header>

      <ul className="space-y-3">
        {chats.map((c) => (
          <li key={c.id}>
            <Link
              href={`/app/chat/${c.id}`}
              className="group flex items-center justify-between rounded-3xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05] transition-all hover:-translate-y-[1px]"
            >
              <div className="flex items-center gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-rose-100 to-rose-200 text-rose-700">
                  <MessageCircleHeart className="h-5 w-5" strokeWidth={1.4} />
                </span>
                <div>
                  <h3 className="font-serif text-lg text-ink-800">{c.topic}</h3>
                  <p className="mt-1 text-xs text-ink-400">
                    最終メッセージ {formatJpDate(c.lastMessageAt)} · {c.messages.length}件
                  </p>
                </div>
              </div>
              {c.unread > 0 && (
                <Badge tone="rose">{c.unread} 未読</Badge>
              )}
            </Link>
          </li>
        ))}
      </ul>
      <div className="h-20" />
    </div>
  );
}
