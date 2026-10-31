import type { Offer } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/** DEMO OFFERS — Desert Eco-Resort. Dates, prices and links are fictional. */
const BOOK = "https://booking.example.com/velora-desert";

export const desertOffers: Offer[] = [
    {
        slug: "winter-stars",
        title: { en: "Winter stars", fr: "Étoiles d'hiver" },
        tag: { en: "Winter", fr: "Hiver" },
        summary: {
            en: "Crisp days, cold clear nights and the sharpest skies of the year — with a private session at our observatory.",
            fr: "Journées fraîches, nuits froides et claires et le ciel le plus net de l'année — avec une séance privée à l'observatoire.",
        },
        validFrom: "2026-11-15",
        validTo: "2027-02-28",
        minNights: 3,
        price: 1340,
        priceLabel: { en: "for two, 3 nights", fr: "pour deux, 3 nuits" },
        inclusions: [
            { en: "Three nights in a Star Dome", fr: "Trois nuits dans un Dôme des Étoiles" },
            { en: "Half board with dinner in the dunes", fr: "Demi-pension avec dîner dans les dunes" },
            { en: "Private night-sky session", fr: "Séance d'astronomie privée" },
            { en: "Return airport transfers", fr: "Transferts aéroport aller-retour" },
        ],
        image: u("photo-1488866022504-f2584929ca5f"),
        bookingUrl: `${BOOK}?offer=winter-stars`,
    },
    {
        slug: "spring-caravan",
        title: { en: "Spring caravan", fr: "Caravane de printemps" },
        tag: { en: "Spring", fr: "Printemps" },
        summary: {
            en: "Four nights between the camp and the open erg, including a night under canvas at a remote dune camp.",
            fr: "Quatre nuits entre le camp et l'erg ouvert, dont une nuit sous la toile dans un bivouac isolé.",
        },
        validFrom: "2027-03-01",
        validTo: "2027-05-15",
        minNights: 4,
        price: 1690,
        priceLabel: { en: "for two, 4 nights", fr: "pour deux, 4 nuits" },
        inclusions: [
            { en: "Three nights at camp, one at a remote bivouac", fr: "Trois nuits au camp, une en bivouac isolé" },
            { en: "Full board throughout", fr: "Pension complète" },
            { en: "Two camel treks with a guide", fr: "Deux méharées guidées" },
            { en: "Clay hammam ritual", fr: "Rituel au hammam d'argile" },
        ],
        image: u("photo-1776319967759-2a6484370b94"),
        bookingUrl: `${BOOK}?offer=caravan`,
    },
    {
        slug: "autumn-slow",
        title: { en: "Slow autumn", fr: "Automne lent" },
        tag: { en: "Autumn", fr: "Automne" },
        summary: {
            en: "As the heat softens, stay longer: a clay suite, a plunge pool of your own and every seventh night on us.",
            fr: "Quand la chaleur s'adoucit, restez plus longtemps : une suite en terre, un bassin privé et la septième nuit offerte.",
        },
        validFrom: "2027-10-01",
        validTo: "2027-11-30",
        minNights: 7,
        price: 2820,
        priceLabel: { en: "for two, 7 nights", fr: "pour deux, 7 nuits" },
        inclusions: [
            { en: "Seventh night complimentary", fr: "Septième nuit offerte" },
            { en: "Clay Suite with plunge pool", fr: "Suite d'Argile avec bassin privé" },
            { en: "Half board", fr: "Demi-pension" },
            { en: "Dawn walk on the erg", fr: "Marche à l'aube sur l'erg" },
        ],
        image: u("photo-1787660916580-8e7d22040d45"),
        bookingUrl: `${BOOK}?offer=autumn`,
    },
];
