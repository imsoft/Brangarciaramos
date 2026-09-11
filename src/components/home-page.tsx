import { SiteHeader } from "@/components/site-header";
import {
  Contact,
  Education,
  Experience,
  Hero,
  Products,
  Skills,
} from "@/components/sections";
import { content, profile } from "@/content";
import type { Locale } from "@/i18n/config";

export function personJsonLd(locale: Locale) {
  const c = content[locale];
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.name,
    jobTitle: c.hero.title,
    description: c.hero.summary,
    url: profile.siteUrl,
    email: `mailto:${profile.email}`,
    telephone: profile.phone.label,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Guadalajara",
      addressCountry: "MX",
    },
    sameAs: [profile.linkedin.href, profile.github.href],
    worksFor: { "@type": "Organization", name: "imSoft", url: "https://imsoft.io" },
    alumniOf: { "@type": "CollegeOrUniversity", name: "CETI" },
  };
}

export function HomePage({ locale }: { locale: Locale }) {
  const c = content[locale];
  const jsonLd = JSON.stringify(personJsonLd(locale)).replace(/</g, "\\u003c");

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-background focus:px-3 focus:py-2"
      >
        {c.ui.skipToContent}
      </a>
      <SiteHeader c={c} locale={locale} />
      <main id="main" className="mx-auto max-w-3xl px-6">
        <Hero c={c} />
        <Experience c={c} />
        <Products c={c} />
        <Skills c={c} />
        <Education c={c} />
        <Contact c={c} />
      </main>
      <footer className="mx-auto max-w-3xl border-t px-6 py-8 text-sm text-muted-foreground">
        © {new Date().getFullYear()} {profile.name}
      </footer>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd }}
      />
    </>
  );
}
