"use client";

import { useAppStore } from "@/lib/store";
import { cn } from "@/lib/utils";
import { Crown, Shield, User } from "lucide-react";

const roles = [
  { value: "general", label: "一般", icon: User, hint: "コアコンテンツのみ" },
  { value: "vip", label: "VIP", icon: Crown, hint: "限定動画も解放" },
  { value: "admin", label: "管理", icon: Shield, hint: "全機能 + 管理者画面" },
] as const;

export function RoleSwitcher() {
  const role = useAppStore((s) => s.user.role);
  const setRole = useAppStore((s) => s.setRole);

  return (
    <div className="rounded-3xl bg-white/60 p-4 ring-1 ring-ink-800/[0.05]">
      <div className="px-2 text-[0.62rem] tracking-[0.32em] uppercase text-ink-400">
        Demo: 権限切替
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1.5">
        {roles.map((r) => {
          const active = role === r.value;
          return (
            <button
              key={r.value}
              onClick={() => setRole(r.value)}
              className={cn(
                "group flex flex-col items-center gap-1.5 rounded-2xl py-3 text-xs transition-all",
                active
                  ? "bg-gradient-to-br from-rose-600 to-rose-500 text-white shadow-[0_8px_24px_-12px_rgba(181,103,127,0.4)]"
                  : "bg-white text-ink-400 hover:bg-cream-100"
              )}
              title={r.hint}
            >
              <r.icon className="h-4 w-4" strokeWidth={1.4} />
              <span>{r.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
