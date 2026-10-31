import type { Offer } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/** DEMO OFFERS — Coastal Villa Retreat. Dates, prices and links are fictional. */
const BOOK = "https://booking.example.com/velora-coast";

export const coastalOffers: Offer[] = [
    {
        slug: "early-summer",
        title: { en: "Early summer by the sea", fr: "Début d'été au bord de la mer" },
        tag: { en: "Early summer", fr: "Début d'été" },
        summary: {
            en: "Warm water, quiet coves and long evenings before the crowds arrive. Includes a half-day sail along the coast.",
            fr: "Eau chaude, criques calmes et longues soirées avant l'arrivée des foules. Avec une demi-journée de voile le long de la côte.",
        },
        validFrom: "2027-05-15",
        validTo: "2027-06-30",
        minNights: 3,
        price: 1380,
        priceLabel: { en: "for two, 3 nights", fr: "pour deux, 3 nuits" },
        inclusions: [
            { en: "Three nights in a sea-view room or suite", fr: "Trois nuits en chambre ou suite vue mer" },
            { en: "Breakfast on the terrace", fr: "Petit-déjeuner en terrasse" },
            { en: "Half-day sail with lunch on board", fr: "Demi-journée de voile avec déjeuner à bord" },
            { en: "Welcome bottle of island wine", fr: "Bouteille de vin de l'île offerte" },
        ],
        image: u("photo-1546214755-c5d22447b43b"),
        bookingUrl: `${BOOK}?offer=early-summer`,
    },
    {
        slug: "september-light",
        title: { en: "September light", fr: "Lumière de septembre" },
        tag: { en: "Late summer", fr: "Fin d'été" },
        summary: {
            en: "The sea at its warmest, the light at its softest. Stay five nights, pay for four, and dine one evening at the water's edge.",
            fr: "La mer à son plus chaud, la lumière à son plus doux. Cinq nuits pour le prix de quatre et un dîner au bord de l'eau.",
        },
        validFrom: "2027-09-01",
        validTo: "2027-10-10",
        minNights: 5,
        price: 1960,
        priceLabel: { en: "for two, 5 nights", fr: "pour deux, 5 nuits" },
        inclusions: [
            { en: "Fifth night complimentary", fr: "Cinquième nuit offerte" },
            { en: "Daily breakfast", fr: "Petit-déjeuner quotidien" },
            { en: "Seafood dinner on the jetty", fr: "Dîner de la mer sur le ponton" },
            { en: "Kayak hire for the cove", fr: "Location de kayak pour la crique" },
        ],
        image: u("photo-1662495051087-3266e9608efd"),
        bookingUrl: `${BOOK}?offer=september`,
    },
    {
        slug: "winter-villa",
        title: { en: "A villa for winter", fr: "Une villa pour l'hiver" },
        tag: { en: "Winter", fr: "Hiver" },
        summary: {
            en: "Mild days, empty beaches and a whole villa to yourselves — a week-long escape with a private cook on two evenings.",
            fr: "Journées douces, plages désertes et une villa rien qu'à vous — une semaine d'évasion avec un cuisinier privé deux soirs.",
        },
        validFrom: "2026-11-15",
        validTo: "2027-03-15",
        minNights: 7,
        price: 3150,
        priceLabel: { en: "per villa, 7 nights", fr: "par villa, 7 nuits" },
        inclusions: [
            { en: "Seven nights in a private villa", fr: "Sept nuits en villa privée" },
            { en: "Private cook on two evenings", fr: "Cuisinier privé deux soirs" },
            { en: "Fireplace and wood supply", fr: "Cheminée et bois fourni" },
            { en: "Coastal walk with our host", fr: "Balade côtière avec notre hôte" },
        ],
        image: u("photo-1765999906700-2d4dfd392966"),
        bookingUrl: `${BOOK}?offer=winter-villa`,
    },
];
