// import type { Context } from "@netlify/edge-functions";

export default async function handler(
  request: Request): Promise<Response> {
  const url = new URL(request.url);
  const path = url.pathname.replace(/^\/insights\/api/, "/api");
  const targetUrl = `https://cloud.umami.is${path}${url.search}`;

  const realIP = request.headers.get("x-nf-client-connection-ip") ?? "";

  // Clone headers and inject the real client IP
  const headers = new Headers(request.headers);
  headers.set("X-Forwarded-For", realIP);
  headers.set("X-Real-IP", realIP);

  const response = await fetch(targetUrl, {
    method: request.method,
    headers,
    body: ["GET", "HEAD"].includes(request.method) ? undefined : request.body,
  });

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: response.headers,
  });
}
