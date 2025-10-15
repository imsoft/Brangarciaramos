"use client";

import { useTranslations } from "next-intl";

export default function HeroSection() {
  const t = useTranslations("hero");

  return (
    <header className="text-center max-w-4xl px-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 text-gray-900 dark:text-white">
        {t("title")}
      </h1>
      <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300">
        {t("description")}
      </p>
    </header>
  );
}

