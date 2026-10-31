import type { Gallery } from "@/config/types";
import { unsplash } from "@/config/presets/image";

const u = (id: string) => unsplash(id, 1400);

/** DEMO GALLERY — Coastal Villa Retreat. */
export const coastalGallery: Gallery = {
    categories: [
        { id: "rooms", label: { en: "Rooms", fr: "Chambres" } },
        { id: "food", label: { en: "Food", fr: "Table" } },
        { id: "landscape", label: { en: "Landscape", fr: "Paysage" } },
    ],
    images: [
        { src: u("photo-1790276319819-124404931132"), alt: { en: "The deck above the sea", fr: "La terrasse au-dessus de la mer" }, category: "landscape" },
        { src: u("photo-1519710889408-a67e1c7e0452"), alt: { en: "The Tide Suite", fr: "La Suite Marée" }, category: "rooms", tall: true },
        { src: u("photo-1665401015549-712c0dc5ef85"), alt: { en: "Grilled fish with lemon", fr: "Poisson grillé au citron" }, category: "food" },
        { src: u("photo-1788643237824-b0194b418901"), alt: { en: "A cove below the pines", fr: "Une crique sous les pins" }, category: "landscape", tall: true },
        { src: u("photo-1765999906700-2d4dfd392966"), alt: { en: "Cove Villa pool", fr: "La piscine de la Villa de la Crique" }, category: "rooms" },
        { src: u("photo-1676471926534-d5c9771909fa"), alt: { en: "Sea bass from the morning catch", fr: "Bar de la pêche du matin" }, category: "food", tall: true },
        { src: u("photo-1546214755-c5d22447b43b"), alt: { en: "A sailboat at anchor", fr: "Un voilier au mouillage" }, category: "landscape" },
        { src: u("photo-1567899482751-c8647fda8155"), alt: { en: "The Salt Room", fr: "La Chambre du Sel" }, category: "rooms", tall: true },
        { src: u("photo-1725588139934-19ee915f5250"), alt: { en: "Dinner on the terrace", fr: "Dîner en terrasse" }, category: "food" },
        { src: u("photo-1782236469614-296b5983cdbe"), alt: { en: "The bay from the coast path", fr: "La baie depuis le chemin côtier" }, category: "landscape" },
        { src: u("photo-1585620089933-768743dfc8f1"), alt: { en: "Lighthouse Loft", fr: "Le Loft du Phare" }, category: "rooms" },
        { src: u("photo-1639244132045-94c307ff4bfc"), alt: { en: "Wine at sunset", fr: "Vin au coucher du soleil" }, category: "food", tall: true },
    ],
};
