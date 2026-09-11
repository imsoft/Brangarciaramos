import { cleanup, render, screen, within } from "@testing-library/react";
import { afterEach, describe, expect, it } from "vitest";
import { HomePage } from "@/components/home-page";
import { content, profile, sectionIds } from "@/content";
import { locales } from "@/i18n/config";

afterEach(cleanup);

const section = (id: string) => {
  const el = document.getElementById(id);
  if (!el) throw new Error(`Missing section #${id}`);
  return within(el);
};

const hrefOf = (el: HTMLElement) => el.getAttribute("href");

describe.each(locales)("HomePage (%s)", (locale) => {
  const c = content[locale];

  it("renders the hero with name, title and summary", () => {
    render(<HomePage locale={locale} />);
    expect(
      screen.getByRole("heading", { level: 1, name: profile.name }),
    ).toBeTruthy();
    expect(screen.getByText(c.hero.title)).toBeTruthy();
    expect(screen.getByText(c.hero.summary)).toBeTruthy();
  });

  it("links the hero CTAs to the CV and email", () => {
    render(<HomePage locale={locale} />);
    expect(hrefOf(screen.getByRole("link", { name: c.hero.ctaCv }))).toBe("/cv");
    expect(hrefOf(screen.getByRole("link", { name: c.hero.ctaEmail }))).toBe(
      `mailto:${profile.email}`,
    );
  });

  it("renders every section with a heading and a nav anchor", () => {
    render(<HomePage locale={locale} />);
    for (const id of sectionIds) {
      expect(
        section(id).getByRole("heading", { level: 2, name: c.ui.nav[id] }),
      ).toBeTruthy();
      expect(hrefOf(screen.getByRole("link", { name: c.ui.nav[id] }))).toBe(
        `#${id}`,
      );
    }
  });

  it("renders all experience entries", () => {
    render(<HomePage locale={locale} />);
    const experience = section("experience");
    for (const job of c.experience) {
      expect(experience.getByText(job.period)).toBeTruthy();
      for (const bullet of job.bullets) {
        expect(experience.getByText(bullet)).toBeTruthy();
      }
    }
  });

  it("links every product to its site in a new tab", () => {
    render(<HomePage locale={locale} />);
    for (const product of c.products) {
      const link = section("products").getByRole("link", {
        name: product.name,
      });
      expect(hrefOf(link)).toBe(product.url);
      expect(link.getAttribute("target")).toBe("_blank");
      expect(link.getAttribute("rel")).toContain("noopener");
    }
  });

  it("renders skills and education", () => {
    render(<HomePage locale={locale} />);
    for (const skill of c.skills) {
      expect(section("skills").getByText(skill.items)).toBeTruthy();
    }
    for (const item of [...c.education.map((e) => e.degree), ...c.additional.items]) {
      expect(section("education").getByText(item)).toBeTruthy();
    }
  });

  it("links every contact channel", () => {
    render(<HomePage locale={locale} />);
    const hrefs = section("contact")
      .getAllByRole("link")
      .map(hrefOf);
    expect(hrefs).toEqual([
      "mailto:brandon@brangarciaramos.com",
      "tel:+523334109866",
      "https://www.linkedin.com/in/brangarciaramos",
      "https://github.com/imsoft",
    ]);
  });

  it("links to the other language", () => {
    render(<HomePage locale={locale} />);
    const other = locale === "en" ? "/es" : "/en";
    expect(
      hrefOf(screen.getByRole("link", { name: c.ui.switchLanguage })),
    ).toBe(other);
  });

  it("embeds Person JSON-LD", () => {
    const { container } = render(<HomePage locale={locale} />);
    const script = container.querySelector('script[type="application/ld+json"]');
    const data = JSON.parse(script?.innerHTML ?? "{}");
    expect(data["@type"]).toBe("Person");
    expect(data.name).toBe(profile.name);
    expect(data.sameAs).toEqual([profile.linkedin.href, profile.github.href]);
  });
});

describe("content", () => {
  it("keeps English and Spanish in sync", () => {
    const { en, es } = content;
    expect(es.experience.map((j) => j.bullets.length)).toEqual(
      en.experience.map((j) => j.bullets.length),
    );
    expect(es.products.map((p) => p.url)).toEqual(en.products.map((p) => p.url));
    expect(es.skills).toHaveLength(en.skills.length);
    expect(es.education).toHaveLength(en.education.length);
    expect(es.additional.items).toHaveLength(en.additional.items.length);
  });

  it("uses the required English title", () => {
    expect(content.en.meta.title).toBe(
      "Brandon Uriel García Ramos — Senior Full-Stack Engineer",
    );
  });
});
