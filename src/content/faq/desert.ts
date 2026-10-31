import type { Faq } from "@/config/types";

/** DEMO FAQ — Desert Eco-Resort. Policies below are examples only. */
export const desertFaq: Faq = {
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
                en: "Check-in is from 2 pm, in time for tea and the dusk camel trek. Check-out is by 11 am — late check-out until 3 pm is often possible on request.",
                fr: "L'arrivée se fait à partir de 14h, à temps pour le thé et la méharée du crépuscule. Le départ est avant 11h — un départ tardif jusqu'à 15h est souvent possible sur demande.",
            },
        },
        {
            category: "checkin",
            question: { en: "Is there electricity and Wi-Fi?", fr: "Y a-t-il de l'électricité et du Wi-Fi ?" },
            answer: {
                en: "Every tent and suite has solar power for lights and charging. Wi-Fi is available in the main lounge only, so the dunes stay quiet.",
                fr: "Chaque tente et suite dispose d'électricité solaire pour l'éclairage et la recharge. Le Wi-Fi est disponible uniquement dans le salon principal, pour que les dunes restent calmes.",
            },
        },
        {
            category: "pets",
            question: { en: "Can I bring my pet?", fr: "Puis-je venir avec mon animal ?" },
            answer: {
                en: "Because of the heat and the wildlife around camp, we're unable to host pets. Assistance dogs are welcome — please tell us when booking.",
                fr: "En raison de la chaleur et de la faune autour du camp, nous ne pouvons pas accueillir d'animaux. Les chiens d'assistance sont acceptés — prévenez-nous lors de la réservation.",
            },
        },
        {
            category: "pets",
            question: { en: "Will I meet animals at camp?", fr: "Croiserai-je des animaux au camp ?" },
            answer: {
                en: "Our guides' camels live a short walk away and you'll often see desert foxes at night. Please don't feed wildlife.",
                fr: "Les dromadaires de nos guides vivent à quelques pas et vous verrez souvent des fennecs la nuit. Merci de ne pas nourrir la faune.",
            },
        },
        {
            category: "transfers",
            question: { en: "How do I reach the camp?", fr: "Comment rejoindre le camp ?" },
            answer: {
                en: "The last 40 minutes are on a sand track, so we collect every guest by 4×4. Transfers from the regional airport are included in all stays.",
                fr: "Les 40 dernières minutes se font sur une piste de sable ; nous venons donc chercher chaque hôte en 4×4. Les transferts depuis l'aéroport régional sont inclus dans tous les séjours.",
            },
        },
        {
            category: "transfers",
            question: { en: "Can I drive myself?", fr: "Puis-je venir en voiture ?" },
            answer: {
                en: "Yes — leave your car at our guarded parking at the end of the tarmac road and we'll drive you the rest of the way.",
                fr: "Oui — laissez votre voiture sur notre parking gardé au bout de la route goudronnée et nous vous conduisons pour la fin du trajet.",
            },
        },
        {
            category: "cancellations",
            question: { en: "What is your cancellation policy?", fr: "Quelles sont vos conditions d'annulation ?" },
            answer: {
                en: "Cancel free of charge up to 21 days before arrival. Between 21 and 7 days, 50% of the stay is charged; within 7 days, the full stay.",
                fr: "Annulation gratuite jusqu'à 21 jours avant l'arrivée. Entre 21 et 7 jours, 50 % du séjour est facturé ; à moins de 7 jours, la totalité.",
            },
        },
        {
            category: "cancellations",
            question: { en: "What if a sandstorm affects my stay?", fr: "Et en cas de tempête de sable ?" },
            answer: {
                en: "If weather makes the track unsafe on your arrival day, we'll rebook your dates free of charge or offer a full refund.",
                fr: "Si la météo rend la piste dangereuse le jour de votre arrivée, nous reportons vos dates sans frais ou vous remboursons intégralement.",
            },
        },
    ],
};
