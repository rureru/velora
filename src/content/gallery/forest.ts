import type { Gallery } from "@/config/types";
import { pexels, unsplash } from "@/config/presets/image";

const u = (id: string) => unsplash(id, 1400);

/** DEMO GALLERY — Forest & Mountain Lodge. Add, remove or reorder freely. `tall: true` = portrait frame. */
export const forestGallery: Gallery = {
    categories: [
        { id: "rooms", label: { en: "Rooms", fr: "Chambres" } },
        { id: "food", label: { en: "Food", fr: "Table" } },
        { id: "landscape", label: { en: "Landscape", fr: "Paysage" } },
    ],
    images: [
        { src: u("photo-1527971179697-13dce75dfbd0"), alt: { en: "The lodge in morning fog", fr: "Le lodge dans le brouillard du matin" }, category: "landscape" },
        { src: u("photo-1734599511415-cb4a52aea2fe"), alt: { en: "The Fern Room", fr: "La Chambre Fougère" }, category: "rooms", tall: true },
        { src: u("photo-1704283735270-f973e7e9c14e"), alt: { en: "Croissants and coffee at breakfast", fr: "Croissants et café au petit-déjeuner" }, category: "food" },
        { src: u("photo-1627750168257-9a7d3965ef8b"), alt: { en: "Ridge Cabin among the spruce", fr: "La Cabane de la Crête parmi les épicéas" }, category: "landscape", tall: true },
        { src: u("photo-1727706572437-4fcda0cbd66f"), alt: { en: "The Larch Suite", fr: "La Suite Mélèze" }, category: "rooms" },
        { src: u("photo-1562050344-f7ad946cee35"), alt: { en: "The long table set for dinner", fr: "La grande table dressée pour le dîner" }, category: "food", tall: true },
        { src: u("photo-1675458349418-b6e8215f1d6b"), alt: { en: "The glacier lake at dawn", fr: "Le lac glaciaire à l'aube" }, category: "landscape" },
        { src: pexels(30708768, 1400), alt: { en: "Timber interior", fr: "Intérieur en bois" }, category: "rooms", tall: true },
        { src: u("photo-1766766788517-4bc7b9aff43a"), alt: { en: "Bread and soup on the terrace", fr: "Pain et soupe en terrasse" }, category: "food" },
        { src: u("photo-1758438919146-f3f59a6d2544"), alt: { en: "Sunbeams in the forest", fr: "Rayons de soleil dans la forêt" }, category: "landscape", tall: true },
        { src: u("photo-1734599505058-6653a0d8d3ff"), alt: { en: "The Mist Loft", fr: "Le Loft Brume" }, category: "rooms" },
        { src: u("photo-1663530761401-15eefb544889"), alt: { en: "A course from the tasting dinner", fr: "Un plat du dîner dégustation" }, category: "food" },
    ],
};
