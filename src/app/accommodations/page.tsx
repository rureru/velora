import { AccommodationsView } from "@/components/views/AccommodationsView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.accommodations.title[seoLocale],
    description: seoPreset.copy.accommodations.intro[seoLocale],
    image: seoPreset.images.accommodationsHero,
    path: "/accommodations",
});

export default function AccommodationsPage() {
    return <AccommodationsView />;
}
