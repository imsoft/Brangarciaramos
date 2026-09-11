import { getRequestConfig } from "next-intl/server";
import { defaultLocale, isLocale } from "./config";

// Copy lives in src/content.ts; next-intl is only used for locale routing.
export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = requested && isLocale(requested) ? requested : defaultLocale;

  return { locale, messages: {} };
});
