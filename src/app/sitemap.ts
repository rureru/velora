import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { seoPreset } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const base = siteConfig.siteUrl.replace(/\/$/, "");
    const now = new Date();
    const pages = ["", "/accommodations", "/experiences", "/offers", "/journal", "/gallery", "/faq", "/about", "/contact"].map((p) => ({
        url: `${base}${p}`,
        lastModified: now,
    }));
    const rooms = seoPreset.rooms.map((r) => ({ url: `${base}/accommodations/${r.slug}`, lastModified: now }));
    const posts = seoPreset.journal.map((j) => ({ url: `${base}/journal/${j.slug}`, lastModified: new Date(j.date) }));
    return [...pages, ...rooms, ...posts];
}
