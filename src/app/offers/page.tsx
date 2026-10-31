import { OffersView } from "@/components/views/OffersView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.offers.title[seoLocale],
    description: seoPreset.copy.offers.intro[seoLocale],
    image: seoPreset.images.offersHero,
    path: "/offers",
});

export default function OffersPage() {
    return <OffersView />;
}
