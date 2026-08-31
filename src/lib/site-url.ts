const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ??
  "https://hong-inseong-portfolio.ghddls7979.chatgpt.site";

export function withBasePath(path: string) {
  if (!path.startsWith("/")) return path;

  return `${basePath}${path}`;
}

export function absoluteSiteUrl(path: string) {
  if (!path.startsWith("/")) return path;

  return `${siteUrl}${path}`;
}
