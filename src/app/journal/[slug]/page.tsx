import type { Metadata } from "next";
import { presets } from "@/config/presets";
import { JournalPostView } from "@/components/views/JournalPostView";
import { pageMeta, seoLocale, seoPreset } from "@/lib/seo";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
    return Object.values(presets).flatMap((p) => p.journal.map((j) => ({ slug: j.slug })));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
    const { slug } = await params;
    const post = seoPreset.journal.find((j) => j.slug === slug);
    if (!post) return pageMeta({ title: "Journal", path: `/journal/${slug}` });
    return pageMeta({
        title: post.title[seoLocale],
        description: post.excerpt[seoLocale],
        image: post.cover,
        path: `/journal/${slug}`,
        type: "article",
    });
}

export default async function JournalPostPage({ params }: Params) {
    const { slug } = await params;
    return <JournalPostView slug={slug} />;
}
