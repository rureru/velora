import type { Faq } from "@/config/types";

/** DEMO FAQ — Forest & Mountain Lodge. Policies below are examples only. */
export const forestFaq: Faq = {
    categories: [
        { id: "checkin", label: { en: "Check-in & check-out", fr: "Arrivée et départ" } },
        { id: "pets", label: { en: "Pets", fr: "Animaux" } },
        { id: "transfers", label: { en: "Getting here & transfers", fr: "Accès et transferts" } },
        { id: "cancellations", label: { en: "Cancellations", fr: "Annulations" } },
    ],
    items: [
        {
            category: "checkin",
            question: { en: "What time are check-in and check-out?", fr: "À quelle heure sont l'arrivée et le départ ?" },
            answer: {
                en: "Check-in is from 3 pm and check-out is by 11 am. If your room is ready earlier we'll let you know, and you're always welcome to leave bags and head out on a trail.",
                fr: "L'arrivée se fait à partir de 15h et le départ avant 11h. Si votre chambre est prête plus tôt, nous vous prévenons, et vous pouvez toujours déposer vos bagages et partir en balade.",
            },
        },
        {
            category: "checkin",
            question: { en: "Can I arrive late in the evening?", fr: "Puis-je arriver tard le soir ?" },
            answer: {
                en: "Reception is open until 10 pm. For later arrivals, tell us your expected time and we'll leave your key and a small supper in your room.",
                fr: "La réception est ouverte jusqu'à 22h. Pour une arrivée plus tardive, indiquez-nous votre heure et nous laisserons votre clé et un petit en-cas dans la chambre.",
            },
        },
        {
            category: "pets",
            question: { en: "Are dogs welcome?", fr: "Les chiens sont-ils acceptés ?" },
            answer: {
                en: "Well-behaved dogs are welcome in our two standalone cabins for a supplement of €25 per night, including a bed, bowls and a towel for muddy paws.",
                fr: "Les chiens bien élevés sont les bienvenus dans nos deux cabanes isolées, avec un supplément de 25 € par nuit comprenant panier, gamelles et serviette pour les pattes boueuses.",
            },
        },
        {
            category: "pets",
            question: { en: "Can pets stay in the main house?", fr: "Les animaux peuvent-ils loger dans la maison principale ?" },
            answer: {
                en: "To keep the main house calm for all guests, pets stay in the cabins only. Assistance dogs are welcome everywhere.",
                fr: "Pour préserver le calme de la maison principale, les animaux logent uniquement dans les cabanes. Les chiens d'assistance sont acceptés partout.",
            },
        },
        {
            category: "transfers",
            question: { en: "How do I get to the lodge without a car?", fr: "Comment venir sans voiture ?" },
            answer: {
                en: "Take the train to the valley station, 8 km below us. Our free shuttle meets every arrival between 9 am and 8 pm — just send us your train time.",
                fr: "Prenez le train jusqu'à la gare de la vallée, à 8 km. Notre navette gratuite accueille chaque arrivée entre 9h et 20h — envoyez-nous simplement votre horaire.",
            },
        },
        {
            category: "transfers",
            question: { en: "Do you offer airport transfers?", fr: "Proposez-vous des transferts depuis l'aéroport ?" },
            answer: {
                en: "Yes. A private car from Geneva airport takes about 1 h 20 and costs €180 each way for up to four guests. Book at least 48 hours ahead.",
                fr: "Oui. Une voiture privée depuis l'aéroport de Genève met environ 1 h 20 et coûte 180 € par trajet jusqu'à quatre personnes. À réserver au moins 48 heures à l'avance.",
            },
        },
        {
            category: "cancellations",
            question: { en: "What is your cancellation policy?", fr: "Quelles sont vos conditions d'annulation ?" },
            answer: {
                en: "Cancel free of charge up to 14 days before arrival. After that, the first night is charged. Seasonal packages may have their own terms, shown when you book.",
                fr: "Annulation gratuite jusqu'à 14 jours avant l'arrivée. Au-delà, la première nuit est facturée. Les forfaits saisonniers peuvent avoir leurs propres conditions, indiquées lors de la réservation.",
            },
        },
        {
            category: "cancellations",
            question: { en: "What happens if the road is closed by snow?", fr: "Que se passe-t-il si la route est fermée par la neige ?" },
            answer: {
                en: "If heavy snow closes the road and you can't reach us, we'll move your stay to new dates at no cost or refund it in full.",
                fr: "Si de fortes chutes de neige ferment la route et vous empêchent de venir, nous déplaçons votre séjour sans frais ou le remboursons intégralement.",
            },
        },
    ],
};
