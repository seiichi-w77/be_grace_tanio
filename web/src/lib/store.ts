"use client";

import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import type {
  ChatThread,
  ExerciseRecord,
  Goal,
  Role,
  User,
} from "./mock/types";
import { SEED_RECORDS, SEED_GOALS } from "./mock/records";
import { SEED_CHATS } from "./mock/chat";

const defaultUser: User = {
  id: "u-grace-001",
  name: "美月",
  email: "mizuki@be-grace.studio",
  role: "vip",
  avatarSeed: "mizuki",
  joinedAt: "2026-03-12",
  points: 2480,
  level: 6,
  streak: 14,
  badges: ["7日連続", "VIP", "産後ケア達成", "朝活マスター"],
};

interface AppState {
  user: User;
  records: ExerciseRecord[];
  goals: Goal[];
  chats: ChatThread[];
  setRole: (role: Role) => void;
  addRecord: (rec: Omit<ExerciseRecord, "id" | "pointsEarned">) => void;
  updateGoalProgress: (goalId: string, current: number) => void;
  addGoal: (goal: Omit<Goal, "id" | "current" | "done">) => void;
  sendMessage: (threadId: string, text: string) => void;
  resetMock: () => void;
}

const initial: Pick<AppState, "user" | "records" | "goals" | "chats"> = {
  user: defaultUser,
  records: SEED_RECORDS,
  goals: SEED_GOALS,
  chats: SEED_CHATS,
};

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initial,
      setRole: (role) =>
        set((s) => ({ user: { ...s.user, role } })),
      addRecord: (rec) =>
        set((s) => {
          const pts = rec.minutes * 10;
          const id = `r-${Date.now()}`;
          return {
            records: [
              { ...rec, id, pointsEarned: pts },
              ...s.records,
            ],
            user: {
              ...s.user,
              points: s.user.points + pts,
              streak: s.user.streak + 1,
            },
          };
        }),
      updateGoalProgress: (goalId, current) =>
        set((s) => ({
          goals: s.goals.map((g) =>
            g.id === goalId
              ? { ...g, current, done: current >= g.target }
              : g
          ),
        })),
      addGoal: (goal) =>
        set((s) => ({
          goals: [
            ...s.goals,
            { ...goal, id: `g-${Date.now()}`, current: 0, done: false },
          ],
        })),
      sendMessage: (threadId, text) =>
        set((s) => {
          const now = new Date().toISOString();
          const userMsg = {
            id: `m-${Date.now()}`,
            from: "user" as const,
            text,
            at: now,
          };
          const aiReply = {
            id: `m-${Date.now() + 1}`,
            from: "ai" as const,
            text:
              "受け取りました。佐々木先生に共有しますね。AIの暫定アドバイス：胸郭の硬さがあるかもしれません。胸を開く呼吸を今夜お試しください🌸",
            at: new Date(Date.now() + 1500).toISOString(),
          };
          return {
            chats: s.chats.map((c) =>
              c.id === threadId
                ? {
                    ...c,
                    messages: [...c.messages, userMsg, aiReply],
                    lastMessageAt: now,
                  }
                : c
            ),
          };
        }),
      resetMock: () => set({ ...initial }),
    }),
    {
      name: "be-grace-state",
      storage: createJSONStorage(() => localStorage),
      version: 1,
    }
  )
);

export function levelLabel(level: number) {
  const titles = [
    "始まりの蕾",
    "目覚めの朝",
    "光の月",
    "風の女神",
    "花咲く春",
    "輝く湖",
    "満ちる満月",
    "深紅の薔薇",
    "天の星",
    "ひらく宇宙",
  ];
  return titles[Math.min(level - 1, titles.length - 1)] ?? "始まりの蕾";
}

export function pointsToNextLevel(points: number, level: number) {
  const threshold = level * 500;
  const pointsInLevel = points - (level - 1) * 500;
  return {
    inLevel: pointsInLevel,
    next: threshold,
    progress: Math.min(100, (pointsInLevel / threshold) * 100),
  };
}
