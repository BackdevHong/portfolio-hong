import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { absoluteSiteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "홍인성 | Backend-focused Web Developer",
    template: "%s | 홍인성 포트폴리오",
  },
  description:
    "FastAPI·Node.js 기반 웹 서비스와 Python 데이터 자동화, 의료 RAG 프로젝트의 문제 해결 과정을 정리한 홍인성의 포트폴리오입니다.",
  openGraph: {
    title: "홍인성 | Backend-focused Web Developer",
    description: "운영 환경의 문제를 코드와 테스트로 해결한 과정을 기록합니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: absoluteSiteUrl("/og.png"),
        width: 1730,
        height: 909,
        alt: "홍인성 웹 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "홍인성 | Backend-focused Web Developer",
    description: "운영 환경의 문제를 코드와 테스트로 해결한 과정을 기록합니다.",
    images: [absoluteSiteUrl("/og.png")],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
