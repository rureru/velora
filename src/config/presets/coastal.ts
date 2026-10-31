import type { Preset } from "../types";
import { unsplash as u, unsplashOg } from "./image";
import { coastalOffers } from "@/content/offers/coastal";
import { coastalJournal } from "@/content/journal/coastal";
import { coastalGallery } from "@/content/gallery/coastal";
import { coastalFaq } from "@/content/faq/coastal";

/**
 * DEMO PRESET — "Coastal Villa Retreat"
 * Every name, address, price, quote and booking link below is fictional demo content.
 */
const BOOK = "https://booking.example.com/velora-coast";

export const coastal: Preset = {
    id: "coastal",
    label: "Coastal Villa Retreat",
    brand: {
        name: "Velora",
        descriptor: { en: "Coastal Villa Retreat", fr: "Villas en bord de mer" },
        logo: "",
    },
    theme: {
        bg: "#EEF2EF",
        surface: "#DEE8E3",
        ink: "#1E2A2B",
        muted: "#4D5D5D",
        accent: "#36685F",
        line: "#C9D6D0",
        deep: "#15272A",
        onDeep: "#E7F0EC",
        deepMuted: "#A8BDB7",
    },
    seo: {
        title: { en: "Velora — Coastal villas above a sea-glass cove", fr: "Velora — Villas au-dessus d'une crique couleur verre de mer" },
        description: {
            en: "Lime-washed rooms, suites and private villas above a quiet Mediterranean cove. Sailing, coastal walks and dinners on the jetty. Book direct.",
            fr: "Chambres, suites et villas privées blanchies à la chaux au-dessus d'une crique méditerranéenne. Voile, balades côtières et dîners sur le ponton. Réservez en direct.",
        },
        image: unsplashOg("photo-1790276319819-124404931132"),
        schemaType: "Resort",
        priceRange: "€€€€",
    },
    contact: {
        address: ["Camí de Cala Serena 7", "07730 Alaior", "Menorca, Spain"],
        phone: "+34 971 00 00 00",
        email: "hola@velora-coast.example",
        hours: { en: "Reception open daily, 8:00 – 22:00", fr: "Réception ouverte tous les jours, 8h00 – 22h00" },
        coordinates: { lat: 39.8834, lng: 4.1455 },
    },
    booking: {
        mainUrl: BOOK,
        currency: "EUR",
        priceNote: {
            en: "Per night, breakfast included. Final rates shown on our reservation page.",
            fr: "Par nuit, petit-déjeuner inclus. Tarifs définitifs sur notre page de réservation.",
        },
    },
    social: [
        { label: "Instagram", url: "https://instagram.com/" },
        { label: "Pinterest", url: "https://pinterest.com/" },
        { label: "Journal", url: "https://example.com/journal" },
    ],
    images: {
        hero: u("photo-1790276319819-124404931132", 2400),
        intro: u("photo-1690701170397-dcb83290e992"),
        introSecondary: u("photo-1519710889408-a67e1c7e0452", 1000),
        location: u("photo-1784307003797-f63182bca113"),
        cta: u("photo-1636730740168-c94f3ab802e6", 2400),
        accommodationsHero: u("photo-1785013045428-d7c3d9535239", 2400),
        experiencesHero: u("photo-1782236469614-296b5983cdbe", 2400),
        aboutHero: u("photo-1604176514792-c6c92dfaaf6a", 2400),
        aboutArchitecture: u("photo-1683320553264-e31acd4196e7"),
        aboutSustainability: u("photo-1672940711883-754b2fdefa1c"),
        contactHero: u("photo-1652447385283-817463bd31af", 2400),
        offersHero: u("photo-1765999906700-2d4dfd392966", 2400),
        journalHero: u("photo-1648726438777-de835df96657", 2400),
        galleryHero: u("photo-1788643237824-b0194b418901", 2400),
        faqHero: u("photo-1519710889408-a67e1c7e0452", 2400),
    },
    copy: {
        hero: {
            eyebrow: { en: "Villas above a quiet cove", fr: "Des villas au-dessus d'une crique paisible" },
            lines: [
                { en: "Salt air,", fr: "L'air salé," },
                { en: "lime-washed walls", fr: "les murs à la chaux" },
                { en: "and a slower tide.", fr: "et une marée plus lente." },
            ],
            sub: {
                en: "Eight rooms, suites and private villas among pine and olive, a two-minute walk from the water.",
                fr: "Huit chambres, suites et villas privées parmi les pins et les oliviers, à deux minutes de l'eau.",
            },
        },
        intro: {
            title: { en: "An old farmhouse that learned to face the sea.", fr: "Une vieille ferme qui a appris à regarder la mer." },
            body: {
                en: "Velora was a working island farm for two centuries. We kept its dry-stone walls, its cistern and its fig tree, then opened the house to the light: deep window seats, linen everywhere and terraces that catch the evening breeze.",
                fr: "Velora fut une ferme de l'île pendant deux siècles. Nous avons gardé ses murs de pierre sèche, sa citerne et son figuier, puis ouvert la maison à la lumière : banquettes profondes, lin partout et terrasses qui attrapent la brise du soir.",
            },
            facts: [
                { value: { en: "8", fr: "8" }, label: { en: "Rooms & villas", fr: "Chambres et villas" } },
                { value: { en: "2 min", fr: "2 min" }, label: { en: "To the cove", fr: "Jusqu'à la crique" } },
                { value: { en: "1790", fr: "1790" }, label: { en: "Farmhouse built", fr: "Construction de la ferme" } },
            ],
        },
        marquee: [
            { en: "Salt air", fr: "Air salé" },
            { en: "Sea glass", fr: "Verre de mer" },
            { en: "Stillness", fr: "Silence" },
            { en: "Fig & olive", fr: "Figue et olive" },
            { en: "Slow tides", fr: "Marées lentes" },
        ],
        location: {
            title: { en: "Notes from the island's quiet side.", fr: "Notes depuis le côté calme de l'île." },
            body: {
                en: "We sit on the south coast, where pine forest runs right down to the rocks. A fishermen's path links a string of coves, the harbour town is ten minutes by car and the airport just twenty.",
                fr: "Nous sommes sur la côte sud, là où la pinède descend jusqu'aux rochers. Un chemin de pêcheurs relie une série de criques, le port est à dix minutes en voiture et l'aéroport à vingt.",
            },
            facts: [
                { value: { en: "20 min", fr: "20 min" }, label: { en: "From the airport", fr: "Depuis l'aéroport" } },
                { value: { en: "10 min", fr: "10 min" }, label: { en: "To the harbour town", fr: "Jusqu'au port" } },
                { value: { en: "4", fr: "4" }, label: { en: "Coves within walking distance", fr: "Criques accessibles à pied" } },
            ],
        },
        cta: {
            title: { en: "The water is warm and the terrace is set.", fr: "L'eau est chaude et la terrasse est dressée." },
            body: {
                en: "Reserve directly for the best rate and a welcome bottle of island wine.",
                fr: "Réservez en direct pour le meilleur tarif et une bouteille de vin de l'île offerte.",
            },
        },
        accommodations: {
            title: { en: "Rooms, suites & villas", fr: "Chambres, suites et villas" },
            intro: {
                en: "Lime-washed walls, terracotta floors and beds dressed in washed linen. Every space opens to the sea, a garden or both.",
                fr: "Murs à la chaux, sols en terre cuite et lits habillés de lin lavé. Chaque espace s'ouvre sur la mer, un jardin, ou les deux.",
            },
        },
        experiences: {
            title: { en: "Days shaped by the sea", fr: "Des journées façonnées par la mer" },
            intro: {
                en: "Sail, swim, walk the coast, then eat whatever the boats brought in that morning.",
                fr: "Naviguer, nager, longer la côte, puis manger ce que les bateaux ont rapporté le matin.",
            },
        },
        about: {
            title: { en: "A farmhouse, a cove and a family by the sea", fr: "Une ferme, une crique et une famille au bord de la mer" },
            intro: {
                en: "We are a small, family-run retreat of eight rooms and villas, built on the belief that the sea is best enjoyed slowly.",
                fr: "Nous sommes une petite maison familiale de huit chambres et villas, convaincue que la mer se savoure lentement.",
            },
            story: [
                {
                    en: "Lucía's grandparents farmed this land until the 1970s, when the last cows left and the house fell quiet. In 2017 she came back with an idea and a very old set of keys.",
                    fr: "Les grands-parents de Lucía cultivaient cette terre jusque dans les années 1970, quand les dernières vaches sont parties et que la maison s'est tue. En 2017, elle est revenue avec une idée et un très vieux trousseau de clés.",
                },
                {
                    en: "Four years of careful restoration later, Velora opened with eight rooms and villas, a kitchen garden and a jetty for evening dinners. The fig tree is still there; so is the view.",
                    fr: "Après quatre années de restauration patiente, Velora a ouvert avec huit chambres et villas, un potager et un ponton pour les dîners du soir. Le figuier est toujours là ; la vue aussi.",
                },
            ],
            principles: [
                {
                    title: { en: "Small by design", fr: "Petit, par choix" },
                    body: { en: "Eight places to stay, never more. Everyone gets a quiet corner of the coast.", fr: "Huit hébergements, jamais plus. Chacun a son coin de côte tranquille." },
                },
                {
                    title: { en: "Island made", fr: "Fait sur l'île" },
                    body: { en: "Furniture, ceramics, wine, cheese and fish from within a few kilometres.", fr: "Mobilier, céramiques, vin, fromage et poisson à quelques kilomètres." },
                },
                {
                    title: { en: "Sea first", fr: "La mer d'abord" },
                    body: { en: "Every room was oriented for the breeze and the light on the water.", fr: "Chaque chambre a été orientée pour la brise et la lumière sur l'eau." },
                },
            ],
            architecture: {
                title: { en: "Stone, lime and shade", fr: "Pierre, chaux et ombre" },
                body: {
                    en: "Dry-stone walls, lime wash refreshed each spring and pergolas of reed and vine. Thick walls keep the rooms cool in August; shutters do the rest.",
                    fr: "Murs en pierre sèche, chaux renouvelée chaque printemps et pergolas de roseau et de vigne. Les murs épais gardent la fraîcheur en août ; les volets font le reste.",
                },
            },
            sustainability: {
                title: { en: "Quietly sustainable", fr: "Durable, sans bruit" },
                points: [
                    { en: "Rainwater collected in the original cistern for the garden.", fr: "Eau de pluie collectée dans la citerne d'origine pour le jardin." },
                    { en: "Solar panels cover most of our summer energy.", fr: "Des panneaux solaires couvrent l'essentiel de notre énergie estivale." },
                    { en: "Reef-safe amenities and no single-use plastics.", fr: "Produits respectueux des récifs et aucun plastique à usage unique." },
                    { en: "Native planting that needs almost no irrigation.", fr: "Plantes indigènes qui ne demandent presque aucun arrosage." },
                ],
            },
        },
        contact: {
            title: { en: "Write to us from wherever you are", fr: "Écrivez-nous d'où que vous soyez" },
            intro: {
                en: "Questions about villas, boat days or longer stays — we usually reply within a day.",
                fr: "Questions sur les villas, les sorties en bateau ou les longs séjours — nous répondons généralement sous 24 heures.",
            },
        },
        offers: {
            title: { en: "Seasons by the sea", fr: "Les saisons au bord de la mer" },
            intro: {
                en: "The island is at its best just before and just after the summer rush. These stays are built around those quieter weeks.",
                fr: "L'île est à son plus beau juste avant et juste après l'effervescence de l'été. Ces séjours sont pensés pour ces semaines plus calmes.",
            },
        },
        journal: {
            title: { en: "Journal", fr: "Journal" },
            intro: {
                en: "Coastal walks, kitchen notes and stories from the farmhouse by the sea.",
                fr: "Balades côtières, carnets de cuisine et histoires de la ferme au bord de la mer.",
            },
        },
        gallery: {
            title: { en: "Gallery", fr: "Galerie" },
            intro: {
                en: "Lime-washed rooms, the catch of the day and coves the colour of sea glass.",
                fr: "Chambres à la chaux, pêche du jour et criques couleur verre de mer.",
            },
        },
        faq: {
            title: { en: "Good to know", fr: "Bon à savoir" },
            intro: {
                en: "Arrival times, ferries and flights, pets and cancellations — all in one place.",
                fr: "Horaires d'arrivée, ferries et vols, animaux et annulations — tout au même endroit.",
            },
        },
    },
    roomTypes: [
        { id: "room", label: { en: "Rooms", fr: "Chambres" } },
        { id: "suite", label: { en: "Suites", fr: "Suites" } },
        { id: "villa", label: { en: "Villas", fr: "Villas" } },
    ],
    rooms: [
        {
            slug: "salt-room",
            type: "room",
            name: { en: "The Salt Room", fr: "La Chambre du Sel" },
            tagline: { en: "A garden room in washed linen", fr: "Une chambre sur jardin en lin lavé" },
            description: {
                en: "A calm room on the ground floor of the old farmhouse, opening onto a walled garden of lavender and fig. Terracotta floors, a lime-plaster bathroom and the sound of the sea at night.",
                fr: "Une chambre calme au rez-de-chaussée de la ferme, ouverte sur un jardin clos de lavande et de figuiers. Sols en terre cuite, salle de bain à la chaux et le bruit de la mer la nuit.",
            },
            size: 26,
            guests: 2,
            beds: { en: "1 queen bed", fr: "1 lit queen" },
            view: { en: "Garden", fr: "Jardin" },
            priceFrom: 280,
            images: [u("photo-1567899482751-c8647fda8155"), u("photo-1639690222869-1e608aa51f82"), u("photo-1585620089933-768743dfc8f1")],
            amenities: [
                { en: "Private garden terrace", fr: "Terrasse privée sur jardin" },
                { en: "Rain shower", fr: "Douche pluie" },
                { en: "Beach bag & towels", fr: "Sac et serviettes de plage" },
                { en: "Ceiling fan & air conditioning", fr: "Ventilateur et climatisation" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=salt`,
            featured: true,
        },
        {
            slug: "tide-suite",
            type: "suite",
            name: { en: "The Tide Suite", fr: "La Suite Marée" },
            tagline: { en: "A wall of glass above the cove", fr: "Un mur de verre au-dessus de la crique" },
            description: {
                en: "Our most requested suite: a bed facing the water, a deep stone bath and a terrace that hangs above the cove. Wake to the light moving on the ceiling.",
                fr: "Notre suite la plus demandée : un lit face à l'eau, une baignoire en pierre profonde et une terrasse suspendue au-dessus de la crique. Réveillez-vous avec la lumière qui danse au plafond.",
            },
            size: 46,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Sea", fr: "Mer" },
            priceFrom: 520,
            images: [u("photo-1519710889408-a67e1c7e0452"), u("photo-1790276319819-124404931132"), u("photo-1639690222869-1e608aa51f82")],
            amenities: [
                { en: "Sea-view terrace", fr: "Terrasse vue mer" },
                { en: "Stone soaking bath", fr: "Baignoire en pierre" },
                { en: "Outdoor shower", fr: "Douche extérieure" },
                { en: "Espresso & minibar", fr: "Café espresso et minibar" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=tide`,
            featured: true,
        },
        {
            slug: "cove-villa",
            type: "villa",
            name: { en: "Cove Villa", fr: "Villa de la Crique" },
            tagline: { en: "Two bedrooms and a pool above the sea", fr: "Deux chambres et une piscine au-dessus de la mer" },
            description: {
                en: "A private two-bedroom villa with an infinity pool, a shaded outdoor kitchen and steps down to the rocks. Ideal for families or two couples travelling together.",
                fr: "Une villa privée de deux chambres avec piscine à débordement, cuisine extérieure ombragée et escalier jusqu'aux rochers. Idéale en famille ou pour deux couples.",
            },
            size: 140,
            guests: 5,
            beds: { en: "2 king beds + daybed", fr: "2 lits king + lit de repos" },
            view: { en: "Sea & pine", fr: "Mer et pins" },
            priceFrom: 980,
            images: [u("photo-1765999906700-2d4dfd392966"), u("photo-1585620089933-768743dfc8f1"), u("photo-1785013045428-d7c3d9535239")],
            amenities: [
                { en: "Private infinity pool", fr: "Piscine privée à débordement" },
                { en: "Outdoor kitchen", fr: "Cuisine extérieure" },
                { en: "Private cook on request", fr: "Cuisinier privé sur demande" },
                { en: "Direct sea access", fr: "Accès direct à la mer" },
                { en: "Breakfast delivered", fr: "Petit-déjeuner livré" },
            ],
            bookingUrl: `${BOOK}?room=cove-villa`,
            featured: true,
        },
        {
            slug: "pine-villa",
            type: "villa",
            name: { en: "Pine Villa", fr: "Villa des Pins" },
            tagline: { en: "A hideaway among the pines", fr: "Un refuge parmi les pins" },
            description: {
                en: "A one-bedroom villa set back among the pines, with its own plunge pool, an outdoor bath and a hammock strung between two trees.",
                fr: "Une villa d'une chambre en retrait parmi les pins, avec son bassin privé, un bain extérieur et un hamac tendu entre deux arbres.",
            },
            size: 78,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Pine forest", fr: "Pinède" },
            priceFrom: 690,
            images: [u("photo-1604176514792-c6c92dfaaf6a"), u("photo-1567899482751-c8647fda8155"), u("photo-1683320553264-e31acd4196e7")],
            amenities: [
                { en: "Plunge pool", fr: "Bassin privé" },
                { en: "Outdoor bath", fr: "Bain extérieur" },
                { en: "Fireplace for winter", fr: "Cheminée pour l'hiver" },
                { en: "Kitchenette", fr: "Kitchenette" },
                { en: "Breakfast delivered", fr: "Petit-déjeuner livré" },
            ],
            bookingUrl: `${BOOK}?room=pine-villa`,
        },
        {
            slug: "lighthouse-loft",
            type: "suite",
            name: { en: "Lighthouse Loft", fr: "Loft du Phare" },
            tagline: { en: "Under the roof, facing the horizon", fr: "Sous le toit, face à l'horizon" },
            description: {
                en: "A top-floor loft in the old granary with a round window towards the lighthouse, a writing desk and a private roof terrace for sunset.",
                fr: "Un loft au dernier étage de l'ancien grenier, avec une fenêtre ronde vers le phare, un bureau d'écriture et un toit-terrasse privé pour le coucher du soleil.",
            },
            size: 40,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Horizon", fr: "Horizon" },
            priceFrom: 440,
            images: [u("photo-1585620089933-768743dfc8f1"), u("photo-1519710889408-a67e1c7e0452"), u("photo-1652447385283-817463bd31af")],
            amenities: [
                { en: "Private roof terrace", fr: "Toit-terrasse privé" },
                { en: "Writing desk", fr: "Bureau d'écriture" },
                { en: "Walk-in shower", fr: "Douche à l'italienne" },
                { en: "Record player", fr: "Platine vinyle" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=loft`,
        },
    ],
    experiences: [
        {
            slug: "half-day-sail",
            title: { en: "A half-day sail", fr: "Une demi-journée de voile" },
            category: { en: "On the water", fr: "Sur l'eau" },
            summary: {
                en: "Sail the south coast on a classic wooden sloop, anchor in a cove for a swim and lunch on deck.",
                fr: "Naviguez le long de la côte sud à bord d'un sloop en bois, mouillez dans une crique pour une baignade et un déjeuner à bord.",
            },
            duration: { en: "4 hours", fr: "4 heures" },
            season: { en: "May – October", fr: "Mai – octobre" },
            image: u("photo-1546214755-c5d22447b43b"),
        },
        {
            slug: "cove-swims",
            title: { en: "Morning cove swims", fr: "Baignades matinales en crique" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Walk the fishermen's path at dawn to a cove you'll have entirely to yourselves. Masks and fins provided.",
                fr: "Suivez le chemin des pêcheurs à l'aube jusqu'à une crique rien qu'à vous. Masques et palmes fournis.",
            },
            duration: { en: "2 hours", fr: "2 heures" },
            season: { en: "June – September", fr: "Juin – septembre" },
            image: u("photo-1788643237824-b0194b418901"),
        },
        {
            slug: "jetty-dinner",
            title: { en: "Dinner on the jetty", fr: "Dîner sur le ponton" },
            category: { en: "Dining", fr: "Table" },
            summary: {
                en: "The catch of the day grilled over vine wood, served at a long table over the water as the sun goes down.",
                fr: "La pêche du jour grillée sur des sarments, servie à une longue table au-dessus de l'eau au coucher du soleil.",
            },
            duration: { en: "Evenings, 8:30 pm", fr: "Le soir, 20h30" },
            season: { en: "Wednesday & Saturday", fr: "Mercredi et samedi" },
            image: u("photo-1662495051087-3266e9608efd"),
        },
        {
            slug: "coastal-walk",
            title: { en: "The old coast path", fr: "L'ancien chemin côtier" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Follow a stretch of the island's historic bridle path through pine and limestone, with our host as your guide.",
                fr: "Parcourez une portion de l'ancien chemin cavalier de l'île parmi pins et calcaire, avec notre hôtesse pour guide.",
            },
            duration: { en: "3 hours", fr: "3 heures" },
            season: { en: "All year", fr: "Toute l'année" },
            image: u("photo-1784307003797-f63182bca113"),
        },
        {
            slug: "sunset-wine",
            title: { en: "Island wine at sunset", fr: "Vin de l'île au coucher du soleil" },
            category: { en: "Tasting", fr: "Dégustation" },
            summary: {
                en: "Taste wines from three small island vineyards on the terrace, with cheese from the farm next door.",
                fr: "Dégustez les vins de trois petits domaines de l'île en terrasse, avec le fromage de la ferme voisine.",
            },
            duration: { en: "90 minutes", fr: "90 minutes" },
            season: { en: "Fridays", fr: "Le vendredi" },
            image: u("photo-1639244132045-94c307ff4bfc"),
        },
    ],
    testimonials: [
        {
            quote: {
                en: "The light in that suite in the morning is something I think about every week. Pure, unhurried happiness.",
                fr: "La lumière de cette suite le matin, j'y pense chaque semaine. Un bonheur pur et sans hâte.",
            },
            author: "Sophie & Ben",
            origin: { en: "Amsterdam", fr: "Amsterdam" },
        },
        {
            quote: {
                en: "Like staying with very stylish friends who happen to own the most beautiful cove in the Mediterranean.",
                fr: "Comme séjourner chez des amis très élégants qui posséderaient la plus belle crique de la Méditerranée.",
            },
            author: "Daniel K.",
            origin: { en: "Berlin", fr: "Berlin" },
        },
        {
            quote: {
                en: "Dinner on the jetty, a swim at midnight, breakfast under the fig tree. We have already rebooked.",
                fr: "Dîner sur le ponton, baignade à minuit, petit-déjeuner sous le figuier. Nous avons déjà réservé à nouveau.",
            },
            author: "Elena R.",
            origin: { en: "Madrid", fr: "Madrid" },
        },
    ],
    team: [
        { name: "Lucía Ferrer", role: { en: "Founder & host", fr: "Fondatrice et hôtesse" }, image: u("photo-1783595468354-7f5543c947b9", 900) },
        { name: "Aina Pons", role: { en: "Head of kitchen", fr: "Cheffe de cuisine" }, image: u("photo-1760124146286-2e1eb3e9f906", 900) },
        { name: "Clara Mir", role: { en: "Guest experiences", fr: "Expériences des hôtes" }, image: u("photo-1735656014656-86276e4d6cc9", 900) },
    ],
    offers: coastalOffers,
    journal: coastalJournal,
    gallery: coastalGallery,
    faq: coastalFaq,
};
