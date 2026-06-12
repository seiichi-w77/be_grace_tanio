import type { DiagnosisTheme } from "./types";

const skeleton: DiagnosisTheme = {
  id: "skeleton",
  slug: "skeleton",
  title: "骨格5タイプ診断",
  catchphrase: "あなたの骨組みが、いちばん美しく見える線を見つける。",
  description:
    "ストレートライン／ナチュラルカーブ／フェミニンウェーブなど、5つの骨格タイプから、あなたが纏うとほどけるシルエットを読み解きます。",
  badge: "FRAMEWORK 01",
  duration: "約 3 分",
  questionsCount: 7,
  accent: "rose",
  hero: "ジョナサン・アイブが整え、スティーブ・ジョブズが頷いた、女性のための美しい骨格言語。",
  questions: [
    {
      id: "q1",
      text: "鎖骨に手を添えると、どんな感触ですか？",
      caption: "深呼吸して、力を抜いた状態でどうぞ。",
      options: [
        { label: "細くまっすぐな線が触れる", type: "straight" },
        { label: "ふっくらと柔らかい", type: "wave" },
        { label: "しっかりとした骨の存在", type: "natural" },
        { label: "華奢で繊細", type: "petal" },
        { label: "丸みのあるカーブ", type: "moon" },
      ],
    },
    {
      id: "q2",
      text: "手首は、どんな形に近いですか？",
      options: [
        { label: "縦に楕円形でフラット", type: "straight" },
        { label: "丸みがある", type: "wave" },
        { label: "骨が出っ張る", type: "natural" },
        { label: "細くて折れそう", type: "petal" },
        { label: "ふっくら丸い", type: "moon" },
      ],
    },
    {
      id: "q3",
      text: "膝のお皿に注目してください。",
      options: [
        { label: "四角く小さい", type: "straight" },
        { label: "丸く出ている", type: "wave" },
        { label: "大きく目立つ", type: "natural" },
        { label: "繊細で小さい", type: "petal" },
        { label: "ぷっくり丸い", type: "moon" },
      ],
    },
    {
      id: "q4",
      text: "今日着てきた服で、いちばんラクなのは？",
      options: [
        { label: "ジャストサイズのテーラード", type: "straight" },
        { label: "ふんわりシフォン素材", type: "wave" },
        { label: "ざっくり大きめリネン", type: "natural" },
        { label: "繊細なシルクや透け感", type: "petal" },
        { label: "やわらかいニット", type: "moon" },
      ],
    },
    {
      id: "q5",
      text: "鏡を見て、いちばん「ここ綺麗」と感じるのは？",
      options: [
        { label: "デコルテと首の長さ", type: "straight" },
        { label: "丸みのあるバスト", type: "wave" },
        { label: "肩のフレーム", type: "natural" },
        { label: "華奢な手首と指", type: "petal" },
        { label: "やわらかな腰回り", type: "moon" },
      ],
    },
    {
      id: "q6",
      text: "体型について、長年気にしているのは？",
      options: [
        { label: "上半身が華奢に見えにくい", type: "straight" },
        { label: "下半身に重心が乗る", type: "wave" },
        { label: "肩や鎖骨ががっしりして見える", type: "natural" },
        { label: "立体感が出にくい", type: "petal" },
        { label: "全身に丸みが出やすい", type: "moon" },
      ],
    },
    {
      id: "q7",
      text: "理想の「あなた」は、どんな印象？",
      options: [
        { label: "凛とした品格", type: "straight" },
        { label: "やわらかな女性らしさ", type: "wave" },
        { label: "ナチュラルで洗練", type: "natural" },
        { label: "繊細でアーティスティック", type: "petal" },
        { label: "穏やかで包容力ある美しさ", type: "moon" },
      ],
    },
  ],
  results: [
    {
      type: "straight",
      title: "ストレート ライン",
      poetry: "一本の真っ直ぐな光が、まとう人を品格に変える。",
      description:
        "上半身に厚みがあり、骨格がまっすぐで品格のあるシルエット。テーラード、Iライン、上質素材があなたの言語です。",
      strengths: ["立ち姿のすっきり感", "ハリのある肌質感", "シンプルが似合う品の良さ"],
      cautions: ["重ね着で着膨れしやすい", "下半身運動を後回しにしがち"],
      recommendations: [
        "上半身の前傾を解く深呼吸ストレッチ",
        "肩甲骨を寄せる胸郭リリース",
        "ジャストフィットの装いを楽しむ",
      ],
      futureSelf:
        "凛とした立ち姿で、ふと振り返られる。背骨に火が灯ったように軽やかに歩く、3ヶ月後のあなた。",
      accent: "rose",
    },
    {
      type: "wave",
      title: "フェミニン ウェーブ",
      poetry: "やわらかい曲線が、誰かの心をほぐしていく。",
      description:
        "下半身に重心があり、曲線美が魅力。やわらかいドレープ、ふんわりした素材、ウエストマークがあなたを輝かせます。",
      strengths: ["ふんわりした女性らしさ", "肌のやわらかさ", "丸みの可愛らしさ"],
      cautions: ["下半身がむくみやすい", "猫背になりやすい"],
      recommendations: [
        "骨盤底筋を整える呼吸ワーク",
        "ふくらはぎリンパ流しストレッチ",
        "ウエストマークで重心を上に",
      ],
      futureSelf:
        "歩くたびに揺れる髪が光を受けて、あなたが通った後に花の香が残るような、3ヶ月後のあなた。",
      accent: "rose",
    },
    {
      type: "natural",
      title: "ナチュラル カーブ",
      poetry: "そのままで美しい、洗練された自然の調和。",
      description:
        "骨や関節がしっかりとした、フレームの美しい骨格。リネン、ざっくりニット、Aラインが似合います。",
      strengths: ["スタイリングの幅広さ", "ナチュラルな存在感", "肩のフレームの綺麗さ"],
      cautions: ["関節周りが疲れやすい", "肩こりが出やすい"],
      recommendations: [
        "肩甲骨を柔らかくする肩回し",
        "ヒップを使うウォーキングフォーム",
        "華奢見せには首と手首を出す",
      ],
      futureSelf:
        "自然体なのに洗練されている。「何を着てもこの人らしい」と言われる、3ヶ月後のあなた。",
      accent: "sage",
    },
    {
      type: "petal",
      title: "ペタル ライン",
      poetry: "繊細な花びらのような、儚さと強さを同時に纏う。",
      description:
        "細身で繊細、立体感が出にくい骨格。シルク、透け素材、レイヤードが立体を生み、あなたを輝かせます。",
      strengths: ["透明感のある雰囲気", "華奢な手元・足元", "アーティスティックな魅力"],
      cautions: ["疲れが顔に出やすい", "体力が落ちやすい"],
      recommendations: [
        "深い呼吸で胸郭を広げるワーク",
        "ゆるやかな筋トレで土台作り",
        "睡眠の質を上げるリラクゼーション",
      ],
      futureSelf:
        "華奢なのに芯がある。「内側から光ってる」と言われる、3ヶ月後のあなた。",
      accent: "sky",
    },
    {
      type: "moon",
      title: "ムーン ハーモニー",
      poetry: "満ちる月のように、包み込むやわらかさを持つ。",
      description:
        "全身にやわらかな丸みのある骨格。ふんわりニット、ジャージー素材、Aラインがあなたの包容力を引き立てます。",
      strengths: ["包容力のある優しさ", "やわらかい肌質", "穏やかな雰囲気"],
      cautions: ["全身に丸みが出やすい", "むくみやすい体質"],
      recommendations: [
        "全身を緩める呼吸ストレッチ",
        "リンパを流す優しいヨガ",
        "縦ラインを意識した装い",
      ],
      futureSelf:
        "満月のように静かに人を照らす。「そばにいると安心する」と言われる、3ヶ月後のあなた。",
      accent: "gold",
    },
  ],
};

