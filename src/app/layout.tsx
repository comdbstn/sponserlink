import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "스폰서링크 - 행사와 스폰서를 연결해주는 매칭 플랫폼",
  description: "스폰서링크는 이벤트 주최자와 스폰서 기업을 연결하는 혁신적인 매칭 플랫폼입니다. 대학교 축제부터 대형 페스티벌, 마라톤 행사까지 - 모든 규모의 이벤트에 적합한 스폰서를 찾고, 기업에게는 브랜드 가치를 높일 최적의 이벤트를 연결해드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
