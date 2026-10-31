import type { JournalPost } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/** DEMO JOURNAL — Desert Eco-Resort. */
export const desertJournal: JournalPost[] = [
    {
        slug: "building-with-earth",
        title: { en: "Building with earth", fr: "Bâtir avec la terre" },
        excerpt: {
            en: "How rammed-earth walls keep our clay suites cool without a single air conditioner.",
            fr: "Comment les murs en pisé gardent nos suites fraîches sans aucune climatisation.",
        },
        date: "2026-10-05",
        author: "Yasmine Alaoui",
        category: { en: "Architecture", fr: "Architecture" },
        readMinutes: 4,
        cover: u("photo-1573691257041-9da551a70522"),
        body: [
            { type: "p", text: { en: "The earth for every suite came from within a few hundred metres of where it stands. Mixed with a little lime and straw, then pounded layer by layer into timber forms, it becomes a wall half a metre thick.", fr: "La terre de chaque suite vient de quelques centaines de mètres autour. Mêlée d'un peu de chaux et de paille, puis damée couche après couche dans des coffrages en bois, elle devient un mur d'un demi-mètre d'épaisseur." } },
            { type: "h", text: { en: "Thermal mass", fr: "Inertie thermique" } },
            { type: "p", text: { en: "Thick earth absorbs the heat of the day slowly and releases it at night, when the desert turns cold. Inside, the temperature barely moves.", fr: "La terre épaisse absorbe lentement la chaleur du jour et la restitue la nuit, quand le désert se refroidit. À l'intérieur, la température bouge à peine." } },
            { type: "quote", text: { en: "Our grandfathers built like this. We only added the plumbing.", fr: "Nos grands-pères construisaient ainsi. Nous n'avons ajouté que la plomberie." } },
            { type: "image", src: u("photo-1512432298996-6c5c15577db5"), caption: { en: "A window placed for the evening breeze.", fr: "Une fenêtre placée pour la brise du soir." } },
        ],
    },
    {
        slug: "reading-the-night-sky",
        title: { en: "Reading the night sky", fr: "Lire le ciel nocturne" },
        excerpt: {
            en: "Five constellations to find on your first night — and the stories nomads tell about them.",
            fr: "Cinq constellations à trouver dès la première nuit — et les récits que les nomades en font.",
        },
        date: "2026-09-14",
        author: "Karim Benali",
        category: { en: "Night", fr: "Nuit" },
        readMinutes: 5,
        cover: u("photo-1488866022504-f2584929ca5f"),
        body: [
            { type: "p", text: { en: "Give your eyes twenty minutes without a screen. Slowly the sky fills in, until the Milky Way looks less like a band and more like a cloud you could walk into.", fr: "Laissez vos yeux vingt minutes sans écran. Peu à peu le ciel se remplit, jusqu'à ce que la Voie lactée ressemble moins à une bande qu'à un nuage dans lequel on pourrait entrer." } },
            { type: "h", text: { en: "Start with the Plough", fr: "Commencez par la Grande Ourse" } },
            { type: "p", text: { en: "Follow the two stars at the end of its bowl and you will find Polaris, the star caravans steered by for centuries.", fr: "Suivez les deux étoiles au bout de sa casserole et vous trouverez l'étoile Polaire, celle que suivaient les caravanes depuis des siècles." } },
            { type: "p", text: { en: "Our observatory sessions run on moonless nights. Ask at the guest desk — blankets and mint tea included.", fr: "Nos séances d'observation ont lieu les nuits sans lune. Renseignez-vous à l'accueil — couvertures et thé à la menthe compris." } },
        ],
    },
    {
        slug: "the-ritual-of-tea",
        title: { en: "The ritual of tea", fr: "Le rituel du thé" },
        excerpt: {
            en: "Three glasses, poured from a height: why mint tea in the desert is never rushed.",
            fr: "Trois verres, versés de haut : pourquoi le thé à la menthe ne se presse jamais dans le désert.",
        },
        date: "2026-07-22",
        author: "Salma Idrissi",
        category: { en: "Culture", fr: "Culture" },
        readMinutes: 3,
        cover: u("photo-1757438059025-7cc2c86107c1"),
        body: [
            { type: "p", text: { en: "The first glass is gentle like life, the second strong like love, the third bitter like death. Or so the saying goes — though most of us simply like the third best.", fr: "Le premier verre est doux comme la vie, le deuxième fort comme l'amour, le troisième amer comme la mort. C'est ce que dit le proverbe — même si beaucoup préfèrent le troisième." } },
            { type: "quote", text: { en: "Tea is not a drink here. It is a way of saying: stay a while.", fr: "Ici, le thé n'est pas une boisson. C'est une façon de dire : restez un peu." } },
            { type: "p", text: { en: "Pouring from a height cools the tea and raises a crown of foam. It also takes time, which is rather the point.", fr: "Verser de haut refroidit le thé et forme une couronne de mousse. Cela prend aussi du temps, et c'est bien là l'idée." } },
        ],
    },
];
