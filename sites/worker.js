function assetRequest(request, pathname) {
  const url = new URL(request.url);
  url.pathname = pathname;

  return new Request(url, {
    method: request.method,
    headers: request.headers,
  });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const directResponse = await env.ASSETS.fetch(request);

    if (directResponse.status !== 404) {
      return directResponse;
    }

    const hasExtension = /\.[a-zA-Z0-9]+$/.test(url.pathname);
    if (!hasExtension) {
      const directoryPath = url.pathname.endsWith("/")
        ? `${url.pathname}index.html`
        : `${url.pathname}/index.html`;
      const directoryResponse = await env.ASSETS.fetch(
        assetRequest(request, directoryPath),
      );

      if (directoryResponse.status !== 404) {
        return directoryResponse;
      }
    }

    return env.ASSETS.fetch(assetRequest(request, "/404.html"));
  },
};
