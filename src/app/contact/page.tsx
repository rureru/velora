import { ContactView } from "@/components/views/ContactView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.contact.title[seoLocale],
    description: seoPreset.copy.contact.intro[seoLocale],
    image: seoPreset.images.contactHero,
    path: "/contact",
});

export default function ContactPage() {
    return <ContactView />;
}
