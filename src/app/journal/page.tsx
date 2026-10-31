import { JournalView } from "@/components/views/JournalView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.journal.title[seoLocale],
    description: seoPreset.copy.journal.intro[seoLocale],
    image: seoPreset.images.journalHero,
    path: "/journal",
});

export default function JournalPage() {
    return <JournalView />;
}
