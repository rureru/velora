import type { Preset } from "../types";
import { unsplash as u, unsplashOg } from "./image";
import { desertOffers } from "@/content/offers/desert";
import { desertJournal } from "@/content/journal/desert";
import { desertGallery } from "@/content/gallery/desert";
import { desertFaq } from "@/content/faq/desert";

/**
 * DEMO PRESET — "Desert Eco-Resort"
 * Every name, address, price, quote and booking link below is fictional demo content.
 */
const BOOK = "https://booking.example.com/velora-desert";

export const desert: Preset = {
    id: "desert",
    label: "Desert Eco-Resort",
    brand: {
        name: "Velora",
        descriptor: { en: "Desert Eco-Resort", fr: "Éco-resort du désert" },
        logo: "",
    },
    theme: {
        bg: "#F4EDE6",
        surface: "#EBDFD2",
        ink: "#231F20",
        muted: "#665A51",
        accent: "#A3573A",
        line: "#DACDBF",
        deep: "#1B1E2B",
        onDeep: "#F1E8DC",
        deepMuted: "#BDB3A6",
    },
    seo: {
        title: { en: "Velora — Desert eco-resort at the edge of the dunes", fr: "Velora — Éco-resort au bord des dunes" },
        description: {
            en: "Solar-powered tents, star domes and rammed-earth suites facing the Saharan dunes. Camel treks, clay hammam and the darkest skies on earth.",
            fr: "Tentes solaires, dômes étoilés et suites en pisé face aux dunes du Sahara. Méharées, hammam d'argile et le ciel le plus noir du monde.",
        },
        image: unsplashOg("photo-1506147854445-5a3f534191f8"),
        schemaType: "Resort",
        priceRange: "€€€",
    },
    contact: {
        address: ["Erg Amaya, Piste du Puits 3", "Tafilalet region", "Morocco"],
        phone: "+212 5 00 00 00 00",
        email: "hello@velora-desert.example",
        hours: { en: "Guest desk open daily, 6:30 – 23:00", fr: "Accueil ouvert tous les jours, 6h30 – 23h00" },
        coordinates: { lat: 31.0994, lng: -4.0128 },
    },
    booking: {
        mainUrl: BOOK,
        currency: "EUR",
        priceNote: {
            en: "Per night, half board included. Final rates shown on our reservation page.",
            fr: "Par nuit, demi-pension incluse. Tarifs définitifs sur notre page de réservation.",
        },
    },
    social: [
        { label: "Instagram", url: "https://instagram.com/" },
        { label: "Pinterest", url: "https://pinterest.com/" },
        { label: "Journal", url: "https://example.com/journal" },
    ],
    images: {
        hero: u("photo-1506147854445-5a3f534191f8", 2400),
        intro: u("photo-1760261799672-2469a6c4c6f3"),
        introSecondary: u("photo-1512432298996-6c5c15577db5", 1000),
        location: u("photo-1757438059025-7cc2c86107c1"),
        cta: u("photo-1548272475-4a32d90e4f91", 2400),
        accommodationsHero: u("photo-1783696177820-a0f8d10065b6", 2400),
        experiencesHero: u("photo-1776319967759-2a6484370b94", 2400),
        aboutHero: u("photo-1621795307430-3ff25aa08945", 2400),
        aboutArchitecture: u("photo-1573691257041-9da551a70522"),
        aboutSustainability: u("photo-1685432780037-c174342e6a40"),
        contactHero: u("photo-1611522135886-a632d94ff6ae", 2400),
        offersHero: u("photo-1548272475-4a32d90e4f91", 2400),
        journalHero: u("photo-1621795307430-3ff25aa08945", 2400),
        galleryHero: u("photo-1783696177820-a0f8d10065b6", 2400),
        faqHero: u("photo-1512432298996-6c5c15577db5", 2400),
    },
    copy: {
        hero: {
            eyebrow: { en: "An eco-resort at the edge of the dunes", fr: "Un éco-resort au bord des dunes" },
            lines: [
                { en: "Sand, silence", fr: "Le sable, le silence" },
                { en: "and a sky", fr: "et un ciel" },
                { en: "full of stars.", fr: "plein d'étoiles." },
            ],
            sub: {
                en: "Ten tents, domes and clay suites where the road gives way to the erg.",
                fr: "Dix tentes, dômes et suites en terre crue, là où la route laisse place à l'erg.",
            },
        },
        intro: {
            title: { en: "Built from earth, lit by the sun.", fr: "Bâti de terre, éclairé par le soleil." },
            body: {
                en: "Velora rises from the desert in rammed earth and palm wood, shaped by builders whose families have worked this clay for generations. Thick walls keep the days cool; open courtyards keep the nights generous.",
                fr: "Velora s'élève du désert en pisé et en bois de palmier, façonné par des bâtisseurs dont les familles travaillent cette terre depuis des générations. Des murs épais gardent la fraîcheur le jour ; des patios ouverts offrent des nuits généreuses.",
            },
            facts: [
                { value: { en: "10", fr: "10" }, label: { en: "Tents, domes & suites", fr: "Tentes, dômes et suites" } },
                { value: { en: "100%", fr: "100 %" }, label: { en: "Solar powered", fr: "Énergie solaire" } },
                { value: { en: "0", fr: "0" }, label: { en: "Street lights", fr: "Lampadaire" } },
            ],
        },
        marquee: [
            { en: "Golden hour", fr: "Heure dorée" },
            { en: "Warm earth", fr: "Terre chaude" },
            { en: "Stillness", fr: "Silence" },
            { en: "Mint tea", fr: "Thé à la menthe" },
            { en: "Endless horizon", fr: "Horizon infini" },
        ],
        location: {
            title: { en: "Notes from the edge of the erg.", fr: "Notes depuis le bord de l'erg." },
            body: {
                en: "The tarmac ends forty minutes before we begin. From there, a sand track leads past a ksar and a palm grove to the foot of the great dunes, where the camp sits facing the sunrise.",
                fr: "Le goudron s'arrête quarante minutes avant nous. Une piste de sable passe ensuite devant un ksar et une palmeraie jusqu'au pied des grandes dunes, où le camp fait face au lever du soleil.",
            },
            facts: [
                { value: { en: "45 min", fr: "45 min" }, label: { en: "From the regional airport", fr: "Depuis l'aéroport régional" } },
                { value: { en: "4×4", fr: "4×4" }, label: { en: "Transfers included", fr: "Transferts inclus" } },
                { value: { en: "Bortle 1", fr: "Bortle 1" }, label: { en: "Night-sky darkness", fr: "Obscurité du ciel" } },
            ],
        },
        cta: {
            title: { en: "The dunes are quieter than you imagine.", fr: "Les dunes sont plus calmes que vous ne l'imaginez." },
            body: {
                en: "Reserve directly for the best rate and a private transfer from the airport.",
                fr: "Réservez en direct pour le meilleur tarif et un transfert privé depuis l'aéroport.",
            },
        },
        accommodations: {
            title: { en: "Tents, domes & clay suites", fr: "Tentes, dômes et suites en terre" },
            intro: {
                en: "Woven canvas, hand-thrown tiles and beds dressed in undyed cotton. Every space faces the dunes and the dawn.",
                fr: "Toile tissée, carreaux faits main et lits habillés de coton écru. Chaque espace fait face aux dunes et à l'aube.",
            },
        },
        experiences: {
            title: { en: "Days measured by light", fr: "Des journées rythmées par la lumière" },
            intro: {
                en: "Dawn walks, long lunches in the shade and nights under the clearest sky on earth.",
                fr: "Marches à l'aube, longs déjeuners à l'ombre et nuits sous le ciel le plus pur du monde.",
            },
        },
        about: {
            title: { en: "A camp that belongs to the desert", fr: "Un camp qui appartient au désert" },
            intro: {
                en: "We are a small, locally staffed eco-resort built on a simple promise: to leave the dunes exactly as we found them.",
                fr: "Nous sommes un petit éco-resort, animé par une équipe locale, avec une promesse simple : laisser les dunes telles que nous les avons trouvées.",
            },
            story: [
                {
                    en: "Velora was born around a campfire in 2016, when two friends — one a desert guide, one an architect — wondered what a camp might look like if it were designed to disappear.",
                    fr: "Velora est né autour d'un feu en 2016, quand deux amis — un guide du désert et une architecte — se sont demandé à quoi ressemblerait un camp conçu pour disparaître.",
                },
                {
                    en: "Everything here can be taken apart. The tents rest on timber platforms, the clay suites are made of the ground beneath them, and the electricity comes from the sun that warms them.",
                    fr: "Tout ici peut être démonté. Les tentes reposent sur des plateformes en bois, les suites sont faites de la terre sur laquelle elles se trouvent et l'électricité vient du soleil qui les réchauffe.",
                },
            ],
            principles: [
                {
                    title: { en: "Leave no trace", fr: "Ne laisser aucune trace" },
                    body: { en: "Removable structures, no concrete, no lawns.", fr: "Structures démontables, pas de béton, pas de pelouse." },
                },
                {
                    title: { en: "Local hands", fr: "Des mains locales" },
                    body: { en: "Our team, builders and guides come from the surrounding villages.", fr: "Notre équipe, nos bâtisseurs et nos guides viennent des villages voisins." },
                },
                {
                    title: { en: "Follow the light", fr: "Suivre la lumière" },
                    body: { en: "Days start at sunrise and slow down at noon, as the desert always has.", fr: "Les journées commencent à l'aube et ralentissent à midi, comme le désert l'a toujours fait." },
                },
            ],
            architecture: {
                title: { en: "Architecture of earth and shade", fr: "Une architecture de terre et d'ombre" },
                body: {
                    en: "Rammed-earth walls half a metre thick, palm-beam ceilings and narrow windows positioned for the breeze. The camp cools itself without a single air conditioner in the clay suites.",
                    fr: "Des murs en pisé d'un demi-mètre, des plafonds en poutres de palmier et des fenêtres étroites placées pour la brise. Le camp se rafraîchit sans aucune climatisation dans les suites en terre.",
                },
            },
            sustainability: {
                title: { en: "Quietly sustainable", fr: "Durable, sans bruit" },
                points: [
                    { en: "Off-grid solar array with battery storage.", fr: "Installation solaire autonome avec stockage sur batterie." },
                    { en: "Greywater recycled for the palm garden.", fr: "Eaux grises recyclées pour le jardin de palmiers." },
                    { en: "Most ingredients from the oasis farms nearby.", fr: "La plupart des ingrédients viennent des fermes de l'oasis voisine." },
                    { en: "A share of every stay funds the village school.", fr: "Une part de chaque séjour finance l'école du village." },
                ],
            },
        },
        contact: {
            title: { en: "Plan your journey to the dunes", fr: "Préparez votre voyage vers les dunes" },
            intro: {
                en: "Questions about transfers, seasons or private camps — we usually reply within a day.",
                fr: "Questions sur les transferts, les saisons ou les camps privés — nous répondons généralement sous 24 heures.",
            },
        },
        offers: {
            title: { en: "Seasons of the desert", fr: "Les saisons du désert" },
            intro: {
                en: "From the cool clarity of winter to the long golden evenings of spring — packages shaped around the desert's best months.",
                fr: "De la clarté fraîche de l'hiver aux longues soirées dorées du printemps — des forfaits pensés pour les plus beaux mois du désert.",
            },
        },
        journal: {
            title: { en: "Journal", fr: "Journal" },
            intro: {
                en: "Stories from the erg: the builders, the night sky and the slow rituals of desert life.",
                fr: "Récits de l'erg : les bâtisseurs, le ciel nocturne et les lents rituels de la vie du désert.",
            },
        },
        gallery: {
            title: { en: "Gallery", fr: "Galerie" },
            intro: {
                en: "Canvas and clay, tagines and mint tea, and dunes that change colour by the hour.",
                fr: "Toile et argile, tajines et thé à la menthe, et des dunes qui changent de couleur d'heure en heure.",
            },
        },
        faq: {
            title: { en: "Before you travel", fr: "Avant votre voyage" },
            intro: {
                en: "Practical answers about arrival, transfers, pets and cancellations. Anything else, just ask.",
                fr: "Des réponses pratiques sur l'arrivée, les transferts, les animaux et les annulations. Pour le reste, demandez-nous.",
            },
        },
    },
    roomTypes: [
        { id: "tent", label: { en: "Tents", fr: "Tentes" } },
        { id: "dome", label: { en: "Domes", fr: "Dômes" } },
        { id: "suite", label: { en: "Clay suites", fr: "Suites en terre" } },
    ],
    rooms: [
        {
            slug: "dune-tent",
            type: "tent",
            name: { en: "Dune Tent", fr: "Tente Dune" },
            tagline: { en: "Canvas, cotton and the first light", fr: "Toile, coton et premières lueurs" },
            description: {
                en: "A hand-woven tent on a raised cedar deck, with a bed facing the opening flap so the sunrise is the first thing you see. Ensuite shower with desert-stone floor.",
                fr: "Une tente tissée main sur une terrasse surélevée en cèdre, avec un lit face à l'ouverture pour que le lever du soleil soit la première chose que vous voyiez. Douche privative au sol de pierre.",
            },
            size: 32,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Dunes", fr: "Dunes" },
            priceFrom: 290,
            images: [u("photo-1688999991151-d797021df975"), u("photo-1762255121620-3ca4c551404c"), u("photo-1506147854445-5a3f534191f8")],
            amenities: [
                { en: "Private deck", fr: "Terrasse privée" },
                { en: "Ensuite shower", fr: "Douche privative" },
                { en: "Solar lighting", fr: "Éclairage solaire" },
                { en: "Half board included", fr: "Demi-pension incluse" },
                { en: "Airport transfer", fr: "Transfert aéroport" },
            ],
            bookingUrl: `${BOOK}?room=dune`,
            featured: true,
        },
        {
            slug: "star-dome",
            type: "dome",
            name: { en: "Star Dome", fr: "Dôme des Étoiles" },
            tagline: { en: "Sleep beneath a transparent sky", fr: "Dormir sous un ciel transparent" },
            description: {
                en: "A geodesic dome with a clear canopy above the bed. Lie back and watch the Milky Way rise; draw the shade at dawn if you prefer to sleep in.",
                fr: "Un dôme géodésique avec une canopée transparente au-dessus du lit. Allongez-vous et regardez la Voie lactée se lever ; tirez le voile à l'aube si vous préférez dormir.",
            },
            size: 36,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Night sky", fr: "Ciel nocturne" },
            priceFrom: 380,
            images: [u("photo-1783696521772-e3ba2c4ef0b5"), u("photo-1762255121620-3ca4c551404c"), u("photo-1783696177820-a0f8d10065b6")],
            amenities: [
                { en: "Clear sky canopy", fr: "Canopée transparente" },
                { en: "Telescope", fr: "Télescope" },
                { en: "Outdoor shower", fr: "Douche extérieure" },
                { en: "Half board included", fr: "Demi-pension incluse" },
                { en: "Airport transfer", fr: "Transfert aéroport" },
            ],
            bookingUrl: `${BOOK}?room=dome`,
            featured: true,
        },
        {
            slug: "clay-suite",
            type: "suite",
            name: { en: "Clay Suite", fr: "Suite d'Argile" },
            tagline: { en: "Cool earth walls and a private patio", fr: "Murs de terre fraîche et patio privé" },
            description: {
                en: "Built in rammed earth with a palm-beam ceiling, the suite opens onto a walled patio with a plunge pool and a lantern-lit daybed.",
                fr: "Bâtie en pisé sous un plafond de palmier, la suite s'ouvre sur un patio clos avec bassin et lit de repos éclairé de lanternes.",
            },
            size: 54,
            guests: 3,
            beds: { en: "1 king bed + daybed", fr: "1 lit king + lit de repos" },
            view: { en: "Patio & dunes", fr: "Patio et dunes" },
            priceFrom: 470,
            images: [u("photo-1787660916580-8e7d22040d45"), u("photo-1768657659255-492a2d151115"), u("photo-1512432298996-6c5c15577db5")],
            amenities: [
                { en: "Plunge pool", fr: "Bassin privé" },
                { en: "Walled patio", fr: "Patio clos" },
                { en: "Naturally cooled", fr: "Fraîcheur naturelle" },
                { en: "Half board included", fr: "Demi-pension incluse" },
                { en: "Hammam access", fr: "Accès au hammam" },
            ],
            bookingUrl: `${BOOK}?room=clay`,
            featured: true,
        },
        {
            slug: "oasis-villa",
            type: "suite",
            name: { en: "Oasis Villa", fr: "Villa Oasis" },
            tagline: { en: "Two bedrooms around a palm courtyard", fr: "Deux chambres autour d'un patio de palmiers" },
            description: {
                en: "Our largest residence: two bedrooms, a courtyard pool shaded by palms and a private cook on request. Ideal for families or friends travelling together.",
                fr: "Notre plus grande résidence : deux chambres, une piscine de patio à l'ombre des palmiers et un cuisinier privé sur demande. Idéale en famille ou entre amis.",
            },
            size: 120,
            guests: 5,
            beds: { en: "2 king beds + daybed", fr: "2 lits king + lit de repos" },
            view: { en: "Palm courtyard", fr: "Patio de palmiers" },
            priceFrom: 890,
            images: [u("photo-1760261799672-2469a6c4c6f3"), u("photo-1787660916580-8e7d22040d45"), u("photo-1573691257041-9da551a70522")],
            amenities: [
                { en: "Courtyard pool", fr: "Piscine de patio" },
                { en: "Private cook on request", fr: "Cuisinier privé sur demande" },
                { en: "Two bedrooms", fr: "Deux chambres" },
                { en: "Full board available", fr: "Pension complète possible" },
                { en: "Airport transfer", fr: "Transfert aéroport" },
            ],
            bookingUrl: `${BOOK}?room=villa`,
        },
        {
            slug: "nomad-tent",
            type: "tent",
            name: { en: "Nomad Tent", fr: "Tente Nomade" },
            tagline: { en: "A family tent with room to roam", fr: "Une tente familiale où l'on circule librement" },
            description: {
                en: "A generous tent with a main bed, two singles behind a woven screen and a shaded lounge outside for afternoon tea.",
                fr: "Une tente généreuse avec un grand lit, deux lits simples derrière un paravent tissé et un salon ombragé à l'extérieur pour le thé de l'après-midi.",
            },
            size: 44,
            guests: 4,
            beds: { en: "1 king bed + 2 singles", fr: "1 lit king + 2 lits simples" },
            view: { en: "Dunes", fr: "Dunes" },
            priceFrom: 360,
            images: [u("photo-1786809614359-19ea5dc3ac01"), u("photo-1688999991151-d797021df975"), u("photo-1523131082769-56577f690b57")],
            amenities: [
                { en: "Shaded outdoor lounge", fr: "Salon extérieur ombragé" },
                { en: "Family friendly", fr: "Adaptée aux familles" },
                { en: "Ensuite shower", fr: "Douche privative" },
                { en: "Half board included", fr: "Demi-pension incluse" },
                { en: "Airport transfer", fr: "Transfert aéroport" },
            ],
            bookingUrl: `${BOOK}?room=nomad`,
        },
    ],
    experiences: [
        {
            slug: "camel-dusk",
            title: { en: "Camel trek at dusk", fr: "Méharée au crépuscule" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Ride with our guides across the ridgelines as the sand turns copper, ending with mint tea on the highest dune.",
                fr: "Suivez nos guides le long des crêtes quand le sable devient cuivre, jusqu'au thé à la menthe sur la plus haute dune.",
            },
            duration: { en: "2.5 hours", fr: "2 h 30" },
            season: { en: "October – April", fr: "Octobre – avril" },
            image: u("photo-1757438059025-7cc2c86107c1"),
        },
        {
            slug: "night-sky",
            title: { en: "Night-sky observatory", fr: "Observatoire du ciel" },
            category: { en: "Night", fr: "Nuit" },
            summary: {
                en: "Our resident astronomer guides you through constellations, planets and the stories nomads tell about them.",
                fr: "Notre astronome vous guide parmi les constellations, les planètes et les récits que les nomades en font.",
            },
            duration: { en: "90 minutes", fr: "90 minutes" },
            season: { en: "Moonless nights", fr: "Nuits sans lune" },
            image: u("photo-1488866022504-f2584929ca5f"),
        },
        {
            slug: "clay-hammam",
            title: { en: "Clay hammam", fr: "Hammam d'argile" },
            category: { en: "Wellbeing", fr: "Bien-être" },
            summary: {
                en: "Steam, black soap and rhassoul clay in a vaulted earthen bathhouse, followed by rest in the shade.",
                fr: "Vapeur, savon noir et rhassoul dans un hammam voûté en terre, suivis d'un repos à l'ombre.",
            },
            duration: { en: "2 hours", fr: "2 heures" },
            season: { en: "All year", fr: "Toute l'année" },
            image: u("photo-1768657659255-492a2d151115"),
        },
        {
            slug: "dune-dinner",
            title: { en: "Dinner in the dunes", fr: "Dîner dans les dunes" },
            category: { en: "Dining", fr: "Table" },
            summary: {
                en: "A long table set in a hollow between dunes, lit by lanterns, with tagines slow-cooked in the sand.",
                fr: "Une longue table dressée au creux des dunes, éclairée de lanternes, avec des tajines mijotés dans le sable.",
            },
            duration: { en: "Evenings, 8 pm", fr: "Le soir, 20h00" },
            season: { en: "Weekly", fr: "Chaque semaine" },
            image: u("photo-1688437307687-fe226bddfab1"),
        },
        {
            slug: "dawn-erg",
            title: { en: "Dawn on the erg", fr: "L'aube sur l'erg" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Climb barefoot in the cool blue hour and watch the dunes ignite as the sun clears the horizon.",
                fr: "Montez pieds nus à l'heure bleue et regardez les dunes s'embraser quand le soleil franchit l'horizon.",
            },
            duration: { en: "90 minutes", fr: "90 minutes" },
            season: { en: "All year", fr: "Toute l'année" },
            image: u("photo-1780070955946-0936c858688e"),
        },
    ],
    testimonials: [
        {
            quote: {
                en: "I have never heard silence like it. We watched the sun rise from bed and felt entirely unhurried.",
                fr: "Je n'avais jamais entendu un tel silence. Nous avons vu le soleil se lever depuis le lit, sans aucune hâte.",
            },
            author: "Hanna & Leo",
            origin: { en: "Stockholm", fr: "Stockholm" },
        },
        {
            quote: {
                en: "Beautifully built and genuinely kind. The night-sky session was the highlight of our year.",
                fr: "Magnifiquement construit et sincèrement chaleureux. La soirée d'astronomie a été le moment fort de notre année.",
            },
            author: "Priya S.",
            origin: { en: "Toronto", fr: "Toronto" },
        },
        {
            quote: {
                en: "Luxury without excess. Every detail belongs to the place, and the place is extraordinary.",
                fr: "Un luxe sans excès. Chaque détail appartient au lieu, et le lieu est extraordinaire.",
            },
            author: "Marc D.",
            origin: { en: "Lyon", fr: "Lyon" },
        },
    ],
    team: [
        { name: "Yasmine Alaoui", role: { en: "Co-founder & architect", fr: "Cofondatrice et architecte" }, image: u("photo-1506863530036-1efeddceb993", 900) },
        { name: "Karim Benali", role: { en: "Co-founder & desert guide", fr: "Cofondateur et guide du désert" }, image: u("photo-1649354680299-ed0d7c3cb786", 900) },
        { name: "Salma Idrissi", role: { en: "Hammam & wellbeing", fr: "Hammam et bien-être" }, image: u("photo-1674932668403-33398b81c92f", 900) },
    ],
    offers: desertOffers,
    journal: desertJournal,
    gallery: desertGallery,
    faq: desertFaq,
};
