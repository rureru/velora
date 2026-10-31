import type { JournalPost } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/** DEMO JOURNAL — Coastal Villa Retreat. */
export const coastalJournal: JournalPost[] = [
    {
        slug: "the-coves-of-cala-serena",
        title: { en: "Four coves worth the walk", fr: "Quatre criques qui valent la marche" },
        excerpt: {
            en: "Our host's guide to the quiet inlets along the old fishermen's path — and when to reach each one.",
            fr: "Le guide de notre hôtesse des criques tranquilles le long de l'ancien chemin des pêcheurs — et quand y arriver.",
        },
        date: "2026-10-08",
        author: "Lucía Ferrer",
        category: { en: "The coast", fr: "La côte" },
        readMinutes: 4,
        cover: u("photo-1788643237824-b0194b418901"),
        body: [
            { type: "p", text: { en: "The Camí de Cavalls circles the whole island, but the stretch below the villas is the one we walk most. Pine, limestone, and every twenty minutes a cove the colour of sea glass.", fr: "Le Camí de Cavalls fait le tour de l'île, mais la portion sous les villas est celle que nous parcourons le plus. Pins, calcaire et, toutes les vingt minutes, une crique couleur verre de mer." } },
            { type: "h", text: { en: "Go early, or go late", fr: "Partez tôt, ou tard" } },
            { type: "p", text: { en: "Before ten in the morning the water is perfectly still. After six in the evening the day-trippers have gone and the rocks are still warm.", fr: "Avant dix heures, l'eau est parfaitement immobile. Après dix-huit heures, les excursionnistes sont partis et les rochers sont encore chauds." } },
            { type: "image", src: u("photo-1782236469614-296b5983cdbe"), caption: { en: "The second cove, an hour's walk east.", fr: "La deuxième crique, à une heure de marche vers l'est." } },
            { type: "p", text: { en: "Bring water shoes, a snorkel and something for lunch. There are no cafés, which is exactly why we love it.", fr: "Prenez des chaussons, un masque et de quoi déjeuner. Il n'y a aucun café, et c'est justement pour cela que nous l'aimons." } },
        ],
    },
    {
        slug: "salt-and-lemon",
        title: { en: "Salt, lemon and the catch of the day", fr: "Sel, citron et pêche du jour" },
        excerpt: {
            en: "Why the best fish we serve is the simplest — grilled over vine wood on the jetty.",
            fr: "Pourquoi le meilleur poisson que nous servons est le plus simple — grillé sur des sarments, sur le ponton.",
        },
        date: "2026-09-02",
        author: "Aina Pons",
        category: { en: "Kitchen", fr: "Cuisine" },
        readMinutes: 3,
        cover: u("photo-1725588139934-19ee915f5250"),
        body: [
            { type: "p", text: { en: "Each morning the boats come in to the harbour ten minutes away. Whatever is best goes on the grill that evening: sea bream, red mullet, sometimes a whole turbot for the table.", fr: "Chaque matin, les bateaux rentrent au port, à dix minutes d'ici. Le meilleur finit sur le gril le soir même : daurade, rouget, parfois un turbot entier pour la table." } },
            { type: "quote", text: { en: "If the fish is good, the only job of the cook is not to ruin it.", fr: "Si le poisson est bon, le seul travail du cuisinier est de ne pas le gâcher." } },
            { type: "p", text: { en: "Coarse salt from the island's salt pans, a lemon from the garden, olive oil pressed in the next village. That is the whole recipe.", fr: "Gros sel des salines de l'île, un citron du jardin, une huile pressée au village voisin. Voilà toute la recette." } },
        ],
    },
    {
        slug: "a-house-of-lime",
        title: { en: "A house of lime and light", fr: "Une maison de chaux et de lumière" },
        excerpt: {
            en: "Restoring an old island farmhouse with lime wash, local stone and a great deal of patience.",
            fr: "Restaurer une vieille ferme de l'île à la chaux, en pierre locale et avec beaucoup de patience.",
        },
        date: "2026-06-18",
        author: "Lucía Ferrer",
        category: { en: "Architecture", fr: "Architecture" },
        readMinutes: 4,
        cover: u("photo-1672940711883-754b2fdefa1c"),
        body: [
            { type: "p", text: { en: "The main house was a working farm until the 1970s. We kept its dry-stone walls, its cistern and its fig tree, and rebuilt everything else by hand.", fr: "La maison principale était une ferme jusque dans les années 1970. Nous avons gardé ses murs en pierre sèche, sa citerne et son figuier, et tout reconstruit à la main." } },
            { type: "h", text: { en: "Why lime", fr: "Pourquoi la chaux" } },
            { type: "p", text: { en: "Lime wash breathes, reflects the heat and softens every edge. Refreshed each spring, it gives the walls their faint blue-white glow at dusk.", fr: "La chaux respire, renvoie la chaleur et adoucit chaque angle. Renouvelée chaque printemps, elle donne aux murs leur léger éclat bleu-blanc au crépuscule." } },
            { type: "image", src: u("photo-1690701170397-dcb83290e992"), caption: { en: "The courtyard olive, older than the house.", fr: "L'olivier de la cour, plus vieux que la maison." } },
        ],
    },
];
