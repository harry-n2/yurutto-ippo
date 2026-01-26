import type { Metadata } from "next";
import { Shippori_Mincho, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const shippori = Shippori_Mincho({
  weight: ["400", "500", "600", "800"],
  subsets: ["latin"],
  variable: "--font-shippori",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ゆるっと一歩相談室 | Ideal × Reality",
  description: "心に響く唯一無二のライフシフト体験を。バイオリニスト・華道家 奈々が贈る伴走プログラム。夫婦関係、離婚、再婚などのお悩みにも。",
  keywords: ["夫婦関係", "離婚", "再婚", "自己実現", "女性の自立"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${shippori.variable} ${cormorant.variable} antialiased bg-[#F9F9F5] text-[#2D2D2D]`}
      >
        {children}
      </body>
    </html>
  );
}
