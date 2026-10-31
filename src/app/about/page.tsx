import { AboutView } from "@/components/views/AboutView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.about.title[seoLocale],
    description: seoPreset.copy.about.intro[seoLocale],
    image: seoPreset.images.aboutHero,
    path: "/about",
});

export default function AboutPage() {
    return <AboutView />;
}
