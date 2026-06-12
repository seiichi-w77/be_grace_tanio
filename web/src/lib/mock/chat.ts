import type { ChatThread } from "./types";

export const SEED_CHATS: ChatThread[] = [
  {
    id: "c-1",
    topic: "産後の骨盤について個別相談",
    lastMessageAt: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
    unread: 1,
    messages: [
      {
        id: "m-1",
        from: "user",
        at: new Date(Date.now() - 3 * 86400000).toISOString(),
        text: "産後8ヶ月です。骨盤の左右差が気になっていて、横から見た時に腰が反っているのも気になります。",
      },
      {
        id: "m-2",
        from: "instructor",
        at: new Date(Date.now() - 3 * 86400000 + 2 * 3600000).toISOString(),
        text: "ご相談ありがとうございます。育児中で大変な中、自分のからだに目を向けていただけて嬉しいです。よろしければ正面・横・後ろの写真を送ってください。AI診断と私からの所見をお返しします🌸",
      },
      {
        id: "m-3",
        from: "user",
        at: new Date(Date.now() - 1 * 86400000).toISOString(),
        text: "写真を送らせていただきました。ご確認お願いします。",
      },
      {
        id: "m-4",
        from: "ai",
        at: new Date(Date.now() - 1 * 86400000 + 1 * 3600000).toISOString(),
        text: "AI診断結果：骨盤が前傾13°、左寄りに3mm。腰椎の反りがやや強めです。胸郭が硬くなっている影響が示唆されます。",
      },
      {
        id: "m-5",
        from: "instructor",
        at: new Date(Date.now() - 30 * 60 * 1000).toISOString(),
        text: "AIの所見、私もほぼ同感です。まずは胸郭を緩めることから始めましょう。今夜の VIP 動画「整骨院世界最高峰メソッド」のチャプター2をやってみてください✨",
      },
    ],
  },
  {
    id: "c-2",
    topic: "夜中授乳で寝不足、続けられない",
    lastMessageAt: new Date(Date.now() - 6 * 3600000).toISOString(),
    unread: 0,
    messages: [
      {
        id: "m-1",
        from: "user",
        at: new Date(Date.now() - 1 * 86400000).toISOString(),
        text: "夜中の授乳で寝不足が続いていて、ケアを続けたい気持ちはあるのに身体が動きません。",
      },
      {
        id: "m-2",
        from: "instructor",
        at: new Date(Date.now() - 6 * 3600000).toISOString(),
        text: "あなたの今が一番頑張っている時期ですね。3分の呼吸法だけを1週間、それも完璧でなくていいです。私と一緒にやりましょう。明日、3分だけ枕元で呼吸する動画を新しく上げますね🌙",
      },
    ],
  },
  {
    id: "c-3",
    topic: "本講座の受講検討中",
    lastMessageAt: new Date(Date.now() - 2 * 86400000).toISOString(),
    unread: 0,
    messages: [
      {
        id: "m-1",
        from: "user",
        at: new Date(Date.now() - 3 * 86400000).toISOString(),
        text: "「Be Grace 本講座」を検討中です。今の私に必要かどうか、相談に乗っていただけますか？",
      },
      {
        id: "m-2",
        from: "instructor",
        at: new Date(Date.now() - 2 * 86400000).toISOString(),
        text: "もちろんです。1回 15,000 円の個別相談で、あなたの今の状況をしっかり聞かせてください。本講座を取らなくても、今日からできるアクションをお渡しします。",
      },
    ],
  },
];
