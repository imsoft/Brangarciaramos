"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import { useEffect, useState, useTransition } from "react";

export function ControlsBar() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  useEffect(() => {
    setMounted(true);
  }, []);

  const changeLanguage = () => {
    const newLocale = locale === "es" ? "en" : "es";
    startTransition(() => {
      const newPathname = pathname.replace(`/${locale}`, `/${newLocale}`);
      router.replace(newPathname);
    });
  };

  if (!mounted) {
    return (
      <div className="fixed top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-3 z-50">
        <div className="w-6 h-6 rounded" />
        <div className="w-5 h-5" />
      </div>
    );
  }

  return (
    <div className="fixed top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-3 z-50">
      {/* Language Switcher */}
      <button
        onClick={changeLanguage}
        disabled={isPending}
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110 text-xl"
        aria-label={locale === "es" ? "Change to English" : "Cambiar a español"}
        title={locale === "es" ? "Change to English" : "Cambiar a español"}
      >
        {locale === "es" ? "🇺🇸" : "🇲🇽"}
      </button>

      {/* Theme Toggle */}
      <button
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all hover:scale-110"
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === "dark" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
            />
          </svg>
        )}
      </button>
    </div>
  );
}
