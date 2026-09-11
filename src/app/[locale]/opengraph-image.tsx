import { ImageResponse } from "next/og";
import { content, profile } from "@/content";
import { defaultLocale, isLocale, locales } from "@/i18n/config";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const alt = content.en.meta.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const c = content[isLocale(locale) ? locale : defaultLocale];

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0a0a0a",
          color: "#fafafa",
        }}
      >
        <div style={{ fontSize: 68, fontWeight: 700 }}>{profile.name}</div>
        <div style={{ fontSize: 42, marginTop: 16, color: "#93b4ff" }}>
          {c.hero.title}
        </div>
        <div style={{ fontSize: 28, marginTop: 40, color: "#a3a3a3" }}>
          {c.hero.location}
        </div>
        <div style={{ fontSize: 28, marginTop: 12, color: "#a3a3a3" }}>
          brangarciaramos.com
        </div>
      </div>
    ),
    size,
  );
}
