import type { Locale, PresetId } from "./types.ts";

/**
 * VELORA — global site settings.
 * Property-specific content (brand, rooms, contact, booking links, colours, images)
 * lives in src/config/presets/*.ts
 */
export const siteConfig = {
    /** Which preset the site uses: "forest" | "desert" | "coastal" */
    activePreset: "forest" as PresetId,

    /** Shows a demo preset switcher in the footer. Set to false for client sites. */
    showPresetSwitcher: true,

    /** Languages. The first entry in `locales` should match `defaultLocale`. */
    defaultLocale: "en" as Locale,
    locales: ["en", "fr"] as Locale[],
    localeLabels: { en: "EN", fr: "FR" } as Record<Locale, string>,

    /**
     * Contact form endpoint (e.g. a free Formspree form: "https://formspree.io/f/abcdwxyz").
     * Leave empty to open the visitor's email app with a pre-filled message instead.
     */
    formEndpoint: "",

    /** Hide offers automatically once their `validTo` date has passed. */
    hideExpiredOffers: true,

    /** Public URL of the deployed site, used for canonical links, sitemap and share previews. */
    siteUrl: "https://www.example.com",
};
