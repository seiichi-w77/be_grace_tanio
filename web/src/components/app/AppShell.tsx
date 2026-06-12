"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import {
  Home,
  Notebook,
  Target,
  Sparkles,
  MessageCircleHeart,
  PlayCircle,
  Shield,
  Crown,
  Settings,
} from "lucide-react";
import { useAppStore, levelLabel, pointsToNextLevel } from "@/lib/store";
import { Logo } from "@/components/site/Logo";
import { cn, formatNumber, greet } from "@/lib/utils";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { RoleSwitcher } from "./RoleSwitcher";

const nav = [
  { href: "/app", label: "ホーム", icon: Home },
  { href: "/app/record", label: "今日の記録", icon: Notebook },
  { href: "/app/videos", label: "動画ライブラリ", icon: PlayCircle },
  { href: "/app/goals", label: "ゴール", icon: Target },
  { href: "/app/chat", label: "相談", icon: MessageCircleHeart },
  { href: "/app/points", label: "ポイント", icon: Sparkles },
];

export function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const user = useAppStore((s) => s.user);
  const lvl = pointsToNextLevel(user.points, user.level);

  const showAdmin = user.role === "admin";

  return (
    <div className="relative min-h-dvh silk-gradient">
      {/* Decorative orbs */}
      <div className="pointer-events-none fixed left-0 top-0 -z-10 h-[500px] w-[500px] -translate-x-1/3 -translate-y-1/3 rounded-full bg-gradient-to-br from-rose-200/30 to-transparent blur-3xl" />
      <div className="pointer-events-none fixed right-0 bottom-0 -z-10 h-[400px] w-[400px] translate-x-1/3 translate-y-1/3 rounded-full bg-gradient-to-br from-gold-300/30 to-transparent blur-3xl" />

      <div className="mx-auto flex max-w-[1400px] gap-6 px-4 py-6 md:px-8 md:py-8">
        {/* Sidebar */}
        <aside className="hidden w-72 shrink-0 lg:block">
          <div className="sticky top-8 space-y-6">
            <Logo compact />

            <div className="rounded-3xl bg-white p-6 shadow-[0_8px_24px_-12px_rgba(45,42,38,0.1)] ring-1 ring-ink-800/[0.05]">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gradient-to-br from-rose-200 via-rose-300 to-rose-500 ring-2 ring-white" />
                <div>
                  <div className="text-sm font-medium text-ink-800">{user.name}</div>
                  <div className="text-[0.62rem] tracking-[0.24em] uppercase text-rose-700">
                    {user.role === "vip" && (
                      <span className="inline-flex items-center gap-1">
                        <Crown className="h-3 w-3" /> VIP
                      </span>
                    )}
                    {user.role === "admin" && (
                      <span className="inline-flex items-center gap-1">
                        <Shield className="h-3 w-3" /> Admin
                      </span>
                    )}
                    {user.role === "general" && "Member"}
                  </div>
                </div>
              </div>
              <div className="mt-5 space-y-3 text-xs">
                <div className="flex items-center justify-between text-ink-400">
                  <span>{levelLabel(user.level)} · Lv.{user.level}</span>
                  <span>{formatNumber(lvl.inLevel)}/{lvl.next}</span>
                </div>
                <Progress value={lvl.progress} />
                <div className="flex items-center justify-between pt-1">
                  <span className="text-ink-400">合計</span>
                  <span className="font-display text-lg text-rose-700">
                    {formatNumber(user.points)}
                    <span className="ml-1 text-[0.62rem] tracking-[0.24em] uppercase text-ink-400">pt</span>
                  </span>
                </div>
              </div>
            </div>

            <nav className="flex flex-col gap-1">
              {nav.map((item) => {
                const active = pathname === item.href || (item.href !== "/app" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all",
                      active
                        ? "bg-white text-rose-700 shadow-[0_4px_14px_-6px_rgba(181,103,127,0.25)] ring-1 ring-rose-200/40"
                        : "text-ink-600 hover:bg-white/60"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4 transition-colors", active ? "text-rose-600" : "text-ink-400")} strokeWidth={1.4} />
                    <span>{item.label}</span>
                    {active && (
                      <motion.span
                        layoutId="active-nav"
                        className="absolute inset-y-2 right-2 w-1 rounded-full bg-rose-500"
                      />
                    )}
                  </Link>
                );
              })}
              {showAdmin && (
                <Link
                  href="/app/admin"
                  className={cn(
                    "mt-4 group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition-all",
                    pathname.startsWith("/app/admin")
                      ? "bg-rose-600 text-white shadow-[0_8px_24px_-8px_rgba(181,103,127,0.5)]"
                      : "bg-cream-100/60 text-ink-600 hover:bg-cream-100"
                  )}
                >
                  <Shield className="h-4 w-4" strokeWidth={1.4} />
                  <span>管理者ページ</span>
                </Link>
              )}
            </nav>

            <RoleSwitcher />

            <Link
              href="/"
              className="flex items-center gap-2 px-4 py-2 text-xs text-ink-400 transition-colors hover:text-rose-700"
            >
              <Settings className="h-3 w-3" /> サイトトップへ戻る
            </Link>
          </div>
        </aside>

        {/* Mobile top */}
        <div className="lg:hidden fixed top-0 inset-x-0 z-40">
          <div className="mx-4 mt-3 glass rounded-full px-4 py-2 flex items-center justify-between">
            <Logo compact />
            <Badge tone="rose">{user.role === "vip" ? "VIP" : user.role === "admin" ? "Admin" : "Member"}</Badge>
          </div>
        </div>

        {/* Main */}
        <main className="flex-1 pt-14 lg:pt-0">
          <div className="mb-6 hidden items-center justify-between lg:flex">
            <div>
              <p className="font-display text-xs tracking-[0.32em] uppercase text-rose-600/70">
                Welcome
              </p>
              <h1 className="mt-1 font-serif text-2xl font-light text-ink-800">
                {greet(user.name)}
              </h1>
            </div>
            <Badge tone="gold">
              <Sparkles className="h-3 w-3" />
              {user.streak}日連続
            </Badge>
          </div>
          {children}
          <MobileNav pathname={pathname} />
        </main>
      </div>
    </div>
  );
}

function MobileNav({ pathname }: { pathname: string }) {
  return (
    <nav className="lg:hidden fixed bottom-3 inset-x-3 z-40 glass rounded-full px-3 py-2 flex justify-between">
      {nav.slice(0, 5).map((item) => {
        const active = pathname === item.href || (item.href !== "/app" && pathname.startsWith(item.href));
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-full",
              active ? "bg-rose-600 text-white" : "text-ink-400"
            )}
          >
            <item.icon className="h-5 w-5" strokeWidth={1.4} />
          </Link>
        );
      })}
    </nav>
  );
}
