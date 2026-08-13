import type { Publishable } from "@/types/content";

export function published<T extends Publishable>(items: T[]) {
  return items.filter((item) => item.published).sort((a, b) => a.order - b.order);
}
export function featured<T extends Publishable>(items: T[]) {
  return published(items).filter((item) => item.featured);
}
export function matchesSearch(values: Array<string | undefined>, query: string) {
  const needle = query.trim().toLowerCase();
  return !needle || values.filter(Boolean).join(" ").toLowerCase().includes(needle);
}
export function validExternalUrl(value: string) {
  try { const url = new URL(value); return ["https:", "mailto:", "tel:"].includes(url.protocol); } catch { return false; }
}
export function readingTime(markdown: string) {
  return Math.max(1, Math.ceil(markdown.trim().split(/\s+/).length / 220));
}
