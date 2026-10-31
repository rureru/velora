export type Locale = "en" | "fr";

/** A piece of text in every supported language. */
export type L = Record<Locale, string>;

export type PresetId = "forest" | "desert" | "coastal";

export type Theme = {
    bg: string;
    surface: string;
    ink: string;
    muted: string;
    accent: string;
    line: string;
    deep: string;
    onDeep: string;
    deepMuted: string;
};

export type Room = {
    slug: string;
    type: string;
    name: L;
    tagline: L;
    description: L;
    size: number;
    guests: number;
    beds: L;
    view: L;
    priceFrom: number;
    images: string[];
    amenities: L[];
    bookingUrl: string;
    featured?: boolean;
};

export type Experience = {
    slug: string;
    title: L;
    category: L;
    summary: L;
    duration: L;
    season: L;
    image: string;
};

export type Fact = { value: L; label: L };

export type Offer = {
    slug: string;
    title: L;
    tag: L;
    summary: L;
    /** ISO dates (YYYY-MM-DD). Offers whose `validTo` has passed are hidden automatically. */
    validFrom: string;
    validTo: string;
    minNights: number;
    price: number;
    priceLabel: L;
    inclusions: L[];
    image: string;
    bookingUrl: string;
};

export type JournalBlock =
    | { type: "p"; text: L }
    | { type: "h"; text: L }
    | { type: "quote"; text: L }
    | { type: "image"; src: string; caption?: L };

export type Gallery = {
    /** Filter tabs, in display order. */
    categories: { id: string; label: L }[];
    images: { src: string; alt: L; category: string; tall?: boolean }[];
};

export type Faq = {
    categories: { id: string; label: L }[];
    items: { category: string; question: L; answer: L }[];
};

export type JournalPost = {
    slug: string;
    title: L;
    excerpt: L;
    /** ISO date (YYYY-MM-DD) */
    date: string;
    author: string;
    category: L;
    readMinutes: number;
    cover: string;
    body: JournalBlock[];
};

export type Preset = {
    id: PresetId;
    label: string;
    brand: {
        name: string;
        descriptor: L;
        /** Optional path to your own logo file in /public (e.g. "/logo.svg"). Empty = built-in VELORA mark. */
        logo?: string;
    };
    theme: Theme;
    /** Search & social share preview for this property. */
    seo: {
        title: L;
        description: L;
        /** 1200×630 image used for link previews (WhatsApp, Facebook, X, LinkedIn, Slack…). */
        image: string;
        /** schema.org type used in structured data: "Hotel", "Resort", "LodgingBusiness", "BedAndBreakfast"… */
        schemaType: string;
        priceRange: string;
    };
    contact: {
        address: string[];
        phone: string;
        email: string;
        hours: L;
        coordinates: { lat: number; lng: number };
    };
    booking: {
        mainUrl: string;
        currency: string;
        priceNote: L;
    };
    social: { label: string; url: string }[];
    images: {
        hero: string;
        intro: string;
        introSecondary: string;
        location: string;
        cta: string;
        accommodationsHero: string;
        experiencesHero: string;
        aboutHero: string;
        aboutArchitecture: string;
        aboutSustainability: string;
        contactHero: string;
        offersHero: string;
        journalHero: string;
        galleryHero: string;
        faqHero: string;
    };
    copy: {
        hero: { eyebrow: L; lines: L[]; sub: L };
        intro: { title: L; body: L; facts: Fact[] };
        marquee: L[];
        location: { title: L; body: L; facts: Fact[] };
        cta: { title: L; body: L };
        accommodations: { title: L; intro: L };
        experiences: { title: L; intro: L };
        about: {
            title: L;
            intro: L;
            story: L[];
            principles: { title: L; body: L }[];
            architecture: { title: L; body: L };
            sustainability: { title: L; points: L[] };
        };
        contact: { title: L; intro: L };
        offers: { title: L; intro: L };
        journal: { title: L; intro: L };
        gallery: { title: L; intro: L };
        faq: { title: L; intro: L };
    };
    roomTypes: { id: string; label: L }[];
    rooms: Room[];
    experiences: Experience[];
    testimonials: { quote: L; author: string; origin: L }[];
    team: { name: string; role: L; image: string }[];
    offers: Offer[];
    journal: JournalPost[];
    gallery: Gallery;
    faq: Faq;
};
