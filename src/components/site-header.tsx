import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { profile, sectionIds, type Content } from "@/content";
import type { Locale } from "@/i18n/config";

export function SiteHeader({ c, locale }: { c: Content; locale: Locale }) {
  const otherLocale: Locale = locale === "en" ? "es" : "en";

  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-between gap-x-6 gap-y-2 px-6 py-3 lg:max-w-none lg:px-8">
        <a href="#top" className="font-semibold">
          {profile.name}
        </a>
        <nav
          aria-label={c.ui.navLabel}
          className="order-last w-full lg:order-0 lg:ml-auto lg:w-auto"
        >
          <ul className="flex flex-wrap gap-x-3 gap-y-1 text-xs text-muted-foreground sm:gap-x-5 sm:text-sm">
            {sectionIds.map((id) => (
              <li key={id}>
                <a href={`#${id}`} className="hover:text-foreground">
                  {c.ui.nav[id]}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-1">
          <Link
            href={`/${otherLocale}`}
            hrefLang={otherLocale}
            aria-label={c.ui.switchLanguage}
            title={c.ui.switchLanguage}
            className="inline-flex h-9 items-center rounded-md px-2 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
          >
            {c.ui.otherLanguage}
          </Link>
          <ThemeToggle label={c.ui.toggleTheme} />
        </div>
      </div>
    </header>
  );
}
