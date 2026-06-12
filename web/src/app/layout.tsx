import type { Metadata, Viewport } from "next";
import { Noto_Serif_JP, Noto_Sans_JP, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const notoSerifJp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600"],
  display: "swap",
  variable: "--font-noto-serif-jp",
});
const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-noto-sans-jp",
});
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-cormorant",
});

export const metadata: Metadata = {
  title: {
    default: "Be Grace — 理想の未来を受け取る、女性のからだ診断",
    template: "%s | Be Grace",
  },
  description:
    "産後・育児中の女性のための、運動セルフケア会員サイト & からだ診断。骨格・姿勢・セルフケアタイプを優しく見立て、なりたい未来へ寄り添います。",
  keywords: ["女性向け", "姿勢診断", "骨格診断", "セルフケア", "産後ケア", "オンライン会員", "Be Grace"],
  openGraph: {
    title: "Be Grace — 理想の未来を受け取る、女性のからだ診断",
    description: "産後・育児中の女性のための、運動セルフケア会員サイト & からだ診断。",
    type: "website",
    locale: "ja_JP",
  },
};

export const viewport: Viewport = {
  themeColor: "#fffbf7",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="ja"
      className={`${notoSerifJp.variable} ${notoSansJp.variable} ${cormorant.variable}`}
    >
      <body className="antialiased">{children}</body>
    </html>
  );
}
