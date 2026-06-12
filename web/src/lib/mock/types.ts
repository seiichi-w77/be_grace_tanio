export type Role = "admin" | "vip" | "general";

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatarSeed: string;
  joinedAt: string;
  points: number;
  level: number;
  streak: number;
  badges: string[];
}

export interface ExerciseRecord {
  id: string;
  date: string;
  category: "ストレッチ" | "骨盤調整" | "コアトレ" | "呼吸法" | "リフレッシュ";
  title: string;
  minutes: number;
  intensity: 1 | 2 | 3 | 4 | 5;
  mood: "✨" | "🌸" | "🌿" | "🌙" | "🪷";
  note?: string;
  pointsEarned: number;
}

export interface Goal {
  id: string;
  title: string;
  description: string;
  category: "姿勢" | "睡眠" | "体力" | "美しさ" | "メンタル";
  target: number;
  current: number;
  unit: string;
  deadline: string;
  reward: string;
  done: boolean;
}

export interface VideoLesson {
  id: string;
  title: string;
  subtitle: string;
  duration: string;
  category: string;
  thumbnail: string;
  isVip?: boolean;
  views: number;
  level: "初級" | "中級" | "上級";
  description: string;
  series?: string;
}

export interface ChatThread {
  id: string;
  topic: string;
  lastMessageAt: string;
  unread: number;
  messages: ChatMessage[];
}

export interface ChatMessage {
  id: string;
  from: "user" | "instructor" | "ai";
  text: string;
  at: string;
}

export interface DiagnosisTheme {
  id: string;
  slug: string;
  title: string;
  catchphrase: string;
  description: string;
  badge: string;
  duration: string;
  questionsCount: number;
  hero: string;
  accent: "rose" | "gold" | "sage" | "sky";
  questions: DiagnosisQuestion[];
  results: DiagnosisResult[];
}

export interface DiagnosisQuestion {
  id: string;
  text: string;
  caption?: string;
  options: DiagnosisOption[];
}

export interface DiagnosisOption {
  label: string;
  description?: string;
  type: string;
}

export interface DiagnosisResult {
  type: string;
  title: string;
  poetry: string;
  description: string;
  strengths: string[];
  cautions: string[];
  recommendations: string[];
  futureSelf: string;
  accent: "rose" | "gold" | "sage" | "sky";
}
