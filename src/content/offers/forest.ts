import type { Offer } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/** DEMO OFFERS — Forest & Mountain Lodge. Dates, prices and links are fictional. */
const BOOK = "https://booking.example.com/velora-lodge";

export const forestOffers: Offer[] = [
    {
        slug: "winter-fireside",
        title: { en: "Winter by the fire", fr: "L'hiver au coin du feu" },
        tag: { en: "Winter", fr: "Hiver" },
        summary: {
            en: "Snowshoe walks by day, the sauna at dusk and long dinners as the snow falls past the windows.",
            fr: "Raquettes le jour, sauna au crépuscule et longs dîners pendant que la neige tombe derrière les fenêtres.",
        },
        validFrom: "2026-12-01",
        validTo: "2027-03-31",
        minNights: 3,
        price: 1290,
        priceLabel: { en: "for two, 3 nights", fr: "pour deux, 3 nuits" },
        inclusions: [
            { en: "Three nights in a room or suite", fr: "Trois nuits en chambre ou suite" },
            { en: "Breakfast and one long-table dinner", fr: "Petit-déjeuner et un dîner à la grande table" },
            { en: "Guided snowshoe walk", fr: "Sortie guidée en raquettes" },
            { en: "Private sauna session for two", fr: "Séance de sauna privée pour deux" },
        ],
        image: u("photo-1638985787285-46f05ff063f2"),
        bookingUrl: `${BOOK}?offer=winter`,
    },
    {
        slug: "spring-midweek",
        title: { en: "Midweek spring thaw", fr: "Dégel de printemps en semaine" },
        tag: { en: "Spring", fr: "Printemps" },
        summary: {
            en: "When the meadows turn green and the waterfalls wake up — stay four nights midweek and pay for three.",
            fr: "Quand les alpages reverdissent et que les cascades se réveillent — quatre nuits en semaine pour le prix de trois.",
        },
        validFrom: "2027-04-06",
        validTo: "2027-06-17",
        minNights: 4,
        price: 960,
        priceLabel: { en: "for two, 4 nights", fr: "pour deux, 4 nuits" },
        inclusions: [
            { en: "Fourth night complimentary (Mon–Thu)", fr: "Quatrième nuit offerte (lun.–jeu.)" },
            { en: "Daily breakfast", fr: "Petit-déjeuner quotidien" },
            { en: "Wildflower walk with our forester", fr: "Balade des fleurs sauvages avec notre forestier" },
            { en: "Picnic basket for the trail", fr: "Panier pique-nique pour le sentier" },
        ],
        image: u("photo-1675458349418-b6e8215f1d6b"),
        bookingUrl: `${BOOK}?offer=spring`,
    },
    {
        slug: "autumn-retreat",
        title: { en: "Autumn forest retreat", fr: "Retraite d'automne en forêt" },
        tag: { en: "Autumn", fr: "Automne" },
        summary: {
            en: "Larches turning gold, mushrooms in the kitchen and a cabin to yourselves. Our favourite season, slowed right down.",
            fr: "Mélèzes dorés, champignons en cuisine et une cabane pour vous seuls. Notre saison préférée, au ralenti.",
        },
        validFrom: "2027-09-06",
        validTo: "2027-11-14",
        minNights: 2,
        price: 1180,
        priceLabel: { en: "for two, 2 nights", fr: "pour deux, 2 nuits" },
        inclusions: [
            { en: "Two nights in a standalone cabin", fr: "Deux nuits en cabane isolée" },
            { en: "Breakfast basket each morning", fr: "Panier petit-déjeuner chaque matin" },
            { en: "Foraging walk and tasting dinner", fr: "Cueillette guidée et dîner dégustation" },
            { en: "Late check-out until 2 pm", fr: "Départ tardif jusqu'à 14h" },
        ],
        image: u("photo-1627750168257-9a7d3965ef8b"),
        bookingUrl: `${BOOK}?offer=autumn`,
    },
];
