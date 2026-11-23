import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://guide-brevet-tunisie.vercel.app/sitemap.xml",
  };
}
