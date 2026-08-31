import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  metadataBase: new URL("https://hong-inseong-portfolio.ghddls7979.chatgpt.site"),
  title: {
    default: "홍인성 | Web Developer",
    template: "%s | 홍인성 포트폴리오",
  },
  description:
    "React 웹 서비스와 Python·MySQL 데이터 프로젝트의 구현 과정과 트러블슈팅을 정리한 홍인성의 포트폴리오입니다.",
  openGraph: {
    title: "홍인성 | Web Developer",
    description: "웹과 데이터 프로젝트를 만들고, 해결 과정을 기록합니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/og.png",
        width: 1730,
        height: 909,
        alt: "홍인성 웹 개발자 포트폴리오",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "홍인성 | Web Developer",
    description: "웹과 데이터 프로젝트를 만들고, 해결 과정을 기록합니다.",
    images: ["/og.png"],
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
