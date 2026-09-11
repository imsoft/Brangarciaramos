import { MetadataRoute } from "next";
import { content, profile } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: content.en.meta.title,
    short_name: profile.shortName,
    description: content.en.meta.description,
    start_url: "/en",
    display: "browser",
    background_color: "#ffffff",
    theme_color: "#ffffff",
    icons: [{ src: "/favicon.ico", sizes: "any", type: "image/x-icon" }],
  };
}
