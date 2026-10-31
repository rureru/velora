import { GalleryView } from "@/components/views/GalleryView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

export const metadata = pageMeta({
    title: seoPreset.copy.gallery.title[seoLocale],
    description: seoPreset.copy.gallery.intro[seoLocale],
    image: seoPreset.images.galleryHero,
    path: "/gallery",
});

export default function GalleryPage() {
    return <GalleryView />;
}
