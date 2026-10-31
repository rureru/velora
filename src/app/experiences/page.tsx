import { ExperiencesView } from "@/components/views/ExperiencesView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.experiences.title[seoLocale],
    description: seoPreset.copy.experiences.intro[seoLocale],
    image: seoPreset.images.experiencesHero,
    path: "/experiences",
});

export default function ExperiencesPage() {
    return <ExperiencesView />;
}
