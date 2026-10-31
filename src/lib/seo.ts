import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { presets } from "@/config/presets";

/** The preset whose content search engines and social previews see (set in siteConfig.activePreset). */
export const seoPreset = presets[siteConfig.activePreset];
export const seoLocale = siteConfig.defaultLocale;

type PageMetaInput = { title?: string; description?: string; image?: string; path?: string; type?: "website" | "article" };

/** Re-crops demo Unsplash images to 1200×630; your own /public images are used as-is. */
const toOgCrop = (url: string) =>
    url.includes("images.unsplash.com") ? url.replace(/([?&])w=\d+(&h=\d+)?/, "$1w=1200&h=630") : url;

/** Builds title, description, canonical, Open Graph and Twitter tags for a page. */
export function pageMeta({ title, description, image, path = "/", type = "website" }: PageMetaInput = {}): Metadata {
    const { seo, brand } = seoPreset;
    const fullTitle = title ? `${title} — ${brand.name}` : seo.title[seoLocale];
    const desc = description ?? seo.description[seoLocale];
    const img = toOgCrop(image ?? seo.image);
    return {
        title: title ?? { absolute: seo.title[seoLocale] },
        description: desc,
        alternates: { canonical: path },
        openGraph: {
            type,
            url: path,
            siteName: brand.name,
            title: fullTitle,
            description: desc,
            locale: seoLocale,
            images: [{ url: img, width: 1200, height: 630, alt: fullTitle }],
        },
        twitter: { card: "summary_large_image", title: fullTitle, description: desc, images: [img] },
    };
}

/** schema.org structured data describing the property. */
export function lodgingJsonLd() {
    const p = seoPreset;
    return {
        "@context": "https://schema.org",
        "@type": p.seo.schemaType,
        name: `${p.brand.name} — ${p.brand.descriptor[seoLocale]}`,
        description: p.seo.description[seoLocale],
        url: siteConfig.siteUrl,
        image: [p.seo.image],
        telephone: p.contact.phone,
        email: p.contact.email,
        priceRange: p.seo.priceRange,
        address: { "@type": "PostalAddress", streetAddress: p.contact.address.join(", ") },
        geo: { "@type": "GeoCoordinates", latitude: p.contact.coordinates.lat, longitude: p.contact.coordinates.lng },
        sameAs: p.social.map((s) => s.url),
    };
}
