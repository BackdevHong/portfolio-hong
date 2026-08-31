import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const repoName = "portfolio-hong";
const basePath = isGithubPages ? `/${repoName}` : "";
const siteUrl = isGithubPages
  ? `https://backdevhong.github.io/${repoName}`
  : "https://hong-inseong-portfolio.ghddls7979.chatgpt.site";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: basePath || undefined,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_SITE_URL: siteUrl,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
