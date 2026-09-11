export type Locale = "es" | "en";

export const locales: Locale[] = ["en", "es"];
export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return (locales as string[]).includes(value);
}
