export function GET() {
  const base = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";
  return new Response(`Contact: ${base}/responsible-disclosure\nPolicy: ${base}/responsible-disclosure\nPreferred-Languages: en, bn\nCanonical: ${base}/.well-known/security.txt\n`, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
