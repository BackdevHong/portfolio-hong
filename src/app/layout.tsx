import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans_KR } from "next/font/google";
import { absoluteSiteUrl, siteUrl } from "@/lib/site-url";
import "./globals.css";

const plexSansKr = IBM_Plex_Sans_KR({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-code",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "홍인성 | Full-stack Web Developer",
    template: "%s | 홍인성 포트폴리오",
  },
  description:
    "React·Next.js로 화면을 만들고 FastAPI·Node.js로 API를 붙입니다. 제조 데이터 실무와 인증·결제·RAG·Cloud 운영 경험을 담은 홍인성의 포트폴리오입니다.",
  openGraph: {
    title: "홍인성 | Full-stack Web Developer",
    description: "화면부터 API, 데이터, 배포까지 직접 부딪히며 해결한 과정을 담았습니다.",
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
    description: "화면부터 API, 데이터, 배포까지 직접 부딪히며 해결한 과정을 담았습니다.",
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
      className={`${plexSansKr.variable} ${plexMono.variable}`}
      suppressHydrationWarning
      data-scroll-behavior="smooth"
    >
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
