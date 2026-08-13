import { describe, expect, it } from "vitest";
import { featured, matchesSearch, published, validExternalUrl } from "@/utils/content";

const records = [
  { id: "draft", published: false, featured: true, order: 1 },
  { id: "second", published: true, featured: false, order: 2 },
  { id: "first", published: true, featured: true, order: 1 }
];
describe("file-based content controls", () => {
  it("hides drafts and applies display order", () => expect(published(records).map(x => x.id)).toEqual(["first", "second"]));
  it("returns only published featured records", () => expect(featured(records).map(x => x.id)).toEqual(["first"]));
  it("searches content without case sensitivity", () => expect(matchesSearch(["Web Security", "Research"], "security")).toBe(true));
  it("rejects dangerous external URL schemes", () => { expect(validExternalUrl("https://github.com/rslotif")).toBe(true); expect(validExternalUrl("javascript:alert(1)")).toBe(false); });
});
