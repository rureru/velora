import type { Gallery } from "@/config/types";
import { unsplash } from "@/config/presets/image";

const u = (id: string) => unsplash(id, 1400);

/** DEMO GALLERY — Desert Eco-Resort. */
export const desertGallery: Gallery = {
    categories: [
        { id: "rooms", label: { en: "Rooms", fr: "Chambres" } },
        { id: "food", label: { en: "Food", fr: "Table" } },
        { id: "landscape", label: { en: "Landscape", fr: "Paysage" } },
    ],
    images: [
        { src: u("photo-1506147854445-5a3f534191f8"), alt: { en: "Dunes at sunset", fr: "Les dunes au coucher du soleil" }, category: "landscape" },
        { src: u("photo-1688999991151-d797021df975"), alt: { en: "The Dune Tent", fr: "La Tente Dune" }, category: "rooms", tall: true },
        { src: u("photo-1643019237176-8ae0859f1123"), alt: { en: "A tagine on painted tiles", fr: "Un tajine sur des carreaux peints" }, category: "food" },
        { src: u("photo-1757438059025-7cc2c86107c1"), alt: { en: "A guide with his camel", fr: "Un guide et son dromadaire" }, category: "landscape", tall: true },
        { src: u("photo-1787660916580-8e7d22040d45"), alt: { en: "The Clay Suite", fr: "La Suite d'Argile" }, category: "rooms" },
        { src: u("photo-1682370207954-c8a9cccaabb4"), alt: { en: "Tagines and salads for lunch", fr: "Tajines et salades au déjeuner" }, category: "food", tall: true },
        { src: u("photo-1488866022504-f2584929ca5f"), alt: { en: "The Milky Way over the erg", fr: "La Voie lactée au-dessus de l'erg" }, category: "landscape" },
        { src: u("photo-1783696521772-e3ba2c4ef0b5"), alt: { en: "Inside a Star Dome", fr: "Dans un Dôme des Étoiles" }, category: "rooms", tall: true },
        { src: u("photo-1688437307687-fe226bddfab1"), alt: { en: "Dinner in the dunes", fr: "Dîner dans les dunes" }, category: "food" },
        { src: u("photo-1548272475-4a32d90e4f91"), alt: { en: "Pink light on the dunes", fr: "Lumière rose sur les dunes" }, category: "landscape" },
        { src: u("photo-1762255121620-3ca4c551404c"), alt: { en: "A tent interior at dusk", fr: "Intérieur de tente au crépuscule" }, category: "rooms" },
        { src: u("photo-1661083098412-054431ab7112"), alt: { en: "Sharing a tagine", fr: "Un tajine partagé" }, category: "food", tall: true },
    ],
};
