import type { Faq } from "@/config/types";

/** DEMO FAQ — Coastal Villa Retreat. Policies below are examples only. */
export const coastalFaq: Faq = {
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
                en: "Check-in is from 3 pm and check-out by 11 am. Early arrivals can use the pool, showers and terrace while the room is prepared.",
                fr: "L'arrivée se fait à partir de 15h et le départ avant 11h. En cas d'arrivée anticipée, la piscine, les douches et la terrasse sont à votre disposition pendant la préparation de la chambre.",
            },
        },
        {
            category: "checkin",
            question: { en: "Is there a minimum stay?", fr: "Y a-t-il une durée minimum de séjour ?" },
            answer: {
                en: "Three nights in rooms and suites from June to September, and seven nights in the villas in July and August. Two nights the rest of the year.",
                fr: "Trois nuits en chambre et suite de juin à septembre, et sept nuits en villa en juillet et août. Deux nuits le reste de l'année.",
            },
        },
        {
            category: "pets",
            question: { en: "Are dogs allowed?", fr: "Les chiens sont-ils acceptés ?" },
            answer: {
                en: "Dogs are welcome in Pine Villa and Cove Villa for €30 per stay. Please note that some nearby beaches don't allow dogs in summer.",
                fr: "Les chiens sont acceptés à la Villa des Pins et à la Villa de la Crique pour 30 € par séjour. Certaines plages voisines leur sont interdites en été.",
            },
        },
        {
            category: "pets",
            question: { en: "Can pets use the pool areas?", fr: "Les animaux ont-ils accès aux piscines ?" },
            answer: {
                en: "Pets can relax on your villa terrace, but for hygiene they can't swim in the pools.",
                fr: "Les animaux peuvent profiter de la terrasse de votre villa, mais par hygiène ils ne peuvent pas se baigner dans les piscines.",
            },
        },
        {
            category: "transfers",
            question: { en: "How far is the airport?", fr: "À quelle distance est l'aéroport ?" },
            answer: {
                en: "Twenty minutes by car. We can arrange a private transfer for €45 each way, or a rental car delivered to the airport.",
                fr: "À vingt minutes en voiture. Nous organisons un transfert privé pour 45 € par trajet, ou une voiture de location livrée à l'aéroport.",
            },
        },
        {
            category: "transfers",
            question: { en: "Can I arrive by ferry?", fr: "Puis-je arriver en ferry ?" },
            answer: {
                en: "Yes — ferries from the mainland arrive at the harbour 25 minutes away. Send us the sailing time and we'll meet you at the terminal.",
                fr: "Oui — les ferries du continent arrivent au port, à 25 minutes. Envoyez-nous l'horaire et nous vous attendons au terminal.",
            },
        },
        {
            category: "cancellations",
            question: { en: "What is your cancellation policy?", fr: "Quelles sont vos conditions d'annulation ?" },
            answer: {
                en: "Rooms and suites: free cancellation up to 30 days before arrival. Villas: free up to 60 days. After that, 50% of the stay is charged.",
                fr: "Chambres et suites : annulation gratuite jusqu'à 30 jours avant l'arrivée. Villas : jusqu'à 60 jours. Au-delà, 50 % du séjour est facturé.",
            },
        },
        {
            category: "cancellations",
            question: { en: "Can I change my dates instead?", fr: "Puis-je plutôt changer mes dates ?" },
            answer: {
                en: "Of course. You can move your stay once, free of charge, up to 14 days before arrival, subject to availability.",
                fr: "Bien sûr. Vous pouvez déplacer votre séjour une fois, sans frais, jusqu'à 14 jours avant l'arrivée, selon disponibilité.",
            },
        },
    ],
};
