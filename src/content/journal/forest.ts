import type { JournalPost } from "@/config/types";
import { unsplash as u } from "@/config/presets/image";

/**
 * DEMO JOURNAL — Forest & Mountain Lodge.
 * Each post is a list of blocks: "p" (paragraph), "h" (heading), "quote", "image".
 */
export const forestJournal: JournalPost[] = [
    {
        slug: "a-year-of-larch",
        title: { en: "A year in the life of a larch", fr: "Une année dans la vie d'un mélèze" },
        excerpt: {
            en: "The only conifer that loses its needles each autumn — and the tree our whole lodge is built from.",
            fr: "Le seul conifère qui perd ses aiguilles chaque automne — et l'arbre dont tout notre lodge est fait.",
        },
        date: "2026-10-12",
        author: "Julien Arnaud",
        category: { en: "The forest", fr: "La forêt" },
        readMinutes: 4,
        cover: u("photo-1758438919146-f3f59a6d2544"),
        body: [
            { type: "p", text: { en: "In spring the larch is the first tree on the mountain to turn green: a soft, almost luminous green that looks lit from inside. By October it has turned gold, and by November the needles lie on the paths like copper thread.", fr: "Au printemps, le mélèze est le premier arbre de la montagne à reverdir : un vert tendre, presque lumineux, comme éclairé de l'intérieur. En octobre il devient or, et en novembre ses aiguilles tapissent les sentiers comme un fil de cuivre." } },
            { type: "h", text: { en: "Wood that weathers well", fr: "Un bois qui vieillit bien" } },
            { type: "p", text: { en: "Larch is dense and full of resin, which is why our carpenters left it untreated. On the south façade the boards have already turned silver; on the north they stay honey-coloured. The building changes with every season, just like the forest around it.", fr: "Le mélèze est dense et riche en résine ; c'est pourquoi nos charpentiers l'ont laissé brut. Sur la façade sud, les planches sont déjà argentées ; au nord, elles restent couleur miel. Le bâtiment change à chaque saison, comme la forêt qui l'entoure." } },
            { type: "quote", text: { en: "We never cut a tree for the lodge. Every beam came from storm-felled timber.", fr: "Nous n'avons jamais abattu d'arbre pour le lodge. Chaque poutre vient de bois tombé lors des tempêtes." } },
            { type: "image", src: u("photo-1769766160718-efc12335c588"), caption: { en: "The upper path in late October.", fr: "Le sentier du haut, fin octobre." } },
            { type: "p", text: { en: "If you visit in autumn, take the upper path towards the ridge in the late afternoon. The light comes in low through the trunks and the whole slope glows.", fr: "Si vous venez en automne, prenez le sentier du haut vers la crête en fin d'après-midi. La lumière passe bas entre les troncs et toute la pente s'embrase." } },
        ],
    },
    {
        slug: "kitchen-notes-wild-mushrooms",
        title: { en: "Kitchen notes: wild mushrooms on toast", fr: "Carnet de cuisine : champignons sauvages sur pain grillé" },
        excerpt: {
            en: "Our head of kitchen shares the simplest dish on the autumn menu — and the one guests ask about most.",
            fr: "Notre cheffe partage le plat le plus simple de la carte d'automne — et celui dont on lui parle le plus.",
        },
        date: "2026-09-28",
        author: "Inès Morel",
        category: { en: "Kitchen", fr: "Cuisine" },
        readMinutes: 3,
        cover: u("photo-1562050344-f7ad946cee35"),
        body: [
            { type: "p", text: { en: "Good mushrooms need very little. A hot pan, salted butter, a clove of garlic and patience — let them colour before you move them.", fr: "Les bons champignons demandent peu. Une poêle chaude, du beurre salé, une gousse d'ail et de la patience — laissez-les colorer avant de les remuer." } },
            { type: "h", text: { en: "What you need", fr: "Ce qu'il vous faut" } },
            { type: "p", text: { en: "A handful of chanterelles or ceps, two slices of sourdough, butter, garlic, thyme, a splash of white wine and a spoonful of crème fraîche.", fr: "Une poignée de girolles ou de cèpes, deux tranches de pain au levain, du beurre, de l'ail, du thym, un trait de vin blanc et une cuillère de crème fraîche." } },
            { type: "p", text: { en: "Toast the bread in the same pan after the mushrooms, so it soaks up everything left behind. Finish with the crème fraîche and a crack of black pepper. Eat immediately, ideally by a window.", fr: "Faites griller le pain dans la même poêle après les champignons, pour qu'il absorbe tout ce qui reste. Terminez avec la crème fraîche et un tour de poivre. À manger tout de suite, idéalement près d'une fenêtre." } },
        ],
    },
    {
        slug: "how-to-do-nothing",
        title: { en: "How to do nothing, properly", fr: "Comment ne rien faire, vraiment" },
        excerpt: {
            en: "A short guide to the hardest thing our guests attempt: an entire day with no plans.",
            fr: "Petit guide de la chose la plus difficile que tentent nos hôtes : une journée entière sans programme.",
        },
        date: "2026-08-03",
        author: "Élise Marchand",
        category: { en: "Slow living", fr: "Vivre lentement" },
        readMinutes: 5,
        cover: u("photo-1734599505058-6653a0d8d3ff"),
        body: [
            { type: "p", text: { en: "Most people arrive tired and leave rested. The ones who leave truly changed are those who spend at least one day doing absolutely nothing.", fr: "La plupart des gens arrivent fatigués et repartent reposés. Ceux qui repartent vraiment changés sont ceux qui passent au moins une journée à ne rien faire du tout." } },
            { type: "h", text: { en: "Leave the phone in the drawer", fr: "Laissez le téléphone dans le tiroir" } },
            { type: "p", text: { en: "Every room has a small linen pouch for exactly this. Put it away at breakfast and see how long you can last. Most guests are surprised.", fr: "Chaque chambre a une petite pochette en lin pour cela. Rangez-le au petit-déjeuner et voyez combien de temps vous tenez. La plupart de nos hôtes sont surpris." } },
            { type: "quote", text: { en: "Boredom is just the doorway. Stillness is the room behind it.", fr: "L'ennui n'est que la porte. Le calme est la pièce qui se trouve derrière." } },
            { type: "p", text: { en: "Read a book from the library, sleep after lunch, watch the clouds cross the ridge. If you must do something, light the stove.", fr: "Lisez un livre de la bibliothèque, faites la sieste, regardez les nuages passer la crête. S'il faut vraiment faire quelque chose, allumez le poêle." } },
        ],
    },
];
