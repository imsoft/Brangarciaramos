import { describe, expect, it } from "vitest";
import { content, profile } from "@/content";
import { GET } from "./route";

describe("llms.txt", () => {
  it("serves a Markdown summary generated from content.ts", async () => {
    const res = GET();
    const text = await res.text();
    expect(res.headers.get("Content-Type")).toContain("text/markdown");
    expect(text.startsWith(`# ${profile.name}`)).toBe(true);
    expect(text).toContain(content.en.hero.summary);
    expect(text).toContain(profile.email);
    for (const product of content.en.products) {
      expect(text).toContain(product.url);
    }
    for (const job of content.en.experience) {
      expect(text).toContain(job.company);
    }
  });
});
