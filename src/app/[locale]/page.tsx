import { notFound } from "next/navigation";
import { HomePage } from "@/components/home-page";
import { isLocale } from "@/i18n/config";

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <HomePage locale={locale} />;
}
