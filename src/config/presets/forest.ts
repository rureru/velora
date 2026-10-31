import type { Preset } from "../types";
import { pexels, unsplash as u, unsplashOg } from "./image";
import { forestOffers } from "@/content/offers/forest";
import { forestJournal } from "@/content/journal/forest";
import { forestGallery } from "@/content/gallery/forest";
import { forestFaq } from "@/content/faq/forest";

/**
 * DEMO PRESET — "Forest & Mountain Lodge"
 * Every name, address, price, quote and booking link below is fictional demo content.
 */
const BOOK = "https://booking.example.com/velora-lodge";

export const forest: Preset = {
    id: "forest",
    label: "Forest & Mountain Lodge",
    brand: {
        name: "Velora",
        descriptor: { en: "Forest & Mountain Lodge", fr: "Lodge de forêt et de montagne" },
        logo: "",
    },
    theme: {
        bg: "#F2EFEB",
        surface: "#E7E2D9",
        ink: "#2B2E28",
        muted: "#585D52",
        accent: "#4A5D4E",
        line: "#D3CDC2",
        deep: "#1F241E",
        onDeep: "#EDE9E1",
        deepMuted: "#B4B8AB",
    },
    seo: {
        title: { en: "Velora — Boutique forest & mountain lodge in the Alps", fr: "Velora — Lodge boutique de forêt et de montagne dans les Alpes" },
        description: {
            en: "Twelve rooms and cabins among larch and spruce at 1,400 m. Wood sauna, long-table dinners and trails from the door. Book direct for the best rate.",
            fr: "Douze chambres et cabanes parmi les mélèzes à 1 400 m. Sauna au bois, dîners à la grande table et sentiers depuis la porte. Réservez en direct au meilleur tarif.",
        },
        image: unsplashOg("photo-1527971179697-13dce75dfbd0"),
        schemaType: "Hotel",
        priceRange: "€€€",
    },
    contact: {
        address: ["Route des Mélèzes 14", "Val Serein, 74400", "Haute-Savoie, France"],
        phone: "+33 4 00 00 00 00",
        email: "stay@velora-lodge.example",
        hours: { en: "Reception open daily, 7:00 – 22:00", fr: "Réception ouverte tous les jours, 7h00 – 22h00" },
        coordinates: { lat: 45.9237, lng: 6.8694 },
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
        hero: u("photo-1527971179697-13dce75dfbd0", 2400),
        intro: u("photo-1627750168257-9a7d3965ef8b"),
        introSecondary: u("photo-1734599505058-6653a0d8d3ff", 1000),
        location: u("photo-1675458349418-b6e8215f1d6b"),
        cta: u("photo-1531057228999-37933ba12c52", 2400),
        accommodationsHero: u("photo-1727706572437-4fcda0cbd66f", 2400),
        experiencesHero: u("photo-1758438919146-f3f59a6d2544", 2400),
        aboutHero: u("photo-1453130141570-619edbe7af2a", 2400),
        aboutArchitecture: pexels(30708768),
        aboutSustainability: u("photo-1769766160718-efc12335c588"),
        contactHero: u("photo-1603109613299-ed3680959d26", 2400),
        offersHero: u("photo-1549778892-101c88c767c7", 2400),
        journalHero: u("photo-1610829702204-d42b9922d03b", 2400),
        galleryHero: u("photo-1453130141570-619edbe7af2a", 2400),
        faqHero: u("photo-1734599511415-cb4a52aea2fe", 2400),
    },
    copy: {
        hero: {
            eyebrow: { en: "A lodge at 1,400 metres", fr: "Un lodge à 1 400 mètres" },
            lines: [
                { en: "Where the forest", fr: "Là où la forêt" },
                { en: "keeps time", fr: "garde le temps" },
                { en: "for you.", fr: "pour vous." },
            ],
            sub: {
                en: "Twelve rooms and cabins among larch and spruce, an hour above the valley.",
                fr: "Douze chambres et cabanes parmi les mélèzes et les épicéas, à une heure au-dessus de la vallée.",
            },
        },
        intro: {
            title: { en: "A house built for slow mornings.", fr: "Une maison faite pour les matins lents." },
            body: {
                en: "Velora began as a shepherd's barn and grew, carefully, into a small lodge. We kept the stone, the old beams and the silence, then added deep baths, wide windows and a kitchen that cooks with what the mountain gives each week.",
                fr: "Velora était une grange de berger devenue, avec patience, un petit lodge. Nous avons gardé la pierre, les vieilles poutres et le silence, puis ajouté des baignoires profondes, de grandes fenêtres et une cuisine qui suit ce que la montagne offre chaque semaine.",
            },
            facts: [
                { value: { en: "12", fr: "12" }, label: { en: "Rooms & cabins", fr: "Chambres et cabanes" } },
                { value: { en: "62 ha", fr: "62 ha" }, label: { en: "Private forest", fr: "Forêt privée" } },
                { value: { en: "1,400 m", fr: "1 400 m" }, label: { en: "Altitude", fr: "Altitude" } },
            ],
        },
        marquee: [
            { en: "Slow mornings", fr: "Matins lents" },
            { en: "Mountain air", fr: "Air des montagnes" },
            { en: "Stillness", fr: "Silence" },
            { en: "Woodsmoke", fr: "Feu de bois" },
            { en: "Open skies", fr: "Ciel ouvert" },
        ],
        location: {
            title: { en: "Field notes from the valley above.", fr: "Carnet de terrain, au-dessus de la vallée." },
            body: {
                en: "The road ends at our gate. Beyond it: a glacier lake, a chain of alpine meadows and trails that begin at the door. The nearest village, with its Saturday market, is a twenty-minute walk downhill.",
                fr: "La route s'arrête à notre portail. Au-delà : un lac glaciaire, des alpages en chapelet et des sentiers qui partent de la porte. Le village le plus proche et son marché du samedi sont à vingt minutes à pied.",
            },
            facts: [
                { value: { en: "1 h 20", fr: "1 h 20" }, label: { en: "From Geneva airport", fr: "Depuis l'aéroport de Genève" } },
                { value: { en: "8 km", fr: "8 km" }, label: { en: "To the nearest station", fr: "Jusqu'à la gare la plus proche" } },
                { value: { en: "Door", fr: "Porte" }, label: { en: "Where every trail starts", fr: "Où commence chaque sentier" } },
            ],
        },
        cta: {
            title: { en: "Your room in the trees is waiting.", fr: "Votre chambre dans les arbres vous attend." },
            body: {
                en: "Reserve directly with us for the best rate and a welcome by the fire.",
                fr: "Réservez directement auprès de nous pour le meilleur tarif et un accueil au coin du feu.",
            },
        },
        accommodations: {
            title: { en: "Rooms, suites & cabins", fr: "Chambres, suites et cabanes" },
            intro: {
                en: "Each space is built from local larch and lime plaster, with linen from a mill two valleys away. No two are quite the same.",
                fr: "Chaque espace est construit en mélèze local et enduit à la chaux, avec un linge tissé à deux vallées d'ici. Aucun n'est tout à fait identique.",
            },
        },
        experiences: {
            title: { en: "Days shaped by the mountain", fr: "Des journées façonnées par la montagne" },
            intro: {
                en: "Nothing is scheduled unless you want it to be. These are the rituals our guests return for.",
                fr: "Rien n'est planifié, sauf si vous le souhaitez. Voici les rituels pour lesquels nos hôtes reviennent.",
            },
        },
        about: {
            title: { en: "A barn, a forest and a long, patient idea", fr: "Une grange, une forêt et une longue idée patiente" },
            intro: {
                en: "We are a family-run lodge with twelve rooms and a simple belief: the best luxury is time, quiet and good bread.",
                fr: "Nous sommes un lodge familial de douze chambres avec une conviction simple : le vrai luxe, c'est le temps, le calme et le bon pain.",
            },
            story: [
                {
                    en: "In 2014 we bought a collapsing shepherd's barn at the edge of a larch forest. It took six winters, two local carpenters and a great deal of soup to bring it back.",
                    fr: "En 2014, nous avons acheté une grange de berger en ruine à l'orée d'une forêt de mélèzes. Il a fallu six hivers, deux charpentiers du pays et beaucoup de soupe pour la relever.",
                },
                {
                    en: "Today Velora welcomes travellers who would rather listen to the rain on the roof than to a lobby playlist. We cook, we walk, we light the sauna at dusk, and we try to stay out of the way.",
                    fr: "Aujourd'hui, Velora accueille des voyageurs qui préfèrent écouter la pluie sur le toit plutôt qu'une playlist de hall d'hôtel. Nous cuisinons, nous marchons, nous allumons le sauna au crépuscule et nous restons discrets.",
                },
            ],
            principles: [
                {
                    title: { en: "Fewer, better things", fr: "Moins, mais mieux" },
                    body: { en: "Twelve rooms, one kitchen, no rush. We grow slowly on purpose.", fr: "Douze chambres, une cuisine, aucune précipitation. Nous grandissons lentement, à dessein." },
                },
                {
                    title: { en: "Made nearby", fr: "Fait près d'ici" },
                    body: { en: "Furniture, linen, cheese and wine come from within sixty kilometres.", fr: "Mobilier, linge, fromage et vin viennent de moins de soixante kilomètres." },
                },
                {
                    title: { en: "Room to breathe", fr: "De l'espace pour respirer" },
                    body: { en: "Wide windows, thick walls and no televisions. The view is the entertainment.", fr: "De grandes fenêtres, des murs épais et pas de télévision. La vue suffit." },
                },
            ],
            architecture: {
                title: { en: "Architecture that lets the weather in", fr: "Une architecture qui laisse entrer le temps qu'il fait" },
                body: {
                    en: "The original stone base carries a new timber frame of untreated larch that silvers with the seasons. Deep window seats frame the peaks; lime plaster keeps the air soft and dry.",
                    fr: "Le socle de pierre d'origine porte une nouvelle charpente en mélèze brut qui grisonne au fil des saisons. Des banquettes profondes encadrent les sommets ; l'enduit à la chaux garde l'air doux et sec.",
                },
            },
            sustainability: {
                title: { en: "Quietly sustainable", fr: "Durable, sans bruit" },
                points: [
                    { en: "Heated by a wood-chip boiler fed from our own forest thinning.", fr: "Chauffage par chaudière à plaquettes issues de l'éclaircie de notre forêt." },
                    { en: "Spring water, filtered on site. No plastic bottles.", fr: "Eau de source filtrée sur place. Aucune bouteille en plastique." },
                    { en: "Kitchen garden and compost cover a third of our produce.", fr: "Potager et compost couvrent un tiers de nos produits." },
                    { en: "Free shuttle from the valley train station.", fr: "Navette gratuite depuis la gare de la vallée." },
                ],
            },
        },
        contact: {
            title: { en: "Write to us, or simply arrive", fr: "Écrivez-nous, ou venez simplement" },
            intro: {
                en: "Questions about rooms, transfers or private stays — our team usually replies within a day.",
                fr: "Questions sur les chambres, les transferts ou les séjours privés — notre équipe répond généralement sous 24 heures.",
            },
        },
        offers: {
            title: { en: "Seasonal stays & packages", fr: "Séjours de saison et forfaits" },
            intro: {
                en: "Each season on the mountain has its own pace. These packages bundle the rituals we love most into a single, simple rate.",
                fr: "Chaque saison en montagne a son rythme. Ces forfaits réunissent nos rituels préférés en un tarif unique et simple.",
            },
        },
        journal: {
            title: { en: "Journal", fr: "Journal" },
            intro: {
                en: "Notes from the forest: recipes from the kitchen, walks worth taking and the people who make this place.",
                fr: "Notes de la forêt : recettes de la cuisine, marches à faire et les personnes qui font ce lieu.",
            },
        },
        gallery: {
            title: { en: "Gallery", fr: "Galerie" },
            intro: {
                en: "Rooms of larch and lime, plates from the garden and the mountain in every kind of weather.",
                fr: "Des chambres de mélèze et de chaux, des assiettes du potager et la montagne par tous les temps.",
            },
        },
        faq: {
            title: { en: "Questions, answered", fr: "Vos questions, nos réponses" },
            intro: {
                en: "Everything you might want to know before you arrive. If your question isn't here, write to us.",
                fr: "Tout ce que vous voudrez savoir avant d'arriver. Si votre question n'y figure pas, écrivez-nous.",
            },
        },
    },
    roomTypes: [
        { id: "room", label: { en: "Rooms", fr: "Chambres" } },
        { id: "suite", label: { en: "Suites", fr: "Suites" } },
        { id: "cabin", label: { en: "Cabins", fr: "Cabanes" } },
    ],
    rooms: [
        {
            slug: "fern-room",
            type: "room",
            name: { en: "The Fern Room", fr: "La Chambre Fougère" },
            tagline: { en: "A quiet room facing the forest edge", fr: "Une chambre calme face à la lisière" },
            description: {
                en: "Our smallest room and a guest favourite. A linen-dressed bed sits beneath a low beamed ceiling, with a reading nook built into the window and a rain shower in local stone.",
                fr: "Notre plus petite chambre et la préférée de nos hôtes. Un lit habillé de lin sous un plafond à poutres basses, un coin lecture dans la fenêtre et une douche à l'italienne en pierre locale.",
            },
            size: 24,
            guests: 2,
            beds: { en: "1 queen bed", fr: "1 lit queen" },
            view: { en: "Forest", fr: "Forêt" },
            priceFrom: 240,
            images: [u("photo-1734599511415-cb4a52aea2fe"), u("photo-1734599505058-6653a0d8d3ff"), u("photo-1789930153790-6ccf207aed1d")],
            amenities: [
                { en: "Rain shower", fr: "Douche pluie" },
                { en: "Window reading nook", fr: "Coin lecture en fenêtre" },
                { en: "Organic toiletries", fr: "Produits de toilette bio" },
                { en: "Wi-Fi on request", fr: "Wi-Fi sur demande" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=fern`,
            featured: true,
        },
        {
            slug: "larch-suite",
            type: "suite",
            name: { en: "The Larch Suite", fr: "La Suite Mélèze" },
            tagline: { en: "Corner suite with a freestanding bath", fr: "Suite d'angle avec baignoire îlot" },
            description: {
                en: "Two walls of windows, a freestanding bath turned toward the peaks and a separate sitting room with a wood stove. The suite occupies the oldest corner of the barn.",
                fr: "Deux murs de fenêtres, une baignoire îlot tournée vers les sommets et un salon séparé avec poêle à bois. La suite occupe l'angle le plus ancien de la grange.",
            },
            size: 48,
            guests: 3,
            beds: { en: "1 king bed + daybed", fr: "1 lit king + banquette-lit" },
            view: { en: "Mountain", fr: "Montagne" },
            priceFrom: 420,
            images: [u("photo-1727706572437-4fcda0cbd66f"), pexels(30708768), u("photo-1734599511415-cb4a52aea2fe")],
            amenities: [
                { en: "Freestanding bath", fr: "Baignoire îlot" },
                { en: "Wood-burning stove", fr: "Poêle à bois" },
                { en: "Separate sitting room", fr: "Salon séparé" },
                { en: "Espresso & tea bar", fr: "Bar à café et thé" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=larch`,
            featured: true,
        },
        {
            slug: "ridge-cabin",
            type: "cabin",
            name: { en: "Ridge Cabin", fr: "Cabane de la Crête" },
            tagline: { en: "A standalone cabin among the spruce", fr: "Une cabane isolée parmi les épicéas" },
            description: {
                en: "Five minutes' walk from the main house, the Ridge Cabin has its own deck, outdoor tub and a sleeping loft under the stars. Breakfast arrives in a basket at the hour you choose.",
                fr: "À cinq minutes à pied de la maison, la Cabane de la Crête a sa terrasse, son bain extérieur et une mezzanine sous les étoiles. Le petit-déjeuner arrive en panier à l'heure choisie.",
            },
            size: 56,
            guests: 4,
            beds: { en: "1 king bed + 2 loft singles", fr: "1 lit king + 2 lits simples en mezzanine" },
            view: { en: "Forest & valley", fr: "Forêt et vallée" },
            priceFrom: 560,
            images: [u("photo-1627750168257-9a7d3965ef8b"), pexels(9890650), u("photo-1531057228999-37933ba12c52")],
            amenities: [
                { en: "Private deck", fr: "Terrasse privée" },
                { en: "Wood-fired outdoor tub", fr: "Bain extérieur chauffé au bois" },
                { en: "Kitchenette", fr: "Kitchenette" },
                { en: "Breakfast basket", fr: "Panier petit-déjeuner" },
                { en: "Pet friendly", fr: "Animaux acceptés" },
            ],
            bookingUrl: `${BOOK}?room=ridge`,
            featured: true,
        },
        {
            slug: "mist-loft",
            type: "suite",
            name: { en: "The Mist Loft", fr: "Le Loft Brume" },
            tagline: { en: "Under the eaves, above the clouds", fr: "Sous les combles, au-dessus des nuages" },
            description: {
                en: "A top-floor loft beneath the original roof trusses, with a skylight over the bed and a long desk for those who must, occasionally, work.",
                fr: "Un loft au dernier étage sous la charpente d'origine, avec un puits de lumière au-dessus du lit et un long bureau pour ceux qui doivent, parfois, travailler.",
            },
            size: 38,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Sky & peaks", fr: "Ciel et sommets" },
            priceFrom: 360,
            images: [u("photo-1734599505058-6653a0d8d3ff"), u("photo-1727706572437-4fcda0cbd66f"), u("photo-1789930153790-6ccf207aed1d")],
            amenities: [
                { en: "Skylight above bed", fr: "Puits de lumière au-dessus du lit" },
                { en: "Writing desk", fr: "Bureau d'écriture" },
                { en: "Walk-in shower", fr: "Douche à l'italienne" },
                { en: "Record player", fr: "Platine vinyle" },
                { en: "Breakfast included", fr: "Petit-déjeuner inclus" },
            ],
            bookingUrl: `${BOOK}?room=mist`,
        },
        {
            slug: "hideaway-cabin",
            type: "cabin",
            name: { en: "Hideaway Cabin", fr: "Cabane Refuge" },
            tagline: { en: "The most secluded cabin on the estate", fr: "La cabane la plus retirée du domaine" },
            description: {
                en: "At the end of a lantern-lit path, the Hideaway is built for two: a hearth, a deep bath, a meadow of your own and no neighbours within earshot.",
                fr: "Au bout d'un sentier éclairé de lanternes, le Refuge est pensé pour deux : une cheminée, un bain profond, une prairie pour vous seuls et aucun voisin à portée de voix.",
            },
            size: 42,
            guests: 2,
            beds: { en: "1 king bed", fr: "1 lit king" },
            view: { en: "Meadow", fr: "Prairie" },
            priceFrom: 480,
            images: [u("photo-1531057228999-37933ba12c52"), pexels(9890650), u("photo-1734599511415-cb4a52aea2fe")],
            amenities: [
                { en: "Open hearth", fr: "Cheminée ouverte" },
                { en: "Deep soaking tub", fr: "Baignoire profonde" },
                { en: "Private meadow", fr: "Prairie privée" },
                { en: "Breakfast basket", fr: "Panier petit-déjeuner" },
                { en: "Stargazing blanket kit", fr: "Kit couvertures pour observer les étoiles" },
            ],
            bookingUrl: `${BOOK}?room=hideaway`,
        },
    ],
    experiences: [
        {
            slug: "forest-walks",
            title: { en: "Guided forest walks", fr: "Marches guidées en forêt" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Follow our forester through old-growth spruce, learning to read tracks, mushrooms and the moods of the weather.",
                fr: "Suivez notre forestier parmi les vieux épicéas et apprenez à lire les traces, les champignons et l'humeur du ciel.",
            },
            duration: { en: "3 hours", fr: "3 heures" },
            season: { en: "May – October", fr: "Mai – octobre" },
            image: u("photo-1758438919146-f3f59a6d2544"),
        },
        {
            slug: "sauna-plunge",
            title: { en: "Wood sauna & cold plunge", fr: "Sauna au bois et bain froid" },
            category: { en: "Wellbeing", fr: "Bien-être" },
            summary: {
                en: "A lakeside sauna heated with birch, followed by a plunge in water fed by the glacier. Repeat until calm.",
                fr: "Un sauna au bord du lac chauffé au bouleau, puis un plongeon dans une eau venue du glacier. À répéter jusqu'au calme.",
            },
            duration: { en: "90 minutes", fr: "90 minutes" },
            season: { en: "All year", fr: "Toute l'année" },
            image: u("photo-1660735698223-23a4edefa264"),
        },
        {
            slug: "long-table",
            title: { en: "Long-table dinners", fr: "Dîners à la grande table" },
            category: { en: "Dining", fr: "Table" },
            summary: {
                en: "Five courses from the garden and the valley, served by candlelight at one table shared by every guest.",
                fr: "Cinq plats du potager et de la vallée, servis aux chandelles sur une seule table partagée par tous les hôtes.",
            },
            duration: { en: "Evenings, 7:30 pm", fr: "Le soir, 19h30" },
            season: { en: "Thursday – Sunday", fr: "Jeudi – dimanche" },
            image: u("photo-1562050344-f7ad946cee35"),
        },
        {
            slug: "stargazing",
            title: { en: "Stargazing in the meadow", fr: "Étoiles dans la prairie" },
            category: { en: "Night", fr: "Nuit" },
            summary: {
                en: "Blankets, a telescope and a flask of mulled wine. No light pollution for twenty kilometres in any direction.",
                fr: "Des couvertures, un télescope et une gourde de vin chaud. Aucune pollution lumineuse à vingt kilomètres à la ronde.",
            },
            duration: { en: "2 hours", fr: "2 heures" },
            season: { en: "Clear nights", fr: "Nuits claires" },
            image: u("photo-1509773896068-7fd415d91e2e"),
        },
        {
            slug: "lake-dawn",
            title: { en: "Dawn on the glacier lake", fr: "L'aube sur le lac glaciaire" },
            category: { en: "Outdoors", fr: "Plein air" },
            summary: {
                en: "Paddle out at first light as the mist lifts from the water. Coffee and warm rolls wait on the shore.",
                fr: "Pagayez aux premières lueurs quand la brume se lève. Café et petits pains chauds vous attendent sur la rive.",
            },
            duration: { en: "2 hours", fr: "2 heures" },
            season: { en: "June – September", fr: "Juin – septembre" },
            image: u("photo-1674883045511-244d45898fa2"),
        },
    ],
    testimonials: [
        {
            quote: {
                en: "We came for three nights and stayed for six. The silence there has a texture you can almost hold.",
                fr: "Nous sommes venus pour trois nuits et sommes restés six. Le silence y a une texture qu'on pourrait presque toucher.",
            },
            author: "Claire & Tomas",
            origin: { en: "Copenhagen", fr: "Copenhague" },
        },
        {
            quote: {
                en: "The most thoughtful small hotel I have stayed in. Every detail feels considered, nothing feels staged.",
                fr: "Le petit hôtel le plus attentionné que je connaisse. Chaque détail est pensé, rien n'est mis en scène.",
            },
            author: "Jonathan R.",
            origin: { en: "London", fr: "Londres" },
        },
        {
            quote: {
                en: "Sauna at dusk, dinner by candlelight, then the clearest stars of our lives. We are already planning winter.",
                fr: "Sauna au crépuscule, dîner aux chandelles, puis les étoiles les plus nettes de notre vie. Nous préparons déjà l'hiver.",
            },
            author: "Mara L.",
            origin: { en: "Milan", fr: "Milan" },
        },
    ],
    team: [
        { name: "Élise Marchand", role: { en: "Founder & host", fr: "Fondatrice et hôte" }, image: u("photo-1544005313-94ddf0286df2", 900) },
        { name: "Julien Arnaud", role: { en: "Forester & guide", fr: "Forestier et guide" }, image: u("photo-1616235931438-f67c5caed868", 900) },
        { name: "Inès Morel", role: { en: "Head of kitchen", fr: "Cheffe de cuisine" }, image: u("photo-1614204424926-196a80bf0be8", 900) },
    ],
    offers: forestOffers,
    journal: forestJournal,
    gallery: forestGallery,
    faq: forestFaq,
};