const selfCare: DiagnosisTheme = {
  id: "self-care",
  slug: "self-care",
  title: "セルフケア5タイプ診断",
  catchphrase: "あなたが、いちばん自分を労われる方法を知る。",
  description:
    "あなたの心身の癖から、最も無理なく続けられるセルフケアタイプを見つけます。Active／Calm／Sensual／Lucid／Harmony の5つから。",
  badge: "FRAMEWORK 02",
  duration: "約 2 分",
  questionsCount: 6,
  accent: "gold",
  hero: "頑張る毎日の中で、あなたが「ふっ」と緩む瞬間を見つける、優しい診断です。",
  questions: [
    {
      id: "q1",
      text: "疲れた日、本当はどう過ごしたい？",
      options: [
        { label: "汗を流してリセット", type: "active" },
        { label: "湯船にゆっくり浸かる", type: "calm" },
        { label: "好きな香りに包まれたい", type: "sensual" },
        { label: "ぼーっと景色を眺める", type: "lucid" },
        { label: "好きな人と話す", type: "harmony" },
      ],
    },
    {
      id: "q2",
      text: "朝、起きた時の理想は？",
      options: [
        { label: "すっきり目覚めて即活動", type: "active" },
        { label: "ゆっくり身体を伸ばす", type: "calm" },
        { label: "肌触りの良いシーツを感じる", type: "sensual" },
        { label: "ノートに今日の気分を書く", type: "lucid" },
        { label: "家族と「おはよう」を交わす", type: "harmony" },
      ],
    },
    {
      id: "q3",
      text: "心がざわざわした時の対処は？",
      options: [
        { label: "とにかく身体を動かす", type: "active" },
        { label: "目を閉じて深呼吸", type: "calm" },
        { label: "アロマやハンドクリーム", type: "sensual" },
        { label: "気持ちを書き出す", type: "lucid" },
        { label: "誰かに話を聞いてもらう", type: "harmony" },
      ],
    },
    {
      id: "q4",
      text: "理想のセルフケア時間は？",
      options: [
        { label: "30分のワークアウト", type: "active" },
        { label: "1時間の半身浴", type: "calm" },
        { label: "5分の丁寧なスキンケア", type: "sensual" },
        { label: "ノート時間 15 分", type: "lucid" },
        { label: "家族時間 1 時間", type: "harmony" },
      ],
    },
    {
      id: "q5",
      text: "あなたが続いた習慣は？",
      options: [
        { label: "運動・ヨガ", type: "active" },
        { label: "瞑想・呼吸法", type: "calm" },
        { label: "スキンケア・アロマ", type: "sensual" },
        { label: "日記・読書", type: "lucid" },
        { label: "誰かとの約束", type: "harmony" },
      ],
    },
    {
      id: "q6",
      text: "3ヶ月後、どう変わっていたい？",
      options: [
        { label: "軽やかで動ける自分", type: "active" },
        { label: "静かで満たされている自分", type: "calm" },
        { label: "肌も心も艶やかな自分", type: "sensual" },
        { label: "自分の声が聞こえる自分", type: "lucid" },
        { label: "家族にやさしくできる自分", type: "harmony" },
      ],
    },
  ],
  results: [
    {
      type: "active",
      title: "Active Bloom",
      poetry: "動くたびに、心が軽くなっていく。",
      description:
        "身体を動かすことで、心も整うタイプ。短時間でも汗を流す習慣が、あなたを最速で輝かせます。",
      strengths: ["回復が早い", "切り替え上手", "決断力がある"],
      cautions: ["頑張りすぎて燃え尽きやすい", "休む技術を学ぶ余地あり"],
      recommendations: [
        "朝の5分ストレッチ＋3分ジョグ",
        "週1で運動量を計画的に減らす日",
        "リカバリーストレッチ動画ライブラリ",
      ],
      futureSelf: "鏡の中の自分に毎朝惚れ直す、軽やかで凛とした、3ヶ月後のあなた。",
      accent: "rose",
    },
    {
      type: "calm",
      title: "Calm Harbor",
      poetry: "静けさが、あなたの一番の薬になる。",
      description:
        "静かな時間を持つことで、深く回復するタイプ。呼吸・瞑想・温浴があなたを深い場所から整えます。",
      strengths: ["落ち着いた佇まい", "深い洞察力", "周りを安心させる力"],
      cautions: ["内側に溜めすぎてしまう", "誰にも頼れない時がある"],
      recommendations: [
        "夜の3分呼吸瞑想",
        "週2の長めの入浴時間",
        "感情を言葉にするライティング",
      ],
      futureSelf: "湖面のように静かで、芯のある、3ヶ月後のあなた。",
      accent: "sky",
    },
    {
      type: "sensual",
      title: "Sensual Petal",
      poetry: "感性に触れることが、あなたを満たす。",
      description:
        "肌触り、香り、味——五感に触れることで深く満たされるタイプ。日常を芸術にする感性があなたの武器です。",
      strengths: ["感受性の豊かさ", "美意識の高さ", "雰囲気を作る力"],
      cautions: ["環境の影響を受けやすい", "頑張る場面で疲弊しがち"],
      recommendations: [
        "朝のアロマと一杯のお茶",
        "肌触りのいいインナーへの投資",
        "日常を彩る小さな儀式",
      ],
      futureSelf: "存在そのものが香りのようになる、艶やかな、3ヶ月後のあなた。",
      accent: "rose",
    },
    {
      type: "lucid",
      title: "Lucid Mirror",
      poetry: "自分の声を聞くことで、世界が澄んでいく。",
      description:
        "考えること、書くこと、整理することで深く整うタイプ。内省の時間があなたの羅針盤になります。",
      strengths: ["思考の明晰さ", "自己理解の深さ", "言語化の力"],
      cautions: ["考えすぎて動けなくなる", "頭ばかり使って疲れる"],
      recommendations: [
        "朝のジャーナル 5 分",
        "週1のひとり時間",
        "身体を使う瞑想ヨガ",
      ],
      futureSelf: "自分の声に従って軽やかに選択できる、澄み切った、3ヶ月後のあなた。",
      accent: "sky",
    },
    {
      type: "harmony",
      title: "Harmony Blossom",
      poetry: "つながりが、あなたを最も豊かにする。",
      description:
        "家族や仲間との関係性で、深く満たされるタイプ。誰かのために動く時、あなたは最も美しく輝きます。",
      strengths: ["共感力の高さ", "場を整える力", "包容力"],
      cautions: ["自分を後回しにしがち", "ひとり時間が足りない"],
      recommendations: [
        "週1のひとりカフェ時間",
        "家族との運動タイム",
        "頼ることの練習",
      ],
      futureSelf: "周りも自分も大切にできる、満たされた、3ヶ月後のあなた。",
      accent: "gold",
    },
  ],
};

const posture: DiagnosisTheme = {
  id: "posture",
  slug: "posture",
  title: "AI 姿勢診断",
  catchphrase: "あなたの写真から、今のからだのバランスを優しく読み解く。",
  description:
    "正面・側面・後ろ姿の3枚の写真をアップロードするだけで、整骨院世界最高峰の視点で姿勢のクセを言語化します（モック体験）。",
  badge: "FRAMEWORK 03 · AI Vision",
  duration: "約 5 分",
  questionsCount: 3,
  accent: "sky",
  hero: "AIが、あなたの代わりに自分を客観的に見つめてくれる。",
  questions: [],
  results: [],
};

export const DIAGNOSES: DiagnosisTheme[] = [skeleton, selfCare, posture];

export function getDiagnosisBySlug(slug: string): DiagnosisTheme | undefined {
  return DIAGNOSES.find((d) => d.slug === slug);
}

export function tallyResult(theme: DiagnosisTheme, answers: Record<string, string>) {
  const counts: Record<string, number> = {};
  Object.values(answers).forEach((t) => {
    counts[t] = (counts[t] ?? 0) + 1;
  });
  const top = Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0];
  return theme.results.find((r) => r.type === top) ?? theme.results[0];
}
