import { FaqView } from "@/components/views/FaqView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.faq.title[seoLocale],
    description: seoPreset.copy.faq.intro[seoLocale],
    image: seoPreset.images.faqHero,
    path: "/faq",
});

const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seoPreset.faq.items.map((i) => ({
        "@type": "Question",
        name: i.question[seoLocale],
        acceptedAnswer: { "@type": "Answer", text: i.answer[seoLocale] },
    })),
};

export default function FaqPage() {
    return (
        <>
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />
            <FaqView />
        </>
    );
}
