import type { MetadataRoute } from "next";

const base = "https://guide-brevet-tunisie.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/guide",
    "/guide/comprendre",
    "/guide/brevetabilite",
    "/guide/depot",
    "/guide/examen",
    "/guide/couts",
    "/guide/droits",
    "/guide/licences",
    "/guide/contrefacon",
    "/loi",
    "/faq",
    "/checklist",
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: path === "" ? "monthly" : "yearly",
    priority: path === "" ? 1 : path === "/guide" ? 0.9 : 0.7,
  }));
}
