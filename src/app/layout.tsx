import type { Metadata } from "next";
import { Archivo_Black, Noto_Sans_KR } from "next/font/google";
import { absoluteSiteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";

const notoSansKr = Noto_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const archivoBlack = Archivo_Black({
  variable: "--font-display",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "홍인성 | Full-stack Web Developer",
    template: "%s | 홍인성 포트폴리오",
  },
  description:
    "React·Next.js 프론트엔드부터 FastAPI·Node.js 백엔드, 데이터·Cloud 운영까지 연결한 홍인성의 풀스택 개발자 포트폴리오입니다.",
  openGraph: {
    title: "홍인성 | Full-stack Web Developer",
    description: "사용자 흐름부터 API·데이터·운영까지 연결한 문제 해결 과정을 기록합니다.",
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
    title: "홍인성 | Full-stack Web Developer",
    description: "사용자 흐름부터 API·데이터·운영까지 연결한 문제 해결 과정을 기록합니다.",
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
      className={`${notoSansKr.variable} ${archivoBlack.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
